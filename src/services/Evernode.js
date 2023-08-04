import React, { useEffect, useState } from 'react'
import ECDSA from 'xrpl/dist/npm/ECDSA';
import tos from '../assets/data/tos.txt'
import LoaderScreen from '../pages/LoaderScreen';
const xrpl = require("xrpl")

const evernode = require("evernode-js-client");

const { createContext, useContext } = React;

const EvernodeContext = createContext(null);
export const EvernodeProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [pageQueue, setPageQueue] = useState([]);

    const updateNextPageToken = (token) => {
        setNextPageToken(token);
    }

    const updatePageQueue = (updatedPageQueue) => {
        setPageQueue(updatedPageQueue);
    }

    const resetPageTokens = () => {
        setNextPageToken(null);
        setPageQueue([]);
    }

    const value = {
        getGovernorAddress: props.getGovernorAddress || getGovernorAddress,
        getEnvironment: props.getEnvironment || getEnvironment,
        getConfigs: props.getConfigs || getConfigs,
        getTos: props.getTos || getTos,
        getHosts: props.getHosts || getHosts,
        decodeLeaseUri: props.decodeLeaseUri || decodeLeaseUri,
        getLeases: props.getLeases || getLeases,
        getEVRBalance: props.getEVRBalance || getEVRBalance,
        onLedger: props.onLedger || onLedger,
        testnetFaucet: props.testnetFaucet || testnetFaucet,
        getCandidates: props.getCandidates || getCandidates,
        getCandidateById: props.getCandidateById || getCandidateById,
        getCandidateType: props.getCandidateType || getCandidateType,
        getDudHostCandidatesByOwner: props.getDudHostCandidatesByOwner || getDudHostCandidatesByOwner,
        getCandidateByOwner: props.getCandidateByOwner || getCandidateByOwner,
        nextPageToken: nextPageToken,
        updateNextPageToken: updateNextPageToken,
        pageQueue: pageQueue,
        updatePageQueue: updatePageQueue,
        resetPageTokens: resetPageTokens
    }

    const connectXrpl = async () => {
        setLoading(true);
        await xrplApi.connect();
        await governorClient.connect();
        setLoading(false);
    };

    useEffect(() => {
        connectXrpl();
    }, []);

    return (
        <EvernodeContext.Provider value={value}>
            {loading ? <LoaderScreen /> : props.children}
        </EvernodeContext.Provider>
    )
}

export const useEvernode = () => {
    return useContext(EvernodeContext)
}

const governorAddress = process.env.REACT_APP_GOVERNOR_ADDRESS;
const rippledServer = process.env.REACT_APP_RIPPLED_SERVER;
const environment = 'XRPL Hooks TestNet V3';

const xrplApi = new evernode.XrplApi(rippledServer);
evernode.Defaults.set({
    governorAddress: governorAddress,
    rippledServer: rippledServer,
    xrplApi: xrplApi
});

let governorClient = await evernode.HookClientFactory.create(evernode.HookTypes.governor);

const getGovernorAddress = () => {
    return governorAddress;
}

const getEnvironment = () => {
    return environment;
}

const getConfigs = async () => {
    return await governorClient.config;
}

const getTos = async () => {
    const res = await fetch(tos);
    return await res.text();
}

const getHosts = async (filters = null, pageSize = null, nextPageToken = null) => {
    return governorClient.getHosts(filters, pageSize, nextPageToken);
}

const getCandidates = async (filters = null, pageSize = null, nextPageToken = null) => {
    return governorClient.getCandidates(filters, pageSize, nextPageToken);
}

const getCandidateById = async (candidateId) => {
    return governorClient.getCandidateById(candidateId);
}

const getCandidateType = async (candidateId) => {
    return evernode.StateHelpers.getCandidateType(candidateId);
}

const decodeLeaseUri = (uri) => {
    return evernode.UtilHelpers.decodeLeaseTokenUri(uri);
}

const getDudHostCandidatesByOwner = async (address) => {
    return governorClient.getDudHostCandidatesByOwner(address);
}

const getCandidateByOwner = async (address) => {
    return governorClient.getCandidateByOwner(address);
}

const getLeases = async (address) => {
    const client = new evernode.HostClient(address);
    await client.connect();

    const leases = await client.xrplAcc.getURITokens();
    const leaseTokens = leases.filter(n => evernode.EvernodeHelpers.isValidURI(n.URI, evernode.EvernodeConstants.LEASE_TOKEN_PREFIX_HEX))

    return leaseTokens.map(leaseToken => {
        return {
            uriTokenId: leaseToken.index,
            uri: leaseToken.URI
        }
    });
}

const getEVRBalance = async (address) => {
    const client = new evernode.HostClient(address);
    await client.connect();

    return await client.getEVRBalance();
}

const onLedger = async (callback) => {
    xrplApi.on(evernode.XrplApiEvents.LEDGER, async (e) => {

        const moment = await governorClient.getMoment();
        callback({
            ledgerIndex: e.ledger_index,
            moment: moment
        })
    });
}

const testnetFaucet = async () => {
    const generatedAccount = await generateAndFundFaucetAccount();
    return generatedAccount;
}

const generateAndFundFaucetAccount = async () => {
    const xrplServerURL = process.env.REACT_APP_RIPPLED_SERVER;
    // Generating faucet account
    const new_wallet = xrpl.Wallet.generate(ECDSA.secp256k1);

    await fetch(`http${xrplServerURL.substring(2)}/newcreds?account=${new_wallet.address}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        }
    });

    const xrplClient = new xrpl.Client(xrplServerURL);
    await xrplClient.connect();

    // Keep watching until xrps are received XRP balance.
    let attempts = 0;
    while (attempts >= 0) {
        await new Promise(solve => setTimeout(solve, 1000));
        const balance = await xrplClient.getXrpBalance(new_wallet.address).catch(e => {
            if (e.message !== 'Account not found.')
                throw e;
        });

        if (!balance) {
            if (++attempts <= 20)
                continue;
            throw Error("XRP funds not received within timeout.");
        }
        break;
    }

    const hostClient = new evernode.HostClient(new_wallet.address, new_wallet.seed);
    await hostClient.connect();

    console.log("Requesting beta EVRs...");

    await hostClient.xrplAcc.setTrustLine(evernode.EvernodeConstants.EVR, hostClient.config.evrIssuerAddress, "99999999999999");

    await hostClient.xrplAcc.makePayment(hostClient.config.foundationAddress,
        evernode.XrplConstants.MIN_XRP_AMOUNT,
        evernode.XrplConstants.XRP,
        null,
        [{ type: 'giftBetaEvr', format: '', data: '' }]);

    // Keep watching our EVR balance.
    attempts = 0;
    while (attempts >= 0) {
        await new Promise(solve => setTimeout(solve, 1000));
        const balance = await hostClient.getEVRBalance();

        if (balance === '0') {
            if (++attempts <= 20)
                continue;
            throw Error("EVR funds not received within timeout.");
        }
        return {
            address: new_wallet.address,
            secret: new_wallet.seed,
            xrp: await xrplClient.getXrpBalance(new_wallet.address),
            evrBalance: balance,
        };
    }
}
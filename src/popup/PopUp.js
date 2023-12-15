import React from "react"
import "./PopUp.scss"

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIdx: this.props.tabs[0].idx,
            show: false
        }

        this.onTabClick = this.onTabClick.bind(this);

        this.popupRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        this.onOpen();
    }

    onTabClick(tabIdx) {
        let state = this.state;
        state.selectedIdx = tabIdx;
        this.setState(state);
    }

    handleClickOutside(event) {
        if (this.popupRef && !this.popupRef.current.contains(event.target)) {
            document.removeEventListener('mousedown', this.handleClickOutside);
            this.onClose();
        }
    }

    onOpen() {
        setTimeout(() => {
            let state = this.state;
            state.show = true;
            this.setState(state);
        });
    }

    onClose() {
        let state = this.state;
        state.show = false;
        this.setState(state);
        setTimeout(() => {
            this.props.onClose();
        }, 500);
    }

    getDisplayText(text, maxLength) {
        return text.length > maxLength ? `${text.substring(0, maxLength)}..` : text;
    }

    getDisplayBalance(balance) {
        return Number(balance).toFixed(3);
    }

    render() {
        const { show } = this.state;
        const { header, tabs, pos } = this.props;
        const selectedTab = tabs.find(t => t.idx === this.state.selectedIdx);
        let id = 1;

        return (
            <div ref={this.popupRef} className={"rounded shadow popup " + (pos.anchor && `anchor-${pos.anchor} `) + (show && "show")}>
                {header && <div className="row header">
                    <span className="col text-center p-1">{header}</span>
                </div>}
                <div className="flex m-1 popup-content">
                    <div className="row m-0">
                        {tabs.map((t, idx) => <div className={"col m-0 tab " + (t === selectedTab && "active") + (t.content.online ? " online": " offline")} onClick={() => this.onTabClick(t.idx)} key={idx}>
                            {id++}
                        </div>)}
                    </div>
                    <div className="tab-content">
                        <div className="row">
                            <div className="col text-center">
                                <span className="badge badge-secondary address">
                                    {selectedTab.content.xrpAddress}
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <ul className="col-5 pr-0 list-group list-group-flush list-content">
                                <li className="row list-group-item list-item text-truncate" data-toggle="tooltip" data-placement="top" title="CPU micro seconds">
                                    <i className="col-1 fas fa-microchip"></i><span className="col-11">{selectedTab.content.cpuMicroSec} &#181;s</span>
                                </li>
                                <li className="row list-group-item list-item text-truncate" data-toggle="tooltip" data-placement="top" title="Disk">
                                    <i className="col-1 fa fa-hdd"></i><span className="col-11">{selectedTab.content.diskMb} MB</span>
                                </li>                                
                                <li className="row list-group-item list-item text-truncate" data-toggle="tooltip" data-placement="top" title="Description">
                                    <i className="col-1 fas fa-book"></i><span className="col-11">{this.getDisplayText(selectedTab.content.description, 26)}</span>
                                </li>
                            </ul>
                            <ul className="col-7 pr-0 list-group list-group-flush list-content">
                                <li className="row list-group-item list-item text-truncate" data-toggle="tooltip" data-placement="top" title="Location">
                                    <i className="col-1 fa fa-location-arrow"></i><span className="col-11">{this.getDisplayText(selectedTab.content.countryCode, 10)}</span>
                                </li>
                                <li className="row list-group-item list-item text-truncate" data-toggle="tooltip" data-placement="top" title="RAM">
                                    <i className="col-1 fas fa-memory"></i><span className="col-11">{selectedTab.content.ramMb} MB</span>
                                </li>
                                <li className={"row list-group-item list-item text-truncate" + (selectedTab.content.online ? ' online' : ' offline')} data-toggle="tooltip" data-placement="top" title="RAM">
                                    <i className="col-1 far fa-dot-circle"></i><span className="col-11">{selectedTab.content.online ? 'Online' : 'Offline'}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="badge badge-secondary balance">
                                    {this.getDisplayBalance(selectedTab.content.evrBalance)}<span className="text-small">EVR</span>
                                </span>
                                <span className="badge badge-secondary token">
                                    {selectedTab.content.token}
                                </span>
                                {selectedTab.content.lastStatus && <span className="badge status">{selectedTab.content.lastStatus.component}</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default PopUp;
"use strict";(self.webpackChunkhost_dashboard=self.webpackChunkhost_dashboard||[]).push([[972],{32514:function(e,t,n){n.d(t,{Z:function(){return l}});n(72791);var s=n(38302),a=n(63509),c=n(80184);function l(e){var t=e.modelName,n=e.speed,l=e.count,i=e.showTooltip,r=[];t&&r.push(t),n&&r.push("".concat(n," MHz")),l&&r.push("".concat(l," cores"));var o=r.join(", "),d=(0,c.jsx)(s.Z,{className:"text-wrap",children:o});return o?i?(0,c.jsx)(a.ZP,{title:"Host's CPU specifications",children:d}):d:"-"}},65331:function(e,t,n){n.d(t,{Z:function(){return o}});n(72791);var s=n(38317),a=n(63509),c=n(86886),l=n(30945),i=n.n(l),r=n(80184);function o(e){var t,n=e.countryCode,l=e.size,o=(0,s.Z)({tooltipPlacementRight:{marginLeft:"0"}})(a.ZP);return t=n,void 0!==i().whereAlpha2(t)?(0,r.jsx)(o,{title:n,placement:"right-end",children:(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{className:"emojiFlag",countryCode:n,style:{fontSize:l,cursor:"pointer"},"aria-label":n,alt:n,svg:!0})})}):(0,r.jsx)("span",{style:{fontSize:"24px",width:"42px",textAlign:"center"},children:n})}},23447:function(e,t,n){n.d(t,{Z:function(){return i}});n(72791);var s=n(38302),a=n(63509),c=n(80184);function l(e){return Math.round(100*e)/100}function i(e){var t=e.cpu,n=e.ram,i=e.disk,r=e.instanceCount,o=e.showTooltip,d=[];r&&(t&&d.push("".concat(l(t/1e4/r),"% CPU")),n&&d.push("".concat(l(n/1e3/r),"GB RAM")),i&&d.push("".concat(l(i/1e3/r),"GB Disk")));var u=d.join(", "),h=(0,c.jsx)(s.Z,{className:"text-wrap",children:u});return u?o?(0,c.jsx)(a.ZP,{title:"Resource allocation for a smart contract instance",children:h}):h:"-"}},94374:function(e,t,n){n.d(t,{Z:function(){return d}});var s=n(29439),a=n(72791),c=n(63509),l=n(26513),i=n(18306),r=n(27944),o=n(80184);function d(e){var t=e.copyText,n=e.iconSize,d=(0,a.useState)(!1),u=(0,s.Z)(d,2),h=u[0],m=u[1];return(0,o.jsx)(a.Fragment,{children:(0,o.jsxs)("div",{className:"copy-box",children:[(0,o.jsx)("div",{children:e.children}),(0,o.jsx)(c.ZP,{title:h?"Copied":"Copy to clipboard",className:"ml-1",children:(0,o.jsx)(l.Z,{onClick:function(e){e.stopPropagation(),m(!0),navigator.clipboard.writeText(t),setTimeout((function(){m(!1)}),2e3)},className:"copy-button",children:h?(0,o.jsx)(i.Z,{className:"m-1",style:{fontSize:n||20,color:"#2b9e19"}}):(0,o.jsx)(r.Z,{className:"m-1",style:{fontSize:n||20}})})})]})})}},55128:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(72791),a=n(10283),c=n(42953),l=n(80184);function i(e){var t=e.columns,n=e.values,i=e.hideHeadings,r=e.onRowClick,o=e.blurTable,d=Object.keys(t);return(0,l.jsx)(s.Fragment,{children:(0,l.jsx)(a.Z,{className:"card-box mb-4",children:(0,l.jsx)(c.Z,{className:"p-0",children:(0,l.jsx)("div",{className:"table-responsive",children:(0,l.jsxs)("table",{className:"table table-striped  text-nowrap mb-0 ".concat(o?"table-blur":"table-hover"),children:[!i&&(0,l.jsx)("thead",{className:"thead-light",children:(0,l.jsx)("tr",{children:d.map((function(e,n){return(0,l.jsx)("th",{className:t[e].className,children:t[e].title},n)}))})}),(0,l.jsx)("tbody",{children:n.length>0?n.map((function(e,n){return(0,l.jsx)("tr",{onClick:function(){return r(e)},style:{cursor:"pointer"},children:d.map((function(n,s){return(0,l.jsx)("td",{className:t[n].className,children:e[n]},s)}))},n)})):(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:d.length,className:"text-center",children:"No data to show"})})})]})})})})})}},54972:function(e,t,n){n.a(e,(async function(e,s){try{n.r(t),n.d(t,{default:function(){return y}});var a=n(93433),c=n(15861),l=n(29439),i=n(87757),r=n.n(i),o=n(72791),d=n(79271),u=n(26513),h=n(49425),m=n(84738),x=n(55128),p=n(15504),f=n(80520),v=n(65331),j=n(32514),b=n(23447),g=n(94374),N=n(80184),Z=e([p]);p=(Z.then?(await Z)():Z)[0];function y(){var e=(0,d.k6)(),t=(0,p.y)(),n=(0,p.y)(),s=n.nextPageToken,i=n.updateNextPageToken,Z=n.pageQueue,k=n.updatePageQueue,y=(0,o.useState)(null),C=(0,l.Z)(y,2),w=C[0],z=C[1],S=(0,o.useState)(!1),M=(0,l.Z)(S,2),P=M[0],T=M[1],H=(0,o.useCallback)((0,c.Z)(r().mark((function e(){var n,s,a,c,l,o=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:null,e.next=3,t.getHosts(null,10,n);case 3:(s=e.sent).nextPageToken?(a=s.data,i(s.nextPageToken)):(a=s,i(null)),c={address:{title:"Address",className:"text-start"},status:{title:"Status",className:"text-center"},cpuModel:{title:"CPU Model",className:"text-center col-fixed-mw"},instanceSize:{title:"Instance Size",className:"text-center col-fixed-mw"},maxInstances:{title:"Max Instances",className:"text-center"},activeInstances:{title:"Active Instances",className:"text-center"}},l=a.map((function(e){return{key:e.address,address:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)(v.Z,{countryCode:e.countryCode,size:"3em"}),(0,N.jsxs)("div",{className:"ml-3",children:[(0,N.jsx)(g.Z,{copyText:e.address,iconSize:"16",children:(0,N.jsxs)("p",{className:"font-weight-bold m-0",children:[e.address,e.hostMessage?(0,N.jsx)(h.Z,{className:"host-message-icon",fontSize:"small"}):null]})}),(0,N.jsxs)("span",{className:"text-black-50 d-block py-1",children:[e.version&&(0,N.jsxs)("span",{className:"text-span",children:["v",e.version," | "]}),e.domain&&(0,N.jsx)("span",{children:e.domain})]})]})]}),status:e.active?(0,N.jsx)("div",{className:"h-auto py-2 badge badge-success",style:{width:"4.25rem",fontSize:"0.75rem"},children:"Active"}):(0,N.jsx)("div",{className:"h-auto py-2 badge badge-warning",style:{width:"4.25rem",fontSize:"0.75rem"},children:"Inactive"}),cpuModel:(0,N.jsx)(j.Z,{modelName:e.cpuModelName,speed:e.cpuMHz,count:e.cpuCount}),instanceSize:(0,N.jsx)(b.Z,{cpu:e.cpuMicrosec,ram:e.ramMb,disk:e.diskMb,instanceCount:e.maxInstances}),maxInstances:e.maxInstances||0,activeInstances:e.activeInstances||0}})),z({hosts:a,tableColumns:c,tableValues:l}),T(!1);case 9:case"end":return e.stop()}}),e)}))),[]);(0,o.useEffect)((function(){Z.length>0?H(Z[Z.length-1]):H()}),[H]);var I=(0,o.useCallback)((function(t){P||e.push("/host/".concat(t.key))}),[e,P]),A=(0,o.useCallback)((function(){T(!0),k([].concat((0,a.Z)(Z),[s])),H(s)}),[H,Z,s]),R=(0,o.useCallback)((function(){T(!0);var e=Z.length>1?Z[Z.length-2]:null;k(Z.slice(0,Z.length-1)),H(e)}),[H,Z]);return(0,N.jsxs)(o.Fragment,{children:[(0,N.jsx)(m.Z,{titleHeading:"Hosts"}),P&&(0,N.jsx)(f.Z,{className:'hostsLoader "p-4"'}),w&&(0,N.jsxs)("div",{children:[(0,N.jsx)(x.Z,{columns:w.tableColumns,values:w.tableValues,blurTable:P,onRowClick:I}),(0,N.jsxs)("div",{children:[Z.length>0&&(0,N.jsx)(u.Z,{className:"pull-left",variant:"contained",disabled:P,onClick:R,children:"Prev"}),s&&(0,N.jsx)(u.Z,{className:"pull-right",variant:"contained",disabled:P,onClick:A,children:"Next"})]})]})]})}s()}catch(k){s(k)}}))},49425:function(e,t,n){var s=n(95318);t.Z=void 0;var a=s(n(72791)),c=(0,s(n(44894)).default)(a.default.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message");t.Z=c}}]);
//# sourceMappingURL=972.bca60426.chunk.js.map
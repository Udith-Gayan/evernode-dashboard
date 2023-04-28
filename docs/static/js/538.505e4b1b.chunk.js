"use strict";(self.webpackChunkhost_dashboard=self.webpackChunkhost_dashboard||[]).push([[538],{46700:function(e,t,a){a.d(t,{B:function(){return n},L:function(){return r}});var n={hostAddress:"hostAddress"},r={newHookCandidate:"New Hook Candidate",pilotedModeCandidate:"Piloted Mode Candidate",dudHostCandidate:"Dud Host Candidate"}},94374:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(29439),r=a(72791),i=a(63509),o=a(26513),s=a(42126),l=a(7743),c=a(80184);function d(e){var t=e.copyText,a=e.iconSize,d=(0,r.useState)(!1),u=(0,n.Z)(d,2),p=u[0],h=u[1];return(0,c.jsx)(r.Fragment,{children:(0,c.jsxs)("div",{className:"copy-box",children:[(0,c.jsx)("div",{children:e.children}),(0,c.jsx)(i.ZP,{title:"Copy to clipboard",className:"ml-1",children:(0,c.jsx)(o.Z,{onClick:function(e){e.stopPropagation(),h(!0),navigator.clipboard.writeText(t)},className:"copy-button",children:(0,c.jsx)(l.Z,{className:"m-1",style:{fontSize:a||20}})})}),(0,c.jsx)(s.Z,{open:p,onClose:function(e,t){"clickaway"!==t&&h(!1)},autoHideDuration:1e3,anchorOrigin:{horizontal:"center",vertical:"top"},message:"Copied to clipboard",className:"alert"})]})})}},55128:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(72791),r=a(10283),i=a(42953),o=a(80184);function s(e){var t=e.columns,a=e.values,s=e.hideHeadings,l=e.onRowClick,c=e.blurTable,d=Object.keys(t);return(0,o.jsx)(n.Fragment,{children:(0,o.jsx)(r.Z,{className:"card-box mb-4",children:(0,o.jsx)(i.Z,{className:"p-0",children:(0,o.jsx)("div",{className:"table-responsive",children:(0,o.jsxs)("table",{className:"table table-striped  text-nowrap mb-0 ".concat(c?"table-blur":"table-hover"),children:[!s&&(0,o.jsx)("thead",{className:"thead-light",children:(0,o.jsx)("tr",{children:d.map((function(e,a){return(0,o.jsx)("th",{className:t[e].className,children:t[e].title},a)}))})}),(0,o.jsx)("tbody",{children:a.length>0?a.map((function(e,a){return(0,o.jsx)("tr",{onClick:function(){return l(e)},style:{cursor:"pointer"},children:d.map((function(a,n){return(0,o.jsx)("td",{className:t[a].className,children:e[a]},n)}))},a)})):(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colSpan:d.length,className:"text-center",children:"No data to show"})})})]})})})})})}},89505:function(e,t,a){a(72791);var n=a(80184);t.Z=function(e){var t=e.children,a=e.labelType;return(0,n.jsx)("div",{className:"h-auto py-1 badge badge-".concat(a),style:{width:"4.5rem",fontSize:"0.75rem",textAlign:"center"},children:t})}},34538:function(e,t,a){a.a(e,(async function(e,n){try{a.r(t);var r=a(93433),i=a(1413),o=a(15861),s=a(29439),l=a(87757),c=a.n(l),d=a(72791),u=a(79271),p=a(24364),h=a(26513),m=a(84738),f=a(55128),g=a(15504),x=a(80520),b=a(89505),v=a(46700),y=a(94374),C=a(80184),j=e([g]);g=(j.then?(await j)():j)[0];t.default=function(){var e=(0,u.k6)(),t=(0,g.y)(),a=(0,d.useState)(null),n=(0,s.Z)(a,2),l=n[0],j=n[1],Z=(0,d.useState)(null),N=(0,s.Z)(Z,2),k=N[0],T=N[1],w=(0,d.useState)([]),S=(0,s.Z)(w,2),O=S[0],R=S[1],V=(0,d.useState)(!1),z=(0,s.Z)(V,2),F=z[0],H=z[1],I=(0,d.useCallback)(function(){var e=(0,o.Z)(c().mark((function e(a){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCandidateType(a.id);case 2:return n=e.sent,e.abrupt("return",(0,i.Z)((0,i.Z)({},a),{},{candidateType:n}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),P=(0,d.useCallback)((0,o.Z)(c().mark((function e(){var a,n,r,i,o,s,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>0&&void 0!==l[0]?l[0]:null,e.next=3,t.getCandidates(null,10,a);case 3:return(n=e.sent).nextPageToken?(r=n.data,T(n.nextPageToken)):(r=n,T(null)),e.next=7,Promise.all(r.map(I));case 7:i=e.sent,o={candidateId:{title:"Candidate ID",className:"text-start"},candidateStatus:{title:"Status",className:"text-center"},positiveVoteCount:{title:"Positive Vote Count",className:"text-center col-fixed-mw"},proposalFee:{title:"Proposal Fee (EVRs)",className:"text-center col-fixed-mw"},foundationVoteStatus:{title:"Foundation Vote Status",className:"text-center"},candidateType:{title:"Candidate Type",className:"text-center"}},s=i.map((function(e){return{key:e.uniqueId,candidateId:(0,C.jsx)("div",{className:"d-flex align-items-center",children:(0,C.jsx)(y.Z,{copyText:e.uniqueId,iconSize:"16",children:(0,C.jsx)("p",{className:"font-weight-bold m-0",children:e.uniqueId})})}),candidateStatus:"supported"===e.status?(0,C.jsx)(b.Z,{labelType:"success",children:"Supported"}):"elected"===e.status?(0,C.jsx)(b.Z,{labelType:"primary",children:"Elected"}):"vetoed"===e.status?(0,C.jsx)(b.Z,{labelType:"danger",children:"Vetoed"}):"expired"===e.status?(0,C.jsx)(b.Z,{labelType:"dark",children:"Expired"}):(0,C.jsx)(b.Z,{labelType:"warning",children:"Rejected"}),positiveVoteCount:(0,C.jsx)("div",{children:e.positiveVoteCount}),proposalFee:(0,C.jsx)("div",{children:e.proposalFee}),foundationVoteStatus:"supported"===e.foundationVoteStatus?(0,C.jsx)(b.Z,{labelType:"success",children:"Supported"}):(0,C.jsx)(b.Z,{labelType:"warning",children:"Rejected"}),candidateType:(0,C.jsx)(p.Z,{badgeContent:1===e.candidateType?v.L.newHookCandidate:2===e.candidateType?v.L.pilotedModeCandidate:v.L.dudHostCandidate})}})),j({candidates:i,tableColumns:o,tableValues:s}),H(!1);case 12:case"end":return e.stop()}}),e)}))),[t,I]);(0,d.useEffect)((function(){P()}),[P]);var L=(0,d.useCallback)((function(t){F||e.push("/candidate/".concat(t.key))}),[e,F]),$=(0,d.useCallback)((function(){H(!0),R([].concat((0,r.Z)(O),[k])),P(k)}),[P,O,k]),E=(0,d.useCallback)((function(){H(!0);var e=O.length>1?O[O.length-2]:null;R(O.slice(0,O.length-1)),P(e)}),[P,O]);return(0,C.jsxs)(d.Fragment,{children:[(0,C.jsx)(m.Z,{titleHeading:"Candidates"}),F&&(0,C.jsx)(x.Z,{className:'hostsLoader "p-4"'}),l&&(0,C.jsxs)("div",{children:[(0,C.jsx)(f.Z,{columns:l.tableColumns,values:l.tableValues,blurTable:F,onRowClick:L}),(0,C.jsxs)("div",{children:[O.length>0&&(0,C.jsx)(h.Z,{className:"pull-left",variant:"contained",disabled:F,onClick:E,children:"Prev"}),k&&(0,C.jsx)(h.Z,{className:"pull-right",variant:"contained",disabled:F,onClick:$,children:"Next"})]})]})]})},n()}catch(Z){n(Z)}}))},24364:function(e,t,a){var n=a(87462),r=a(45987),i=a(72791),o=a(28182),s=a(38317),l=a(91122),c=i.forwardRef((function(e,t){var a=e.anchorOrigin,s=void 0===a?{vertical:"top",horizontal:"right"}:a,c=e.badgeContent,d=e.children,u=e.classes,p=e.className,h=e.color,m=void 0===h?"default":h,f=e.component,g=void 0===f?"span":f,x=e.invisible,b=e.max,v=void 0===b?99:b,y=e.overlap,C=void 0===y?"rectangle":y,j=e.showZero,Z=void 0!==j&&j,N=e.variant,k=void 0===N?"standard":N,T=(0,r.Z)(e,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),w=x;null==x&&(0===c&&!Z||null==c&&"dot"!==k)&&(w=!0);var S="";return"dot"!==k&&(S=c>v?"".concat(v,"+"):c),i.createElement(g,(0,n.Z)({className:(0,o.Z)(u.root,p),ref:t},T),d,i.createElement("span",{className:(0,o.Z)(u.badge,u["".concat(s.horizontal).concat((0,l.Z)(s.vertical),"}")],u["anchorOrigin".concat((0,l.Z)(s.vertical)).concat((0,l.Z)(s.horizontal)).concat((0,l.Z)(C))],"default"!==m&&u["color".concat((0,l.Z)(m))],w&&u.invisible,{dot:u.dot}[k])},S))}));t.Z=(0,s.Z)((function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(c)}}]);
//# sourceMappingURL=538.505e4b1b.chunk.js.map
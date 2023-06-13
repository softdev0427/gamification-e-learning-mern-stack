(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[21],{1129:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),l=a.n(r),c=a(272),s=a(906),o=a(910),i=a(42),u=a(280),m=a(915),p=a(37),f=a(23),d=a(4),g=a(907),b=a(918),v=a(872),E=a(79),h=a(916),O=a.n(h),y=Object(c.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var j=function(e){var t=e.className,a=Object(p.a)(e,["className"]),n=y();return l.a.createElement(g.a,Object.assign({className:Object(d.a)(n.root,t),container:!0,justify:"space-between",spacing:3},a),l.a.createElement(g.a,{item:!0},l.a.createElement(b.a,{separator:l.a.createElement(O.a,{fontSize:"small"}),"aria-label":"breadcrumb"},l.a.createElement(v.a,{variant:"body1",color:"inherit",to:"/app",component:f.a},"Dashboard"),l.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"Assessments"),l.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"Edit Assessments")),l.a.createElement(E.a,{variant:"h3",color:"textPrimary"},"These are Assessments that you created!")))},w=a(282),k=a.n(w),x=a(900),S=a(886),C=a(899),N=a(966),P=a(967),z=a(968),M=a(969),A=a(970),L=a(913),B=a(850),H=a(204),I=a(1145),R=a(977),T=a(935),Y=a(112),_=a.n(Y),q=a(919),D=a(46),W=a(87),J=[{value:"createdAt|asc",label:"createdAt (new to old)"},{value:"createdAt|desc",label:"createdAt (old to new)"}];function V(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function G(e,t){var a=t.split("|"),r=Object(n.a)(a,2),l=r[0],c=function(e,t){return"desc"===e?function(e,a){return V(e,a,t)}:function(e,a){return-V(e,a,t)}}(r[1],l),s=e.map((function(e,t){return[e,t]}));return s.sort((function(e,t){var a=c(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),s.map((function(e){return e[0]}))}var U=Object(c.a)((function(e){return{root:{},avatar:{height:42,width:42,marginRight:e.spacing(1)}}}));var F=function(e){var t=e.className,a=e.Myassessments,c=Object(p.a)(e,["className","Myassessments"]),s=U(),u=Object(r.useState)(0),m=Object(n.a)(u,2),g=m[0],b=m[1],E=Object(r.useState)(5),h=Object(n.a)(E,2),O=h[0],y=h[1],j=Object(r.useState)(a),w=Object(n.a)(j,2),Y=w[0],V=w[1],F=Object(r.useState)(J[0].value),K=Object(n.a)(F,2),Q=K[0],X=K[1],Z=Object(W.useSnackbar)().enqueueSnackbar,$=function(e,t,a){return e.slice(t*a,t*a+a)}(G(Y,Q),g,O);return l.a.createElement(x.a,Object.assign({className:Object(d.a)(s.root,t)},c),l.a.createElement(S.a,null),l.a.createElement(o.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},l.a.createElement(C.a,{label:"Sort By",name:"sort",onChange:function(e){e.persist(),X(e.target.value)},select:!0,SelectProps:{native:!0},value:Q,variant:"outlined"},J.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)})))),l.a.createElement(k.a,null,l.a.createElement(o.a,{minWidth:700},l.a.createElement(N.a,null,l.a.createElement(P.a,null,l.a.createElement(z.a,null,l.a.createElement(M.a,null,"Course Name"),l.a.createElement(M.a,null,"Assessment Name"),l.a.createElement(M.a,null,"Learners"),l.a.createElement(M.a,null,"Starttime"),l.a.createElement(M.a,null,"Endtime"),l.a.createElement(M.a,null,"Mult-choice-question"),l.a.createElement(M.a,null,"Edit Gamification"),l.a.createElement(M.a,null,"Objective question"),l.a.createElement(M.a,{align:"right"},"Actions"))),l.a.createElement(A.a,null,$.map((function(e){return l.a.createElement(z.a,{hover:!0,key:e._id},l.a.createElement(M.a,null,l.a.createElement(o.a,{display:"flex",alignItems:"center"},l.a.createElement(L.a,{className:s.avatar,style:{backgroundColor:"darkgreen"}},Object(q.a)(e.coursename)),l.a.createElement(v.a,{color:"inherit",variant:"h6"},e.coursename))),l.a.createElement(M.a,null,l.a.createElement(o.a,{display:"flex",alignItems:"center"},l.a.createElement(L.a,{className:s.avatar,style:{backgroundColor:"darkgreen"}},Object(q.a)(e.name)),l.a.createElement(v.a,{color:"inherit",variant:"h6"},e.name))),l.a.createElement(M.a,null,e.learners.length,"(learners)"),l.a.createElement(M.a,null,_()(e.starttime).format("YYYY-MM-DD HH:mm")),l.a.createElement(M.a,null,_()(e.dateline).format("YYYY-MM-DD HH:mm")),l.a.createElement(M.a,null,e.mcquestions.length,"(questions)"),l.a.createElement(M.a,null,l.a.createElement(B.a,{component:f.a,to:"/app/assessments/assessments/gamification/"+e._id},l.a.createElement(H.a,{fontSize:"small"},l.a.createElement(R.a,null)))),l.a.createElement(M.a,null,l.a.createElement(B.a,{component:f.a,to:"/app/assessments/assessments/update/"+e._id},l.a.createElement(H.a,{fontSize:"small"},l.a.createElement(R.a,null)))),l.a.createElement(M.a,{align:"right"},l.a.createElement(B.a,{component:f.a,to:"/app/assessments/assessments/updateAssess/"+e._id},l.a.createElement(H.a,{fontSize:"small"},l.a.createElement(R.a,null))),l.a.createElement(B.a,{onClick:function(t){var a;window.confirm("Are you really want to delete this assessment?")&&(a=e._id,i.a.get(D.a+"assessments/assessments/delete/"+a).then((function(e){Z(e.data.message,{variant:"success"}),V(e.data.assessments)})))}},l.a.createElement(H.a,{fontSize:"small"},l.a.createElement(T.a,null)))))})))))),l.a.createElement(I.a,{component:"div",count:Y.length,onChangePage:function(e,t){b(t)},onChangeRowsPerPage:function(e){y(e.target.value)},page:g,rowsPerPage:O,rowsPerPageOptions:[5,10]}))},K=a(17),Q=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=Q(),t=Object(m.a)(),a=Object(r.useState)(null),c=Object(n.a)(a,2),p=c[0],f=c[1],d=Object(K.c)((function(e){return e.account.user})),g=Object(r.useCallback)((function(){i.a.get(D.a+"assessments/assessments/edit/"+d.email).then((function(e){t.current&&f(e.data.assessments)}))}),[t,d.email]);return Object(r.useEffect)((function(){g()}),[g]),p?l.a.createElement(u.a,{className:e.root,title:"Own Course List"},l.a.createElement(s.a,{maxWidth:!1},l.a.createElement(j,null),p&&l.a.createElement(o.a,{mt:3},l.a.createElement(F,{Myassessments:p})))):null}},915:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},916:function(e,t,a){"use strict";var n=a(213);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=(0,n(a(281)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=l},918:function(e,t,a){"use strict";var n=a(1),r=a(47),l=a(3),c=a(0),s=(a(86),a(2),a(4)),o=a(6),i=a(79),u=a(12),m=a(162),p=Object(m.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=a(279);var d=Object(o.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(l.a)(e,["classes"]);return c.createElement(f.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(p,{className:t.icon}))}));var g=c.forwardRef((function(e,t){var a=e.children,o=e.classes,u=e.className,m=e.component,p=void 0===m?"nav":m,f=e.expandText,g=void 0===f?"Show path":f,b=e.itemsAfterCollapse,v=void 0===b?1:b,E=e.itemsBeforeCollapse,h=void 0===E?1:E,O=e.maxItems,y=void 0===O?8:O,j=e.separator,w=void 0===j?"/":j,k=Object(l.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),x=c.useState(!1),S=x[0],C=x[1],N=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:o.li,key:"child-".concat(t)},e)}));return c.createElement(i.a,Object(n.a)({ref:t,component:p,color:"textSecondary",className:Object(s.a)(o.root,u)},k),c.createElement("ol",{className:o.ol},function(e,t,a){return e.reduce((function(n,r,l){return l<e.length-1?n=n.concat(r,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:t},a)):n.push(r),n}),[])}(S||y&&N.length<=y?N:function(e){return h+v>=e.length?e:[].concat(Object(r.a)(e.slice(0,h)),[c.createElement(d,{"aria-label":g,key:"ellipsis",onClick:function(){C(!0)}})],Object(r.a)(e.slice(e.length-v,e.length)))}(N),o.separator,w)))}));t.a=Object(o.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},919:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},935:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),c=a.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=function(e){var t=e.color,a=e.size,n=o(e,["color","size"]);return r.a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),r.a.createElement("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),r.a.createElement("line",{x1:"12",y1:"9",x2:"18",y2:"15"}))};i.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},i.defaultProps={color:"currentColor",size:"24"},t.a=i},977:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),c=a.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=function(e){var t=e.color,a=e.size,n=o(e,["color","size"]);return r.a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))};i.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},i.defaultProps={color:"currentColor",size:"24"},t.a=i}}]);
//# sourceMappingURL=21.7bcdc462.chunk.js.map
(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[25],{1101:function(e,t,a){"use strict";var n=a(1),r=a(3),l=a(0),o=(a(2),a(4)),i=a(79),c=a(6),s=a(105),u=l.forwardRef((function(e,t){var a=e.children,c=e.classes,u=e.className,m=e.component,f=void 0===m?"div":m,d=e.disablePointerEvents,p=void 0!==d&&d,v=e.disableTypography,b=void 0!==v&&v,g=e.position,E=e.variant,h=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(s.b)()||{},y=E;return E&&O.variant,O&&!y&&(y=O.variant),l.createElement(s.a.Provider,{value:null},l.createElement(f,Object(n.a)({className:Object(o.a)(c.root,u,p&&c.disablePointerEvents,O.hiddenLabel&&c.hiddenLabel,"filled"===y&&c.filled,{start:c.positionStart,end:c.positionEnd}[g],"dense"===O.margin&&c.marginDense),ref:t},h),"string"!==typeof a||b?a:l.createElement(i.a,{color:"textSecondary"},a)))}));t.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(u)},1112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(272),o=a(906),i=a(910),c=a(280),s=a(37),u=a(17),m=a(4),f=a(907),d=a(79),p=a(912),v=Object(l.a)((function(e){return{root:{},image:{width:"80%",maxHeight:200}}}));var b=function(e){var t=e.className,a=Object(s.a)(e,["className"]),n=v(),l=Object(u.c)((function(e){return e.account})).user;return r.a.createElement("div",Object.assign({className:Object(m.a)(n.root,t)},a),r.a.createElement(f.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},r.a.createElement(f.a,{item:!0,md:6,xs:12},r.a.createElement(d.a,{variant:"h3",color:"textPrimary"},"Hi,"," ",l.username),r.a.createElement(d.a,{variant:"subtitle1",color:"textPrimary"},"This is admin panel. ",r.a.createElement("br",null),"All users are listed below.")),r.a.createElement(p.a,{smDown:!0},r.a.createElement(f.a,{item:!0,md:6},r.a.createElement("img",{alt:"Cover",className:n.image,src:"/static/images/admin/header.jpg"})))))},g=a(25),E=a(42),h=a(915),O=a(121),y=a(23),w=a(282),j=a.n(w),x=a(900),k=a(1110),P=a(1097),S=a(886),z=a(899),C=a(1101),L=a(204),N=a(966),A=a(967),T=a(968),I=a(969),D=a(970),R=a(913),B=a(872),H=a(873),M=a(850),W=a(1145),Y=a(2),_=a.n(Y);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var q=function(e){var t=e.color,a=e.size,n=U(e,["color","size"]);return r.a.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))};q.propTypes={color:_.a.string,size:_.a.oneOfType([_.a.string,_.a.number])},q.defaultProps={color:"currentColor",size:"24"};var J=q,V=a(977),$=a(935),G=a(919),K=a(112),Q=a.n(K),X=[{value:"all",label:"All"},{value:"allow",label:"Applicants"}],Z=[{value:"createdAt|asc",label:"Last update (oldest first)"},{value:"createdAt|desc",label:"Last update (newest first)"},{value:"wallet|desc",label:"Total orders (high to low)"},{value:"wallet|asc",label:"Total orders (low to high)"}];function ee(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function te(e,t){var a=t.split("|"),n=Object(g.a)(a,2),r=n[0],l=function(e,t){return"desc"===e?function(e,a){return ee(e,a,t)}:function(e,a){return-ee(e,a,t)}}(n[1],r),o=e.map((function(e,t){return[e,t]}));return o.sort((function(e,t){var a=l(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),o.map((function(e){return e[0]}))}var ae=Object(l.a)((function(e){return{root:{},queryField:{width:500},avatar:{height:42,width:42,marginRight:e.spacing(1)}}}));function ne(e){var t=e.className,a=e.users,l=e.onAllow,o=e.onDelete,c=Object(s.a)(e,["className","users","onAllow","onDelete"]),u=ae(),f=Object(n.useState)("all"),p=Object(g.a)(f,2),v=p[0],b=p[1],E=Object(n.useState)(0),h=Object(g.a)(E,2),w=h[0],Y=h[1],_=Object(n.useState)(5),F=Object(g.a)(_,2),U=F[0],q=F[1],K=Object(n.useState)(""),ee=Object(g.a)(K,2),ne=ee[0],re=ee[1],le=Object(n.useState)(Z[0].value),oe=Object(g.a)(le,2),ie=oe[0],ce=oe[1],se=Object(n.useState)({allow:null}),ue=Object(g.a)(se,2),me=ue[0],fe=ue[1],de=function(e,t,a){return e.filter((function(e){var n=!0;if(t){var r=!1;["email","username"].forEach((function(a){e[a].toLowerCase().includes(t.toLowerCase())&&(r=!0)})),r||(n=!1)}return Object.keys(a).forEach((function(t){var r=a[t];r&&e[t]===r&&(n=!1)})),n}))}(a,ne,me),pe=function(e,t,a){return e.slice(t*a,t*a+a)}(te(de,ie),w,U);return r.a.createElement(x.a,Object.assign({className:Object(m.a)(u.root,t)},c),r.a.createElement(k.a,{onChange:function(e,t){var a=Object(O.a)({},me,{allow:null});"all"!==t&&(a[t]=!0),fe(a),b(t)},scrollButtons:"auto",textColor:"secondary",value:v,variant:"scrollable"},X.map((function(e){return r.a.createElement(P.a,{key:e.value,value:e.value,label:e.label})}))),r.a.createElement(S.a,null),r.a.createElement(i.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},r.a.createElement(z.a,{className:u.queryField,InputProps:{startAdornment:r.a.createElement(C.a,{position:"start"},r.a.createElement(L.a,{fontSize:"small",color:"action"},r.a.createElement(J,null)))},onChange:function(e){e.persist(),re(e.target.value)},placeholder:"Search users(name or email)",value:ne,variant:"outlined"}),r.a.createElement(i.a,{flexGrow:1}),r.a.createElement(z.a,{label:"Sort By",name:"sort",onChange:function(e){e.persist(),ce(e.target.value)},select:!0,SelectProps:{native:!0},value:ie,variant:"outlined"},Z.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))),r.a.createElement(j.a,null,r.a.createElement(i.a,{minWidth:850},r.a.createElement(N.a,null,r.a.createElement(A.a,null,r.a.createElement(T.a,null,r.a.createElement(I.a,null,"Name"),r.a.createElement(I.a,null,"Location"),r.a.createElement(I.a,null,"Role"),r.a.createElement(I.a,null,"Total funds(VN)"),r.a.createElement(I.a,null,"Registered date"),r.a.createElement(I.a,null,"Allow"),r.a.createElement(I.a,{align:"right"},"Actions"))),r.a.createElement(D.a,null,pe.map((function(e){return r.a.createElement(T.a,{hover:!0,key:e._id},r.a.createElement(I.a,null,r.a.createElement(i.a,{display:"flex",alignItems:"center"},r.a.createElement(R.a,{className:u.avatar,src:e.avatar},Object(G.a)(e.username)),r.a.createElement("div",null,r.a.createElement(B.a,{color:"inherit",variant:"h6"},e.username),r.a.createElement(d.a,{variant:"body2",color:"textSecondary"},e.email)))),r.a.createElement(I.a,null,e.location),r.a.createElement(I.a,null,e.role),r.a.createElement(I.a,null,e.wallet),r.a.createElement(I.a,null,Q()(e.createdAt).format("YYYY-MM-DD")),r.a.createElement(I.a,null,e.allow&&r.a.createElement(H.a,{size:"small",variant:"contained",color:"secondary"},"allowed"),!e.allow&&r.a.createElement(H.a,{size:"small",variant:"contained",style:{backgroundColor:"orange"},onClick:function(t){return l(e._id)}},"Not allowed")),r.a.createElement(I.a,{align:"right"},"admin"!==e.role&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{component:y.a,to:"/app/adminpanel/editUser/"+e._id},r.a.createElement(L.a,{fontSize:"small"},r.a.createElement(V.a,null))),r.a.createElement(M.a,{onClick:function(t){window.confirm("Are you really want to delete this user?")&&o(e._id)}},r.a.createElement(L.a,{fontSize:"small"},r.a.createElement($.a,null))))))})))))),r.a.createElement(W.a,{component:"div",count:de.length,onChangePage:function(e,t){Y(t)},onChangeRowsPerPage:function(e){q(e.target.value)},page:w,rowsPerPage:U,rowsPerPageOptions:[5,10,25]}))}ne.defaultProps={users:[]};var re=ne,le=a(46);var oe=function(){var e=Object(h.a)(),t=Object(n.useState)(null),a=Object(g.a)(t,2),l=a[0],c=a[1],s=Object(n.useCallback)((function(){E.a.get(le.a+"admin/users/list").then((function(t){e.current&&c(t.data.users)}))}),[e]);return Object(n.useEffect)((function(){s()}),[s]),l?r.a.createElement(o.a,{maxWidth:!1},l&&r.a.createElement(i.a,{mt:3},r.a.createElement(re,{users:l,onAllow:function(e){E.a.get(le.a+"admin/users/allow/"+e).then((function(e){c(e.data.users)}))},onDelete:function(e){E.a.get(le.a+"admin/users/delete/"+e).then((function(e){c(e.data.users)}))}}))):null},ie=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=ie();return r.a.createElement(c.a,{className:e.root,title:"User list"},r.a.createElement(o.a,{maxWidth:"lg"},r.a.createElement(b,null),r.a.createElement(i.a,{mt:6},r.a.createElement(oe,null))))}},915:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},919:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},935:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=function(e){var t=e.color,a=e.size,n=c(e,["color","size"]);return r.a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),r.a.createElement("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),r.a.createElement("line",{x1:"12",y1:"9",x2:"18",y2:"15"}))};s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.defaultProps={color:"currentColor",size:"24"},t.a=s},977:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),o=a.n(l);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=function(e){var t=e.color,a=e.size,n=c(e,["color","size"]);return r.a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),r.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))};s.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},s.defaultProps={color:"currentColor",size:"24"},t.a=s}}]);
//# sourceMappingURL=25.7298ef0a.chunk.js.map
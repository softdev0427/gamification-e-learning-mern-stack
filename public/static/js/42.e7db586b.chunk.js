(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[42],{1109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(272),c=t(906),i=t(910),o=t(280),s=t(37),u=t(17),m=t(4),E=t(907),g=t(79),d=t(912),b=Object(l.a)((function(e){return{root:{},image:{width:"100%",maxHeight:200}}}));var v=function(e){var a=e.className,t=Object(s.a)(e,["className"]),n=b(),l=Object(u.c)((function(e){return e.account})).user;return r.a.createElement("div",Object.assign({className:Object(m.a)(n.root,a)},t),r.a.createElement(E.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},r.a.createElement(E.a,{item:!0,md:6,xs:12},r.a.createElement(g.a,{variant:"overline",color:"textSecondary"},"wallet"),r.a.createElement(g.a,{variant:"h3",color:"textPrimary"},"Hi,"," ",l.username),r.a.createElement(g.a,{variant:"subtitle1",color:"textPrimary"},"Your financial relationship is as follows")),r.a.createElement(d.a,{smDown:!0},r.a.createElement(E.a,{item:!0,md:6},r.a.createElement("img",{alt:"Cover",className:n.image,src:"/static/images/wallet/walletHeader.svg"})))))},f=t(25),p=t(900),h=t(42),j=t(46),w=t(915),O=Object(l.a)((function(e){return{root:{},item:{padding:e.spacing(3),textAlign:"center"},label:{marginLeft:e.spacing(1)},overline:{marginTop:e.spacing(1)}}}));var N=function(e){var a=e.className,t=Object(s.a)(e,["className"]),l=O(),c=Object(w.a)(),i=Object(n.useState)([]),o=Object(f.a)(i,2),d=o[0],b=o[1],v=Object(u.c)((function(e){return e.account})).user,N=Object(n.useCallback)((function(){h.a.get(j.a+"account/wallet/statistics/"+v._id).then((function(e){c.current&&b(e.data.statistics)}))}),[c,v._id]);return Object(n.useEffect)((function(){N()}),[N]),d?r.a.createElement(p.a,Object.assign({className:Object(m.a)(l.root,a)},t),r.a.createElement(E.a,{alignItems:"center",container:!0,justify:"space-between"},r.a.createElement(E.a,{className:l.item,item:!0,md:3,sm:6,xs:12},r.a.createElement(g.a,{variant:"h2",color:"textPrimary"},d.loans,r.a.createElement("div",{style:{width:"20px"}}),"VN"),r.a.createElement(g.a,{className:l.overline,variant:"overline",color:"textSecondary"},"Total Loans")),r.a.createElement(E.a,{className:l.item,item:!0,md:3,sm:6,xs:12},r.a.createElement(g.a,{variant:"h2",color:"textPrimary"},d.gifts,r.a.createElement("div",{style:{width:"20px"}}),"VN"),r.a.createElement(g.a,{className:l.overline,variant:"overline",color:"textSecondary"},"total gifts(sent)")),r.a.createElement(E.a,{className:l.item,item:!0,md:3,sm:6,xs:12},r.a.createElement(g.a,{variant:"h2",color:"textPrimary"},d.borrows,r.a.createElement("div",{style:{width:"20px"}}),"VN"),r.a.createElement(g.a,{className:l.overline,variant:"overline",color:"textSecondary"},"total borrows")),r.a.createElement(E.a,{className:l.item,item:!0,md:3,sm:6,xs:12},r.a.createElement(g.a,{variant:"h2",color:"textPrimary"},d.receives,r.a.createElement("div",{style:{width:"20px"}}),"VN"),r.a.createElement(g.a,{className:l.overline,variant:"overline",color:"textSecondary"},"Total gifts(received)")))):null},x=Object(l.a)((function(e){return{root:{}}}));var y=function(e){var a=e.className,t=Object(s.a)(e,["className"]),n=x();return r.a.createElement(E.a,Object.assign({className:Object(m.a)(n.root,a),container:!0,justify:"space-between",spacing:3},t),r.a.createElement(g.a,{variant:"h3",color:"textPrimary"},"All users related to finance"))},R=t(23),k=t(282),P=t.n(k),q=t(886),V=t(899),S=t(966),L=t(967),C=t(968),G=t(969),_=t(970),H=t(913),T=t(872),B=t(873),I=t(1145),W=t(919),A=t(136),J=[{value:"loans|desc",label:"Loan (high to low)"},{value:"loans|asc",label:"Loan (low to high)"},{value:"borrows|desc",label:"borrowed (high to low)"},{value:"borrows|asc",label:"borrowed (low to high)"},{value:"gifts|desc",label:"gift gave(high to low)"},{value:"gifts|asc",label:"gift gave(low to high)"},{value:"receives|desc",label:"gift received (high to low)"},{value:"receives|asc",label:"gift received  (low to high)"}];function z(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}function D(e,a){var t=a.split("|"),n=Object(f.a)(t,2),r=n[0],l=function(e,a){return"desc"===e?function(e,t){return z(e,t,a)}:function(e,t){return-z(e,t,a)}}(n[1],r),c=e.map((function(e,a){return[e,a]}));return c.sort((function(e,a){var t=l(e[0],a[0]);return 0!==t?t:e[1]-a[1]})),c.map((function(e){return e[0]}))}var U=Object(l.a)((function(e){return{root:{},avatar:{height:42,width:42,marginRight:e.spacing(1)}}}));var Y=function(e){var a=e.className,t=e.customers,l=Object(s.a)(e,["className","customers"]),c=U(),o=Object(n.useState)(0),u=Object(f.a)(o,2),E=u[0],g=u[1],d=Object(n.useState)(5),b=Object(f.a)(d,2),v=b[0],h=b[1],j=Object(n.useState)(J[0].value),w=Object(f.a)(j,2),O=w[0],N=w[1],x=function(e,a,t){return e.slice(a*t,a*t+t)}(D(t,O),E,v);return r.a.createElement(p.a,Object.assign({className:Object(m.a)(c.root,a)},l),r.a.createElement(q.a,null),r.a.createElement(i.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},r.a.createElement(V.a,{label:"Sort By",name:"sort",onChange:function(e){e.persist(),N(e.target.value)},select:!0,SelectProps:{native:!0},value:O,variant:"outlined"},J.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))),r.a.createElement(P.a,null,r.a.createElement(i.a,{minWidth:1e3},r.a.createElement(S.a,null,r.a.createElement(L.a,null,r.a.createElement(C.a,null,r.a.createElement(G.a,null,"Name"),r.a.createElement(G.a,null,"Location"),r.a.createElement(G.a,null,"total ",r.a.createElement("br",null),"(VN)"),r.a.createElement(G.a,null,"loan",r.a.createElement("br",null),"(VN)"),r.a.createElement(G.a,null,"borrowed",r.a.createElement("br",null),"(VN)"),r.a.createElement(G.a,null,"gaveGift",r.a.createElement("br",null),"(VN)"),r.a.createElement(G.a,null,"receivedGift",r.a.createElement("br",null),"(VN)"),r.a.createElement(G.a,null,"giftReq",r.a.createElement("br",null),"got(VN)"),r.a.createElement(G.a,null,"loanReq",r.a.createElement("br",null),"got(VN)"),r.a.createElement(G.a,null,"giftReq",r.a.createElement("br",null),"sent(VN)"),r.a.createElement(G.a,null,"loanReq",r.a.createElement("br",null),"sent(VN)"),r.a.createElement(G.a,{align:"right"},"Loan & Borrow"))),r.a.createElement(_.a,null,x.map((function(e){return r.a.createElement(C.a,{hover:!0,key:e.userid._id},r.a.createElement(G.a,null,r.a.createElement(i.a,{display:"flex",alignItems:"center"},r.a.createElement(H.a,{className:c.avatar,src:e.userid.avatar},Object(W.a)(e.userid.username)),r.a.createElement("div",null,r.a.createElement(T.a,{color:"inherit",variant:"h6"},e.userid.username)))),r.a.createElement(G.a,null,e.userid.location),r.a.createElement(G.a,null,e.userid.wallet),r.a.createElement(G.a,null,e.loans),0===e.borrows&&r.a.createElement(G.a,null,e.borrows),0!==e.borrows&&r.a.createElement(G.a,null,r.a.createElement(A.a,{color:"error"},e.borrows)),r.a.createElement(G.a,null,e.gifts),r.a.createElement(G.a,null,e.receives),0===e.getGiftReq&&r.a.createElement(G.a,null,e.getGiftReq),0!==e.getGiftReq&&r.a.createElement(G.a,null,r.a.createElement(A.a,{color:"warning"},e.getGiftReq)),0===e.getLoanReq&&r.a.createElement(G.a,null,e.getLoanReq),0!==e.getLoanReq&&r.a.createElement(G.a,null,r.a.createElement(A.a,{color:"warning"},e.getLoanReq)),r.a.createElement(G.a,null,e.sendGiftReq),r.a.createElement(G.a,null,e.sendLoanReq),r.a.createElement(G.a,{align:"right"},r.a.createElement(B.a,{style:{backgroundColor:"darkgreen"},size:"medium",component:R.a,to:"/app/account/wallet/edit/"+e.userid._id},"Edit")))})))))),r.a.createElement(I.a,{component:"div",count:t.length,onChangePage:function(e,a){g(a)},onChangeRowsPerPage:function(e){h(e.target.value)},page:E,rowsPerPage:v,rowsPerPageOptions:[5,10,25]}))},F=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));var K=function(){var e=F(),a=Object(w.a)(),t=Object(n.useState)(null),l=Object(f.a)(t,2),o=l[0],s=l[1],m=Object(u.c)((function(e){return e.account})).user,E=Object(n.useCallback)((function(){h.a.get(j.a+"account/wallet/userlist/"+m._id).then((function(e){a.current&&s(e.data.relation)}))}),[a,m._id]);return Object(n.useEffect)((function(){E()}),[E]),o?r.a.createElement(c.a,{className:e.root,maxWidth:!1},r.a.createElement(y,null),o&&r.a.createElement(i.a,{mt:3},r.a.createElement(Y,{customers:o}))):null},M=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=M();return r.a.createElement(o.a,{className:e.root,title:"financial relationship"},r.a.createElement(c.a,{maxWidth:"lg"},r.a.createElement(v,null),r.a.createElement(i.a,{mt:3},r.a.createElement(N,null)),r.a.createElement(i.a,{mt:6},r.a.createElement(K,null))))}},915:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},919:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}}}]);
//# sourceMappingURL=42.e7db586b.chunk.js.map
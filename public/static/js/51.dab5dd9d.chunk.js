(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[51],{1141:function(e,t,a){"use strict";a.r(t);var r=a(25),n=a(0),o=a.n(n),c=a(272),l=a(906),i=a(161),s=a(910),m=a(900),p=a(901),u=a(886),d=a(907),b=a(873),g=a(280),k=a(37),f=a(4),y=a(932),h=a.n(y),E=Object(c.a)((function(e){return{root:{minHeight:"400px","& .ql-toolbar":{borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),"& .ql-picker-label:hover":{color:e.palette.secondary.main},"& .ql-picker-label.ql-active":{color:e.palette.secondary.main},"& .ql-picker-item:hover":{color:e.palette.secondary.main},"& .ql-picker-item.ql-selected":{color:e.palette.secondary.main},"& button:hover":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button:focus":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:e.palette.secondary.main}},"& .ql-stroke":{stroke:e.palette.text.primary},"& .ql-picker":{color:e.palette.text.primary},"& .ql-picker-options":{padding:e.spacing(2),backgroundColor:e.palette.background.default,border:"none",boxShadow:e.shadows[10],borderRadius:e.shape.borderRadius}},"& .ql-container":{border:"none","& .ql-editor":{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"&.ql-blank::before":{color:e.palette.text.secondary}}}},stepButton:{"& + &":{marginLeft:e.spacing(2)}}}}));var v=function(e){var t=e.className,a=Object(k.a)(e,["className"]),r=E();return o.a.createElement(h.a,Object.assign({className:Object(f.a)(r.root,t)},a))},q=a(46),j=a(42),x=a(87),O=a(17),w=a(79),N=a(912),C=Object(c.a)((function(e){return{root:{},image:{width:"80%",maxHeight:200}}}));var S=function(e){var t=e.className,a=Object(k.a)(e,["className"]),r=C(),n=Object(O.c)((function(e){return e.account})).user;return o.a.createElement("div",Object.assign({className:Object(f.a)(r.root,t)},a),o.a.createElement(d.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},o.a.createElement(d.a,{item:!0,md:6,xs:12},o.a.createElement(w.a,{variant:"h3",color:"textPrimary"},"Hi,"," ",n.username),o.a.createElement(w.a,{variant:"subtitle1",color:"textPrimary"},"This is admin panel. ",o.a.createElement("br",null),"Write a notice below to inform everyone.")),o.a.createElement(N.a,{smDown:!0},o.a.createElement(d.a,{item:!0,md:6},o.a.createElement("img",{alt:"Cover",className:r.image,src:"/static/images/admin/header.jpg"})))))},H=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=H(),t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],k=a[1],f=Object(x.useSnackbar)().enqueueSnackbar,y=Object(O.c)((function(e){return e.account})).user;return o.a.createElement(g.a,{className:e.root,title:"Admin - push notification"},o.a.createElement(l.a,{maxWidth:"lg"},o.a.createElement(S,null),o.a.createElement(i.a,{component:s.a,mt:3},o.a.createElement(m.a,null,o.a.createElement(p.a,{title:"Please Write your notice below."}),o.a.createElement(u.a,null),o.a.createElement(v,{onChange:function(e){return k(e)}})),o.a.createElement(u.a,null),o.a.createElement(s.a,{display:"flex"},o.a.createElement(s.a,{flexGrow:1}),o.a.createElement(d.a,null,o.a.createElement(b.a,{style:{margin:"20px",backgroundColor:"darkgreen"},onClick:function(e){j.a.post(q.a+"admin/pushnotification",{creator:y._id,notice:c}).then((function(e){f(e.data.message,{variant:"success"})}))}},"Done"))))))}}}]);
//# sourceMappingURL=51.dab5dd9d.chunk.js.map
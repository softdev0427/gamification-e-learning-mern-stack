(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[34],{1128:function(e,a,t){"use strict";t.r(a);var n=t(25),r=t(0),s=t.n(r),c=t(23),o=t(272),l=t(906),i=t(900),m=t(902),u=t(79),d=t(910),p=t(886),f=t(872),b=t(280),g=t(30),h=t.n(g),v=t(54),E=t(37),y=t(4),j=t(922),O=t(921),x=t(87),S=t(899),k=t(873),C=t(42),N=t(46),w=t(35),B=Object(o.a)((function(){return{root:{}}}));var A=function(e){var a=e.className,t=e.courses,n=Object(E.a)(e,["className","courses"]),r=B(),c=Object(w.g)(),o=Object(x.useSnackbar)().enqueueSnackbar;return s.a.createElement(O.a,{initialValues:{course:t[0].name,assessmentname:"",starttime:"2022-10-01 00:00",dateline:"2022-10-01 00:00"},validationSchema:j.c().shape({assessmentname:j.e().max(255).required("Assessment name name is required"),dateline:j.a().required("Dateline is required"),starttime:j.a().required("Dateline is required")}),onSubmit:function(){var e=Object(v.a)(h.a.mark((function e(a,n){var r,s,l,i,m,u,d,p;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setErrors,s=n.setStatus,l=n.setSubmitting,e.prev=1,i=a.course,m=a.assessmentname,u=a.starttime,d=a.dateline,p="",e.next=6,C.a.post(N.a+"assessments/assessments/create",{course:i,assessmentname:m,starttime:u,dateline:d,lecturer:t[0].lecturer}).then((function(e){p=e.data}));case 6:p.success?(s({success:!0}),l(!1),o(p.message,{variant:"success"}),c.push("/app/assessments/assessments/edit")):o(p.message,{variant:"error"}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),s({success:!1}),r({submit:e.t0.message}),l(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var c=e.errors,o=e.handleBlur,l=e.handleChange,i=e.handleSubmit,m=e.isSubmitting,u=e.touched,p=e.values;return s.a.createElement("form",Object.assign({className:Object(y.a)(r.root,a),onSubmit:i},n),s.a.createElement(S.a,{fullWidth:!0,label:"Select Course name",name:"course",margin:"normal",select:!0,onChange:l,SelectProps:{native:!0},value:p.course,variant:"outlined"},t.map((function(e){return s.a.createElement("option",{value:e.name,key:e.name},e.name)}))),s.a.createElement(S.a,{error:Boolean(u.assessmentname&&c.assessmentname),fullWidth:!0,helperText:u.assessmentname&&c.assessmentname,label:"Assessment name",margin:"normal",name:"assessmentname",onBlur:o,onChange:l,type:"String",value:p.assessmentname,variant:"outlined"}),s.a.createElement(S.a,{error:Boolean(u.starttime&&c.starttime),fullWidth:!0,helperText:u.starttime&&c.starttime,label:"Starttime",margin:"normal",name:"starttime",onBlur:o,onChange:l,type:"datetime-local",value:p.starttime,variant:"outlined"}),s.a.createElement(S.a,{error:Boolean(u.dateline&&c.dateline),fullWidth:!0,helperText:u.dateline&&c.dateline,label:"Endtime",margin:"normal",name:"dateline",onBlur:o,onChange:l,type:"datetime-local",value:p.dateline,variant:"outlined"}),s.a.createElement(d.a,{mt:2},s.a.createElement(k.a,{color:"secondary",disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Save")))}))},P=t(907),q=t(918),T=t(916),z=t.n(T),R=Object(o.a)((function(e){return{root:{marginTop:"15px",marginLeft:"10px"},actionIcon:{marginRight:e.spacing(1)}}}));var W=function(e){var a=e.className,t=Object(E.a)(e,["className"]),n=R();return s.a.createElement(P.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(y.a)(n.root,a)},t),s.a.createElement(P.a,{item:!0},s.a.createElement(q.a,{separator:s.a.createElement(z.a,{fontSize:"small"}),"aria-label":"breadcrumb"},s.a.createElement(f.a,{variant:"body1",color:"inherit",to:"/app",component:c.a},"Dashboard"),s.a.createElement(u.a,{variant:"body1",color:"textPrimary"},"Assessments"),s.a.createElement(u.a,{variant:"body1",color:"textPrimary"},"Add Assessment")),s.a.createElement(u.a,{variant:"h3",color:"textPrimary"},"Please create or add multi-choice questions!")))},L=t(17),M=t(915),I=Object(o.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark},container:{marginTop:"50px"}}}));a.default=function(){var e=I(),a=Object(M.a)(),t=Object(r.useState)([]),o=Object(n.a)(t,2),g=o[0],h=o[1],v=Object(L.c)((function(e){return e.account.user})),E=Object(r.useCallback)((function(){C.a.get(N.a+"owncourses/"+v.email).then((function(e){a.current&&h(e.data.courses)}))}),[a,v.email]);return Object(r.useEffect)((function(){E()}),[E]),g?s.a.createElement(b.a,{className:e.root,title:"Add assessment"},s.a.createElement(W,null),s.a.createElement(l.a,{className:e.container,maxWidth:"sm"},s.a.createElement(i.a,null,s.a.createElement(m.a,null,s.a.createElement(u.a,{gutterBottom:!0,variant:"h2",color:"textPrimary",align:"center"},"creating or adding page"),s.a.createElement(d.a,{mt:3},0===g.length&&s.a.createElement(u.a,{gutterBottom:!0,variant:"h2",color:"textPrimary",align:"center"},"There is no your own course"),0!==g.length&&s.a.createElement(A,{courses:g})),s.a.createElement(d.a,{my:2},s.a.createElement(p.a,null)),s.a.createElement(f.a,{component:c.a,to:"/app/assessments/assessments",variant:"body2",color:"textSecondary"},"Go assessment list"))))):null}},915:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},916:function(e,a,t){"use strict";var n=t(213);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),s=(0,n(t(281)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=s},918:function(e,a,t){"use strict";var n=t(1),r=t(47),s=t(3),c=t(0),o=(t(86),t(2),t(4)),l=t(6),i=t(79),m=t(12),u=t(162),d=Object(u.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(279);var f=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(s.a)(e,["classes"]);return c.createElement(p.a,Object(n.a)({component:"li",className:a.root,focusRipple:!0},t),c.createElement(d,{className:a.icon}))}));var b=c.forwardRef((function(e,a){var t=e.children,l=e.classes,m=e.className,u=e.component,d=void 0===u?"nav":u,p=e.expandText,b=void 0===p?"Show path":p,g=e.itemsAfterCollapse,h=void 0===g?1:g,v=e.itemsBeforeCollapse,E=void 0===v?1:v,y=e.maxItems,j=void 0===y?8:y,O=e.separator,x=void 0===O?"/":O,S=Object(s.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=c.useState(!1),C=k[0],N=k[1],w=c.Children.toArray(t).filter((function(e){return c.isValidElement(e)})).map((function(e,a){return c.createElement("li",{className:l.li,key:"child-".concat(a)},e)}));return c.createElement(i.a,Object(n.a)({ref:a,component:d,color:"textSecondary",className:Object(o.a)(l.root,m)},S),c.createElement("ol",{className:l.ol},function(e,a,t){return e.reduce((function(n,r,s){return s<e.length-1?n=n.concat(r,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(s),className:a},t)):n.push(r),n}),[])}(C||j&&w.length<=j?w:function(e){return E+h>=e.length?e:[].concat(Object(r.a)(e.slice(0,E)),[c.createElement(f,{"aria-label":b,key:"ellipsis",onClick:function(){N(!0)}})],Object(r.a)(e.slice(e.length-h,e.length)))}(w),l.separator,x)))}));a.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)}}]);
//# sourceMappingURL=34.dcf14935.chunk.js.map
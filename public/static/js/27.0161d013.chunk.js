(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[27],{1123:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),o=a.n(r),c=a(272),l=a(906),i=a(280),s=a(23),u=a(4),m=a(907),d=a(918),p=a(872),b=a(79),f=a(916),v=a.n(f),g=Object(c.a)((function(){return{root:{}}}));var h=function(e){var t=g();return o.a.createElement(m.a,{className:Object(u.a)(t.root,e),container:!0,justify:"space-between",spacing:3},o.a.createElement(m.a,{item:!0},o.a.createElement(d.a,{separator:o.a.createElement(v.a,{fontSize:"small"}),"aria-label":"breadcrumb"},o.a.createElement(p.a,{variant:"body1",color:"inherit",to:"/app",component:s.a},"Dashboard"),o.a.createElement(b.a,{variant:"body1",color:"textPrimary"},"Courses"),o.a.createElement(b.a,{variant:"body1",color:"textPrimary"},"Announcement")),o.a.createElement(b.a,{variant:"h3",color:"textPrimary"},"Please push a new announcement!")))},y=a(30),E=a.n(y),k=a(54),j=a(37),O=a(35),x=a(921),N=a(87),S=a(900),q=a(902),C=a(899),w=a(910),R=a(161),z=a(856),B=a(873),I=a(929),L=a(42),P=a(46),A=Object(c.a)((function(){return{root:{marginTop:"5%"},editor:{"& .ql-editor":{height:400}}}}));var M=function(e){var t=e.className,a=e.course,n=Object(j.a)(e,["className","course"]),r=A(),c=Object(O.g)(),l=Object(N.useSnackbar)().enqueueSnackbar;return o.a.createElement(x.a,{initialValues:{announcement:a.announcements},onSubmit:function(){var e=Object(k.a)(E.a.mark((function e(t,n){var r,o,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,o=n.setStatus,i=n.setSubmitting;try{L.a.post(P.a+"courses/announcement",{announcement:t.announcement,courseId:a._id}).then((function(e){o({success:!0}),i(!1),l(e.data.message,{variant:"success"}),c.push("/app/courses/current/"+a._id)}))}catch(s){r({submit:s.message}),o({success:!1}),i(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var c=e.errors,l=e.handleSubmit,i=e.isSubmitting,d=e.setFieldValue,p=e.values;return o.a.createElement("form",Object.assign({onSubmit:l,className:Object(u.a)(r.root,t)},n),o.a.createElement(m.a,{container:!0,spacing:3},o.a.createElement(m.a,{item:!0,xs:12,lg:12},o.a.createElement(S.a,null,o.a.createElement(q.a,null,o.a.createElement(C.a,{label:"Course Name",name:"name",disabled:!0,value:a.name,variant:"outlined"}),o.a.createElement(w.a,{mt:3,mb:1},o.a.createElement(b.a,{variant:"subtitle2",color:"textSecondary"},"Announcement")),o.a.createElement(R.a,{variant:"outlined"},o.a.createElement(I.a,{className:r.editor,value:p.announcement,onChange:function(e){return d("announcement",e)}})))))),c.submit&&o.a.createElement(w.a,{mt:3},o.a.createElement(z.a,{error:!0},c.submit)),o.a.createElement(w.a,{mt:2},o.a.createElement(B.a,{color:"secondary",variant:"contained",type:"submit",disabled:i},"Save new announcement"),o.a.createElement(B.a,{style:{marginLeft:"20px"},color:"secondary",variant:"contained",component:s.a,to:"/app/editCourses"},"Cancel")))}))},T=a(915),_=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));t.default=function(){var e=_(),t=Object(T.a)(),a=Object(r.useState)(null),c=Object(n.a)(a,2),s=c[0],u=c[1],m=Object(O.i)(),d=Object(r.useCallback)((function(){L.a.post(P.a+"/courses/take",{courseId:m.Id}).then((function(e){t.current&&u(e.data.course)}))}),[t,m.Id]);return Object(r.useEffect)((function(){d()}),[d]),s?o.a.createElement(i.a,{className:e.root,title:"Pushing announcement"},o.a.createElement(l.a,{maxWidth:"lg"},o.a.createElement(h,null),o.a.createElement(M,{course:s}))):null}},915:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},916:function(e,t,a){"use strict";var n=a(213);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(281)).default)(r.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=o},918:function(e,t,a){"use strict";var n=a(1),r=a(47),o=a(3),c=a(0),l=(a(86),a(2),a(4)),i=a(6),s=a(79),u=a(12),m=a(162),d=Object(m.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=a(279);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(o.a)(e,["classes"]);return c.createElement(p.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(d,{className:t.icon}))}));var f=c.forwardRef((function(e,t){var a=e.children,i=e.classes,u=e.className,m=e.component,d=void 0===m?"nav":m,p=e.expandText,f=void 0===p?"Show path":p,v=e.itemsAfterCollapse,g=void 0===v?1:v,h=e.itemsBeforeCollapse,y=void 0===h?1:h,E=e.maxItems,k=void 0===E?8:E,j=e.separator,O=void 0===j?"/":j,x=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),N=c.useState(!1),S=N[0],q=N[1],C=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.createElement(s.a,Object(n.a)({ref:t,component:d,color:"textSecondary",className:Object(l.a)(i.root,u)},x),c.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(n,r,o){return o<e.length-1?n=n.concat(r,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},a)):n.push(r),n}),[])}(S||k&&C.length<=k?C:function(e){return y+g>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[c.createElement(b,{"aria-label":f,key:"ellipsis",onClick:function(){q(!0)}})],Object(r.a)(e.slice(e.length-g,e.length)))}(C),i.separator,O)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},929:function(e,t,a){"use strict";var n=a(37),r=a(0),o=a.n(r),c=a(4),l=a(932),i=a.n(l),s=a(272),u=Object(s.a)((function(e){return{root:{"& .ql-toolbar":{borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),"& .ql-picker-label:hover":{color:e.palette.secondary.main},"& .ql-picker-label.ql-active":{color:e.palette.secondary.main},"& .ql-picker-item:hover":{color:e.palette.secondary.main},"& .ql-picker-item.ql-selected":{color:e.palette.secondary.main},"& button:hover":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button:focus":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:e.palette.secondary.main}},"& .ql-stroke":{stroke:e.palette.text.primary},"& .ql-picker":{color:e.palette.text.primary},"& .ql-picker-options":{padding:e.spacing(2),backgroundColor:e.palette.background.default,border:"none",boxShadow:e.shadows[10],borderRadius:e.shape.borderRadius}},"& .ql-container":{border:"none","& .ql-editor":{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"&.ql-blank::before":{color:e.palette.text.secondary}}}},stepButton:{"& + &":{marginLeft:e.spacing(2)}}}}));t.a=function(e){var t=e.className,a=Object(n.a)(e,["className"]),r=u();return o.a.createElement(i.a,Object.assign({className:Object(c.a)(r.root,t)},a))}}}]);
//# sourceMappingURL=27.0161d013.chunk.js.map
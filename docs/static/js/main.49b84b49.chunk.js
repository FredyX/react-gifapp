(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=n(2),u=n(9),s=n(0),o=function(t){var e=t.setCategoria,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[a].concat(Object(u.a)(t))}))},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=function(t){t.id;var e=t.title,n=t.url;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("p",{children:e})]})},l=n(6),b=n.n(l),p=n(8),f=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,c,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=cZ50MZfacsxYziV0CWlUCBnrrPJbtTkl"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.categoria,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:e}),a&&Object(s.jsx)("p",{children:"Cargando"}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(s.jsx)(d,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Gift Expert App"}),Object(s.jsx)(o,{setCategoria:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(O,{categoria:t},t)}))})]})};n(17);a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.49b84b49.chunk.js.map
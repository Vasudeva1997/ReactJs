(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{48:function(e,t,c){e.exports={item:"QuoteItem_item__fP8bX"}},49:function(e,t,c){e.exports={list:"QuoteList_list__3S7W8",sorting:"QuoteList_sorting__2XXzo"}},53:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(2),r=c(48),a=c.n(r),o=c(9),j=c(1),u=function(e){return Object(j.jsxs)("li",{className:a.a.item,children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("blockquote",{children:Object(j.jsx)("p",{children:e.text})}),Object(j.jsx)("figcaption",{children:e.author})]}),Object(j.jsx)(o.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(49),l=c.n(d),h=function(e){var t,c,n=Object(i.i)(),r=Object(i.h)(),a="asc"===new URLSearchParams(n.search).get("sort"),o=(t=e.quotes,c=a,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id>t.id?-1:1})));return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)("div",{className:l.a.sorting,children:Object(j.jsxs)("button",{onClick:function(){r.push({pathname:n.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort ",a?"Descending":"Ascending"]})}),Object(j.jsx)("ul",{className:l.a.list,children:o.map((function(e){return Object(j.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(35),x=c(36),O=c(15),m=[];t.default=function(e){var t=Object(b.a)(x.d),c=t.status,i=t.data,r=t.sendRequest,a=t.error,o=Object(j.jsx)(h,{quotes:m});return"completed"===c?(m=i,null===i||0===m.length?(o=Object(j.jsx)("div",{className:"centerd",children:Object(j.jsx)("h2",{children:"No Quotes...!! Add some quote"})}),a&&(o=Object(j.jsx)("div",{className:"centerd",children:Object(j.jsx)("h2",{children:a})}))):o=Object(j.jsx)(h,{quotes:m})):o=Object(j.jsx)(O.a,{}),Object(s.useEffect)((function(){r()}),[r]),Object(j.jsx)(n.a.Fragment,{children:o})}}}]);
//# sourceMappingURL=5.6931a650.chunk.js.map
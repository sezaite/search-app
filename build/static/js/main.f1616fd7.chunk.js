(this["webpackJsonpsearch-app"]=this["webpackJsonpsearch-app"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),s=n.n(c),i=(n(40),n(41),n(10)),l=n.n(i),o=n(14),u=n(12),j=n(32),b=n(34),d=n(15),h=n(35),p=n(1);var x=function(e){var t=e.date,n=e.title,r=e.description,a=e.img,c=e.url;return Object(p.jsx)("div",{className:"article-card",style:{backgroundImage:"url(".concat(a,")")},children:Object(p.jsx)("div",{className:"article-wrapper",children:Object(p.jsxs)(d.b,{to:{pathname:c},target:"_blank",style:{textDecoration:"none"},children:[Object(p.jsx)("h3",{children:n}),Object(p.jsx)("h6",{children:t}),Object(p.jsx)(h.a,{className:"ellipsis-text",text:r,maxLine:"4",ellipsis:"...",trimRight:!0,basedOn:"letters"})]})})})};var O=function(e){var t=e.data;return Object(p.jsx)("div",{className:"articles-container",children:Object(p.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(p.jsx)(x,{date:e.publishedAt,title:e.title,description:e.description,img:e.image,url:e.url},t)}))})})};function f(e){var t=new RegExp("^[a-zA-Z0-9_ ]*$");return console.log(t.test(e)),t.test(e)}var v=n(18),g=n.n(v);function m(){return(m=Object(o.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.join("+"),e.next=3,g.a.get("https://gnews.io/api/v4/search?q=".concat(n,"&lang=en&max=9&token=4d4bd3ce04b4a34afe4a9f844557a845"));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){return m.apply(this,arguments)};var w=function(){return Object(p.jsx)("div",{children:"Loading...."})};var N=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(u.a)(c,2),i=s[0],d=s[1],h=Object(r.useState)(""),x=Object(u.a)(h,2),v=x[0],g=x[1],m=Object(r.useState)(""),N=Object(u.a)(m,2),y=N[0],S=N[1],C=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),d(!0),""!==v){e.next=5;break}return S("Please enter your keywords!"),e.abrupt("return");case 5:if(f(v)){e.next=8;break}return S("Invalid characters"),e.abrupt("return");case 8:if(v.split("").length<41){e.next=11;break}return S("Input is too long"),e.abrupt("return");case 11:k(v.split(" ")).then((function(e){console.log(e.articles),S(""),g([]),a(e.articles),d(!1)})).catch((function(e){console.log(e),d(!1),S("There was a request error")}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"articles-page",children:[Object(p.jsxs)("div",{className:"search-bar",children:[Object(p.jsx)("h2",{children:"Search for articles"}),""!==y&&Object(p.jsx)("h4",{className:"error-msg",children:y}),Object(p.jsxs)("form",{action:"",children:[Object(p.jsxs)("div",{className:"input",children:[Object(p.jsx)("input",{type:"text",placeholder:"Type what you are looking for...",onChange:function(e){return g(e.target.value)},value:v}),Object(p.jsx)(j.a,{icon:b.a,className:"icon"})]}),Object(p.jsx)("button",{className:"btn",onClick:C,children:"Search"})]})]}),i&&""!==v?Object(p.jsx)(w,{}):Object(p.jsx)(O,{data:n})]})},y=n(3);var S=function(){return Object(p.jsx)(d.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(y.c,{children:Object(p.jsx)(y.a,{exact:!0,path:"/",children:Object(p.jsx)(N,{})})})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),C()}},[[67,1,2]]]);
//# sourceMappingURL=main.f1616fd7.chunk.js.map
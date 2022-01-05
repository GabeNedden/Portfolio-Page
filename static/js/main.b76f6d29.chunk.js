(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),i=n(1),s=n(0),r=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(a.a)(n,2),l=c[0],o=c[1];Object(i.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://gabenedden.github.io/",j="GZ.",b="Gabriel Zur Nedden",d="Full Stack Web Developer based in Montreal",u="../../GabrielZurNeddenResume.pdf",h={linkedin:"https://www.linkedin.com/in/gabriel-zur-nedden-6a108874/",github:"https://github.com/GabeNedden"},m=[{name:"G Task",description:"G Task is a streamlined Project Management application for teams of all sizes.",stack:["React","MongoDB","NodeJS","GraphQL"],sourceCode:"https://github.com/GabeNedden/task-tracker-client",livePreview:"https://gtasktracker.netlify.app/"},{name:"Getflix",description:"Getflix is a Netflix clone that benefits from heavy use Styled and Compound Components that are built to be reusable.",stack:["React","CSS","Javascript"],sourceCode:"https://github.com/GabeNedden/Getflix",livePreview:"https://getflix2021.netlify.app/"},{name:"Contribute",description:"Contribute is a learning tool for newer developers interested in learning how to contribute to Open Source projects.",stack:["HTML","CSS"],sourceCode:"https://github.com/GabeNedden/contribute",livePreview:"https://contribute.work/"},{name:"Cinelect",description:"Cinelect uses the OpenMovie Database API to compare two films on a varity of categories.",stack:["Axios","Bulma CSS","Javascript"],sourceCode:"https://github.com/GabeNedden/Cinelect",livePreview:"https://cinelect.vercel.app/"},{name:"G Video",description:"G Video provides videocall and online chat services, similar to Zoom, or Skype",stack:["Agora SDK","Javascript"],livePreview:"https://g-videochat.netlify.app/create"}],p=["JavaScript","React","MongoDB","NodeJS","Express","HTML","CSS","TypeScript","Bootstrap","Semantic UI","Material UI","Git","CI/CD","Jest"],O="gabenedden@gmail.com",f=n(14),x=n.n(f),k=n(12),v=n.n(k),N=n(16),g=n.n(N),_=n(15),C=n.n(_),S=(n(26),function(){var e=Object(i.useContext)(r),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(i.useState)(!1),o=Object(a.a)(l,2),j=o[0],b=o[1],d=function(){return b(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[m.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"center btn btn--icon","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(v.a,{}):Object(s.jsx)(x.a,{})}),Object(s.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(C.a,{}):Object(s.jsx)(g.a,{})})]})}),w=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("a",{href:e,className:"link",children:t})}),Object(s.jsx)(S,{})]})}),G=n(10),y=n.n(G),P=n(17),J=n.n(P),I=(n(33),function(){var e=b,t=d,n=u,c=h;return Object(s.jsxs)("div",{className:"about center",children:[Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsx)("span",{className:"about__name",children:e})]}),Object(s.jsx)("h2",{className:"about__role",children:t}),Object(s.jsxs)("div",{className:"about__contact center",children:[Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(y.a,{})}),Object(s.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(J.a,{})})]})]})}),M=n(7),E=n.n(M),T=n(18),B=n.n(T),D=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},E()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(y.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)(B.a,{})})]})}),L=(n(36),function(){return m.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:m.map((function(e){return Object(s.jsx)(D,{project:e},E()())}))})]}):null}),R=(n(37),function(){return p.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())}))})]}):null}),Z=n(19),z=n.n(Z),A=(n(38),function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(z.a,{fontSize:"large"})})}):null}),H=(n(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/gabenedden/",className:"link footer__link",target:"_blank",rel:"noopener noreferrer",children:"Created By Gabriel Zur Nedden"})})}),V=(n(41),function(){var e=Object(i.useContext)(r),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(w,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(I,{}),Object(s.jsx)(L,{}),Object(s.jsx)(R,{}),Object(s.jsx)(H,{})]}),Object(s.jsx)(A,{}),Object(s.jsx)(U,{})]})});n(42);Object(c.render)(Object(s.jsx)(l,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b76f6d29.chunk.js.map
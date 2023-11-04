"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,b=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Contribute",c={unversionedId:"contributing/index",id:"contributing/index",title:"Contribute",description:"How can you help?",source:"@site/docs/contributing/index.md",sourceDirName:"contributing",slug:"/contributing/",permalink:"/docs/contributing/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/contributing/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CMDOps for your projects",permalink:"/docs/showcase/cmdops"},next:{title:"Command-Line Help for cocmd",permalink:"/docs/cli-docs"}},l={},u=[{value:"How can you help?",id:"how-can-you-help",level:2},{value:"Setup",id:"setup",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribute"},"Contribute"),(0,o.kt)("h2",{id:"how-can-you-help"},"How can you help?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cocmd/hub/issues/new"},"Add an Idea \ud83d\udca1\ud83d\udca1\ud83d\udca1 for a new playbook")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cocmd/cocmd/contribute"},"Code with us - \ud83d\udd25features / \ud83d\udd25bugs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cocmd/cocmd/issues/new"},"Report a bug \ud83d\udc1e\ud83e\udde8\ud83d\udc1e"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install cocmd cli ",(0,o.kt)("a",{parentName:"li",href:"/docs/intro"},"Getting Started")),(0,o.kt)("li",{parentName:"ol"},"install and Run the Contributors onboarding packages:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install https://github.com/cocmd/cocmd\ncocmd run cocmd.contrib-onboarding\n\n")),(0,o.kt)("p",null,"it's going to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"install git"),(0,o.kt)("li",{parentName:"ul"},"install rust"),(0,o.kt)("li",{parentName:"ul"},"install node"),(0,o.kt)("li",{parentName:"ul"},"clone all Cocmd repos"),(0,o.kt)("li",{parentName:"ul"},"build the website"),(0,o.kt)("li",{parentName:"ul"},"build cocmd cli"),(0,o.kt)("li",{parentName:"ul"},"open vscode with all the repos")),(0,o.kt)("p",null,"Thank you for your help! \ud83d\ude4f\ud83d\ude4f\ud83d\ude4f\nJoin us on Discord - ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/PzaBZade"},"https://discord.gg/PzaBZade")))}d.isMDXComponent=!0}}]);
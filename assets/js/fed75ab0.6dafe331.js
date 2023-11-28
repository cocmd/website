"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8093],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(a),d=n,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},i="impala",p={unversionedId:"packages/from_hub/impala",id:"packages/from_hub/impala",title:"impala",description:"Source Code",source:"@site/docs/packages/from_hub/impala.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/impala",permalink:"/docs/packages/from_hub/impala",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/impala.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"go",permalink:"/docs/packages/from_hub/go"},next:{title:"jenkins",permalink:"/docs/packages/from_hub/jenkins"}},l={},c=[{value:" Source Code ",id:"-source-code-",level:3},{value:"impala.setup (Any)",id:"impalasetup-any",level:3},{value:"impala.query (Any)",id:"impalaquery-any",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"impala"},"impala"),(0,n.kt)("h3",{id:"-source-code-"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/impala"}," Source Code ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Please contribute your impala playbooks and shortcuts\n",(0,n.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,n.kt)("admonition",{title:"How To Install?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y impala\n"))),(0,n.kt)("p",null,"This package contains 2 playbooks:"),(0,n.kt)("h3",{id:"impalasetup-any"},"impala.setup (Any)"),(0,n.kt)("p",null,"Install required packages for Impala"),(0,n.kt)("p",null,"run it with: ",(0,n.kt)("inlineCode",{parentName:"p"},"cocmd run impala.setup")),(0,n.kt)("h3",{id:"impalaquery-any"},"impala.query (Any)"),(0,n.kt)("p",null,"Run a query on Impala"),(0,n.kt)("p",null,"run it with: ",(0,n.kt)("inlineCode",{parentName:"p"},"cocmd run impala.query")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8762],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),u=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(i.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return t?o.createElement(f,p(p({ref:n},l),{},{components:t})):o.createElement(f,p({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[s]="string"==typeof e?e:r,p[1]=c;for(var u=2;u<a;u++)p[u]=t[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={},p="node",c={unversionedId:"packages/from_hub/node",id:"packages/from_hub/node",title:"node",description:"Source Code",source:"@site/docs/packages/from_hub/node.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/node",permalink:"/docs/packages/from_hub/node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/node.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"k8s",permalink:"/docs/packages/from_hub/k8s"},next:{title:"osx",permalink:"/docs/packages/from_hub/osx"}},i={},u=[{value:" Source Code ",id:"-source-code-",level:3},{value:"node.clean-cache (Any)",id:"nodeclean-cache-any",level:3},{value:"node.setup.pnpm (Windows, MacOS, Linux)",id:"nodesetuppnpm-windows-macos-linux",level:3},{value:"node.remove.pnpm (MacOS)",id:"noderemovepnpm-macos",level:3},{value:"node.setup (MacOS)",id:"nodesetup-macos",level:3},{value:"node.setup.yarn (Any)",id:"nodesetupyarn-any",level:3}],l={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node"},"node"),(0,r.kt)("h3",{id:"-source-code-"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/node"}," Source Code ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please contribute your node playbooks and shortcuts\n",(0,r.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,r.kt)("admonition",{title:"How To Install?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y node\n"))),(0,r.kt)("p",null,"This package contains 5 playbooks:"),(0,r.kt)("h3",{id:"nodeclean-cache-any"},"node.clean-cache (Any)"),(0,r.kt)("p",null,"Clean node cache and build artifacts"),(0,r.kt)("p",null,"run it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run node.clean-cache")),(0,r.kt)("h3",{id:"nodesetuppnpm-windows-macos-linux"},"node.setup.pnpm (Windows, MacOS, Linux)"),(0,r.kt)("p",null,"setup pnpm - ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/installation"},"https://pnpm.io/installation")),(0,r.kt)("p",null,"run it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run node.setup.pnpm")),(0,r.kt)("h3",{id:"noderemovepnpm-macos"},"node.remove.pnpm (MacOS)"),(0,r.kt)("p",null,"remove pnpm"),(0,r.kt)("p",null,"run it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run node.remove.pnpm")),(0,r.kt)("h3",{id:"nodesetup-macos"},"node.setup (MacOS)"),(0,r.kt)("p",null,"setup node on macos"),(0,r.kt)("p",null,"run it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run node.setup")),(0,r.kt)("h3",{id:"nodesetupyarn-any"},"node.setup.yarn (Any)"),(0,r.kt)("p",null,"setup yarn"),(0,r.kt)("p",null,"run it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run node.setup.yarn")))}d.isMDXComponent=!0}}]);
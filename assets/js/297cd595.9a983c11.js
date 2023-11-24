"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=i(r),d=a,f=l["".concat(s,".").concat(d)]||l[d]||m[d]||o;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,u[1]=c;for(var i=2;i<o;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={},u="rust",c={unversionedId:"packages/from_hub/rust",id:"packages/from_hub/rust",title:"rust",description:"Source Code",source:"@site/docs/packages/from_hub/rust.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/rust",permalink:"/docs/packages/from_hub/rust",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/rust.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"python",permalink:"/docs/packages/from_hub/python"},next:{title:"vscode",permalink:"/docs/packages/from_hub/vscode"}},s={},i=[{value:" Source Code ",id:"-source-code-",level:3},{value:"rust.setup (MacOS)",id:"rustsetup-macos",level:3},{value:"rust.setup.wasm (MacOS)",id:"rustsetupwasm-macos",level:3},{value:"rust.new-lib (MacOS)",id:"rustnew-lib-macos",level:3},{value:"rust.new-exec (MacOS)",id:"rustnew-exec-macos",level:3},{value:"rust.cleanup (MacOS)",id:"rustcleanup-macos",level:3}],p={toc:i},l="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rust"},"rust"),(0,a.kt)("h3",{id:"-source-code-"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/rust"}," Source Code ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please contribute your rust playbooks and shortcuts\n",(0,a.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,a.kt)("admonition",{title:"How To Install?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y rust\n"))),(0,a.kt)("p",null,"This package contains 5 playbooks:"),(0,a.kt)("h3",{id:"rustsetup-macos"},"rust.setup (MacOS)"),(0,a.kt)("p",null,"Setup rust\nrun it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run rust.setup")),(0,a.kt)("h3",{id:"rustsetupwasm-macos"},"rust.setup.wasm (MacOS)"),(0,a.kt)("p",null,"Setup rust\nrun it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run rust.setup.wasm")),(0,a.kt)("h3",{id:"rustnew-lib-macos"},"rust.new-lib (MacOS)"),(0,a.kt)("p",null,"Create a new Rust project (library)\nrun it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run rust.new-lib")),(0,a.kt)("h3",{id:"rustnew-exec-macos"},"rust.new-exec (MacOS)"),(0,a.kt)("p",null,"Create a new Rust project (exec)\nrun it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run rust.new-exec")),(0,a.kt)("h3",{id:"rustcleanup-macos"},"rust.cleanup (MacOS)"),(0,a.kt)("p",null,"Cleanup Rust project\nrun it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run rust.cleanup")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6539],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),k=o,m=p["".concat(u,".").concat(k)]||p[k]||s[k]||c;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<c;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const c={},a="docker",i={unversionedId:"packages/from_hub/docker",id:"packages/from_hub/docker",title:"docker",description:"Source Code",source:"@site/docs/packages/from_hub/docker.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/docker",permalink:"/docs/packages/from_hub/docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dbt",permalink:"/docs/packages/from_hub/dbt"},next:{title:"git",permalink:"/docs/packages/from_hub/git"}},u={},d=[{value:" Source Code ",id:"-source-code-",level:3},{value:"docker.setup (MacOS)",id:"dockersetup-macos",level:3},{value:"docker.setup (Linux)",id:"dockersetup-linux",level:3},{value:"docker.cleanup (Any)",id:"dockercleanup-any",level:3},{value:"docker.monitor (Any)",id:"dockermonitor-any",level:3},{value:"docker.build-run (MacOS)",id:"dockerbuild-run-macos",level:3},{value:"docker.start (MacOS)",id:"dockerstart-macos",level:3},{value:"docker.start (Linux)",id:"dockerstart-linux",level:3}],l={toc:d},p="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"docker"),(0,o.kt)("h3",{id:"-source-code-"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/docker"}," Source Code ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please contribute your docker playbooks and shortcuts\n",(0,o.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,o.kt)("admonition",{title:"How To Install?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y docker\n"))),(0,o.kt)("p",null,"This package contains 5 playbooks:"),(0,o.kt)("h3",{id:"dockersetup-macos"},"docker.setup (MacOS)"),(0,o.kt)("p",null,"setup docker for desktop\nrun it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run docker.setup")),(0,o.kt)("h3",{id:"dockersetup-linux"},"docker.setup (Linux)"),(0,o.kt)("p",null,"setup docker for desktop\nrun it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run docker.setup")),(0,o.kt)("h3",{id:"dockercleanup-any"},"docker.cleanup (Any)"),(0,o.kt)("p",null,"Cleanup Docker environment\nrun it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run docker.cleanup")),(0,o.kt)("h3",{id:"dockermonitor-any"},"docker.monitor (Any)"),(0,o.kt)("p",null,"Monitor Docker resources\nrun it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run docker.monitor")),(0,o.kt)("h3",{id:"dockerbuild-run-macos"},"docker.build-run (MacOS)"),(0,o.kt)("p",null,"Build and run a Docker image\nrun it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run docker.build-run")),(0,o.kt)("h3",{id:"dockerstart-macos"},"docker.start (MacOS)"),(0,o.kt)("p",null,"Start docker\nrun it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run docker.start")),(0,o.kt)("h3",{id:"dockerstart-linux"},"docker.start (Linux)"),(0,o.kt)("p",null,"Start docker\nrun it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run docker.start")))}s.isMDXComponent=!0}}]);
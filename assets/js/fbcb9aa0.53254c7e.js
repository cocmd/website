"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),y=r,d=s["".concat(i,".").concat(y)]||s[y]||m[y]||a;return n?o.createElement(d,p(p({ref:t},l),{},{components:n})):o.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,p[1]=c;for(var u=2;u<a;u++)p[u]=n[u];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={},p="python",c={unversionedId:"packages/from_hub/python",id:"packages/from_hub/python",title:"python",description:"Source Code",source:"@site/docs/packages/from_hub/python.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/python",permalink:"/docs/packages/from_hub/python",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"prometheus",permalink:"/docs/packages/from_hub/prometheus"},next:{title:"rust",permalink:"/docs/packages/from_hub/rust"}},i={},u=[{value:" Source Code ",id:"-source-code-",level:3},{value:"python.clean (MacOS)",id:"pythonclean-macos",level:3},{value:"python.setup (MacOS)",id:"pythonsetup-macos",level:3},{value:"python.setup.miniconda (MacOS)",id:"pythonsetupminiconda-macos",level:3},{value:"python.setup-poetry (MacOS)",id:"pythonsetup-poetry-macos",level:3},{value:"python.conda-env-create (Any)",id:"pythonconda-env-create-any",level:3}],l={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python"},"python"),(0,r.kt)("h3",{id:"-source-code-"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/python"}," Source Code ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please contribute your python playbooks and shortcuts\n",(0,r.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,r.kt)("admonition",{title:"How To Install?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y python\n"))),(0,r.kt)("p",null,"This package contains 5 playbooks:"),(0,r.kt)("h3",{id:"pythonclean-macos"},"python.clean (MacOS)"),(0,r.kt)("p",null,"Clean python cache and build artifacts\nrun it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run python.clean")),(0,r.kt)("h3",{id:"pythonsetup-macos"},"python.setup (MacOS)"),(0,r.kt)("p",null,"Setup python\nrun it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run python.setup")),(0,r.kt)("h3",{id:"pythonsetupminiconda-macos"},"python.setup.miniconda (MacOS)"),(0,r.kt)("p",null,"Setup miniconda\nrun it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run python.setup.miniconda")),(0,r.kt)("h3",{id:"pythonsetup-poetry-macos"},"python.setup-poetry (MacOS)"),(0,r.kt)("p",null,"Setup Poetry for Python development\nrun it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run python.setup-poetry")),(0,r.kt)("h3",{id:"pythonconda-env-create-any"},"python.conda-env-create (Any)"),(0,r.kt)("p",null,"Create a conda environment\nrun it with: ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd run python.conda-env-create")))}m.isMDXComponent=!0}}]);
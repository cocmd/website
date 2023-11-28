"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=s(r),b=o,m=l["".concat(p,".").concat(b)]||l[b]||d[b]||a;return r?n.createElement(m,c(c({ref:t},i),{},{components:r})):n.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[l]="string"==typeof e?e:o,c[1]=u;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},c="dbt",u={unversionedId:"packages/from_hub/dbt",id:"packages/from_hub/dbt",title:"dbt",description:"Source Code",source:"@site/docs/packages/from_hub/dbt.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/dbt",permalink:"/docs/packages/from_hub/dbt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/dbt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aws-s3",permalink:"/docs/packages/from_hub/aws-s3"},next:{title:"docker",permalink:"/docs/packages/from_hub/docker"}},p={},s=[{value:" Source Code ",id:"-source-code-",level:3},{value:"dbt.setup.from-source (Any)",id:"dbtsetupfrom-source-any",level:3},{value:"dbt.setup (Any)",id:"dbtsetup-any",level:3}],i={toc:s},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dbt"},"dbt"),(0,o.kt)("h3",{id:"-source-code-"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/dbt"}," Source Code ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please contribute your dbt playbooks and shortcuts\n",(0,o.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,o.kt)("admonition",{title:"How To Install?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y dbt\n"))),(0,o.kt)("p",null,"This package contains 2 playbooks:"),(0,o.kt)("h3",{id:"dbtsetupfrom-source-any"},"dbt.setup.from-source (Any)"),(0,o.kt)("p",null,"Setup python"),(0,o.kt)("p",null,"run it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run dbt.setup.from-source")),(0,o.kt)("h3",{id:"dbtsetup-any"},"dbt.setup (Any)"),(0,o.kt)("p",null,"Setup python"),(0,o.kt)("p",null,"run it with: ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd run dbt.setup")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1498],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(r),m=a,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(b,i(i({ref:e},u),{},{components:r})):n.createElement(b,i({ref:e},u))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2760:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="dbt",l={unversionedId:"packages/from_hub/dbt",id:"packages/from_hub/dbt",title:"dbt",description:"Visit the package  Source Code",source:"@site/docs/packages/from_hub/dbt.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/dbt",permalink:"/docs/packages/from_hub/dbt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/dbt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aws-s3",permalink:"/docs/packages/from_hub/aws-s3"},next:{title:"docker",permalink:"/docs/packages/from_hub/docker"}},c={},p=[{value:"Visit the package  Source Code ",id:"visit-the-package--source-code-",level:3},{value:"automations (2)",id:"automations-2",level:2}],u={toc:p},s="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dbt"},"dbt"),(0,a.kt)("h3",{id:"visit-the-package--source-code-"},"Visit the package ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/dbt"}," Source Code ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please contribute your dbt playbooks and shortcuts\n",(0,a.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,a.kt)("admonition",{title:"How To Install?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y dbt\n"))),(0,a.kt)("h2",{id:"automations-2"},"automations (2)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"command"),(0,a.kt)("th",{parentName:"tr",align:null},"env"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"how to run?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dbt.setup"),(0,a.kt)("td",{parentName:"tr",align:null},"Any"),(0,a.kt)("td",{parentName:"tr",align:null},"Setup python: python. dbt install."),(0,a.kt)("td",{parentName:"tr",align:null},"run ",(0,a.kt)("inlineCode",{parentName:"td"},"dbt.setup")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"cocmd run dbt.setup"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dbt.setup.from-source"),(0,a.kt)("td",{parentName:"tr",align:null},"Any"),(0,a.kt)("td",{parentName:"tr",align:null},"Setup python: python. dbt install. install dbt-reshift plugin."),(0,a.kt)("td",{parentName:"tr",align:null},"run ",(0,a.kt)("inlineCode",{parentName:"td"},"dbt.setup.from-source")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"cocmd run dbt.setup.from-source"))))))}d.isMDXComponent=!0}}]);
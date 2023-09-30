"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4,title:"Package Specification"},i=void 0,c={unversionedId:"packages/package-specification",id:"packages/package-specification",title:"Package Specification",description:"TLDR",source:"@site/docs/packages/package-specification.md",sourceDirName:"packages",slug:"/packages/package-specification",permalink:"/docs/packages/package-specification",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/package-specification.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Package Specification"},sidebar:"tutorialSidebar",previous:{title:"From Filesystem",permalink:"/docs/packages/from_fs"},next:{title:"Showcase",permalink:"/docs/showcase/"}},l={},s=[{value:"TLDR",id:"tldr",level:2},{value:"Package strucutre",id:"package-strucutre",level:2},{value:"cocmd.yaml",id:"cocmdyaml",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tldr"},"TLDR"),(0,r.kt)("p",null,"You can create your own CMDOps and share them with your team or community.\nUse Git to manage your CMDOps and CoCMD to distribute them."),(0,r.kt)("p",null,"Use our template to get started: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cocmd/example-repo-template"},"Template"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:cocmd/example-repo-template.git\n")),(0,r.kt)("p",null,"change ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd.yaml")," to your needs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aliases - add your aliases as one big string"),(0,r.kt)("li",{parentName:"ul"},"paths - add paths in the repo to be added to the PATH environment variable"),(0,r.kt)("li",{parentName:"ul"},"automations - add workflows to be executed by CoCMD")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: example-repo\naliases: |\n    alias coolalias=\'echo "hi from coolalias"\'\n    alias coolalias2=\'echo "hi from coolalias"\'\npaths:\n    - ./bin/\nautomations: \n    - name: automation-inline-example\n      content: \n        description: Automation example inline in cocmd.yaml\n        steps:\n        - content: |\n            echo "hi from inline automation step 1"\n          description: this is step 1\n          runner: shell\n          title: step 1\n        - content: |\n            echo "hi from inline automation step 2"\n          description: this is step 2\n          runner: shell\n          title: step 2\n    - name: automation-file-example\n      file: ./automation-file-example.yaml\n')),(0,r.kt)("h2",{id:"package-strucutre"},"Package strucutre"),(0,r.kt)("h3",{id:"cocmdyaml"},"cocmd.yaml"))}m.isMDXComponent=!0}}]);
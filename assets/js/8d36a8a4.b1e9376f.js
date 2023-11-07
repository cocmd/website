"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="vscode",s={unversionedId:"packages/from_hub/vscode",id:"packages/from_hub/vscode",title:"vscode",description:"Visit the package  Source Code",source:"@site/docs/packages/from_hub/vscode.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/vscode",permalink:"/docs/packages/from_hub/vscode",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/vscode.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rust",permalink:"/docs/packages/from_hub/rust"},next:{title:"zsh",permalink:"/docs/packages/from_hub/zsh"}},i={},c=[{value:"Visit the package  Source Code ",id:"visit-the-package--source-code-",level:3},{value:"automations (3)",id:"automations-3",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vscode"},"vscode"),(0,a.kt)("h3",{id:"visit-the-package--source-code-"},"Visit the package ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/vscode"}," Source Code ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please contribute your vscode playbooks and shortcuts\n",(0,a.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,a.kt)("admonition",{title:"How To Install?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y vscode\n"))),(0,a.kt)("h2",{id:"automations-3"},"automations (3)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"command"),(0,a.kt)("th",{parentName:"tr",align:null},"env"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"how to run?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vscode.setup-vscode-cli"),(0,a.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,a.kt)("td",{parentName:"tr",align:null},"install vscode cli 'code' in your shell"),(0,a.kt)("td",{parentName:"tr",align:null},"run ",(0,a.kt)("inlineCode",{parentName:"td"},"vscode.setup-vscode-cli")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"cocmd run vscode.setup-vscode-cli"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vscode.setup"),(0,a.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,a.kt)("td",{parentName:"tr",align:null},"Install VSCode and coding plugins: install Visual Studio Code. install cli path. install extentions."),(0,a.kt)("td",{parentName:"tr",align:null},"run ",(0,a.kt)("inlineCode",{parentName:"td"},"vscode.setup")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"cocmd run vscode.setup"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vscode.setup-extentions"),(0,a.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,a.kt)("td",{parentName:"tr",align:null},"Install VSCode and extentions: Install icons pack. Install extentions for Python. Install extentions for Rust. Install extentions for Node.js. Install extentions for Kubernetes. Install extentions for Docker. Install extentions for Terraform. Install extentions for Go. Install extentions for Java. Install extentions for C#. Install extentions for PHP. Install extentions for Frontend dev."),(0,a.kt)("td",{parentName:"tr",align:null},"run ",(0,a.kt)("inlineCode",{parentName:"td"},"vscode.setup-extentions")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"cocmd run vscode.setup-extentions"))))))}d.isMDXComponent=!0}}]);
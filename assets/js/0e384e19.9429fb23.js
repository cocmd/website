"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:0,slug:"/intro"},l="Getting Started",i={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Cocmd is an open source tool for Developers to add Command line operations specification to their projects and",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/intro"},sidebar:"tutorialSidebar",next:{title:"From Hub",permalink:"/docs/packages/from_hub/"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Step 1 - Install CoCMD",id:"step-1---install-cocmd",level:3},{value:"Step 2 - Add CoCMD to your shell",id:"step-2---add-cocmd-to-your-shell",level:3},{value:"Add Packages",id:"add-packages",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Cocmd is an open source tool for Developers to add Command line operations specification to their projects and\ndistribute them to their community."),(0,a.kt)("p",null,"For example, lets say you have a lot of ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," commands you type in during the day. Use CoCMD to easily add ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," related scripts, shortcuts and automations to your terminal. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"step-1---install-cocmd"},"Step 1 - Install CoCMD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MacOs -\nBest way to install is with brew:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap cocmd/cocmd\nbrew install cocmd\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux - not supported yet"),(0,a.kt)("li",{parentName:"ul"},"Windows - not supported yet")),(0,a.kt)("h3",{id:"step-2---add-cocmd-to-your-shell"},"Step 2 - Add CoCMD to your shell"),(0,a.kt)("p",null,"Run in terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cocmd setup zsh\nor \ncocmd setup bash\n")),(0,a.kt)("p",null,"what this does is adding a loader of all aliases and automations shortcuts to your shell and lets you call any of them directly."),(0,a.kt)("h2",{id:"add-packages"},"Add Packages"),(0,a.kt)("p",null,"You can start right away with ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd install"),".\nSee all packages options in ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/from_hub"},"Hub"),"."),(0,a.kt)("p",null,"If you want to create your own read ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/package-specification"},"Here")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"Basic"},i=void 0,c={unversionedId:"using/basic",id:"using/basic",title:"Basic",description:"After cocmd is ready on your machine, you can start installing and running",source:"@site/docs/using/basic.md",sourceDirName:"using",slug:"/using/basic",permalink:"/docs/using/basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using/basic.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Basic"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/intro"},next:{title:"From Hub",permalink:"/docs/packages/from_hub/"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After cocmd is ready on your machine, you can start installing and running\npackages.\nPackages can be installed from any Git repository you have access to (public or private) or from Cocmd hub."),(0,a.kt)("p",null,"Cocmd maintains a set of public packages that you can install and use right away."),(0,a.kt)("p",null,"For example, if you are a Python developer, you can install and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," package, the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," playbook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cocmd run python.setup --from python\n")),(0,a.kt)("p",null,"which is like running two commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cocmd install python\ncocmd run python.setup\n")),(0,a.kt)("p",null,"now you should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," package installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cocmd show package python\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(2395).Z,title:"show python",width:"1146",height:"1032"})),(0,a.kt)("p",null,"This means that we can run ",(0,a.kt)("inlineCode",{parentName:"p"},"python.setup")," (after opening new terminal) or with ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run python.setup")," to install Python on our machine:"))}d.isMDXComponent=!0},2395:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/showpy-22046c09aab064cf5d5d8ec127ab091a.png"}}]);
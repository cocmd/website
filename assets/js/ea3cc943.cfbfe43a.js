"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4700],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(a),m=r,d=p["".concat(c,".").concat(m)]||p[m]||g[m]||i;return a?n.createElement(d,o(o({ref:e},u),{},{components:a})):n.createElement(d,o({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3874:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},o="git",l={unversionedId:"packages/from_hub/git",id:"packages/from_hub/git",title:"git",description:"Visit the package  Source Code",source:"@site/docs/packages/from_hub/git.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/git",permalink:"/docs/packages/from_hub/git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/docs/packages/from_hub/docker"},next:{title:"go",permalink:"/docs/packages/from_hub/go"}},c={},s=[{value:"Visit the package  Source Code ",id:"visit-the-package--source-code-",level:3},{value:"automations (2)",id:"automations-2",level:2},{value:"aliases (14):",id:"aliases-14",level:2}],u={toc:s},p="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"git"),(0,r.kt)("h3",{id:"visit-the-package--source-code-"},"Visit the package ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/git"}," Source Code ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please contribute your git playbooks and shortcuts\n",(0,r.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,r.kt)("admonition",{title:"How To Install?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y git\n"))),(0,r.kt)("h2",{id:"automations-2"},"automations (2)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"command"),(0,r.kt)("th",{parentName:"tr",align:null},"env"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"how to run?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git.setup"),(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},"Install and configure git on this machine: install git. Configue git."),(0,r.kt)("td",{parentName:"tr",align:null},"run ",(0,r.kt)("inlineCode",{parentName:"td"},"git.setup")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"cocmd run git.setup"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"git.commit-push-all"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"add all, commit and push: add all. commit. push."),(0,r.kt)("td",{parentName:"tr",align:null},"run ",(0,r.kt)("inlineCode",{parentName:"td"},"git.commit-push-all")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"cocmd run git.commit-push-all"))))),(0,r.kt)("h2",{id:"aliases-14"},"aliases (14):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias g='git'\nalias gadd='git add -A .'\nalias gcommit='git commit -m'\nalias gcommitreset='git reset HEAD~'\nalias gc='git checkout'\nalias glog='git log --show-signature'\nalias gmerge='git merge --no-ff'\nalias gpull='git pull'\nalias gpush='git push'\nalias gpushs='git push --set-upstream origin'\nalias gs='git status'\nalias gtag='git tag'\nalias gtags='git tag -n'\n\n")))}g.isMDXComponent=!0}}]);
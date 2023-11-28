"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="k8s",c={unversionedId:"packages/from_hub/k8s",id:"packages/from_hub/k8s",title:"k8s",description:"Source Code",source:"@site/docs/packages/from_hub/k8s.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/k8s",permalink:"/docs/packages/from_hub/k8s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/k8s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jenkins",permalink:"/docs/packages/from_hub/jenkins"},next:{title:"node",permalink:"/docs/packages/from_hub/node"}},i={},l=[{value:" Source Code ",id:"-source-code-",level:3},{value:"k8s.batch-pod-deletion (Any)",id:"k8sbatch-pod-deletion-any",level:3},{value:"k8s.rolling-restart (Any)",id:"k8srolling-restart-any",level:3},{value:"k8s.check-pod-restarts (Any)",id:"k8scheck-pod-restarts-any",level:3},{value:"k8s.backup-configmaps (Any)",id:"k8sbackup-configmaps-any",level:3},{value:"k8s.setup (Linux, MacOS)",id:"k8ssetup-linux-macos",level:3}],p={toc:l},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k8s"},"k8s"),(0,a.kt)("h3",{id:"-source-code-"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/k8s"}," Source Code ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please contribute your k8s playbooks and shortcuts\n",(0,a.kt)("a",{parentName:"p",href:"https://cocmd.org/docs/contributing"},"How to contribute?"))),(0,a.kt)("admonition",{title:"How To Install?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y k8s\n"))),(0,a.kt)("p",null,"This package contains 5 playbooks:"),(0,a.kt)("h3",{id:"k8sbatch-pod-deletion-any"},"k8s.batch-pod-deletion (Any)"),(0,a.kt)("p",null,"Batch delete Pods based on a label"),(0,a.kt)("p",null,"run it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run k8s.batch-pod-deletion")),(0,a.kt)("h3",{id:"k8srolling-restart-any"},"k8s.rolling-restart (Any)"),(0,a.kt)("p",null,"Perform a rolling restart of a Deployment"),(0,a.kt)("p",null,"run it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run k8s.rolling-restart")),(0,a.kt)("h3",{id:"k8scheck-pod-restarts-any"},"k8s.check-pod-restarts (Any)"),(0,a.kt)("p",null,"Check for Pods with restart counts greater than 0"),(0,a.kt)("p",null,"run it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run k8s.check-pod-restarts")),(0,a.kt)("h3",{id:"k8sbackup-configmaps-any"},"k8s.backup-configmaps (Any)"),(0,a.kt)("p",null,"Backup all ConfigMaps in a namespace"),(0,a.kt)("p",null,"run it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run k8s.backup-configmaps")),(0,a.kt)("h3",{id:"k8ssetup-linux-macos"},"k8s.setup (Linux, MacOS)"),(0,a.kt)("p",null,"Setup Kubernetes for desktop on Linux"),(0,a.kt)("p",null,"run it with: ",(0,a.kt)("inlineCode",{parentName:"p"},"cocmd run k8s.setup")))}k.isMDXComponent=!0}}]);
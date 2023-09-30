"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4333],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(s,".").concat(m)]||u[m]||k[m]||l;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={},o="k8s",i={unversionedId:"packages/from_hub/k8s",id:"packages/from_hub/k8s",title:"k8s",description:"Package Source Code",source:"@site/docs/packages/from_hub/k8s.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/k8s",permalink:"/docs/packages/from_hub/k8s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/k8s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git",permalink:"/docs/packages/from_hub/git"},next:{title:"osx",permalink:"/docs/packages/from_hub/osx"}},s={},c=[{value:" Package Source Code ",id:"-package-source-code-",level:3},{value:"aliases",id:"aliases",level:2},{value:"automations",id:"automations",level:2}],p={toc:c},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"k8s"},"k8s"),(0,r.kt)("h3",{id:"-package-source-code-"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/k8s"}," Package Source Code ")),(0,r.kt)("admonition",{title:"How To Install?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y k8s\n"))),(0,r.kt)("h2",{id:"aliases"},"aliases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias k='kubectl'\nalias kgp='kubectl get pods'\nalias kgs='kubectl get svc'\nalias kgn='kubectl get nodes'\nalias kgc='kubectl get componentstatuses'\nalias kd='kubectl describe'\nalias krm='kubectl delete'\nalias kex='kubectl exec -it'\nalias klo='kubectl logs'\nalias kaf='kubectl apply -f'\nalias kdf='kubectl delete -f'\nalias kctx='kubectx'\nalias kns='kubens'\n\n")),(0,r.kt)("h2",{id:"automations"},"automations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"env"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"steps"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setup"),(0,r.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,r.kt)("td",{parentName:"tr",align:null},"setup Kubernetes for desktop"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backup-configmaps"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Backup all ConfigMaps in a namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rolling-restart"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Perform a rolling restart of a Deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch-pod-deletion"),(0,r.kt)("td",{parentName:"tr",align:null},"Any"),(0,r.kt)("td",{parentName:"tr",align:null},"Batch delete Pods based on a label"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))))}k.isMDXComponent=!0}}]);
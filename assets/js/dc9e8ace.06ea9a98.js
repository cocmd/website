"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4333],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),k=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=k(e.components);return n.createElement(c.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=k(a),b=l,p=o["".concat(c,".").concat(b)]||o[b]||d[b]||s;return a?n.createElement(p,r(r({ref:t},u),{},{components:a})):n.createElement(p,r({ref:t},u))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[o]="string"==typeof e?e:l,r[1]=i;for(var k=2;k<s;k++)r[k]=a[k];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},9171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>k});var n=a(7462),l=(a(7294),a(3905));const s={},r="k8s",i={unversionedId:"packages/from_hub/k8s",id:"packages/from_hub/k8s",title:"k8s",description:"Package Source Code",source:"@site/docs/packages/from_hub/k8s.md",sourceDirName:"packages/from_hub",slug:"/packages/from_hub/k8s",permalink:"/docs/packages/from_hub/k8s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/from_hub/k8s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jenkins",permalink:"/docs/packages/from_hub/jenkins"},next:{title:"node",permalink:"/docs/packages/from_hub/node"}},c={},k=[{value:" Package Source Code ",id:"-package-source-code-",level:3},{value:"automations (5)",id:"automations-5",level:2},{value:"aliases (125):",id:"aliases-125",level:2}],u={toc:k},o="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(o,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"k8s"},"k8s"),(0,l.kt)("h3",{id:"-package-source-code-"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/cocmd/hub/tree/master/packages/k8s"}," Package Source Code ")),(0,l.kt)("admonition",{title:"How To Install?",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"run in terminal:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cocmd install -y k8s\n"))),(0,l.kt)("h2",{id:"automations-5"},"automations (5)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"how to run?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setup"),(0,l.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,l.kt)("td",{parentName:"tr",align:null},"setup Kubernetes for desktop: Instructions. Install Kubectl. Install Kubectx. Install Minikube. Intall K9s - Kubernetes CLI To Manage Your Clusters In Style. Install Helm. Install kube-capacity. Install Kor - Kubernetes Orphaned Resources Finder. Install kubefwd. Install VSCode plugins."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cocmd run k8s.setup"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setup"),(0,l.kt)("td",{parentName:"tr",align:null},"Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"Setup Kubernetes for desktop on Linux: Instructions. Install Kubectl. Install Kubectx. Install Minikube. Install Helm. Install VSCode plugins."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cocmd run k8s.setup"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backup-configmaps"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"Backup all ConfigMaps in a namespace: Backup ConfigMaps."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cocmd run k8s.backup-configmaps"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rolling-restart"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"Perform a rolling restart of a Deployment: Rolling Restart."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cocmd run k8s.rolling-restart"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch-pod-deletion"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"Batch delete Pods based on a label: Batch Pod Deletion."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cocmd run k8s.batch-pod-deletion"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"check-pod-restarts"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"Check for Pods with restart counts greater than 0: Check Pod Restarts."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cocmd run k8s.check-pod-restarts"))))),(0,l.kt)("h2",{id:"aliases-125"},"aliases (125):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alias k='kubectl'\nalias kl='kubectl logs'\nalias kexec='kubectl exec -it'\nalias kpf='kubectl port-forward'\nalias kaci='kubectl auth can-i'\nalias kat='kubectl attach'\nalias kapir='kubectl api-resources'\nalias kapiv='kubectl api-versions'\n\n# get\nalias kg='kubectl get'\nalias kgns='kubectl get ns'\nalias kgp='kubectl get pods'\nalias kgs='kubectl get secrets'\nalias kgd='kubectl get deploy'\nalias kgrs='kubectl get rs'\nalias kgss='kubectl get sts'\nalias kgds='kubectl get ds'\nalias kgcm='kubectl get configmap'\nalias kgcj='kubectl get cronjob'\nalias kgj='kubectl get job'\nalias kgsvc='kubectl get svc -o wide'\nalias kgn='kubectl get no -o wide'\nalias kgr='kubectl get roles'\nalias kgrb='kubectl get rolebindings'\nalias kgcr='kubectl get clusterroles'\nalias kgrb='kubectl get clusterrolebindings'\nalias kgsa='kubectl get sa'\nalias kgnet='kubectl get netpol'\n\n# edit\nalias ke='kubectl edit'\nalias kens='kubectl edit ns'\nalias kes='kubectl edit secrets'\nalias ked='kubectl edit deploy'\nalias kers='kubectl edit rs'\nalias kess='kubectl edit sts'\nalias keds='kubectl edit ds'\nalias kesvc='kubectl edit svc'\nalias kecm='kubectl edit cm'\nalias kecj='kubectl edit cj'\nalias ker='kubectl edit roles'\nalias kerb='kubectl edit rolebindings'\nalias kecr='kubectl edit clusterroles'\nalias kerb='kubectl edit clusterrolebindings'\nalias kesa='kubectl edit sa'\nalias kenet='kubectl edit netpol'\n\n# describe\nalias kd='kubectl describe'\nalias kdns='kubectl describe ns'\nalias kdp='kubectl describe pod'\nalias kds='kubectl describe secrets'\nalias kdd='kubectl describe deploy'\nalias kdrs='kubectl describe rs'\nalias kdss='kubectl describe sts'\nalias kdds='kubectl describe ds'\nalias kdsvc='kubectl describe svc'\nalias kdcm='kubectl describe cm'\nalias kdcj='kubectl describe cj'\nalias kdj='kubectl describe job'\nalias kdsa='kubectl describe sa'\nalias kdr='kubectl describe roles'\nalias kdrb='kubectl describe rolebindings'\nalias kdcr='kubectl describe clusterroles'\nalias kdcrb='kubectl describe clusterrolebindings'\nalias kdnet='kubectl describe netpol'\n\n# delete\nalias kdel='kubectl delete'\nalias kdelns='kubectl delete ns'\nalias kdels='kubectl delete secrets'\nalias kdelp='kubectl delete po'\nalias kdeld='kubectl delete deployment'\nalias kdelrs='kubectl delete rs'\nalias kdelss='kubectl delete sts'\nalias kdelds='kubectl delete ds'\nalias kdelsvc='kubectl delete svc'\nalias kdelcm='kubectl delete cm'\nalias kdelcj='kubectl delete cj'\nalias kdelj='kubectl delete job'\nalias kdelr='kubectl delete roles'\nalias kdelrb='kubectl delete rolebindings'\nalias kdelcr='kubectl delete clusterroles'\nalias kdelrb='kubectl delete clusterrolebindings'\nalias kdelsa='kubectl delete sa'\nalias kdelnet='kubectl delete netpol'\n\n# mock\nalias kmock='kubectl create mock -o yaml --dry-run=client'\nalias kmockns='kubectl create ns mock -o yaml --dry-run=client'\nalias kmockcm='kubectl create cm mock -o yaml --dry-run=client'\nalias kmocksa='kubectl create sa mock -o yaml --dry-run=client'\n\n# config\nalias kcfg='kubectl config'\nalias kcfgv='kubectl config view'\nalias kcfgns='kubectl config set-context --current --namespace'\nalias kcfgcurrent='kubectl config current-context'\nalias kcfggc='kubectl config get-contexts'\nalias kcfgsc='kubectl config set-context'\nalias kcfguc='kubectl config use-context'\nalias kcfgv='kubectl config view'\n\n# Kubescape related\nalias kssbom='kubectl -n kubescape get sbomspdxv2p3s'\nalias kssbomf='kubectl -n kubescape get sbomspdxv2p3filtereds'\nalias kssboms='kubectl -n kubescape get sbomsummaries'\nalias ksvulns='kubectl -n kubescape get vulnerabilitymanifestsummaries'\nalias ksvuln='kubectl -n kubescape get vulnerabilitymanifests'\n\n# Kubescape related with labels\nalias kssboml='kubectl -n kubescape get sbomspdxv2p3s --show-labels'\nalias kssbomfl='kubectl -n kubescape get sbomspdxv2p3filtereds --show-labels'\nalias kssbomsl='kubectl -n kubescape get sbomsummaries --show-labels'\nalias ksvulnsl='kubectl -n kubescape get vulnerabilitymanifestsummaries --show-labels'\nalias ksvulnl='kubectl -n kubescape get vulnerabilitymanifests --show-labels'\n\nalias m='minikube'\nalias ma='minikube addons'\nalias ms='minikube service'\nalias minid='minikube delete'\nalias minis='minikube start'\nalias miniv='minikube version'\n\n")))}d.isMDXComponent=!0}}]);
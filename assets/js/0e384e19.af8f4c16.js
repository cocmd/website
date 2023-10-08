"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:0,slug:"/intro"},l="Getting Started",i={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Cocmd is an open source tool for Developers to add Command line operations specification to their projects and",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/intro"},sidebar:"tutorialSidebar",next:{title:"From Hub",permalink:"/docs/packages/from_hub/"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Step 1 - Install CoCMD",id:"step-1---install-cocmd",level:3},{value:"Mac - Homebrew",id:"mac---homebrew",level:4},{value:"Snap",id:"snap",level:4},{value:"Linux",id:"linux",level:4},{value:"Cargo",id:"cargo",level:4},{value:"Windows - not supported yet",id:"windows---not-supported-yet",level:4},{value:"Step 2 - Add CoCMD to your shell",id:"step-2---add-cocmd-to-your-shell",level:3},{value:"Add Packages",id:"add-packages",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Cocmd is an open source tool for Developers to add Command line operations specification to their projects and\ndistribute them to their community."),(0,r.kt)("p",null,"For example, lets say you have a lot of ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," commands you type in during the day. Use CoCMD to easily add ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," related scripts, shortcuts and automations to your terminal. "),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The binary executable is ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd"),"."),(0,r.kt)("h3",{id:"step-1---install-cocmd"},"Step 1 - Install CoCMD"),(0,r.kt)("h4",{id:"mac---homebrew"},"Mac - Homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap cocmd/cocmd\nbrew install cocmd\n")),(0,r.kt)("p",null,"To update, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew upgrade cocmd\n")),(0,r.kt)("h4",{id:"snap"},"Snap"),(0,r.kt)("p",null,"For a system with Snap installed, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"snap install cocmd\n")),(0,r.kt)("h4",{id:"linux"},"Linux"),(0,r.kt)("p",null,"Run this in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'bash -c "$(curl -fsSL https://cocmd.org/linux/install.sh)"\n')),(0,r.kt)("h4",{id:"cargo"},"Cargo"),(0,r.kt)("p",null,"Use this option if your architecture is not supported by the pre-built binaries found on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cocmd/cocmd/releases"},"releases page"),"."),(0,r.kt)("p",null,"First, install ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," (using the recommended ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup")," installation method) and then"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cocmd\n")),(0,r.kt)("p",null,"This method will build the binary from source."),(0,r.kt)("p",null,"To update, run the same command again."),(0,r.kt)("h4",{id:"windows---not-supported-yet"},"Windows - not supported yet"),(0,r.kt)("h3",{id:"step-2---add-cocmd-to-your-shell"},"Step 2 - Add CoCMD to your shell"),(0,r.kt)("p",null,"Run in terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cocmd setup zsh\nor \ncocmd setup bash\n")),(0,r.kt)("p",null,"what this does is adding a loader of all aliases and automations shortcuts to your shell and lets you call any of them directly."),(0,r.kt)("h2",{id:"add-packages"},"Add Packages"),(0,r.kt)("p",null,"You can start right away with ",(0,r.kt)("inlineCode",{parentName:"p"},"cocmd install"),".\nSee all packages options in ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/from_hub"},"Hub"),"."),(0,r.kt)("p",null,"If you want to create your own read ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/package-specification"},"Here")))}d.isMDXComponent=!0}}]);
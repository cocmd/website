"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:0,title:"Configuration Basics",sidebar_label:"Basics"},r=void 0,s={unversionedId:"configuration/basics",id:"configuration/basics",title:"Configuration Basics",description:"At its core, Cocmd uses YAML files to manage its configuration.",source:"@site/docs/configuration/basics.md",sourceDirName:"configuration",slug:"/configuration/basics",permalink:"/docs/configuration/basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration/basics.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Configuration Basics",sidebar_label:"Basics"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/get-started"},next:{title:"App-specific configurations",permalink:"/docs/configuration/app-specific-configurations"}},c={},l=[{value:"Structure",id:"structure",level:2},{value:"The <code>config</code> directory",id:"the-config-directory",level:3},{value:"The <code>match</code> directory",id:"the-match-directory",level:3},{value:"Editing CLI shortcut",id:"editing-cli-shortcut",level:2},{value:"Customizing the editor",id:"customizing-the-editor",level:3},{value:"Editing other configuration files",id:"editing-other-configuration-files",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At its core, ",(0,o.kt)("strong",{parentName:"p"},"Cocmd uses YAML files to manage its configuration"),".\nThis has many advantages, such as the ability to easily sync your\nconfigurations between machines using ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," or cloud services\nsuch as ",(0,o.kt)("a",{parentName:"p",href:"https://www.dropbox.com/"},"Dropbox")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/drive/"},"Google Drive"),"."),(0,o.kt)("admonition",{title:"What about a GUI?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We are currently evaluating the best option to create an ",(0,o.kt)("em",{parentName:"p"},"optional")," GUI on top of\nthe regular file-based experience, which should greatly simplify basic use-cases.\nIf you are interested, make sure to ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/cocmd"},"follow me on Twitter"),"\nto stay updated about the latest news!")),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"All Cocmd's configurations reside in a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd"),", whose location varies based on your operating system."),(0,o.kt)("p",null,"A quick way to find the path to your configuration folder is by running the following command inside a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cocmd path\n")),(0,o.kt)("admonition",{title:"Default locations",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you can't run the previous command for whatever reason, these are the default directories in\nwhich Cocmd creates its configuration, based on the operating system:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Linux"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"$XDG_CONFIG_HOME/cocmd")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/home/user/.config/cocmd"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"macOS"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/cocmd")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/Users/user/Library/Application Support/cocmd"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Windows"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"{FOLDERID_RoamingAppData}\\cocmd")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"C:\\Users\\user\\AppData\\Roaming\\cocmd"),")")),(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that these locations might be different in your case, especially if you are coming from a legacy version.")),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd")," directory contains a few files and directories, structured as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"config/\n  default.yml\nmatch/\n  base.yml\n")),(0,o.kt)("p",null,"As you can see, we have two folders at the top level, ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"match"),", each containing some YAML files.\nThe rationale behind them is explained in the following sections."),(0,o.kt)("h3",{id:"the-config-directory"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"config")," directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory defines ",(0,o.kt)("em",{parentName:"p"},"HOW")," Cocmd should perform its expansions and behave.\nBy changing the YAML files contained in this folder, you can tune all the Cocmd's options,\nsuch as expansion speed, UI shortcuts and many other settings."),(0,o.kt)("p",null,"You can think of these YAML files as ",(0,o.kt)("em",{parentName:"p"},"profiles"),". Each of these files defines\na configuration, as well as the conditions that must be satisfied for the configuration to be active.\nOnly one configuration can be active at any given time."),(0,o.kt)("p",null,"The most important configuration contained in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory is the ",(0,o.kt)("inlineCode",{parentName:"p"},"default.yml")," file,\nwhich ",(0,o.kt)("strong",{parentName:"p"},"defines the ",(0,o.kt)("em",{parentName:"strong"},"default")," configuration that should be used when none of the others is active"),',\nas well as acting as the "base" profile from which the others derive.'),(0,o.kt)("p",null,"This mechanism becomes useful when you need to customize how Cocmd behaves in a\nparticular application. For example, you might want to disable Cocmd when using Word, or\nslow it down when inside Chrome.\nFor more information, please check out the ",(0,o.kt)("a",{parentName:"p",href:"../app-specific-configurations"},"App-specific configurations"),"\nsection."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you only need Cocmd for basic use-cases, the ",(0,o.kt)("inlineCode",{parentName:"strong"},"default.yml")," file is where you should tune\nthe various options"),"."),(0,o.kt)("h3",{id:"the-match-directory"},"The ",(0,o.kt)("inlineCode",{parentName:"h3"},"match")," directory"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"match")," directory defines ",(0,o.kt)("em",{parentName:"p"},"WHAT")," Cocmd should do.\nIt contains all the snippet definitions (aka. ",(0,o.kt)("em",{parentName:"p"},"matches"),"), as well as global variables."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you only need Cocmd for basic use-cases, the ",(0,o.kt)("inlineCode",{parentName:"strong"},"base.yml")," file is where you should\nput all your snippets"),"."),(0,o.kt)("p",null,"If you are interested, the ",(0,o.kt)("inlineCode",{parentName:"p"},"match")," folder is explained in-depth in the ",(0,o.kt)("a",{parentName:"p",href:"../../matches/organizing-matches"},"Organizing matches"),"\nsection."),(0,o.kt)("h2",{id:"editing-cli-shortcut"},"Editing CLI shortcut"),(0,o.kt)("p",null,"Cocmd ships with the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," subcommand, which makes editing configuration files more convenient. Let's see how it works:"),(0,o.kt)("p",null,"If you open a terminal and type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cocmd edit\n")),(0,o.kt)("p",null,"the default system editor (Notepad on Windows and Nano on Unix systems) will be spawned to edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"match/base.yml")," file."),(0,o.kt)("h3",{id:"customizing-the-editor"},"Customizing the editor"),(0,o.kt)("p",null,"If you want to use another editor, you can change the ",(0,o.kt)("inlineCode",{parentName:"p"},"EDITOR")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"VISUAL"),")\nenvironment variable to the path of your desired editor, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EDITOR=/usr/bin/vim\n")),(0,o.kt)("h3",{id:"editing-other-configuration-files"},"Editing other configuration files"),(0,o.kt)("p",null,"If you invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"cocmd edit")," without further arguments, it will open the ",(0,o.kt)("inlineCode",{parentName:"p"},"match/base.yml")," file.\nBut what if you want to edit other files located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"match")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directories,\nyou can do so by specifying the relative path."),(0,o.kt)("p",null,"For example, if you want to edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"match/emails.yml")," file, you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cocmd edit match/emails.yml \n")),(0,o.kt)("p",null,"or if you want to edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/default.yml")," file, you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cocmd edit config/default.yml\n")))}u.isMDXComponent=!0}}]);
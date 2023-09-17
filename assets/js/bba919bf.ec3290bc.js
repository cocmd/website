"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1231],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(a),h=i,k=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:2,title:"Creating a Package"},l=void 0,r={unversionedId:"packages/creating-a-package",id:"packages/creating-a-package",title:"Creating a Package",description:"At some point, you might want to share your snippets with others,",source:"@site/docs/packages/creating-a-package.md",sourceDirName:"packages",slug:"/packages/creating-a-package",permalink:"/docs/packages/creating-a-package",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packages/creating-a-package.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Creating a Package"},sidebar:"tutorialSidebar",previous:{title:"External Packages",permalink:"/docs/packages/external-packages"},next:{title:"Package Specification",permalink:"/docs/packages/package-specification"}},p={},s=[{value:"Package format, in a nutshell",id:"package-format-in-a-nutshell",level:2},{value:"Publish on the Hub (public)",id:"publish-on-the-hub-public",level:2},{value:"Customizing the manifest",id:"customizing-the-manifest",level:3},{value:"Customizing the snippets",id:"customizing-the-snippets",level:3},{value:"Customizing the Readme",id:"customizing-the-readme",level:3},{value:"Publishing on the Hub",id:"publishing-on-the-hub",level:3},{value:"Publish on a GIT repository (private or public)",id:"publish-on-a-git-repository-private-or-public",level:2},{value:"Customizing the manifest",id:"customizing-the-manifest-1",level:3},{value:"Customizing the snippets",id:"customizing-the-snippets-1",level:3},{value:"Customizing the Readme",id:"customizing-the-readme-1",level:3},{value:"Using the External repository",id:"using-the-external-repository",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At some point, you might want to share your snippets with others,\nand the best way to do so is by ",(0,i.kt)("strong",{parentName:"p"},"creating a package!"),".\nLuckily, ",(0,i.kt)("strong",{parentName:"p"},"packages are regular match files with some metadata"),".\nSo if you already created some ",(0,i.kt)("a",{parentName:"p",href:"../../matches/basics"},"custom matches"),", then\nyou have the necessary skills to create a custom package!"),(0,i.kt)("p",null,"In this section, we are going to discuss the different ways in which\nyou can create a package and share it with other people.\nWe'll cover how to publish it on the Cocmd Hub,\nwhich is the recommended way to share a package publicly,\nbut we are also going to discuss how to share it privately,\nfor example with your company's team."),(0,i.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This guide assumes you are comfortable working with YAML match files,\n",(0,i.kt)("inlineCode",{parentName:"p"},"git")," and Markdown.\nIf you are new to these concepts, we suggest these resources:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../matches/basics"},"Match Basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/quickstart/hello-world"},"Git Basics by GitHub")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://programminghistorian.org/en/lessons/getting-started-with-markdown"},"Markdown Basics")))),(0,i.kt)("h2",{id:"package-format-in-a-nutshell"},"Package format, in a nutshell"),(0,i.kt)("p",null,"Before diving into the different publishing opportunities,\nwe'll first need to briefly introduce the structure of a simple package.\nThe full specification can be found in the ",(0,i.kt)("a",{parentName:"p",href:"../package-specification"},"Package Specification"),"\nsection."),(0,i.kt)("p",null,"The simplest possible package is made of 3 files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"package.yml")," file, containing the snippets you want to share."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"_manifest.yml")," file, containing the metadata of the package.\nThis includes the package's name, author and version, among other things."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"README.md")," file, containing a description of the package,\nwritten using the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Markdown"},"Markdown")," syntax.")),(0,i.kt)("p",null,"The package can also include other files, such as a license or additional\nmatch files, but they won't be covered in this example.\nIf you want to know more, please visit the ",(0,i.kt)("a",{parentName:"p",href:"../package-specification"},"Package Specification"),"\nsection."),(0,i.kt)("h2",{id:"publish-on-the-hub-public"},"Publish on the Hub (public)"),(0,i.kt)("p",null,"If you want to make the package publicly available, the\nCocmd Hub is the recommended approach.\nThe Hub itself is hosted on a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cocmd/hub"},"GitHub repository"),",\nwhich contains all the available packages.\nLet's see how you can create your own package."),(0,i.kt)("p",null,"In this example, we are going to create a new package called ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-package"),"."),(0,i.kt)("admonition",{title:"About package names",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A package name can only contain lowercase letters, numbers and the hypen symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,i.kt)("p",{parentName:"admonition"},"For example, the following are valid names:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my-nice-package1234")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"great-package"))),(0,i.kt)("p",{parentName:"admonition"},"While these are NOT valid names:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"My Package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my_package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nice@package")))),(0,i.kt)("p",null,"Here are the first steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cocmd/hub"},"Hub repository")," and ",(0,i.kt)("strong",{parentName:"li"},"fork it")," on your account."),(0,i.kt)("li",{parentName:"ol"},"Clone your fork locally using ",(0,i.kt)("inlineCode",{parentName:"li"},"git"),"."),(0,i.kt)("li",{parentName:"ol"},"Now enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"packages/")," directory and copy the contents of the ",(0,i.kt)("inlineCode",{parentName:"li"},"dummy-package"),"\ndirectory in a new one, called ",(0,i.kt)("inlineCode",{parentName:"li"},"simple-package")," (this should be equal to your package name).\nAt this point, you should have the ",(0,i.kt)("inlineCode",{parentName:"li"},"packages/simple-package")," folder."),(0,i.kt)("li",{parentName:"ol"},"Then, enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"packages/simple-package/0.1.0")," folder, you should find three files there:\n",(0,i.kt)("inlineCode",{parentName:"li"},"package.yml"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"_manifest.yml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"README.md"),"."),(0,i.kt)("li",{parentName:"ol"},"You are now ready to actually customize your package, as explained below:")),(0,i.kt)("h3",{id:"customizing-the-manifest"},"Customizing the manifest"),(0,i.kt)("p",null,"Edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"_manifest.yml")," file to customize the package metadata:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," should be the name of your package. It must be equal to the directory name created earlier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),' is the "read friendly" version of your package name.\nThis can contain all string characters, but it should be relatively short.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," should contain a short description of your package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," contains the version of your package. We suggest to keep it at ",(0,i.kt)("inlineCode",{parentName:"li"},"0.1.0")," for new packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author")," contains the author name.")),(0,i.kt)("p",null,"There are also other possible fields, please visit the ",(0,i.kt)("a",{parentName:"p",href:"../package-specification"},"Package Specification"),"\nif you are interested."),(0,i.kt)("p",null,"At this point, we should have a ",(0,i.kt)("inlineCode",{parentName:"p"},"_manifest.yml")," similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="_manifest.yml"',title:'"_manifest.yml"'},'name: "simple-package"\ntitle: "Simple Package"\ndescription: A simple package to show how to create your own one!\nversion: 0.1.0\nauthor: Moshe Roth\n')),(0,i.kt)("h3",{id:"customizing-the-snippets"},"Customizing the snippets"),(0,i.kt)("p",null,"Once the metadata is ready, you can move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," file.\nThat file contains the package snippets, and follow the same  format used\nfor ",(0,i.kt)("a",{parentName:"p",href:"../../matches/basics"},"regular match files"),"."),(0,i.kt)("p",null,"For example, in our case it could be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="package.yml"',title:'"package.yml"'},'matches:\n  - trigger: ":hello"\n    replace: "Hello from the Simple Package!"\n')),(0,i.kt)("h3",{id:"customizing-the-readme"},"Customizing the Readme"),(0,i.kt)("p",null,"Finally, you should describe your package and add all the relevant documentation\ninside the ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," file.\nYou should write this content using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown"},"Markdown"),"\nsyntax.\nThis content is what will be shown in the package's Hub page."),(0,i.kt)("p",null,"In our example, that could be something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="README.md"',title:'"README.md"'},"This is a **simple package** and its purpose\nis to show how to create new Cocmd packages!\n")),(0,i.kt)("h3",{id:"publishing-on-the-hub"},"Publishing on the Hub"),(0,i.kt)("p",null,"Once your package is ready, we can finally publish it on the Hub, awesome!"),(0,i.kt)("p",null,"After committing your changes and pushing it to your forked version of the Hub,\nyou'll need to ",(0,i.kt)("strong",{parentName:"p"},"open a pull request")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cocmd/hub"},"Cocmd Hub repository"),"."),(0,i.kt)("p",null,"At that point, the Cocmd team will review it and, once verified, your package\nwill be published!"),(0,i.kt)("h2",{id:"publish-on-a-git-repository-private-or-public"},"Publish on a GIT repository (private or public)"),(0,i.kt)("p",null,"There are times when sharing a package publicly is not possible,\nfor example, when you plan to share it with your company's team."),(0,i.kt)("p",null,"This section quickly goes through the steps needed to set up an\nexternal Git repository to host your Cocmd packages."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Firstly, ",(0,i.kt)("strong",{parentName:"li"},"fork")," the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cocmd/cocmd-external-repo-template"},"cocmd-external-repo-template"),"\non your Git hosting of choice. Keep in mind that:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can keep the fork private."),(0,i.kt)("li",{parentName:"ul"},"The template itself is not needed, it's just an easier way to get up to speed with the required structure.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Then, you are ready to customize the ",(0,i.kt)("inlineCode",{parentName:"li"},"example-package"),".")),(0,i.kt)("p",null,"Start by renaming the folder with the actual package name.\nIn this example, we are going to use ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-package"),"."),(0,i.kt)("admonition",{title:"About package names",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A package name can only contain lowercase letters, numbers and the hypen symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,i.kt)("p",{parentName:"admonition"},"For example, the following are valid names:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my-nice-package1234")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"great-package"))),(0,i.kt)("p",{parentName:"admonition"},"While these are NOT valid names:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"My Package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"my_package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nice@package")))),(0,i.kt)("p",null,"After renaming the ",(0,i.kt)("inlineCode",{parentName:"p"},"example-package")," folder to ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-package"),",\nyou can customize the included files."),(0,i.kt)("h3",{id:"customizing-the-manifest-1"},"Customizing the manifest"),(0,i.kt)("p",null,"Edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"_manifest.yml")," file to customize the package metadata:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," should be the name of your package. It must be equal to the directory name created earlier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),' is the "read friendly" version of your package name.\nThis can contain all string characters, but it should be relatively short.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," should contain a short description of your package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," contains the version of your package. We suggest to keep it at ",(0,i.kt)("inlineCode",{parentName:"li"},"0.1.0")," for new packages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author")," contains the author name.")),(0,i.kt)("p",null,"There are also other possible fields, please visit the ",(0,i.kt)("a",{parentName:"p",href:"../package-specification"},"Package Specification"),"\nif you are interested."),(0,i.kt)("p",null,"At this point, we should have a ",(0,i.kt)("inlineCode",{parentName:"p"},"_manifest.yml")," similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="_manifest.yml"',title:'"_manifest.yml"'},'name: "simple-package"\ntitle: "Simple Package"\ndescription: A simple package to show how to create your own one!\nversion: 0.1.0\nauthor: Moshe Roth\n')),(0,i.kt)("h3",{id:"customizing-the-snippets-1"},"Customizing the snippets"),(0,i.kt)("p",null,"Once the metadata is ready, you can move to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," file.\nThat file contains the package snippets, and follow the same  format used\nfor ",(0,i.kt)("a",{parentName:"p",href:"../../matches/basics"},"regular match files"),"."),(0,i.kt)("p",null,"For example, in our case it could be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="package.yml"',title:'"package.yml"'},'matches:\n  - trigger: ":hello"\n    replace: "Hello from the Simple Package!"\n')),(0,i.kt)("h3",{id:"customizing-the-readme-1"},"Customizing the Readme"),(0,i.kt)("p",null,"Finally, you should describe your package and add all the relevant documentation\ninside the ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," file.\nYou should write this content using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown"},"Markdown"),"\nsyntax."),(0,i.kt)("p",null,"In our example, that could be something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="README.md"',title:'"README.md"'},"This is a **simple package** and its purpose\nis to show how to create new Cocmd packages!\n")),(0,i.kt)("h3",{id:"using-the-external-repository"},"Using the External repository"),(0,i.kt)("p",null,"After committing your changes and pushing them to your repository,\nyou are ready to use the packages!"),(0,i.kt)("p",null,"For more information about the usage, visit the\n",(0,i.kt)("a",{parentName:"p",href:"../external-packages/#git-repositories-1"},"External packages")," section."))}u.isMDXComponent=!0}}]);
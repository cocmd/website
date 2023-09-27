(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3232],{1410:(e,t,o)=>{const l=o(7694),a=o(3618),s={title:"CoCMD",tagline:"community powered cmd shortcuts and automations",favicon:"img/coding_color.png",url:"https://cocmd.org",baseUrl:"/",organizationName:"cocmd",projectName:"website",onBrokenLinks:"ignore",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},presets:[["classic",{docs:{sidebarPath:6679,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"},theme:{customCss:2295}}]],customFields:{CURRENT_STABLE_VERSION:"v1.0.7",LINUX_X11_APP_IMAGE_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-X11.AppImage",LINUX_X11_DEB_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/cocmd-debian-x11-amd64.deb",LINUX_WAYLAND_DEB_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/cocmd-debian-wayland-amd64.deb",MAC_INTEL_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Mac-Intel.zip",MAC_M1_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Mac-M1.zip",WIN_INSTALLER_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Win-Installer-x86_64.exe",WIN_PORTABLE_DOWNLOAD_URL:"https://github.com/cocmd/cocmd/releases/download/{{{VERSION}}}/Cocmd-Win-Portable-x86_64.zip"},themeConfig:{image:"img/docusaurus-social-card.jpg",colorMode:{disableSwitch:!0},navbar:{title:"CoCMD",logo:{alt:"My Site Logo",src:"img/coding.png"},items:[{to:"/install",sidebarId:"installSidebar",position:"left",label:"Install"},{type:"docSidebar",sidebarId:"tutorialSidebar",position:"left",label:"Docs"},{to:"/blog",label:"Blog",position:"left"},{href:"https://github.com/cocmd/cocmd",label:"GitHub",position:"left"}]},footer:{style:"dark",links:[{title:"Docs",items:[{label:"Install",to:"/install"}]},{title:"Community",items:[{label:"Discord",href:"https://discordapp.com/invite/cocmd"}]},{title:"More",items:[{label:"Blog",to:"/blog"},{label:"GitHub",href:"https://github.com/cocmd/cocmd"}]}],copyright:`Copyright \xa9 ${(new Date).getFullYear()} Cocmd, Inc. Built with Docusaurus.`},prism:{theme:l,darkTheme:a}}};e.exports=s},6679:e=>{e.exports={tutorialSidebar:[{type:"autogenerated",dirName:"."}]}},7199:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var l=o(7294);const a={container:"container_OSLw","install-section":"install-section_loOV",targets:"targets_cslA",target:"target_khv8",windows:"windows_f9N6",macos:"macos_CNPe",linux:"linux_dLzA",attribution:"attribution_dYfj",button:"button_bHU0"};var s=o(7961),c=o(2263),n=o(9960),i=o(1946);function r(){const{siteConfig:e}=(0,c.Z)();return l.createElement(s.Z,{title:`${e.title}`,description:"community for bash aliases, scripts and automations"},l.createElement("main",null,l.createElement("div",{className:a.container},l.createElement("div",{className:a["install-section"]},l.createElement("h1",null,"Installation"),l.createElement("p",null,"Select your operating system:"),l.createElement("div",{className:a.targets},l.createElement("div",{className:a.target},l.createElement("div",{className:a.windows}),l.createElement("h3",null,"Windows"),l.createElement("a",{className:a.button,href:(0,i.k)("WIN_INSTALLER_DOWNLOAD_URL"),onClick:e=>{e.preventDefault(),window.open((0,i.k)("WIN_INSTALLER_DOWNLOAD_URL")),window.location="/docs/install/win#problems-you-may-experience",window.focus()}},"Installer (64-bit)"),l.createElement("a",{className:a.button,href:(0,i.k)("WIN_PORTABLE_DOWNLOAD_URL"),onClick:e=>{e.preventDefault(),window.open((0,i.k)("WIN_PORTABLE_DOWNLOAD_URL")),window.location="",window.focus()}},"Portable zip (64-bit)"),l.createElement("span",null,"Version ",(0,i.s)())),l.createElement("div",{className:a.target},l.createElement("div",{className:a.macos}),l.createElement("h3",null,"macOS"),l.createElement("a",{className:a.button,href:(0,i.k)("MAC_INTEL_DOWNLOAD_URL"),onClick:e=>{e.preventDefault(),window.open((0,i.k)("MAC_INTEL_DOWNLOAD_URL")),window.location="/docs/install/mac/#problems-you-may-experience",window.focus()}},"Intel"),l.createElement("a",{className:a.button,href:(0,i.k)("MAC_M1_DOWNLOAD_URL"),onClick:e=>{e.preventDefault(),window.open((0,i.k)("MAC_M1_DOWNLOAD_URL")),window.location="/docs/install/mac/#problems-you-may-experience",window.focus()}},"M1 (Apple Silicon)"),l.createElement("span",null,"Version ",(0,i.s)())),l.createElement("div",{className:a.target},l.createElement("div",{className:a.linux}),l.createElement("h3",null,"Linux"),l.createElement(n.Z,{className:a.button,to:"/docs/install/linux/#choosing-the-right-install-method"},"X11"),l.createElement(n.Z,{className:a.button,to:"/docs/install/linux/#choosing-the-right-install-method"},"Wayland"),l.createElement(n.Z,{to:"/docs/install/linux/#find-the-right-version"},"Which version should you choose?"),l.createElement("span",null,"Version ",(0,i.s)())))))))}},1946:(e,t,o)=>{"use strict";o.d(t,{k:()=>c,s:()=>s});var l=o(1410),a=o.n(l);const s=()=>a().customFields.CURRENT_STABLE_VERSION,c=e=>a().customFields[e].replace("{{{VERSION}}}",s())},3618:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});const l={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});const l={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);
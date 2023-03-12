"use strict";(self.webpackChunkwasteland_survival_guide=self.webpackChunkwasteland_survival_guide||[]).push([[7816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,c=u["".concat(r,".").concat(h)]||u[h]||m[h]||l;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={},o="Utilities",s={unversionedId:"utilities",id:"utilities",title:"Utilities",description:"In this section we will install a multitude of required tools and mods. It's very important not to skip anything on this page,",source:"@site/guide/utilities.md",sourceDirName:".",slug:"/utilities",permalink:"/guide/utilities",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tale of Two Wastelands",permalink:"/guide/ttw"},next:{title:"User Interface & HUD",permalink:"/guide/ui"}},r={},p=[{value:"Utilities Separator",id:"utilities-separator",level:3},{value:"Utilities Installed Manually",id:"utilities-installed-manually",level:2},{value:"FNV 4GB Patcher",id:"fnv-4gb-patcher",level:3},{value:"Installation:",id:"installation",level:4},{value:"xNVSE",id:"xnvse",level:3},{value:"Installation:",id:"installation-1",level:4},{value:"New Vegas Heap Replacer",id:"new-vegas-heap-replacer",level:3},{value:"Installation:",id:"installation-2",level:4},{value:"Discord Rich Presence",id:"discord-rich-presence",level:3},{value:"Installation:",id:"installation-3",level:4},{value:"Utilities Installed Using MO2",id:"utilities-installed-using-mo2",level:2},{value:"AnhNVSE",id:"anhnvse",level:3},{value:"Installation:",id:"installation-4",level:4},{value:"Combat Lag Fix (NVSE)",id:"combat-lag-fix-nvse",level:3},{value:"Installation:",id:"installation-5",level:4},{value:"Console Paste Support",id:"console-paste-support",level:3},{value:"Installation:",id:"installation-6",level:4},{value:"Improved Console (NVSE)",id:"improved-console-nvse",level:3},{value:"Installation:",id:"installation-7",level:4},{value:"JIP LN NVSE",id:"jip-ln-nvse",level:3},{value:"Installation:",id:"installation-8",level:4},{value:"JohnnyGuitar NVSE",id:"johnnyguitar-nvse",level:3},{value:"Installation:",id:"installation-9",level:4},{value:"kNVSE Animation Plugin",id:"knvse-animation-plugin",level:3},{value:"Installation:",id:"installation-10",level:4},{value:"lStewieAl&#39;s Tweaks",id:"lstewieals-tweaks",level:3},{value:"Installation:",id:"installation-11",level:4},{value:"Mod Limit Fix",id:"mod-limit-fix",level:3},{value:"Installation:",id:"installation-12",level:4},{value:"New Vegas Tick Fix",id:"new-vegas-tick-fix",level:3},{value:"Installation:",id:"installation-13",level:4},{value:"ShowOff NVSE",id:"showoff-nvse",level:3},{value:"Installation:",id:"installation-14",level:4},{value:"TTW NVSE",id:"ttw-nvse",level:3},{value:"Installation:",id:"installation-15",level:4},{value:"Testing Utilities",id:"testing-utilities",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utilities"},"Utilities"),(0,i.kt)("p",null,"In this section we will install a multitude of required tools and mods. It's very important not to skip anything on this page,\nwith the sole exception of the totally optional ",(0,i.kt)("em",{parentName:"p"},"Discord Rich Presence"),"."),(0,i.kt)("h3",{id:"utilities-separator"},"Utilities Separator"),(0,i.kt)("p",null,'Right-click in MO2\'s left pane and choose "Create a separator". Name it ',(0,i.kt)("em",{parentName:"p"},"Utilities")," and organize\nthe mods in this section below it."),(0,i.kt)("h2",{id:"utilities-installed-manually"},"Utilities Installed Manually"),(0,i.kt)("h3",{id:"fnv-4gb-patcher"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/62552"},"FNV 4GB Patcher")),(0,i.kt)("p",null,"Makes Fallout New Vegas 4GB aware and automatically loads xNVSE."),(0,i.kt)("h4",{id:"installation"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Manual Download")," the ",(0,i.kt)("strong",{parentName:"p"},"Main File - 4GB Patcher"),", extract the ",(0,i.kt)("inlineCode",{parentName:"p"},"FNVpatch.exe")," to the game's ",(0,i.kt)("a",{parentName:"p",href:"./setup/#important-locations"},"Root folder"),",\nthen right-click it and ",(0,i.kt)("strong",{parentName:"p"},"Run as administrator"),". Close the ",(0,i.kt)("inlineCode",{parentName:"p"},"FalloutNV.exe patched!"),"\ncommand prompt that appears. There should now be a ",(0,i.kt)("inlineCode",{parentName:"p"},"FalloutNV_backup.exe")," in the game's ",(0,i.kt)("a",{parentName:"p",href:"./setup/#important-locations"},"Root")," folder."),(0,i.kt)("h3",{id:"xnvse"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/67883"},"xNVSE")),(0,i.kt)("p",null,"Expands the engine and scripting capabilities of Fallout New Vegas, fixing bugs and adding hundreds of new functions."),(0,i.kt)("h4",{id:"installation-1"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Manual Download")," the ",(0,i.kt)("strong",{parentName:"p"},"Main File - New Vegas Script Extender (NVSE)")," and extract the contents\nto the game's ",(0,i.kt)("a",{parentName:"p",href:"./setup/#important-locations"},"Root folder"),". Note that even if you have the GOG version,\nyou still need to include ",(0,i.kt)("inlineCode",{parentName:"p"},"nvse_steam_loader.dll"),".\n",(0,i.kt)("img",{alt:"xNVSE post-install root folder",src:n(1976).Z,width:"1381",height:"829"})),(0,i.kt)("h3",{id:"new-vegas-heap-replacer"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/69779"},"New Vegas Heap Replacer")),(0,i.kt)("p",null,"An optimized replacement for the game's ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Heap_(data_structure)"},"heap"),"\nwhich will benefit load times, stutter and frame rate."),(0,i.kt)("h4",{id:"installation-2"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Manual Download")," the ",(0,i.kt)("strong",{parentName:"p"},"Main File - NVHR")," and extract the contents of the archive to the game's ",(0,i.kt)("a",{parentName:"p",href:"./setup/#important-locations"},"Root")," folder."),(0,i.kt)("admonition",{title:"NVHR Terminal Window",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"By default, NVHR will create a terminal window every time the game is launched, letting you know it has loaded successfully.\nIf you would like the terminal to stop appearing, create a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"d3dx9_38.tmp")," in the ",(0,i.kt)("a",{parentName:"p",href:"./setup/#important-locations"},"Root")," folder.\nThis will not affect anything in-game. If you want the terminal to appear again, you can delete ",(0,i.kt)("inlineCode",{parentName:"p"},"d3dx9_38.tmp"),".")),(0,i.kt)("h3",{id:"discord-rich-presence"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/68976"},"Discord Rich Presence")),(0,i.kt)("p",null,"Shows your character info & what you're doing in-game on your Discord profile.\nObviously, if you don't use Discord or simply aren't interested then this particular mod can be skipped"),(0,i.kt)("h4",{id:"installation-3"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Manual Download")," the ",(0,i.kt)("strong",{parentName:"p"},"Main File - Discord Rich Presence")," and extract the contents of the archive to the game's ",(0,i.kt)("a",{parentName:"p",href:"./setup/#important-locations"},"Root")," folder."),(0,i.kt)("h2",{id:"utilities-installed-using-mo2"},"Utilities Installed Using MO2"),(0,i.kt)("p",null,"If you don't know what these instructions mean, review ",(0,i.kt)("a",{parentName:"p",href:"mo2#how-to-install-mods"},"How to Install Mods"),"."),(0,i.kt)("h3",{id:"anhnvse"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/74012"},"AnhNVSE")),(0,i.kt)("p",null,"Another script extender plugin for NVSE."),(0,i.kt)("h4",{id:"installation-4"},"Installation:"),(0,i.kt)("p",null,"Main File - AnhNVSE"),(0,i.kt)("h3",{id:"combat-lag-fix-nvse"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/71973"},"Combat Lag Fix (NVSE)")),(0,i.kt)("p",null,"Improves framerate in combat by fixing an engine bug."),(0,i.kt)("h4",{id:"installation-5"},"Installation:"),(0,i.kt)("p",null,"Main File - Fast Weapon Lag Fix"),(0,i.kt)("h3",{id:"console-paste-support"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/65906"},"Console Paste Support")),(0,i.kt)("p",null,"Adds clipboard paste support, as well as ctrl left/right and backspace/delete to aid typing in console."),(0,i.kt)("h4",{id:"installation-6"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main File - Console Paste")),(0,i.kt)("h3",{id:"improved-console-nvse"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/70801"},"Improved Console (NVSE)")),(0,i.kt)("p",null,"Overcomes several limitations present in the vanilla console."),(0,i.kt)("h4",{id:"installation-7"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main File - Improved Console")),(0,i.kt)("h3",{id:"jip-ln-nvse"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/58277"},"JIP LN NVSE")),(0,i.kt)("p",null,"An extension of NVSE adding 1000+ new functions, numerous engine bug fixes/tweaks, and restoring\nseveral broken game features."),(0,i.kt)("h4",{id:"installation-8"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main File - JIP LN NVSE")),(0,i.kt)("h3",{id:"johnnyguitar-nvse"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/66927"},"JohnnyGuitar NVSE")),(0,i.kt)("p",null,"xNVSE extender that adds new script functions, features and engine bug fixes."),(0,i.kt)("h4",{id:"installation-9"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main File - JohnnyGuitar NVSE")),(0,i.kt)("h3",{id:"knvse-animation-plugin"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/71336"},"kNVSE Animation Plugin")),(0,i.kt)("p",null,"Allows for custom animations to be loaded without overwriting, making it possible to use animations\nmade specifically for certain weapons without affecting the others."),(0,i.kt)("h4",{id:"installation-10"},"Installation:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Main File - kNVSE")),(0,i.kt)("h3",{id:"lstewieals-tweaks"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/66347"},"lStewieAl's Tweaks")),(0,i.kt)("p",null,"Plugin with engine bugfixes, optional tweaks and new features with no performance impact. Fully customisable\nvia in-game menu and INIs. Changes made in the in-game menu require a game restart to take effect."),(0,i.kt)("admonition",{title:"There's a tweak for that",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It cannot be overstated just how many different things this mod does & how many\n",(0,i.kt)("a",{parentName:"p",href:"https://forums.nexusmods.com/index.php?/topic/10248968-mods-that-are-redundant-with-stewies-tweaks-list/"},"mods it replaces/obsoletes"),".\nAlways ",(0,i.kt)("strong",{parentName:"p"},"check the Tweaks menu")," before installing additional mods, as Tweaks likely already does it.")),(0,i.kt)("h4",{id:"installation-11"},"Installation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main File - Stewie Tweaks"),(0,i.kt)("li",{parentName:"ul"},"Main File - ",(0,i.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/76522"},"Stewie Tweaks Essentials INI"))),(0,i.kt)("h3",{id:"mod-limit-fix"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/68714"},"Mod Limit Fix")),(0,i.kt)("p",null,"Greatly increases the plugin limit by fixing a vanilla bug.\nImproves performance, even if you are nowhere near the limit."),(0,i.kt)("h4",{id:"installation-12"},"Installation:"),(0,i.kt)("p",null,"Main File - MLF"),(0,i.kt)("h3",{id:"new-vegas-tick-fix"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/66537"},"New Vegas Tick Fix")),(0,i.kt)("p",null,"Allows New Vegas to run above 60fps without physics issues, while reducing stuttering and increasing performance.\nNVTF's memory patches disable Alt-Tab functionality. Follow the\n",(0,i.kt)("a",{parentName:"p",href:"https://wallsogb.github.io/FalloutNV-Performance-Guide/#NVTF"},"Perfomance Guide")," for the solution."),(0,i.kt)("h4",{id:"installation-13"},"Installation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main File - NVTF")),(0,i.kt)("h3",{id:"showoff-nvse"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/72541"},"ShowOff NVSE")),(0,i.kt)("p",null,"An NVSE plugin which adds new functions, as well as some engine-level tweaks."),(0,i.kt)("h4",{id:"installation-14"},"Installation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main File - ShowOff NVSE"),(0,i.kt)("li",{parentName:"ul"},"Main File - ShowOff INI")),(0,i.kt)("h3",{id:"ttw-nvse"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/77415"},"TTW NVSE")),(0,i.kt)("p",null,'Currently known as "ROOG NVSE", this NVSE plugin is required for TTW to function properly.'),(0,i.kt)("h4",{id:"installation-15"},"Installation:"),(0,i.kt)("p",null,"Main File - TTW NVSE"),(0,i.kt)("h2",{id:"testing-utilities"},"Testing Utilities"),(0,i.kt)("p",null,"Launch the game using the ",(0,i.kt)("strong",{parentName:"p"},"Tale of Two Wastelands")," option in MO2 (",(0,i.kt)("strong",{parentName:"p"},"NOT")," the ",(0,i.kt)("strong",{parentName:"p"},"NVSE")," option), and hit the ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," key (above the tab key) to open the console."),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"GetNVSEVersion"),", and the console should print ",(0,i.kt)("inlineCode",{parentName:"p"},"NVSE version: 6"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If not, ",(0,i.kt)("a",{parentName:"li",href:"#xnvse"},"xNVSE")," is installed incorrectly.")),(0,i.kt)("p",null,"Next, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"GetIsLAA"),", and the console should print ",(0,i.kt)("inlineCode",{parentName:"p"},"GetIsLAA >> 2"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it prints ",(0,i.kt)("inlineCode",{parentName:"li"},">> 0"),", then the ",(0,i.kt)("a",{parentName:"li",href:"#fnv-4gb-patcher"},"4GB Patch")," was applied incorrectly."),(0,i.kt)("li",{parentName:"ul"},"If it prints an error message, then ",(0,i.kt)("a",{parentName:"li",href:"#jip-ln-nvse"},"JIP LN NVSE")," is installed incorrectly.")),(0,i.kt)("p",null,"Next, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"IsDLLLoaded d3dx9_38"),", and the console should print ",(0,i.kt)("inlineCode",{parentName:"p"},'IsDLLLoaded "d3dx9_38.dll" >> 1'),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it prints ",(0,i.kt)("inlineCode",{parentName:"li"},">> 0"),", then ",(0,i.kt)("a",{parentName:"li",href:"#new-vegas-heap-replacer"},"Heap Replacer")," is installed incorrectly."),(0,i.kt)("li",{parentName:"ul"},"If it prints an error message, then ",(0,i.kt)("a",{parentName:"li",href:"#johnnyguitar-nvse"},"JohnnyGuitar NVSE")," is installed incorrectly.")),(0,i.kt)("p",null,"Next, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"IsDLLLoaded mlf"),', and the console should print IsDLLLoaded "mlf.dll" >> 1.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If not, then ",(0,i.kt)("a",{parentName:"li",href:"#mod-limit-fix"},"Mod Limit Fix")," is installed incorrectly.")),(0,i.kt)("p",null,"Finally, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"IsDLLLoaded NVTF"),', and the console should print IsDLLLoaded "nvtf.dll" >> 1.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If not, then ",(0,i.kt)("a",{parentName:"li",href:"#new-vegas-tick-fix"},"NVTF")," is installed incorrectly.")),(0,i.kt)("admonition",{title:"Before Moving On...",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you passed all of these tests before continuing onto the next section!\nIf any of these tools aren't working correctly, your game will not be stable.")))}m.isMDXComponent=!0},1976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/root-b6dd953757633d95514bf4796e14eaf2.webp"}}]);
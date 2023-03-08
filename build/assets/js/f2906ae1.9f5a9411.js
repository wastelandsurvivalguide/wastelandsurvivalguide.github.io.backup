"use strict";(self.webpackChunkwasteland_survival_guide=self.webpackChunkwasteland_survival_guide||[]).push([[4339],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),m=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(r.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=m(t),c=i,h=u["".concat(r,".").concat(c)]||u[c]||p[c]||l;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=c;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=t(7462),i=(t(7294),t(3905));const l={},o="Animations",s={unversionedId:"animations",id:"animations",title:"Animations",description:"Some of these mods can affect game balance by differing from vanilla attack speed and reload",source:"@site/guide/animations.md",sourceDirName:".",slug:"/animations",permalink:"/guide/animations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Visuals",permalink:"/guide/visuals"},next:{title:"Final Steps",permalink:"/guide/finish"}},r={},m=[{value:"Dependencies",id:"dependencies",level:2},{value:"ISControl Enabler",id:"iscontrol-enabler",level:3},{value:"Installation:",id:"installation",level:4},{value:"NV Compatibility Skeleton",id:"nv-compatibility-skeleton",level:3},{value:"Installation:",id:"installation-1",level:4},{value:"Recommended / Vanilla-Friendly",id:"recommended--vanilla-friendly",level:2},{value:"B42 Weapon Inertia",id:"b42-weapon-inertia",level:3},{value:"Installation:",id:"installation-2",level:4},{value:"Anniversary Anim Pack",id:"anniversary-anim-pack",level:3},{value:"Installation:",id:"installation-3",level:4},{value:"Anniversary Anim General Bugfix",id:"anniversary-anim-general-bugfix",level:3},{value:"Installation:",id:"installation-4",level:4},{value:"Melee VATS Animation Restoration",id:"melee-vats-animation-restoration",level:3},{value:"Installation:",id:"installation-5",level:4},{value:"Additional Animations - Guns/Energy",id:"additional-animations---gunsenergy",level:2},{value:"FNV Clean Animations",id:"fnv-clean-animations",level:3},{value:"Installation",id:"installation-6",level:4},{value:"Hit&#39;s Anims",id:"hits-anims",level:3},{value:"Installation:",id:"installation-7",level:4},{value:"Hit&#39;s Anims - Animation Fixes",id:"hits-anims---animation-fixes",level:3},{value:"Installation:",id:"installation-8",level:4},{value:"Additional Animations - Melee/Unarmed",id:"additional-animations---meleeunarmed",level:2},{value:"Melee Hitstop Effects",id:"melee-hitstop-effects",level:3},{value:"Installation:",id:"installation-9",level:4},{value:"Butcher Pete",id:"butcher-pete",level:3},{value:"Installation:",id:"installation-10",level:4},{value:"Wasteland Warrior",id:"wasteland-warrior",level:3},{value:"Installation:",id:"installation-11",level:4}],d={toc:m},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"animations"},"Animations"),(0,i.kt)("admonition",{title:"A Word About Animation Replacers",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Some of these mods can affect game balance by differing from vanilla attack speed and reload\nspeed values. They can also be distracting and may look strange at high agility and/or with\nRapid Reload perk. You may also encounter misaligned ironsights which can be fixed by\nfollowing the instructions on the ",(0,i.kt)("a",{parentName:"p",href:"#iscontrol-enabler"},"ISControl Enabler")," Nexus page.")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("h3",{id:"iscontrol-enabler"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/75417"},"ISControl Enabler")),(0,i.kt)("p",null,"REQUIRED for the following animations -\nautomatically creates ##ISControl nodes for weapons with sighting nodes."),(0,i.kt)("h4",{id:"installation"},"Installation:"),(0,i.kt)("p",null,"Main File - ISControl"),(0,i.kt)("h3",{id:"nv-compatibility-skeleton"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/68776"},"NV Compatibility Skeleton")),(0,i.kt)("p",null,"A skeleton with compatibility for the latest mods. The only mod in this guide\nusing it is the next mod, ",(0,i.kt)("a",{parentName:"p",href:"#b42-weapon-inertia"},"B42 Weapon Inertia"),"."),(0,i.kt)("admonition",{title:"Other Compatibility Skeleton Mods",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You may encounter another mod which lists Compatibility Skeleton as a requirement.\nShould you install such a mod, you must drag Compatibility Skeleton ",(0,i.kt)("em",{parentName:"p"},"below")," that mod\nin MO2's left pane (to overwrite).")),(0,i.kt)("h4",{id:"installation-1"},"Installation:"),(0,i.kt)("p",null,"Main File - NVCS Installer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the prompt just click Install")),(0,i.kt)("h2",{id:"recommended--vanilla-friendly"},"Recommended / Vanilla-Friendly"),(0,i.kt)("h3",{id:"b42-weapon-inertia"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/64335"},"B42 Weapon Inertia")),(0,i.kt)("p",null,"Makes weapon movement feel more natural and realistic, watch the provided video."),(0,i.kt)("h4",{id:"installation-2"},"Installation:"),(0,i.kt)("p",null,"Main File - B42 Inertia"),(0,i.kt)("h3",{id:"anniversary-anim-pack"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/70158"},"Anniversary Anim Pack")),(0,i.kt)("p",null,"Includes three of Hitman's previous animation/bugfix mods, Subtle Camera Motion,\nIron Sights Recoil Animations, and Fire Animation Variants. Also includes some\nnew previously unreleased animations."),(0,i.kt)("h4",{id:"installation-3"},"Installation:"),(0,i.kt)("p",null,"Main File - Anniversary Anim Pack"),(0,i.kt)("h3",{id:"anniversary-anim-general-bugfix"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/72320"},"Anniversary Anim General Bugfix")),(0,i.kt)("p",null,"Fixed camera jumps, animation snapping, movement lock, broken aim in 3rd person."),(0,i.kt)("h4",{id:"installation-4"},"Installation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main File - AnniAnimPack_BugFix"),(0,i.kt)("li",{parentName:"ul"},"Main File - Bonus Patch")),(0,i.kt)("h3",{id:"melee-vats-animation-restoration"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/73480"},"Melee VATS Animation Restoration")),(0,i.kt)("p",null,"Restores melee VATS animations that were present in FO3 but not FNV."),(0,i.kt)("h4",{id:"installation-5"},"Installation:"),(0,i.kt)("p",null,"Main File - Melee VATS Animation Restoration"),(0,i.kt)("h2",{id:"additional-animations---gunsenergy"},"Additional Animations - Guns/Energy"),(0,i.kt)("p",null,"May not be balanced."),(0,i.kt)("h3",{id:"fnv-clean-animations"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/70599"},"FNV Clean Animations")),(0,i.kt)("p",null,"Clean first person animations for New Vegas from rockbiter.\nA solid base for adding other animations on top."),(0,i.kt)("h4",{id:"installation-6"},"Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main File - FNV Clean Animations"),(0,i.kt)("li",{parentName:"ul"},"Update File - FNV Clean Animations - Update")),(0,i.kt)("h3",{id:"hits-anims"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/73856"},"Hit's Anims")),(0,i.kt)("p",null,"Animation packs from Hitman covering various weapons."),(0,i.kt)("h4",{id:"installation-7"},"Installation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main File - Hit's Anims - Season 1"),(0,i.kt)("li",{parentName:"ul"},"Main File - ",(0,i.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/75208"},"Hit's Anims - Season 2")),(0,i.kt)("li",{parentName:"ul"},"Main File - ",(0,i.kt)("a",{parentName:"li",href:"https://www.nexusmods.com/newvegas/mods/76843"},"Hit's Anims - Season 3"))),(0,i.kt)("h3",{id:"hits-anims---animation-fixes"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/76457"},"Hit's Anims - Animation Fixes")),(0,i.kt)("p",null,"Adds Hitman's animations to some left-out weapons, restores vanilla pistol RoF & other fixes."),(0,i.kt)("h4",{id:"installation-8"},"Installation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Main File - Hit's Anims - Animation Fixes"),(0,i.kt)("li",{parentName:"ul"},"Optional File - Hit's Anims - Remove Burst-Firing"),(0,i.kt)("li",{parentName:"ul"},"Optional File - Hit's Anims - Vanilla Fire Rates")),(0,i.kt)("h2",{id:"additional-animations---meleeunarmed"},"Additional Animations - Melee/Unarmed"),(0,i.kt)("p",null,"Should be balanced-ish, but may look weird at higher FOVs."),(0,i.kt)("h3",{id:"melee-hitstop-effects"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/75981"},"Melee Hitstop Effects")),(0,i.kt)("p",null,"Adds hitstop (a very short pause of game time) to melee attacks, giving them a feeling of weight & impact."),(0,i.kt)("h4",{id:"installation-9"},"Installation:"),(0,i.kt)("p",null,"Main File - Melee Hitstop Effects"),(0,i.kt)("h3",{id:"butcher-pete"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/79146"},"Butcher Pete")),(0,i.kt)("p",null,"A comprehensive melee animation overhaul for almost every single one-handed melee weapon."),(0,i.kt)("h4",{id:"installation-10"},"Installation:"),(0,i.kt)("p",null,"Main File - 2. Butcher Pete Complete - A Melee Animation Overhaul (No Locomotion)"),(0,i.kt)("h3",{id:"wasteland-warrior"},(0,i.kt)("a",{parentName:"h3",href:"https://www.nexusmods.com/newvegas/mods/80277"},"Wasteland Warrior")),(0,i.kt)("p",null,"Reanimates all animations for all two-handed melee weapon in the game."),(0,i.kt)("h4",{id:"installation-11"},"Installation:"),(0,i.kt)("p",null,"Main File - 2. Wasteland Warrior - A Melee Animation Overhaul (No Locomotion)"))}p.isMDXComponent=!0}}]);
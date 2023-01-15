"use strict";(self.webpackChunkpe_7_bot=self.webpackChunkpe_7_bot||[]).push([[206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(l,".").concat(p)]||d[p]||u[p]||a;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"Introduction",id:"intro",pagination_next:null,pagination_prev:null,keywords:["bot","discord","discord bot","pe7","prospective esports","pe","esports","valorant","overwatch","introduction"],description:"A short introduction to PE7 Bot."},i="PE7 Discord Bot",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"A short introduction to PE7 Bot.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",id:"intro",pagination_next:null,pagination_prev:null,keywords:["bot","discord","discord bot","pe7","prospective esports","pe","esports","valorant","overwatch","introduction"],description:"A short introduction to PE7 Bot."},sidebar:"docs"},l={},c=[{value:"Docs explained",id:"docs-explained",level:2},{value:"Invoking commands",id:"invoking-commands",level:3},{value:"Default values",id:"default-values",level:3},{value:"Terminology",id:"terminology",level:3},{value:"Extra info",id:"extra-info",level:3},{value:"Contact",id:"contact",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pe7-discord-bot"},"PE7 Discord Bot"),(0,r.kt)("p",null,"PE7 Bot is the bot for Prospective Esports' ",(0,r.kt)("a",{href:"/dsi",target:"_blank"},"Discord server"),". The bot serves multiple purposes: moderation, logging, socials integrations, server management, support system, ... There's new features being added all the time. ",(0,r.kt)("br",null),"\nThese docs are meant to make you a little bit more comfortable with using this bot and discovering its capabilities. To see what has changed, you can switch between older and newer versions of the bot through the Versions dropdown menu."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"docs-explained"},"Docs explained"),(0,r.kt)("h3",{id:"invoking-commands"},"Invoking commands"),(0,r.kt)("p",null,"When invoking commands it's very important to ",(0,r.kt)("strong",{parentName:"p"},"follow the given order")," in the argumented command table! Mixing the arguments can lead\nto misformed output or errors. If you don't wish to use one or more of the arguments, simply don't include them in your command\n(if there are no other arguments after the one you want to skip) or use the default value which you can find in the argumented\ncommand table. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Positional arguments")," (= arguments ",(0,r.kt)("em",{parentName:"p"},"not")," starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),") are separated with spaces in ",(0,r.kt)("strong",{parentName:"p"},"specific order"),"!",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Non-positional arguments")," (= arguments starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),") are automatically separated by using\ntheir ",(0,r.kt)("strong",{parentName:"p"},"corresponding prefix")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"-t"),"), their order does not matter."),(0,r.kt)("h3",{id:"default-values"},"Default values"),(0,r.kt)("p",null,"Some commands have arguments with default values. If you ",(0,r.kt)("strong",{parentName:"p"},"don't include")," your wanted value for that argument in your command,\nthe bot will ",(0,r.kt)("strong",{parentName:"p"},"automatically use this default value")," to continue. Default values can be found in the argumented command table.\nThe default value ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"None"))," indicates no default value is present because the argument does not need a default value (e.g. ",(0,r.kt)("a",{class:"commandblock"},"twitch"),"\ndoesn't have a default value because it does not need to show a specific streamer if no argument is present in your command,\nit will just show which streamers are currently live)."),(0,r.kt)("h3",{id:"terminology"},"Terminology"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Empty command:")," when a command is sent without any arguments\n(e.g. ",(0,r.kt)("a",{class:"commandblock"},"twitch"),' would be an "empty command" while ',(0,r.kt)("a",{class:"commandblock"},"twitch prospectiveesports"),' would be an "argumented command").'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Argumented command:")," when a command is sent with one or more arguments (see example above)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Alias:")," an alias is another name to invoke the same command (e.g. ",(0,r.kt)("a",{class:"commandblock"},"commands")," is an alias for ",(0,r.kt)("a",{class:"commandblock"},"help"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Argument:")," an argument is an extra parameter that gives the bot more info on what to do\n(e.g. ",(0,r.kt)("a",{class:"commandblock"},"help ","[command or category]")," would not just show the general help menu, but show the help menu specifically for\nthe given command or category)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type:"),' tells you what type of info the argument requires (e.g. mentioning a channel for an argument\nwith type "discord username/id" will not work).')),(0,r.kt)("h3",{id:"extra-info"},"Extra info"),(0,r.kt)("p",null,"Words or phrases inside a ",(0,r.kt)("strong",{parentName:"p"},"codeblock")," ( ",(0,r.kt)("inlineCode",{parentName:"p"},"this is a codeblock")," ) represent ",(0,r.kt)("strong",{parentName:"p"},"values")," corresponding to the topic. ",(0,r.kt)("br",null),"\nWords or phrases in a ",(0,r.kt)("strong",{parentName:"p"},"Discord mention"),"\n( ",(0,r.kt)("a",{class:"discord-mention"},"@user"),", ",(0,r.kt)("a",{class:"discord-mention role"},"@role"),", ",(0,r.kt)("a",{class:"discord-mention"},"#channel")," )\nare obvious lol. You can click mentions to open them in Discord.",(0,r.kt)("br",null),"\nWords or phrases inside a ",(0,r.kt)("strong",{parentName:"p"},"commandblock"),"\n( ",(0,r.kt)("a",{class:"commandblock tooltip"},"command arg1 arg2 ","[arg3]")," ) represent the ",(0,r.kt)("strong",{parentName:"p"},"bot's commands"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"contact"},"Contact"),(0,r.kt)("p",null,"If you have any problems with the bot, server, person or you don't understand these docs,\njoin the ",(0,r.kt)("a",{href:"/dsi",target:"_blank"},"Discord server")," and open a ticket so we can help you with your issue."))}d.isMDXComponent=!0}}]);
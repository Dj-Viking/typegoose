(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,O=d["".concat(i,".").concat(m)]||d[m]||l[m]||o;return n?r.a.createElement(O,p(p({ref:t},s),{},{components:n})):r.a.createElement(O,p({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(133)),i={id:"array-prop",title:"Array Prop"},p={unversionedId:"api/decorators/array-prop",id:"api/decorators/array-prop",isDocsHomePage:!1,title:"Array Prop",description:"@arrayProp(options: object) is almost the same as @prop, here are just the differences listed.",source:"@site/../docs/api/decorators/arrayProp.md",slug:"/api/decorators/array-prop",permalink:"/typegoose/docs/api/decorators/array-prop",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/arrayProp.md",version:"current",sidebar:"docs",previous:{title:"Map Prop",permalink:"/typegoose/docs/api/decorators/map-prop"},next:{title:"Model Options",permalink:"/typegoose/docs/api/decorators/model-options"}},c=[{value:"Options",id:"options",children:[{value:"items",id:"items",children:[]},{value:"innerOptions",id:"inneroptions",children:[]},{value:"outerOptions",id:"outeroptions",children:[]},{value:"dim",id:"dim",children:[]}]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@arrayProp(options: object)")," is almost the same as ",Object(o.b)("inlineCode",{parentName:"p"},"@prop"),", here are just the differences listed."),Object(o.b)("p",null,"Please note that Mongoose initializes arrayProp arrays with ",Object(o.b)("inlineCode",{parentName:"p"},"[]")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"null")," / ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Deprecated since 7.1.1, replaced with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop"}),Object(o.b)("inlineCode",{parentName:"a"},"@prop")),"  "))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This decorator will get removed in 8.0"))),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"All options from ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"/typegoose/docs/api/decorators/prop#options"}),Object(o.b)("inlineCode",{parentName:"a"},"@prop"))," are valid.")),Object(o.b)("h3",{id:"items"},"items"),Object(o.b)("p",null,"Accepts Type: ",Object(o.b)("inlineCode",{parentName:"p"},"any"),Object(o.b)("br",{parentName:"p"}),"\n","(alias for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(o.b)("inlineCode",{parentName:"a"},"type"))," from ",Object(o.b)("inlineCode",{parentName:"p"},"@prop"),")"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Deprecated since ",Object(o.b)("inlineCode",{parentName:"p"},"7.2.0"),", use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(o.b)("inlineCode",{parentName:"a"},"@prop"),"'s ",Object(o.b)("inlineCode",{parentName:"a"},"type"))))),Object(o.b)("p",null,"(see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#type"}),Object(o.b)("inlineCode",{parentName:"a"},"type"))," for Examples)"),Object(o.b)("h3",{id:"inneroptions"},"innerOptions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"innerOptions"),' is used to overwrite options to be at the "Type" level',Object(o.b)("br",{parentName:"p"}),"\n","-> Use this only when absolutely necessary and please open a new\nissue about it"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#innerOptions"}),"see ",Object(o.b)("inlineCode",{parentName:"a"},"innerOptions")," in prop")),Object(o.b)("h3",{id:"outeroptions"},"outerOptions"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"outerOptions"),' is used to overwrite options to be at the "Array" level',Object(o.b)("br",{parentName:"p"}),"\n","-> Use this only when absolutely necessary and please open a new\nissue about it"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#outerOptions"}),"see ",Object(o.b)("inlineCode",{parentName:"a"},"outerOptions")," in prop")),Object(o.b)("h3",{id:"dim"},"dim"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dim")," is used to set the Dimensions this array should have (for something like an matrix)",Object(o.b)("br",{parentName:"p"}),"\n","-> needs to be higher than 0"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/typegoose/docs/api/decorators/prop#dim"}),"see ",Object(o.b)("inlineCode",{parentName:"a"},"dim")," in prop")))}b.isMDXComponent=!0}}]);
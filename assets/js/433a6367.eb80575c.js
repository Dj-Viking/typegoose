"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8169],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(t),p=o,g=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),o=t(7294),r=t(2389),l=t(9443);var i=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(9558),d=t(6010),u="tabItem_1uMI";function c(e){var n,t,a,r=e.lazy,l=e.block,c=e.defaultValue,m=e.values,p=e.groupId,g=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),b=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=i(),v=C.tabGroupChoices,N=C.setTabGroupChoices,k=(0,o.useState)(y),M=k[0],w=k[1],A=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=v[p];null!=x&&x!==M&&h.some((function(e){return e.value===x}))&&w(x)}var D=function(e){var n=e.currentTarget,t=A.indexOf(n),a=h[t].value;a!==M&&(T(n),w(a),null!=p&&N(p,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;t=A[a]||A[0];break;case"ArrowLeft":var o=A.indexOf(e.currentTarget)-1;t=A[o]||A[A.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":l},g)},h.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:M===n?0:-1,"aria-selected":M===n,className:(0,d.Z)("tabs__item",u,{"tabs__item--active":M===n}),key:n,ref:function(e){return A.push(e)},onKeyDown:O,onFocus:D,onClick:D},null!=t?t:n)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===M}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==M})}))))}function m(e){var n=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(n)},e))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},7815:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return g}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=t(5064),i=t(8215),s=["components"],d={id:"non-nested-discriminators",title:"Non-Nested Discriminators"},u=void 0,c={unversionedId:"guides/advanced/non-nested-discriminators",id:"guides/advanced/non-nested-discriminators",isDocsHomePage:!1,title:"Non-Nested Discriminators",description:"Use-Case",source:"@site/../docs/guides/advanced/non-nested-discriminators.mdx",sourceDirName:"guides/advanced",slug:"/guides/advanced/non-nested-discriminators",permalink:"/typegoose/docs/guides/advanced/non-nested-discriminators",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/non-nested-discriminators.mdx",tags:[],version:"current",frontMatter:{id:"non-nested-discriminators",title:"Non-Nested Discriminators"},sidebar:"guides",previous:{title:"Using ObjectId Type",permalink:"/typegoose/docs/guides/advanced/using-objectid-type"},next:{title:"Migrate to 9.0.0",permalink:"/typegoose/docs/guides/migration/migrate-9"}},m=[{value:"Use-Case",id:"use-case",children:[],level:2},{value:"First thought",id:"first-thought",children:[],level:2},{value:"Fixing it with Discriminators",id:"fixing-it-with-discriminators",children:[],level:2},{value:"Query with Shared Parent Model",id:"query-with-shared-parent-model",children:[],level:2},{value:"Extras",id:"extras",children:[],level:2},{value:"Extra Notes",id:"extra-notes",children:[{value:"<code>strictQuery</code>",id:"strictquery",children:[],level:3}],level:2}],p={toc:m};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"use-case"},"Use-Case"),(0,r.kt)("p",null,"If you dont know an use case for this, consider the following:",(0,r.kt)("br",{parentName:"p"}),"\n","An Veterinarian that wants to store information about the current patients in their care, how would it be done in mongoose / typegoose?"),(0,r.kt)("h2",{id:"first-thought"},"First thought"),(0,r.kt)("p",null,"At first you might think to do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// to have an shared collection\n@modelOptions({ schemaOptions: { collection: "animal" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\nconst DogModel = getModelForClass(Dog);\nconst CatModel = getModelForClass(Cat);\nconst ParrotModel = getModelForClass(Parrot);\n')),(0,r.kt)("p",null,"And then in some querying code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'await CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its a "findOne" to lower the example code\nconst found = await ParrotModel.findOne({}).exec();\n\n// this will "find" should log one of the 2 created above\nconsole.log("found", found);\n')),(0,r.kt)("p",null,"Which is obviously not what is wanted, there would be ways to test for what document is what, but there is an easier way: Discriminators."),(0,r.kt)("h2",{id:"fixing-it-with-discriminators"},"Fixing it with Discriminators"),(0,r.kt)("p",null,"The code from ",(0,r.kt)("a",{parentName:"p",href:"#first-thought"},"First thought")," is actually not so far off of what discriminators will need:"),(0,r.kt)(l.Z,{groupId:"diff-full",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"diff",label:"Difference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const AnimalModel = getModelForClass(Animal);\n- const DogModel = getModelForClass(Dog);\n- const CatModel = getModelForClass(Cat);\n- const ParrotModel = getModelForClass(Parrot);\n+ const DogModel = getDiscriminatorModelForClass(AnimalModel, Dog);\n+ const CatModel = getDiscriminatorModelForClass(AnimalModel, Cat);\n+ const ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot);\n"))),(0,r.kt)(i.Z,{value:"fullcode",label:"Full Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@modelOptions({ schemaOptions: { collection: "animal" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\n// difference is below here\nconst DogModel = getDiscriminatorModelForClass(AnimalModel, Dog);\nconst CatModel = getDiscriminatorModelForClass(AnimalModel, Cat);\nconst ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot);\n')))),(0,r.kt)("p",null,"And then the same querying code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'await CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\nconst found = await ParrotModel.findOne({}).exec();\n\nconsole.log("found", found);\n')),(0,r.kt)("p",null,"and this time it will log ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", because there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"Parrot")," document inside the collection."),(0,r.kt)("p",null,'You might ask "how does this work?", well, it is easy: mongoose will by default use the hidden property ',(0,r.kt)("inlineCode",{parentName:"p"},"__t")," to differentiate between registered models from the shared parent, and the default value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"__t")," property is the model name. (",(0,r.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/model-options#customname"},"Look here for more on how typegoose generates an model name"),")"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"__t")," can be changed to something different, see ",(0,r.kt)("a",{parentName:"p",href:"#extras"},"Extras"),"."))),(0,r.kt)("h2",{id:"query-with-shared-parent-model"},"Query with Shared Parent Model"),(0,r.kt)("p",null,"When using discriminators, it is also possible to use the shared parent to query for documents:"),(0,r.kt)(l.Z,{groupId:"diff-full",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"diff",label:"Difference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'await CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\n- const found = await ParrotModel.findOne({}).exec();\n+ const found = await AnimalModel.findOne({}).exec();\n\n\nconsole.log("found", found);\n'))),(0,r.kt)(i.Z,{value:"fullcode",label:"Full Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'await CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\nconst found = await AnimalModel.findOne({}).exec();\n\nconsole.log("found", found);\n')))),(0,r.kt)("p",null,"This should find one of the 2 created documents, with full properties at runtime, but at compile time (in the editor), it is still shown as ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal"),".",(0,r.kt)("br",{parentName:"p"}),"\n","This can be solved by using custom type guards:"),(0,r.kt)("p",null,"Classes & Models:"),(0,r.kt)(l.Z,{groupId:"diff-full",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"diff",label:"Difference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+ enum Names {\n+   DOG = "DOG",\n+   CAT = "CAT",\n+   PARROT = "PARROT",\n+ }\n\n\n@modelOptions({ schemaOptions: { collection: "animal" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\n- const DogModel = getDiscriminatorModelForClass(AnimalModel, Dog);\n- const CatModel = getDiscriminatorModelForClass(AnimalModel, Cat);\n- const ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot);\n+ const DogModel = getDiscriminatorModelForClass(AnimalModel, Dog, Names.DOG);\n+ const CatModel = getDiscriminatorModelForClass(AnimalModel, Cat, Names.CAT);\n+ const ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot, Names.PARROT);\n'))),(0,r.kt)(i.Z,{value:"fullcode",label:"Full Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// an enum to make it easier to access the names for the typeguard\nenum Names {\n  DOG = "DOG",\n  CAT = "CAT",\n  PARROT = "PARROT",\n}\n\n@modelOptions({ schemaOptions: { collection: "animal" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\nconst DogModel = getDiscriminatorModelForClass(AnimalModel, Dog, Names.DOG);\nconst CatModel = getDiscriminatorModelForClass(AnimalModel, Cat, Names.CAT);\nconst ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot, Names.PARROT);\n')))),(0,r.kt)("p",null,"Query Code:"),(0,r.kt)(l.Z,{groupId:"diff-full",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"diff",label:"Difference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+ function checkForClass<T extends Animal>(doc: mongoose.Document & KeyStringAny, name: string): doc is DocumentType<T> {\n+   return doc?.__t === name;\n+ }\n\n\nawait CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\n- const found = await AnimalModel.findOne({}).exec();\n+ const found = await AnimalModel.findOne({ patientNumber: 0 }).orFail().exec();\n\n\n+ if (checkForClass<Cat>(found, Names.CAT)) {\n+   console.log("runtime Cat", found.nameTag);\n+ }\nconsole.log("found", found);\n'))),(0,r.kt)(i.Z,{value:"fullcode",label:"Full Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'function checkForClass<T extends Animal>(doc: mongoose.Document & KeyStringAny, name: string): doc is DocumentType<T> {\n  return doc?.__t === name;\n}\n\nawait CatModel.create({ patientNumber: 0, nameTag: "Catty-1" });\nawait DogModel.create({ patientNumber: 1, cageNumber: 1 });\n\n// for this example its an "findOne" to lower the example code\nconst found = await AnimalModel.findOne({ patientNumber: 0 }).orFail().exec();\n\nif (checkForClass<Cat>(found, Names.CAT)) {\n  console.log("runtime Cat", found.nameTag);\n}\nconsole.log("found", found);\n')))),(0,r.kt)("p",null,"this code should now log ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime Cat Catty-1")," and the full document and types should also work inside the if-block."),(0,r.kt)("h2",{id:"extras"},"Extras"),(0,r.kt)("p",null,"The value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorKey")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"__t"),") can be changed, by defining the property on the class (/ schema) and pointing ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorKey")," to that property."),(0,r.kt)("p",null,"Example:"),(0,r.kt)(l.Z,{groupId:"diff-full",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"diff",label:"Difference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'enum Names {\n  DOG = "DOG",\n  CAT = "CAT",\n  PARROT = "PARROT",\n}\n\n- @modelOptions({ schemaOptions: { collection: "animal" } })\n+ @modelOptions({ schemaOptions: { collection: "animal", discriminatorKey: "customKey" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n\n+   @prop({ required: true })\n+   public customKey!: string; // its recommended to only use "string" or "number"\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\nconst DogModel = getDiscriminatorModelForClass(AnimalModel, Dog, Names.DOG);\nconst CatModel = getDiscriminatorModelForClass(AnimalModel, Cat, Names.CAT);\nconst ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot, Names.PARROT);\n'))),(0,r.kt)(i.Z,{value:"fullcode",label:"Full Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// an enum to make it easier to access the names for the typeguard\nenum Names {\n  DOG = "DOG",\n  CAT = "CAT",\n  PARROT = "PARROT",\n}\n\n@modelOptions({ schemaOptions: { collection: "animal", discriminatorKey: "customKey" } })\nclass Animal {\n  @prop({ required: true, unique: true })\n  public patientNumber!: number;\n\n  // options "enum" & "default" can also be specified, but dont have much effect\n  // the property set in "discriminatorKey" does not actually need to be defined, but its for types like usage in an typeguard\n  @prop({ required: true })\n  public customKey!: string; // its recommended to only use "string" or "number"\n}\n\nclass Dog extends Animal {\n  @prop()\n  public cageNumber!: number;\n}\n\nclass Cat extends Animal {\n  @prop()\n  public nameTag!: string;\n}\n\nclass Parrot extends Animal {\n  @prop()\n  public commonMessage?: string;\n}\n\nconst AnimalModel = getModelForClass(Animal);\nconst DogModel = getDiscriminatorModelForClass(AnimalModel, Dog, Names.DOG);\nconst CatModel = getDiscriminatorModelForClass(AnimalModel, Cat, Names.CAT);\nconst ParrotModel = getDiscriminatorModelForClass(AnimalModel, Parrot, Names.PARROT);\n')))),(0,r.kt)("p",null,"And so instead of the model name (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"Cat"),"), it will be stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"customCat")," inside property ",(0,r.kt)("inlineCode",{parentName:"p"},"customKey"),"."),(0,r.kt)("h2",{id:"extra-notes"},"Extra Notes"),(0,r.kt)("h3",{id:"strictquery"},(0,r.kt)("inlineCode",{parentName:"h3"},"strictQuery")),(0,r.kt)("p",null,"In mongoose 6.x, the option ",(0,r.kt)("inlineCode",{parentName:"p"},"strictQuery")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by default, basically meaning that it will strip all properties from a query that are not on the schema the query is executed on."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict"},"mongoose 6.0 Migration guide"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// The following will result in a empty array\nawait AnimalModel.find({ cageNumber: 10 });\n\n// use the following if it is required to be used this way\nawait AnimalModel.find({ cageNumber: 10 }, null, { strictQuery: false })\n")))}g.isMDXComponent=!0}}]);
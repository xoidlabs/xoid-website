(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(93)),s=["components"],i={id:"nested-state",title:"Working with nested state"},c={unversionedId:"recipes/nested-state",id:"recipes/nested-state",isDocsHomePage:!1,title:"Working with nested state",description:"Before xoid:",source:"@site/main/docs/recipes/nested-state.md",slug:"/recipes/nested-state",permalink:"/docs/recipes/nested-state",editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/recipes/nested-state.md",version:"current",sidebar:"docs",previous:{title:"Grabbing refs",permalink:"/docs/recipes-react/grabbing-refs"},next:{title:"Using immer",permalink:"/docs/recipes/using-immer"}},l=[{value:"Related",id:"related",children:[]}],p={rightToc:l},d="wrapper";function b(e){var t=e.components,r=Object(a.a)(e,s);return Object(o.b)(d,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before ",Object(o.b)("strong",{parentName:"p"},"xoid"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"setState((state) =>  {\n  ...state, \n  deeply: {\n    ...state.deeply,\n    nested: {\n      ...state.deeply.nested,\n      value: state.deeply.nested.value + 1\n    }\n  }\n})\n")),Object(o.b)("p",null,"After ",Object(o.b)("strong",{parentName:"p"},"xoid"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"atom.focus(s => s.deeply.nested.value).update(s => s + 1)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"xoid")," makes it easier to work with nested state. Redux and React (and ",Object(o.b)("strong",{parentName:"p"},"xoid"),") are  based on immutable updates. Immutability is great, however it usually has a bad impact on code readability."),Object(o.b)("p",null,"To overcome this, there are other tools like ",Object(o.b)("strong",{parentName:"p"},"immutablejs")," or ",Object(o.b)("strong",{parentName:"p"},"immer"),". Even Redux Toolkit comes with ",Object(o.b)("strong",{parentName:"p"},"immer")," by default. Note that using Redux toolkit means adding another ~11kB to your bundle size. This number is ~5kB for ",Object(o.b)("strong",{parentName:"p"},"immer")," alone. ",Object(o.b)("strong",{parentName:"p"},"xoid")," is ~1kB, yet it can be used to overcome the same problem."),Object(o.b)("h3",{id:"related"},"Related"),Object(o.b)("p",null,"To see how ",Object(o.b)("strong",{parentName:"p"},"xoid")," compares to a classical reducer, and a dedicated library that's using ",Object(o.b)("strong",{parentName:"p"},"immer")," internally (",Object(o.b)("inlineCode",{parentName:"p"},"use-methods"),"), you can check the following example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/xoidlabs/xoid/tree/master/examples/xoid-vs-usereducer-vs-usemethods"},"xoid vs useReducer vs useMethods")," ",Object(o.b)("a",{parentName:"li",href:"https://githubbox.com/xoidlabs/xoid/tree/master/examples/xoid-vs-usereducer-vs-usemethods"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat&colorA=4f2eb3&colorB=4f2eb3&logo=codesandbox",alt:"Open in CodeSandbox"})))))}b.isMDXComponent=!0},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[b]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
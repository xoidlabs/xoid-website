(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{72:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return m}));var t=r(2),o=r(6),i=(r(0),r(93)),a=["components"],c={id:"using-immer",title:"Using immer"},s={unversionedId:"recipes/using-immer",id:"recipes/using-immer",isDocsHomePage:!1,title:"Using immer",description:"While xoid's API surface is kept small intentionally, there's a way for extensions.",source:"@site/main/docs/recipes/using-immer.md",slug:"/recipes/using-immer",permalink:"/docs/recipes/using-immer",editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/recipes/using-immer.md",version:"current",sidebar:"docs",previous:{title:"Working with nested state",permalink:"/docs/recipes/nested-state"},next:{title:"Using reducers",permalink:"/docs/recipes/using-reducers"}},p=[],u={rightToc:p},l="wrapper";function m(e){var n=e.components,r=Object(o.a)(e,a);return Object(i.b)(l,Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"While ",Object(i.b)("strong",{parentName:"p"},"xoid"),"'s API surface is kept small intentionally, there's a way for extensions.\nIf you'd like to add a ",Object(i.b)("inlineCode",{parentName:"p"},".produce")," method that uses ",Object(i.b)("strong",{parentName:"p"},"immer")," internally, you can do it like the following."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { create } from 'xoid'\nimport { produce } from 'immer'\n\ncreate.plugins.push((atom) => {\n  atom.produce = (fn) => atom.update((s) => produce(s, fn))\n})\n")),Object(i.b)("p",null,"If you're using TypeScript, simply apply the following module augmentation:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"declare module 'xoid' {\n  interface Atom<T> {\n    produce: (fn: (draft: T) => void) => void\n  }\n  interface Stream<T> {\n    produce: (fn: (draft: T) => void) => void\n  }\n}\n")))}m.isMDXComponent=!0},93:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=t,f=l["".concat(a,".").concat(m)]||l[m]||d[m]||i;return r?o.a.createElement(f,c(c({ref:n},p),{},{components:r})):o.a.createElement(f,c({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:t,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
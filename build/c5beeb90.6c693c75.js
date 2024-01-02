(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(94)),c=["components"],i={id:"grabbing-refs",title:"Grabbing refs"},s={unversionedId:"recipes-react/grabbing-refs",id:"recipes-react/grabbing-refs",isDocsHomePage:!1,title:"Grabbing refs",description:"A xoid atom can be used to grab element refs (as in React's terminology) in a typesafe manner.",source:"@site/main/docs/recipes-react/grabbing-refs.md",slug:"/recipes-react/grabbing-refs",permalink:"/docs/recipes-react/grabbing-refs",editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/recipes-react/grabbing-refs.md",version:"current",sidebar:"docs",previous:{title:"Refactoring React classes",permalink:"/docs/recipes-react/refactoring-react-classes"},next:{title:"Working with nested state",permalink:"/docs/recipes/nested-state"}},p=[],l={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"xoid")," atom can be used to grab element refs (as in React's terminology) in a typesafe manner. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const $ref = create<HTMLElement>() // Stream<HTMLElement>\n\n$ref.set(document.body)\n")),Object(o.b)("p",null,"It's completely safe to feed ",Object(o.b)("inlineCode",{parentName:"p"},"atom.set")," calls as refs to React components as ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," prop."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import create from 'xoid'\nimport { useSetup } from '@xoid/react'\n// inside React\nconst { $ref } = useSetup(() => {\n  const $ref = create<HTMLDivElement>()\n  $ref.subscribe((element) => console.log(element))\n  return { $ref }\n})\nreturn <div ref={$ref.set} />\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This usage won't result in Typescript complaints. ",Object(o.b)("strong",{parentName:"p"},"xoid"),"'s ",Object(o.b)("inlineCode",{parentName:"p"},"set")," method in this example, would be compatible with ",Object(o.b)("inlineCode",{parentName:"p"},"React.RefCallback"),".")))}b.isMDXComponent=!0},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),f=n,m=b["".concat(c,".").concat(f)]||b[f]||u[f]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
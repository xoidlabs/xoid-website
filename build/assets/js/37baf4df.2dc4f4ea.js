"use strict";(self.webpackChunkxoid_website=self.webpackChunkxoid_website||[]).push([[893],{6671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(5893),s=t(1151);const r={id:"using-immer",title:"Using immer"},o=void 0,c={id:"recipes/using-immer",title:"Using immer",description:"While xoid's API surface is kept small intentionally, there's a way for extensions.",source:"@site/main/docs/recipes/using-immer.md",sourceDirName:"recipes",slug:"/recipes/using-immer",permalink:"/docs/recipes/using-immer",draft:!1,unlisted:!1,editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/recipes/using-immer.md",tags:[],version:"current",lastUpdatedAt:1675507638,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{id:"using-immer",title:"Using immer"},sidebar:"docs",previous:{title:"Working with nested state",permalink:"/docs/recipes/nested-state"},next:{title:"Using reducers",permalink:"/docs/recipes/using-reducers"}},d={},a=[];function l(e){const n={code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["While ",(0,i.jsx)(n.strong,{children:"xoid"}),"'s API surface is kept small intentionally, there's a way for extensions.\nIf you'd like to add a ",(0,i.jsx)(n.code,{children:".produce"})," method that uses ",(0,i.jsx)(n.strong,{children:"immer"})," internally, you can do it like the following."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { create } from 'xoid'\nimport { produce } from 'immer'\n\ncreate.plugins.push((atom) => {\n  atom.produce = (fn) => atom.update((s) => produce(s, fn))\n})\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you're using TypeScript, simply apply the following module augmentation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"declare module 'xoid' {\n  interface Atom<T> {\n    produce: (fn: (draft: T) => void) => void\n  }\n  interface Stream<T> {\n    produce: (fn: (draft: T) => void) => void\n  }\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
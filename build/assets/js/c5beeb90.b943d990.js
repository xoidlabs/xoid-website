"use strict";(self.webpackChunkxoid_website=self.webpackChunkxoid_website||[]).push([[330],{8704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(5893),s=n(1151);const c={id:"grabbing-refs",title:"Grabbing refs"},o=void 0,i={id:"recipes-react/grabbing-refs",title:"Grabbing refs",description:"A xoid atom can be used to grab element refs (as in React's terminology) in a typesafe manner.",source:"@site/main/docs/recipes-react/grabbing-refs.md",sourceDirName:"recipes-react",slug:"/recipes-react/grabbing-refs",permalink:"/docs/recipes-react/grabbing-refs",draft:!1,unlisted:!1,editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/recipes-react/grabbing-refs.md",tags:[],version:"current",lastUpdatedAt:1696460720,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{id:"grabbing-refs",title:"Grabbing refs"},sidebar:"docs",previous:{title:"Refactoring React classes",permalink:"/docs/recipes-react/refactoring-react-classes"},next:{title:"Working with nested state",permalink:"/docs/recipes/nested-state"}},a={},d=[];function l(e){const t={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.strong,{children:"xoid"})," atom can be used to grab element refs (as in React's terminology) in a typesafe manner."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const $ref = create<HTMLElement>() // Stream<HTMLElement>\n\n$ref.set(document.body)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["It's completely safe to feed ",(0,r.jsx)(t.code,{children:"atom.set"})," calls as refs to React components as ",(0,r.jsx)(t.code,{children:"ref"})," prop."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import create from 'xoid'\nimport { useSetup } from '@xoid/react'\n// inside React\nconst { $ref } = useSetup(() => {\n  const $ref = create<HTMLDivElement>()\n  $ref.subscribe((element) => console.log(element))\n  return { $ref }\n})\nreturn <div ref={$ref.set} />\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["This usage won't result in Typescript complaints. ",(0,r.jsx)(t.strong,{children:"xoid"}),"'s ",(0,r.jsx)(t.code,{children:"set"})," method in this example, would be compatible with ",(0,r.jsx)(t.code,{children:"React.RefCallback"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const s={},c=r.createContext(s);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);
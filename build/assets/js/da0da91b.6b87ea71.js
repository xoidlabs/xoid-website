"use strict";(self.webpackChunkxoid_website=self.webpackChunkxoid_website||[]).push([[900],{1188:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var n=o(5893),r=o(1151);const s={id:"use-atom",title:"useAtom"},i=void 0,a={id:"framework-integrations/use-atom",title:"useAtom",description:"import { useAtom } from '@xoid/react'",source:"@site/main/docs/framework-integrations/use-atom.md",sourceDirName:"framework-integrations",slug:"/framework-integrations/use-atom",permalink:"/docs/framework-integrations/use-atom",draft:!1,unlisted:!1,editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/framework-integrations/use-atom.md",tags:[],version:"current",lastUpdatedAt:1696464220,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{id:"use-atom",title:"useAtom"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/framework-integrations/introduction"},next:{title:"useSetup",permalink:"/docs/framework-integrations/use-setup"}},c={},m=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"import { useAtom } from '@xoid/react'"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"import { useAtom } from '@xoid/svelte'"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"import { useAtom } from '@xoid/vue'"})}),"\n",(0,n.jsx)(t.p,{children:"Used for subscribing a component to an atom."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { create } from 'xoid';\nimport { useAtom } from '@xoid/react'; // or '@xoid/vue' or '@xoid/svelte'\n\nconst $number = create(5);\nconst $person = create({ name: 'John', surname: 'Doe' });\n\n// inside a component\nconst number = useAtom($number);\n\n// inside a component\nconst name = useAtom($person.focus('name'));\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var n=o(7294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
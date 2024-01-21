"use strict";(self.webpackChunkxoid_website=self.webpackChunkxoid_website||[]).push([[554],{5812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(5893),o=n(1151);const a={id:"advanced-concepts",title:"Advanced concepts"},r=void 0,i={id:"advanced-concepts",title:"Advanced concepts",description:"Deriving state from external sources",source:"@site/main/docs/advanced-concepts.md",sourceDirName:".",slug:"/advanced-concepts",permalink:"/docs/advanced-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/advanced-concepts.md",tags:[],version:"current",lastUpdatedAt:1696460720,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{id:"advanced-concepts",title:"Advanced concepts"},sidebar:"docs",previous:{title:"Streams",permalink:"/docs/streams"},next:{title:"Introduction",permalink:"/docs/framework-integrations/introduction"}},c={},d=[{value:"Deriving state from external sources",id:"deriving-state-from-external-sources",level:2},{value:"Enhanced atoms",id:"enhanced-atoms",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"deriving-state-from-external-sources",children:"Deriving state from external sources"}),"\n",(0,s.jsxs)(t.p,{children:["With an additional overload of the ",(0,s.jsx)(t.code,{children:"read"})," function, you can consume external (non-",(0,s.jsx)(t.strong,{children:"xoid"}),") sources. This can be a Redux store, an RxJS observable, or anything that implements getState & subscribe pair. Here is an atom that derives its state from a Redux store:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import store from './reduxStore'\n\nconst derivedAtom = create((read) => read(store.getState, store.subscribe))\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As long as the external source implements a getState & subscribe, pair, it can be consumed by ",(0,s.jsx)(t.strong,{children:"xoid"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"enhanced-atoms",children:"Enhanced atoms"}),"\n",(0,s.jsxs)(t.p,{children:["An enhanced atom is an atom whose default ",(0,s.jsx)(t.code,{children:".set"}),' method is swapped with something else. This technique can be used to create "pass through atoms" that act as a mediators. Most people using ',(0,s.jsx)(t.strong,{children:"xoid"})," will not need to write enhanced atoms.\nThis naming is inspired by Redux's concept of enhancers. For a real-life scenario, see ",(0,s.jsx)(t.a,{href:"recipes/redux-interop",children:"Using in an existing Redux App"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import store from './reduxStore'\n\nconst $mediator = create((read) => read(store.getState, store.subscribe))\n\n// we swap the default`.set` method\n$mediator.set = (value: number) => store.dispatch({ type: 'ACTION', payload: value })\n\n$mediator.update(s => s + 1) // modifications to `$mediator` will be directly forwarded to Redux dispatch.\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Swapping ",(0,s.jsx)(t.code,{children:".set"})," also modifies the behavior of ",(0,s.jsx)(t.code,{children:".update"}),", because it uses ",(0,s.jsx)(t.code,{children:".set"})," internally. This is an intentional feature."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(7294);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
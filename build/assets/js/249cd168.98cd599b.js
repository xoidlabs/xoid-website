"use strict";(self.webpackChunkxoid_website=self.webpackChunkxoid_website||[]).push([[496],{1639:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(5893),s=o(1151);const a={id:"redux-interop",title:"Using in an existing Redux App"},i=void 0,r={id:"recipes/redux-interop",title:"Using in an existing Redux App",description:"xoid and Redux can coexist in a project without a problem. There's no requirement to get rid of Redux when xoid is added. If you're planning to gradually move away from Redux however, xoid is a good candidate to do so. For this, one thing you can do is to start managing some part of your Redux state via xoid. You can follow these steps:",source:"@site/main/docs/recipes/redux-interop.md",sourceDirName:"recipes",slug:"/recipes/redux-interop",permalink:"/docs/recipes/redux-interop",draft:!1,unlisted:!1,editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/recipes/redux-interop.md",tags:[],version:"current",lastUpdatedAt:1696460720,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{id:"redux-interop",title:"Using in an existing Redux App"},sidebar:"docs",previous:{title:"Using reducers",permalink:"/docs/recipes/using-reducers"},next:{title:"Redux Devtools integration",permalink:"/docs/recipes/redux-devtools-integration"}},d={},c=[{value:"Step 1: create an &quot;omnipotent&quot; action that has the ability to replace the Redux state",id:"step-1-create-an-omnipotent-action-that-has-the-ability-to-replace-the-redux-state",level:3},{value:"Step 2: Create an &quot;enhanced atom&quot;",id:"step-2-create-an-enhanced-atom",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"xoid"})," and Redux can coexist in a project without a problem. There's no requirement to get rid of Redux when ",(0,n.jsx)(t.strong,{children:"xoid"})," is added. If you're planning to gradually move away from Redux however, ",(0,n.jsx)(t.strong,{children:"xoid"})," is a good candidate to do so. For this, one thing you can do is to start managing some part of your Redux state via ",(0,n.jsx)(t.strong,{children:"xoid"}),". You can follow these steps:"]}),"\n",(0,n.jsx)(t.h3,{id:"step-1-create-an-omnipotent-action-that-has-the-ability-to-replace-the-redux-state",children:'Step 1: create an "omnipotent" action that has the ability to replace the Redux state'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const someExistingReducer = (state, action) => {\n  switch(action.type) {\n    case 'EXTERNAL_XOID_UPDATE': {\n      return action.payload\n    }\n    ... // other `case` clauses\n  }\n"})}),"\n",(0,n.jsx)(t.h3,{id:"step-2-create-an-enhanced-atom",children:'Step 2: Create an "enhanced atom"'}),"\n",(0,n.jsx)(t.p,{children:"This will forward subscriptions and state modifications directly to the Redux store."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { store } from './store'\n\nconst $mediatorAtom = create((read) => read(store.getState, store.subscribe))\n$mediatorAtom.set = (payload) => store.dispatch({ type: 'EXTERNAL_XOID_UPDATE', payload })\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Usually, atoms are derived from other ",(0,n.jsx)(t.strong,{children:"atoms"})," (as ",(0,n.jsx)(t.code,{children:"create((read) => get($someAtom))"}),"). Observe how ",(0,n.jsx)(t.code,{children:"read"})," is used with two arguments in this example. This is an additional overload that is used to consume an external (non-",(0,n.jsx)(t.strong,{children:"xoid"}),") source. As long as the external source implements some getState & subscribe pair, it can be consumed by ",(0,n.jsx)(t.strong,{children:"xoid"})," like this. (See ",(0,n.jsx)(t.a,{href:"../advanced-concepts#deriving-state-from-external-sources",children:"Deriving state from external sources"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:["Also, in the second line, you may see that the default ",(0,n.jsx)(t.code,{children:"set"})," method is overriden. In ",(0,n.jsx)(t.strong,{children:"xoid"}),"'s terminology, atoms like these are called ",(0,n.jsx)(t.a,{href:"../advanced-concepts#enhanced-atoms",children:"enhanced atoms"}),". Overriding the default ",(0,n.jsx)(t.code,{children:"set"})," method also will modify the ",(0,n.jsx)(t.code,{children:"update"})," method's behavior."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: If a partial Redux state is desired, A selector instead of the ",(0,n.jsx)(t.code,{children:"store.getState"})," can be used. Second argument remains same as ",(0,n.jsx)(t.code,{children:"store.subscribe"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>i});var n=o(7294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
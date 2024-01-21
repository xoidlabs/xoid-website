"use strict";(self.webpackChunkxoid_website=self.webpackChunkxoid_website||[]).push([[353],{1739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var o=t(5893),a=t(1151);const i={id:"performance-optimizations",title:"Performance optimizations"},s=void 0,l={id:"performance-optimizations",title:"Performance optimizations",description:"Lazy evaluation",source:"@site/main/docs/performance-optimizations.md",sourceDirName:".",slug:"/performance-optimizations",permalink:"/docs/performance-optimizations",draft:!1,unlisted:!1,editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/performance-optimizations.md",tags:[],version:"current",lastUpdatedAt:1696460720,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{id:"performance-optimizations",title:"Performance optimizations"},sidebar:"docs",previous:{title:"Quick Tutorial",permalink:"/docs/quick-tutorial"},next:{title:"Streams",permalink:"/docs/streams"}},c={},r=[{value:"Lazy evaluation",id:"lazy-evaluation",level:2},{value:"Lazy evaluation in derived atoms",id:"lazy-evaluation-in-derived-atoms",level:2},{value:"Dependency collection in derived atoms",id:"dependency-collection-in-derived-atoms",level:2},{value:"Lazy evaluation in atoms created with <code>.map</code> method",id:"lazy-evaluation-in-atoms-created-with-map-method",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"lazy-evaluation",children:"Lazy evaluation"}),"\n",(0,o.jsxs)(n.p,{children:["Atoms are lazily evaluated. If an atom is created using a ",(0,o.jsx)(n.em,{children:"state initializer function"}),", this function won't run until the ",(0,o.jsx)(n.code,{children:".value"})," getter is read, or the atom is subscribed for the first time."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const $atom = create(() => {\n  console.log('I am lazily evaluated!')\n  return expensiveComputation(25)\n})\n// nothing's logged on the console yet\n\nconsole.log($atom.value)\n// Console: \"I am lazily evaluated!\"\n// Console: 25\n\nconsole.log($atom.value)\n// Console: 25\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can make use of this feature to avoid expensive computations where possible."}),"\n",(0,o.jsx)(n.h2,{id:"lazy-evaluation-in-derived-atoms",children:"Lazy evaluation in derived atoms"}),"\n",(0,o.jsx)(n.p,{children:"A derived atom is not much different than a classical atom. Still, its state initializer function will wait for the atom's value to be requested in order to run."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const $alpha = create(3)\nconst $beta = create(5)\n\nconst $sum = create((read) => {\n  console.log('Evaluation occured')\n  return read($alpha) + read($beta)\n})\n// nothing's logged on the console yet\n"})}),"\n",(0,o.jsx)(n.p,{children:"Later, when it's consumed for the first time:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'console.log($sum.value)\n// Console: "Evaluation occured"\n// Console: 8\n\nconsole.log($sum.value)\n// Console: 8\n'})}),"\n",(0,o.jsx)(n.h2,{id:"dependency-collection-in-derived-atoms",children:"Dependency collection in derived atoms"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dependency collection"})," is another performance optimization that makes lazy evaluation much more advanced.\nWhen an atom is evaluated, it collects its latest dependencies. Since the ",(0,o.jsx)(n.code,{children:"$sum"})," is evaluated at least once in our previous example, it's now \"aware\" that it's dependencies are ",(0,o.jsx)(n.code,{children:"$alpha"})," and ",(0,o.jsx)(n.code,{children:"$beta"}),". Let's observe what will happen when those dependencies are updated:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'$alpha.set(30)\n$alpha.update((s) => s + 1)\n$beta.set(1000)\n// nothing\'s logged on the console yet\n\nconsole.log($sum.value)\n// Console: "Evaluation occured"\n// Console: 1031\n\nconsole.log($sum.value)\n// Console: 1031\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Observe that ",(0,o.jsx)(n.code,{children:"$sum"})," knew that it needs to rerun its state initializer when it's ",(0,o.jsx)(n.code,{children:".value"})," is requested after the dependencies are changed. This can happen thanks to ",(0,o.jsx)(n.strong,{children:"dependency collection"}),". ",(0,o.jsx)(n.code,{children:"$sum"})," knows that its internal state is invalid without causing evaluation. It can avoid evaluation until it's essential."]}),"\n",(0,o.jsxs)(n.h2,{id:"lazy-evaluation-in-atoms-created-with-map-method",children:["Lazy evaluation in atoms created with ",(0,o.jsx)(n.code,{children:".map"})," method"]}),"\n",(0,o.jsxs)(n.p,{children:["Same kind of performance optimizations apply to the atoms that are created using the ",(0,o.jsx)(n.code,{children:".map"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const $count = create(() => {\n  console.log('Ancestor atom evaluated')\n  return 100\n})\n\nconst $doubleCount = $count.map((value) => {\n  console.log('Evaluation occured')\n  return value * 2\n})\n// nothing's logged on the console yet\n\n$count.update(s => s + 1)\n// Console: \"Ancestor atom evaluated\"\n\nconsole.log($doubleCount.value)\n// Console: \"Evaluation occured\"\n// Console: 202\n\nconsole.log($doubleCount.value)\n// Console: 202\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"xoid"}),' supports special kind of atoms called "stream"s.\nA stream is "an atom that may or may not have an immediate value". Lazy evaluation works slightly different in a "stream". See the ',(0,o.jsx)(n.a,{href:"streams",children:"next section"})," for more."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var o=t(7294);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
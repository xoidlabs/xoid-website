"use strict";(self.webpackChunkxoid_website=self.webpackChunkxoid_website||[]).push([[195],{4007:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(4385),a=n(5660),r=n.n(a),i=n(7294),c=n(5893),o={duration:330,easing:"ease-in-out"},l=function(e){return e.trim().replace(/^(export )?const /,"").substring(0,7)};function d(e){var t=e.lines,n=e.framework,a=(0,i.useMemo)((function(){var e=[],n={},s=0;return t.forEach((function(t){var a=l(t);a?(n[a]&&(a+=++n[a]),e.push(a),n[a]=1):e.push(++s)})),e}),[t]),r=(0,i.useRef)();return(0,i.useEffect)((function(){r.current&&(0,s.ZP)(r.current,o)}),[]),(0,c.jsx)("code",{ref:r,children:t.map((function(e,t){return"---"===e?(0,c.jsx)(u,{framework:n},"---"):(0,c.jsx)(m,{line:e},a[t])}))})}function u(e){return(0,c.jsx)("div",{className:"splitter",children:(0,c.jsxs)("div",{className:"filename",children:["Counter.",e.framework]})})}var m=function(e){var t=e.line,n=t.match(/^\s*/)[0].length,s=t.match("const"),a=13-(t.match("export const")?13:s?6:0);return(0,c.jsx)("div",{style:{marginLeft:n-a+"ch",paddingLeft:a-n+"ch"},className:"line",dangerouslySetInnerHTML:{__html:r().highlight(t||" ",r().languages.jsx,"javascript")}})}},473:(e,t,n)=>{n.d(t,{Z:()=>m});var s=n(7294),a=n(2154),r=(n(4385),n(5660),n(2356),n(4007)),i=n(5893),c={reusability:"medium",setterUpdates:!0,globalState:!0,signals:!1,framework:"react",beau:!1,addExports:!0},o=new Event("build");var l=function(e){return"react"!==c.framework&&"doja"!==c.framework?("svelte"===c.framework&&(e=e.map((function(e){return e.replace(/\$counter/g,"counterAtom")}))),e):((e=e.filter((function(e){return e})).flatMap((function(e){return e.split("\n")}))).length>1&&(e[e.length-1]=e[e.length-1]+"\n"),e)},d=function(){return function(){var e,t=function(e,t){return void 0===t&&(t="+"),c.setterUpdates?"() => "+e+".value"+t+t:"() => "+e+".update((s) => s "+t+" 1)"},n=function(e){return t(e,"-")},s="low"===c.reusability?"":"medium"!==c.reusability?"  const { increment, decrement } = $counter.actions":"  const increment = "+t("$counter")+"\n  const decrement = "+n("$counter"),a="export const NumberModel = (payload) =>\n  create(payload, (atom) => ({\n    increment: "+t("atom")+",\n    decrement: "+n("atom")+",\n  }))",r="highest"===c.reusability?"const $counter = NumberModel(0)":"high"===c.reusability?"const $counter = create(0, (atom) => ({\n  increment: "+t("atom")+",\n  decrement: "+n("atom")+",\n}))":"const $counter = create(0)",i=(e=r,"react"===c.framework?e.replace("r = ","r = useSetup(() => ")+")":e).split("\n").map((function(e){return"  "+e})).join("\n"),d={useAtom:!c.signals,useSetup:!c.globalState&&("react"===c.framework||"doja"===c.framework)},u=d.useAtom||d.useSetup?"import { "+Object.keys(d).filter((function(e){return d[e]})).join(", ")+" } from '@xoid/"+c.framework+"'":"",m="low"===c.reusability?t("$counter"):"increment",h="low"===c.reusability?n("$counter"):"decrement",x=c.signals&&"low"===c.reusability&&c.globalState;x?c.beau||setTimeout((function(){c.beau=!0,window.dispatchEvent(o)}),1.5*animationOptions.duration):c.beau=!1;var p=x&&c.beau,f="svelte"===c.framework||"vue"===c.framework?"<script"+("vue"===c.framework?" setup":"")+">\n"+["highest"===c.reusability||c.globalState?"":"  import create from 'xoid'","  "+u,"highest"!==c.reusability||c.globalState?"":"  import { NumberModel } from './models.js'",c.globalState?"  import { "+("svelte"===c.framework?"$counter as counterAtom":"$counter")+" } from './models.js'":""].filter((function(e){return e})).join("\n")+"\n":"export const Counter = "+("doja"===c.framework?"Doja(":"")+"() => "+(p?"(":"{"),v="svelte"===c.framework?"<\/script>\n\n{$count}\n<button on:click={"+m+"}>+</button>\n<button on:click={"+h+"}>-</button>":"vue"===c.framework?'<\/script>\n\n<template>\n  {{ count }}\n  <button @click="'+m+'">+</button>\n  <button @click="'+h+'">-</button>\n</template>':p?"  <>\n    {"+(c.signals?"$counter.value":"count")+"}\n    <button onClick={"+m+"}>+</button>\n    <button onClick={"+h+"}>-</button>\n  </>\n)":"  return "+("doja"===c.framework?"() => ":"")+"(\n    <>\n      {"+(c.signals?"$counter.value":"count")+"}\n      <button onClick={"+m+"}>+</button>\n      <button onClick={"+h+"}>-</button>\n    </>\n  )\n}";"doja"===c.framework&&(v+=")");var j,b=["doja"===c.framework?"import Doja, { create } from 'doja'":"react"===c.framework||c.globalState||"highest"===c.reusability?"import create from 'xoid'":"","react"===c.framework?u:""],C=["highest"===c.reusability?a:"",c.globalState?(j=r,c.addExports?j.replace(/const/g,"export const"):j):""],g=("vue"===c.framework||"svelte"===c.framework)&&(c.globalState||"highest"===c.reusability),w=document.querySelector(".code-demo-container");return w&&(g?w.classList.add("split"):w.classList.remove("split")),[b,C,g?["---"]:[],[f].concat(l([c.globalState?"":i,c.signals?"":"  const count = useAtom($counter)",s]),[v])].map((function(e){return e.filter((function(e){return e})).join("\n")})).filter((function(e){return e})).join("\n\n")}().split("\n").map((function(e){return e||" "}))};function u(){var e=(0,s.useState)((function(){return d()})),t=e[0],n=e[1];return(0,s.useEffect)((function(){var e=function(){return n((function(){return d()}))};return window.addEventListener("build",e,!1),function(){return window.removeEventListener("build",e,!1)}}),[]),(0,i.jsx)(r.Z,{lines:t,framework:c.framework})}window.addEventListener("build",(function(){var e=document.querySelector(".code-demo-container");e.classList.remove("animate"),setTimeout((function(){return e.classList.add("animate")}))}));const m=function(){var e=(0,s.useState)(c),t=e[0],n=e[1],r=function(e,t){c[e]=t,"react"!==c.framework&&"doja"!==c.framework&&(c.signals=!1),"doja"===c.framework?c.signals=!0:c.signals=!1,n(Object.assign({},c)),window.dispatchEvent(o)};return(0,i.jsx)(a.$,{className:"demo",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"column",children:[(0,i.jsx)("h2",{children:"Quick Look"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"xoid"})," makes it easier to refactor between scopes, frameworks, and different degrees of reusability."]}),(0,i.jsxs)("div",{className:"controls-container",children:[(0,i.jsxs)("fieldset",{children:[(0,i.jsx)("div",{children:"Framework"}),(0,i.jsx)("div",{children:["react","vue","svelte"].map((function(e){return(0,i.jsxs)("label",{onClick:function(){return r("framework",e)},children:[(0,i.jsx)("input",{type:"radio",checked:t.framework===e}),(0,i.jsx)("span",{children:e})]})}))})]}),(0,i.jsxs)("fieldset",{children:[(0,i.jsx)("div",{children:"Scope"}),(0,i.jsx)("div",{children:["local","global"].map((function(e){return(0,i.jsxs)("label",{onClick:function(){return r("globalState","global"===e)},children:[(0,i.jsx)("input",{type:"radio",checked:!(t.globalState^"global"===e)}),(0,i.jsx)("span",{children:e})]})}))})]}),(0,i.jsxs)("fieldset",{children:[(0,i.jsx)("div",{children:"Reuse"}),(0,i.jsx)("div",{children:["low","medium","high","highest"].map((function(e){return(0,i.jsxs)("label",{onClick:function(){return r("reusability",e)},children:[(0,i.jsx)("input",{type:"radio",checked:t.reusability===e}),(0,i.jsx)("span",{children:e})]})}))})]}),(0,i.jsx)("fieldset",{children:(0,i.jsxs)("div",{className:"checkbox",children:[(0,i.jsx)("input",{id:"c1",type:"checkbox",checked:t.setterUpdates,onChange:function(e){return r("setterUpdates",e.target.checked)}}),(0,i.jsx)("label",{for:"c1",children:"Setters"})]})}),(0,i.jsxs)("a",{className:"github-star",target:"_blank",href:"https://github.com/xoidlabs/xoid",children:["Star us on GitHub \ud83e\udd29",(0,i.jsx)("img",{src:"https://img.shields.io/github/stars/xoidlabs/xoid.svg?style=social&label=Star","aria-label":"Star xoidlabs/xoid on GitHub"})]})]})]}),(0,i.jsxs)("div",{className:"code-demo-container",children:[(0,i.jsx)("div",{className:"filename main",children:"models.js"}),(0,i.jsxs)("div",{className:"window-buttons",children:[(0,i.jsx)("div",{className:"btn"}),(0,i.jsx)("div",{className:"btn"}),(0,i.jsx)("div",{className:"btn"})]}),(0,i.jsx)(u,{})]})]})})}},2154:(e,t,n)=>{n.d(t,{$:()=>a,V:()=>r});n(7294);var s=n(5893);function a(e){var t=e.element,n=void 0===t?"section":t,a=e.children,r=e.className,i=e.background,c=void 0===i?"light":i,o=e.style,l=n;return(0,s.jsx)(l,{className:"Section "+r+" "+c,style:o,children:a})}function r(e){var t=e.columnOne,n=e.columnTwo,a=e.reverse,r=e.demo;return(0,s.jsxs)("div",{className:"TwoColumns "+(a?"reverse":""),children:[(0,s.jsx)("div",{className:"column first "+(a?"right":"left"),children:t}),(0,s.jsx)("div",{className:"column last "+(a?"left":"right")+" "+(r?"demo":""),children:n})]})}},5098:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(7294),a=n(2154),r=n(4007),i=n(5893),c={split:{xoid:"import { create } from 'xoid'\n\nconst $alpha = create(9);\nconst $beta = create(16);\nconst $sum = create((get) => get($alpha) + get($beta));","@xoid/reactive":"import { create, computed } from '@xoid/reactive'\n  \nconst $alpha = create(9);\nconst $beta = create(16);\nconst $sum = computed(() => $alpha.value + $beta.value);"},joined:{xoid:"import { create } from 'xoid'\n  \nconst $state = create({\n  alpha: 9,\n  beta: 16\n});\n\nconst $sum = create((get) => {\n  const $alpha = $state.focus('alpha')\n  const $beta = $state.focus('beta')\n  return get($alpha) + get($beta)\n});","@xoid/reactive":"import { reactive, computed } from '@xoid/reactive'\n\nconst state = reactive({\n  alpha: 9,\n  beta: 16\n});\n\nconst $sum = computed(() => state.alpha + state.beta);"}};const o=function(){var e=(0,s.useState)({library:"@xoid/reactive",style:"split"}),t=e[0],n=e[1],o=function(e,t){n((function(n){var s;return Object.assign({},n,((s={})[e]=t,s))}))};return(0,i.jsx)(a.$,{className:"demo",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"column",children:[(0,i.jsx)("h2",{children:"Your Favorite Coding Style"}),(0,i.jsxs)("p",{children:["While ",(0,i.jsx)("b",{children:"xoid"})," is a robust library based on explicit subscriptions, ",(0,i.jsx)("b",{children:"@xoid/reactive"})," is a thin proxy layer around it. They're interoperable."]}),(0,i.jsxs)("div",{className:"controls-container",children:[(0,i.jsxs)("fieldset",{className:"large",children:[(0,i.jsx)("div",{children:"Flavor"}),(0,i.jsx)("div",{children:["xoid","@xoid/reactive"].map((function(e){return(0,i.jsxs)("label",{onClick:function(){return o("library",e)},children:[(0,i.jsx)("input",{type:"radio",checked:t.library===e}),(0,i.jsx)("span",{children:e})]})}))})]}),(0,i.jsxs)("fieldset",{className:"large",children:[(0,i.jsx)("div",{children:"STYLE"}),(0,i.jsx)("div",{children:["split","joined"].map((function(e){return(0,i.jsxs)("label",{onClick:function(){return o("style",e)},children:[(0,i.jsx)("input",{type:"radio",checked:t.style===e}),(0,i.jsx)("span",{children:e})]})}))})]})]})]}),(0,i.jsxs)("div",{className:"code-demo-container",children:[(0,i.jsx)("div",{className:"filename main",children:"models.js"}),(0,i.jsxs)("div",{className:"window-buttons",children:[(0,i.jsx)("div",{className:"btn"}),(0,i.jsx)("div",{className:"btn"}),(0,i.jsx)("div",{className:"btn"})]}),(0,i.jsx)(r.Z,{lines:c[t.style][t.library].split("\n")})]})]})})}},3395:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});n(7294);var s=n(5296),a=n(9286),r=n(5742),i=n(4996),c=n(7441),o=n(5893);const l=function(){return(0,o.jsxs)("div",{role:"tablist",className:"tablist","aria-orientation":"horizontal",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{id:"tab-react",role:"tab","aria-controls":"panel-react",tabIndex:0,"aria-selected":"true",className:"tab-button active",children:[(0,o.jsx)("div",{"aria-label":"React framework",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"170 0 500 595.3",children:(0,o.jsxs)("g",{fill:"#61DAFB",children:[(0,o.jsx)("path",{d:"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"}),(0,o.jsx)("circle",{cx:"420.9",cy:"296.5",r:"45.7"}),(0,o.jsx)("path",{d:"M520.5 78.1z"})]})})}),"React"]}),(0,o.jsxs)("button",{id:"tab-vue",role:"tab","aria-controls":"panel-vue",tabIndex:-1,"aria-selected":"false",className:"tab-button",children:[(0,o.jsx)("div",{"aria-label":"Vue framework",children:(0,o.jsxs)("svg",{viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z",fill:"#41b883"}),(0,o.jsx)("path",{d:"M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z",fill:"#34495e"})]})}),"Vue"]})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{id:"tab-svelte",role:"tab","aria-controls":"panel-svelte",tabIndex:-1,"aria-selected":"false",className:"tab-button",children:[(0,o.jsx)("div",{"aria-label":"Svelte framework",children:(0,o.jsxs)("svg",{viewBox:"-12 0 110.1 118",children:[(0,o.jsx)("path",{d:"M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5",fill:"#ff3e00"}),(0,o.jsx)("path",{d:"M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5",fill:"#fff"})]})}),"Svelte"]}),(0,o.jsxs)("button",{id:"tab-javascript",role:"tab","aria-controls":"panel-javascript",tabIndex:-1,"aria-selected":"false",className:"tab-button",children:[(0,o.jsx)("div",{"aria-label":"Plain JavaScript",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 630 630",children:[(0,o.jsx)("rect",{width:630,height:630,fill:"#f7df1e"}),(0,o.jsx)("path",{d:"m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"})]})}),"Vanilla JS"]})]})]})};var d=n(2154);const u=function(){return(0,o.jsx)(d.$,{children:(0,o.jsxs)("div",{className:"feature-columns",children:[(0,o.jsx)("div",{className:"css-0",children:(0,o.jsxs)("div",{className:"chakra-stack css-1fcydsv",children:[(0,o.jsx)("div",{className:"css-1rtuhur",children:(0,o.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:2,viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round","data-theme":"dark",focusable:"false",className:"chakra-icon css-s48i3l",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,o.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,o.jsx)("line",{x1:12,y1:"22.08",x2:12,y2:12})]})}),(0,o.jsxs)("div",{className:"css-0",children:[(0,o.jsx)("h2",{className:"chakra-heading css-9dycqs",children:"Small"}),(0,o.jsx)("p",{className:"chakra-text css-s66uvp",children:"It's easy-to-learn, has no external dependencies, and it's only 1.1kB minified and gzipped."})]})]})}),(0,o.jsx)("div",{className:"css-0",children:(0,o.jsxs)("div",{className:"chakra-stack css-1fcydsv",children:[(0,o.jsx)("div",{className:"css-1rtuhur",children:(0,o.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:2,viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round","data-theme":"dark",focusable:"false",className:"chakra-icon css-s48i3l",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("rect",{x:3,y:11,width:18,height:11,rx:2,ry:2}),(0,o.jsx)("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),(0,o.jsxs)("div",{className:"css-0",children:[(0,o.jsx)("h2",{className:"chakra-heading css-9dycqs",children:"Robust"}),(0,o.jsx)("p",{className:"chakra-text css-s66uvp",children:"It's based on immutable updates and explicit subscriptions. This makes it ideal for teams."})]})]})}),(0,o.jsx)("div",{className:"css-0",children:(0,o.jsxs)("div",{className:"chakra-stack css-1fcydsv",children:[(0,o.jsx)("div",{className:"css-1rtuhur",children:(0,o.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:2,viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round","data-theme":"dark",focusable:"false",className:"chakra-icon css-s48i3l",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("circle",{cx:11,cy:11,r:8}),(0,o.jsx)("line",{x1:21,y1:21,x2:"16.65",y2:"16.65"})]})}),(0,o.jsxs)("div",{className:"css-0",children:[(0,o.jsx)("h2",{className:"chakra-heading css-9dycqs",children:"Well-documented"}),(0,o.jsx)("p",{className:"chakra-text css-s66uvp",children:'Extensively documented, including a rich "Recipes" section and examples.'})]})]})})]})})},m=function(){return(0,o.jsxs)("div",{className:"outer-container",children:[(0,o.jsxs)("div",{className:"mask-container",style:{position:"relative",width:260,height:260},children:[(0,o.jsx)("div",{style:{position:"absolute",top:5,left:38,transform:"rotate(90deg)"},children:(0,o.jsx)("div",{className:"spinner"})}),(0,o.jsx)("div",{style:{position:"absolute",top:"-30px",left:5,transform:"rotate(0deg)"},children:(0,o.jsx)("div",{className:"spinner delay"})})]}),(0,o.jsx)("div",{className:"pencil-container",children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:189,viewBox:"0 0 628 626",version:"1.1",children:(0,o.jsx)("path",{d:"M 134 8.641 C 130.077 9.934, 122.042 17.633, 71.356 68.660 C 29.964 110.330, 12.395 128.679, 10.378 132.347 C 6.329 139.712, 6.373 147.529, 10.505 154.689 C 12.546 158.225, 37.236 183.833, 88 235.066 C 128.975 276.419, 162.823 311.096, 163.218 312.127 C 163.613 313.157, 163.613 314.864, 163.218 315.920 C 162.823 316.976, 129.200 351.424, 88.500 392.472 C 28.015 453.474, 13.906 468.207, 11.250 473.140 L 8 479.175 8 537.909 C 8 605.812, 7.635 602.779, 16.936 612.090 C 26.267 621.431, 23.390 621.091, 90.580 620.774 L 148.500 620.500 153.268 618.152 C 156.867 616.380, 172.322 601.420, 216.286 557.152 C 248.323 524.893, 282.185 490.710, 291.534 481.190 C 306.789 465.655, 308.886 463.869, 311.973 463.782 C 315.239 463.689, 319.230 467.529, 390.956 539.792 C 445.696 594.941, 467.739 616.517, 471 618.138 C 473.931 619.595, 477.417 620.397, 481 620.438 C 492.105 620.564, 491.886 620.751, 554.533 557.282 C 616.025 494.983, 616.258 494.708, 616.277 484.467 C 616.295 474.031, 615.766 473.389, 565.159 422.500 C 483.364 340.248, 461.529 317.958, 460.787 315.954 C 459.225 311.731, 454.208 317.129, 542.551 228 C 589.019 181.118, 591.835 178.071, 595.782 170.396 C 605.265 151.956, 605.507 135.886, 596.569 118.138 C 592.084 109.230, 581.968 98.148, 543.874 60.409 C 516.001 32.795, 512.883 30.017, 506 26.669 C 485.972 16.926, 467.361 18.063, 449.642 30.114 C 444.515 33.601, 424.582 53.144, 379 99.375 C 318.651 160.583, 315.318 163.785, 311.832 163.890 C 308.260 163.997, 306.194 162.012, 233.332 88.474 C 169.052 23.598, 157.667 12.528, 152.590 9.974 C 145.959 6.637, 141.130 6.291, 134 8.641 M 140.333 31.932 C 137.675 32.629, 32.810 138.385, 31.721 141.467 C 31.293 142.679, 31.293 144.593, 31.721 145.721 C 32.150 146.848, 65.468 180.923, 105.762 221.444 C 176.257 292.337, 179.150 295.108, 182.373 294.810 C 185.328 294.536, 192.036 288.127, 239.361 240.358 C 287.550 191.718, 293 185.894, 293 183.046 C 293 180.428, 291.562 178.395, 284.747 171.378 C 272.595 158.865, 274.223 158.368, 250.687 181.772 C 239.151 193.244, 230.446 201.114, 228.858 201.508 C 225.636 202.306, 221.008 200.097, 218.067 196.357 C 215.170 192.676, 214.587 189.667, 216.178 186.629 C 216.919 185.216, 225.731 175.533, 235.762 165.111 C 250.702 149.589, 254 145.647, 254 143.316 C 254 141.008, 251.682 138.158, 241.736 128.235 C 225.889 112.427, 226.937 112.486, 212.982 126.605 C 207.217 132.437, 201.009 137.855, 199.187 138.645 C 196.124 139.971, 195.562 139.906, 191.770 137.790 C 189.278 136.399, 186.892 133.995, 185.692 131.666 C 183.047 126.532, 183.882 124.973, 196.500 111.494 C 202 105.618, 206.850 100.195, 207.279 99.443 C 208.931 96.541, 206.461 92.931, 195.014 81.514 C 184.597 71.124, 182.768 69.702, 179.926 69.783 C 177.111 69.863, 174.210 72.337, 157.595 88.822 C 147.093 99.243, 137.510 108.070, 136.300 108.436 C 133.490 109.288, 129.012 106.991, 125.619 102.959 C 122.821 99.634, 122.318 96.215, 124.107 92.684 C 124.715 91.483, 133.293 82.368, 143.168 72.428 C 165.251 50.203, 164.860 51.427, 153.505 40.005 C 145.411 31.863, 143.969 30.979, 140.333 31.932 M 471.326 44.980 C 464.202 46.499, 460.909 48.852, 447.750 61.828 C 436.156 73.261, 435 74.724, 435 77.963 C 435 81.335, 437.886 84.409, 489.271 135.762 C 531.607 178.071, 544.085 190, 546.008 190 C 547.845 190, 551.821 186.620, 561.594 176.750 C 572.884 165.348, 575.019 162.674, 576.907 157.579 C 579.922 149.439, 579.927 137.586, 576.919 129.421 C 574.911 123.971, 572.462 121.193, 546.137 94.500 C 502.485 50.238, 502.228 49.994, 496.466 47.356 C 490.548 44.647, 478.311 43.490, 471.326 44.980 M 340.525 169.779 C 300.940 209.776, 220.409 291.026, 161.569 350.336 C 102.729 409.645, 53.535 459.595, 52.250 461.336 C 50.620 463.542, 50.095 465.257, 50.516 467 C 50.848 468.375, 55.471 473.887, 60.791 479.250 C 68.815 487.339, 70.982 489, 73.513 489 C 77.025 489, 61.994 503.951, 292.556 271.119 C 425.384 136.983, 438.529 123.421, 438.820 120.207 C 439.118 116.924, 438.452 115.986, 429.339 106.838 C 420.600 98.067, 419.156 97.003, 416.019 97.029 C 412.697 97.057, 408.464 101.136, 340.525 169.779 M 430.939 162.750 C 389.742 204.562, 211.526 384.536, 151.942 444.500 C 120.243 476.400, 93.751 503.554, 93.069 504.843 C 92.388 506.132, 92.075 508.162, 92.374 509.354 C 92.673 510.546, 98.543 517.082, 105.418 523.879 C 116.846 535.177, 118.158 536.180, 120.709 535.564 C 122.483 535.136, 128.997 529.354, 138.587 519.695 C 146.885 511.338, 181.087 476.825, 214.592 443 C 248.096 409.175, 322.689 333.924, 380.354 275.775 C 481.124 174.160, 485.200 169.908, 485.200 166.390 C 485.200 163.052, 484.161 161.689, 473.366 150.865 C 456.656 134.112, 460.108 133.145, 430.939 162.750 M 501.500 185.966 C 500.400 186.428, 486.218 200.237, 469.985 216.653 C 359.705 328.175, 231.013 458.092, 188.684 500.632 C 140.619 548.935, 138.800 550.900, 138.800 554.513 C 138.800 557.923, 139.692 559.158, 148.631 568.132 C 156.753 576.284, 158.987 577.999, 161.481 577.994 C 164.151 577.988, 173.276 569.116, 240.415 501.244 C 282.169 459.035, 340.230 400.425, 369.440 371 C 537.254 201.952, 527 212.508, 527 208.794 C 527 205.784, 525.773 204.173, 516.645 195.190 C 510.950 189.585, 505.662 185.029, 504.895 185.063 C 504.128 185.098, 502.600 185.504, 501.500 185.966 M 384.864 387.119 C 333.249 439.464, 331.500 441.363, 331.500 445.035 C 331.500 448.728, 333.519 450.859, 404.892 522.487 C 468.187 586.008, 478.693 596.153, 481.253 596.226 C 483.877 596.301, 489.412 591.093, 528.861 551.433 C 553.413 526.750, 577.732 502.174, 582.903 496.819 C 595.065 484.228, 595.108 483.624, 584.604 473.120 C 573.154 461.670, 574.318 461.270, 550.675 484.800 C 533.326 502.067, 531.046 504, 528.036 504 C 521.460 504, 514.965 496.295, 516.461 490.269 C 516.894 488.524, 524.034 480.574, 535.774 468.766 C 559.435 444.967, 558.982 447.525, 542.466 430.966 C 526.605 415.064, 527.572 415.078, 511.958 430.500 C 502.473 439.868, 499.776 441.999, 497.407 441.996 C 490.655 441.988, 483.943 434.347, 485.442 428.374 C 485.867 426.680, 490.582 421.049, 497.140 414.402 C 511.939 399.403, 511.984 400.523, 495.919 384.419 C 485.782 374.258, 483.005 372, 480.644 372 C 478.217 372, 474.973 374.868, 460.232 390.050 C 442.617 408.192, 439.186 411, 434.626 411 C 429.298 411, 422.388 402.367, 423.627 397.259 C 424.049 395.517, 431.246 387.476, 443.148 375.446 C 458.981 359.443, 462 355.923, 462 353.466 C 462 351.124, 460.256 348.788, 453.271 341.770 C 445.974 334.439, 444.024 333, 441.385 333 C 438.539 333, 432.976 338.327, 384.864 387.119 M 32.653 489.490 C 31.165 490.978, 31.076 495.814, 31.660 543.312 C 32.105 579.454, 32.640 595.726, 33.401 596.235 C 34.006 596.639, 57.960 596.976, 86.633 596.985 C 138.738 597, 138.767 596.999, 139.315 594.903 C 139.617 593.749, 139.557 591.978, 139.182 590.967 C 138.095 588.036, 38.983 489.034, 36.516 488.415 C 35.155 488.073, 33.651 488.491, 32.653 489.490",stroke:"none",fill:"currentColor",fillRule:"evenodd"})})})]})};var h="\n- Easy to learn\n- Small bundle size\n- Zero configuration\n- Framework-agnostic\n- Computed values\n- Async actions\n- Transient updates\n- Local & global state\n- Finite state machines\n- Extensive Typescript support\n- Devtools\n  ",x=[{text:"## Simple primitives\n**xoid** is based on *atoms*. Atoms are holders of state. `create` function is used to create them.\n  ",code:"import create from 'xoid'\n\nconst $count = create(3)\n\n$count.set(5)\n$count.update((state) => state + 1)\nconsole.log($count.value) // 6\n"},{text:"## Actions\n\nWith the second argument, you can define actions for your atoms.\n\n",code:"import create from 'xoid'\n\nconst $count = create(3, (atom) => ({\n  increment: () => atom.update((s) => s + 1),\n  incrementBy: (by) => atom.update((s) => s + by)\n}))\n\n$count.actions.incrementBy(5)\n"},{text:"\n## Computed Values\n\nIt has a **Recoil**-inspired API for derived atoms. Alternatively, the `.map` method can be used.\n",code:"import create from 'xoid'\n\nconst $doubleCount = create((get) => get($count) * 2)\n\nconst $tripleCount = $count.map((state) => state * 3)\n\n"},{text:"\n## Framework Integrations\n\n**xoid** has **React**, **Vue**, and **Svelte** integrations. It can be used without any framework as well.\n",code:"import create from 'xoid'\nimport { useAtom } from '@xoid/react'\n// @xoid/vue and @xoid/svelte packages are used the same way\n\n// in a component\nconst count = useAtom($count)\nconst { increment } = $count.actions\n\n// vanilla JavaScript\nconst unsubscribe = $count.subscribe(console.log)\n"},{text:'\n## No more hand-written reducers!\n\nThere\'s the `.focus` method, which can be used as a selector/lens. \n**xoid** is based on immutable updates, so if you "surgically" set state of a focused branch, changes will propagate to the root.\n',code:"import create from 'xoid'\n\nconst atom = create({ deeply: { nested: { alpha: 5 } } })\nconst previousValue = atom.value\n\n// select `.deeply.nested.alpha`\nconst alpha = atom.focus((s) => s.deeply.nested.alpha)\nalpha.update((s) => s + 1)\n\n// root state is replaced with new immutable state\nassert(atom.value !== previousValue) // \u2705\n"},{text:"\n## No-API Finite State Machines!\nAtoms are potent primitives. No additional syntax is required for expressing finite state machines. \n\n",code:"import create from 'xoid'\n\nconst red = { color: '#f00', onClick: () => machine.set(green) }\nconst green = { color: '#0f0', onClick: () => machine.set(red) }\nconst machine = create(red)\n\n// in a component\nconst { color, onClick } = useAtom(machine)\nreturn <div style={{ color }} onClick={onClick}/>\n"}];function p(e){var t=e.href,n=e.type,s=void 0===n?"primary":n,a=e.target,r=e.children;return(0,o.jsx)("a",{className:"ActionButton "+s,href:t,target:a,children:r})}function f(e){e.title;var t=e.text,n=e.moreContent;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:t}}),n]})}function v(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{type:"primary",href:(0,i.Z)("docs/getting-started"),target:"_self",children:"Get started"}),(0,o.jsx)(p,{type:"secondary",href:(0,i.Z)("docs/examples"),target:"_self",children:"Examples"})]})}function j(){return(0,o.jsx)(d.$,{background:"none",className:"HeaderHero",style:{paddingTop:100,position:"relative"},children:(0,o.jsxs)("div",{className:"titleContainer",style:{zIndex:1},children:[(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("div",{className:"gradient"}),(0,o.jsx)(m,{})]}),(0,o.jsx)("p",{className:"tagline",children:"Framework-agnostic state management library designed for simplicity and scalability"}),(0,o.jsx)(l,{}),(0,o.jsx)("div",{className:"buttons",children:(0,o.jsx)(v,{})})]})})}function b(){return(0,o.jsx)(d.$,{className:"NativeApps",background:"light",children:(0,o.jsx)("div",{className:"FeatureSection",style:{position:"relative"},children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,c.TU)(h)}})})})}function C(e){return(0,o.jsx)(d.$,{className:"NativeCode "+(e.corner?"corner":""),background:e.tint?"tint":"light",children:(0,o.jsx)(d.V,{columnOne:(0,o.jsx)(f,{text:(0,c.TU)(e.content.text)}),columnTwo:(0,o.jsx)(a.Z,{language:"jsx",children:e.content.code})})})}function g(e){var t=e.children,s=e.fallback;return"window"in n.g&&null!=t?(0,o.jsx)(o.Fragment,{children:t()}):s||null}const w=function(){return(0,o.jsxs)(s.Z,{wrapperClassName:"homepage",children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsx)("title",{children:"xoid \xb7 Framework-agnostic state management for JavaScript"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.82"})]}),(0,o.jsx)(j,{}),(0,o.jsx)("div",{children:(0,o.jsx)(g,{children:function(){var e=n(473).Z;return(0,o.jsx)(e,{})}})}),(0,o.jsx)(u,{}),x.map((function(e,t){return(0,o.jsx)(C,{content:e,tint:!(t%2),corner:0})})),(0,o.jsx)("div",{children:(0,o.jsx)(g,{children:function(){var e=n(5098).Z;return(0,o.jsx)(e,{})}})}),(0,o.jsx)(d.$,{background:"none",className:"Embed",style:{display:"flex",justifyContent:"center",padding:25},children:(0,o.jsx)("iframe",{src:"https://codesandbox.io/embed/cool-dream-wp9rn6?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",maxWidth:1080,height:400,border:0,borderRadius:4,overflow:"hidden"},title:"competent-carson-j2tfqm",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}),(0,o.jsx)(b,{})]})}}}]);
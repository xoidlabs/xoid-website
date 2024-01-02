(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),c=(t(0),t(94)),o=["components"],i={id:"dynamic-functions-with-fixed-references",title:"Dynamic functions with fixed references"},s={unversionedId:"recipes-react/dynamic-functions-with-fixed-references",id:"recipes-react/dynamic-functions-with-fixed-references",isDocsHomePage:!1,title:"Dynamic functions with fixed references",description:"Inside a React function component, in some cases a function with a fixed reference, but a dynamic content may be needed. While this is not as straightforward with React, it is with *xoid**.",source:"@site/main/docs/recipes-react/dynamic-functions-with-fixed-references.md",slug:"/recipes-react/dynamic-functions-with-fixed-references",permalink:"/docs/recipes-react/dynamic-functions-with-fixed-references",editUrl:"https://github.com/xoidlabs/xoid/blob/main/docs/recipes-react/dynamic-functions-with-fixed-references.md",version:"current",sidebar:"docs",previous:{title:"Creating React custom hooks",permalink:"/docs/recipes-react/creating-react-custom-hooks"},next:{title:"Refactoring React classes",permalink:"/docs/recipes-react/refactoring-react-classes"}},p=[{value:"Quick Example",id:"quick-example",children:[]},{value:"Another Example",id:"another-example",children:[]}],l={rightToc:p};function u(e){var n=e.components,t=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Inside a React function component, in some cases ",Object(c.b)("strong",{parentName:"p"},"a function with a fixed reference, but a dynamic content")," may be needed. While this is not as straightforward with React*, it is with ",Object(c.b)("strong",{parentName:"p"},"xoid"),"."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"*: Since this recipe was written, ",Object(c.b)("inlineCode",{parentName:"p"},"useEvent"),' "the missing hook" has been added to React to solve the same problem. However ergonomicity claims of ',Object(c.b)("strong",{parentName:"p"},"xoid")," still hold.")),Object(c.b)("h3",{id:"quick-example"},"Quick Example"),Object(c.b)("p",null,"Let's imagine, we have the following ",Object(c.b)("inlineCode",{parentName:"p"},"React.useEffect"),". Inside it, an event listener is attached and removed everytime when ",Object(c.b)("inlineCode",{parentName:"p"},"props.number")," changes."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n  const callback = () => console.log(props.number)\n  window.addEventListener('click', callback)\n  return () => window.removeEventListener('click', callback)\n}, [props.number])\n")),Object(c.b)("p",null,"Let's assume that, due to changed app requirements, we want to attach the listener only once, and remove it once the component is unmounted. This can be achieved in React way as the following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"// a ref to keep the value\nconst numberRef = useRef(props.number)\n// an effect to update ref's current value when the `props.number` is changed\nuseEffect(() => (numberRef.current = props.number), [props.number])\n\n// This time useEffect is with an empty dependency array, and it references the ref.\nuseEffect(() => {\n  const callback = () => console.log(numberRef.current)\n  window.addEventListener('click', callback)\n  return () => window.removeEventListener('click', callback)\n}, [])\n")),Object(c.b)("p",null,"With ",Object(c.b)("strong",{parentName:"p"},"xoid"),", the equivalent optimization is simply the following:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"useSetup(($props, { effect }) => {\n  effect(() => {\n    const callback = () => console.log($props.value.number)\n    window.addEventListener('click', callback)\n    return () => window.removeEventListener('click', callback)\n  })\n}, props)\n")),Object(c.b)("p",null,"After getting used to, ",Object(c.b)("strong",{parentName:"p"},"xoid")," can feel more intuitive than React hooks in a lot of cases."),Object(c.b)("h3",{id:"another-example"},"Another Example"),Object(c.b)("p",null,"Let's propose another problem, this time let's examine it in a more concrete scenario."),Object(c.b)("p",null,"Let's imagine, inside a React component, we're supposed to initialize a class called ",Object(c.b)("inlineCode",{parentName:"p"},"DragDropLibrary")," ",Object(c.b)("strong",{parentName:"p"},"only once")," as ",Object(c.b)("inlineCode",{parentName:"p"},"new DragDropLibrary({ onDrop })"),". Let's assume we have only one chance to supply ",Object(c.b)("inlineCode",{parentName:"p"},"onDrop")," to the class instance, and this function cannot be replaced afterwards."),Object(c.b)("p",null,"Imagine that ",Object(c.b)("inlineCode",{parentName:"p"},"props.func")," is our dynamic function that changes in every render, and we're supposed to feed it to ",Object(c.b)("inlineCode",{parentName:"p"},"onDrop"),"."),Object(c.b)("p",null,"With ",Object(c.b)("strong",{parentName:"p"},"xoid"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"useSetup(($props) => {\n  const onDrop = (...args) => $props.value.func(...args)\n  new DragDropLibrary({ onDrop })\n}, props)\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Think of ",Object(c.b)("inlineCode",{parentName:"p"},"useSetup")," as not a hook, but as something unchanging, some closure that does not ever rerender. ",Object(c.b)("strong",{parentName:"p"},"@xoid/react"),", in some sense, is a React without hooks.")),Object(c.b)("p",null,"Without ",Object(c.b)("strong",{parentName:"p"},"xoid"),": "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const funcRef = useRef((...args) => props.func(...args))\nuseEffect(() => { funcRef.current = (...args) => props.func(...args) }, [props.func])\nuseMemo(() => {\n  new DragDropLibrary({ onDrop: funcRef.current })\n}, [])\n")))}u.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return t?a.a.createElement(m,i(i({ref:n},p),{},{components:t})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
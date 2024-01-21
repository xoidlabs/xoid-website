import React from 'react'
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'
// import GitHubButton from 'react-github-btn'
import Head from '@docusaurus/Head'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { marked } from 'marked'
import Frameworks from '../components/frameworks'
import FeatureColumns from '../components/feature-columns'
import HeaderHero2 from '../components/header-hero' 
import { TwoColumns, Section } from '../components'

const isProd = true // process.env.NODE_ENV === 'production'

const textContent = {
  left: `
- Easy to learn
- Small bundle size
- Zero configuration
- Framework-agnostic
- Computed values
- Async actions
- Transient updates
- Local & global state
- Finite state machines
- Extensive Typescript support
- Devtools
  `,
  right: `
    `,
}

const codeBlocks = [
  {text: `## Simple primitives
**xoid** is based on *atoms*. Atoms are holders of state. \`create\` function is used to create them.
  `,
code: `import create from 'xoid'

const $count = create(3)

$count.set(5)
$count.update((state) => state + 1)
console.log($count.value) // 6
`},
  {
    text: `## Actions

With the second argument, you can define actions for your atoms.

`,
    code: `import create from 'xoid'

const $count = create(3, (atom) => ({
  increment: () => atom.update((s) => s + 1),
  incrementBy: (by) => atom.update((s) => s + by)
}))

$count.actions.incrementBy(5)
`,
  },
  {
    text: `
## Computed Values

It has a **Recoil**-inspired API for derived atoms. Alternatively, the \`.map\` method can be used.
`,
code: `import create from 'xoid'

const $doubleCount = create((get) => get($count) * 2)

const $tripleCount = $count.map((state) => state * 3)

`
  },
  {
    text: `
## Framework Integrations

**xoid** has **React**, **Vue**, and **Svelte** integrations. It can be used without any framework as well.
`,
    code: `import create from 'xoid'
import { useAtom } from '@xoid/react'
// @xoid/vue and @xoid/svelte packages are used the same way

// in a component
const count = useAtom($count)
const { increment } = $count.actions

// vanilla JavaScript
const unsubscribe = $count.subscribe(console.log)
`,
  },
  {
    text: `
## No more hand-written reducers!

There's the \`.focus\` method, which can be used as a selector/lens. 
**xoid** is based on immutable updates, so if you "surgically" set state of a focused branch, changes will propagate to the root.
`,
    code: `import create from 'xoid'

const atom = create({ deeply: { nested: { alpha: 5 } } })
const previousValue = atom.value

// select \`.deeply.nested.alpha\`
const alpha = atom.focus((s) => s.deeply.nested.alpha)
alpha.update((s) => s + 1)

// root state is replaced with new immutable state
assert(atom.value !== previousValue) // ✅
`,
  },
  {
    text: `
## No-API Finite State Machines!
Atoms are potent primitives. No additional syntax is required for expressing finite state machines. 

`,
    code: `import create from 'xoid'

const red = { color: '#f00', onClick: () => machine.set(green) }
const green = { color: '#0f0', onClick: () => machine.set(red) }
const machine = create(red)

// in a component
const { color, onClick } = useAtom(machine)
return <div style={{ color }} onClick={onClick}/>
`,
  },
]

function Heading({ text }) {
  return <h2 className="Heading">{text}</h2>
}

function ActionButton({ href, type = 'primary', target, children }) {
  return (
    <a className={`ActionButton ${type}`} href={href} target={target}>
      {children}
    </a>
  )
}

function TextColumn({ title, text, moreContent }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      {moreContent}
    </>
  )
}

function HomeCallToAction() {
  return (
    <>
      <ActionButton
        type="primary"
        href={useBaseUrl('docs/getting-started')}
        target="_self">
        Get started
      </ActionButton>
      <ActionButton
        type="secondary"
        href={useBaseUrl('docs/examples')}
        target="_self">
        Examples
      </ActionButton>
    </>
  )
}

function TwitterButton() {
  return (
    <a
      href=""
      className="twitter-follow-button">
      <div className="icon" />
      Follow @xoid
    </a>
  )
}

// function GitHubStarButton() {
//   return (
//     <div className="github-button">
//       <GitHubButton
//         href="https://github.com/xoidlabs/xoid"
//         data-icon="octicon-star"
//         data-size="large"
//         aria-label="Star xoidlabs/xoid on GitHub">
//         Star
//       </GitHubButton>
//     </div>
//   )
// }

function HeaderHero() {
  return (
    <Section background="none" className="HeaderHero" style={{paddingTop: 100, position: 'relative' }}>
{/* <svg
  className="background"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
    zIndex: 0,
    opacity: "0.85",
    pointerEvents: 'none'
  }}
>
  <radialGradient
    id="grad2"
    gradientUnits="userSpaceOnUse"
    cx="51%"
    cy="39%"
    r="58%"
    style={{}}
  >
    <stop offset="0%" stopColor="rgba(182,106,255,0.5)" />
    <stop offset="50%" stopColor="rgba(182,106,255,0.2)" />
    <stop offset="75%" stopColor="rgba(182,106,236,0.06)" />
    <stop offset="100%" stopColor="rgba(182,106,236,0)" />
  </radialGradient>
  <rect fill="url(#grad2)" width="100%" height="100%" />
</svg> */}
      {/* <GitHubStarButton /> */}
      <div className="titleContainer" style={{zIndex: 1}}>
        <div className="title">
        <div className="gradient"></div>

          {/* <img src="img/logo.svg" width={250} /> */}
          {/* <img src="img/logo-full.svg" width={550} /> */}
        {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: -25 }}>
          <img src="img/logo.svg" width={300} />
          <div className='logo-text'>
            <div>
              <img src="img/logo-text.svg" width={300} />
            </div>
          </div>
        </div> */}
        <HeaderHero2 />
        </div>
        <p className="tagline">
            Framework-agnostic state management library designed for simplicity and scalability
        </p>
        <Frameworks />
        <div className="buttons">
          <HomeCallToAction />
        </div>
      </div>
    </Section>
  )
}

function NativeApps() {
  return (
    <Section className="NativeApps" background="light">
      {/* <TwoColumns
        reverse
        columnOne={
          <div dangerouslySetInnerHTML={{__html: marked(textContent.intro)}} />
        }
        columnTwo={
          <div dangerouslySetInnerHTML={{__html: marked(textContent.intro)}} />
        }
      /> */}
      <div className="FeatureSection" style={{position:'relative'}}>
        {/* <div className={'metaballs'} dangerouslySetInnerHTML={{ __html: marked(textContent.left) + '<div class="bigball"></div>' }} /> */}
        <div dangerouslySetInnerHTML={{ __html: marked(textContent.left) }} />
      </div>
    </Section>
  )
}

function NativeCode(props) {
  return (
    <Section className={`NativeCode ${props.corner ? 'corner': ''}`} background={props.tint ? 'tint' : 'light'}>
      <TwoColumns
        columnOne={<TextColumn text={marked(props.content.text)} />}
        columnTwo={<CodeBlock language="jsx">{props.content.code}</CodeBlock>}
      />
    </Section>
  )
}

function BrowserOnly({
  children,
  fallback,
}) {
  if (!('window' in global) || children == null) {
    return fallback || null;
  }

  return <>{children()}</>;
}

const Index = () => {
  return (
    <Layout wrapperClassName="homepage">
      <Head>
        <title>
          xoid · Framework-agnostic state management for JavaScript
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=0.82"/>

        {/* <script async defer src="https://buttons.github.io/buttons.js"></script> */}
      </Head>
      <HeaderHero />
      <div>
        <BrowserOnly>
          {() => {
            const DemoSection = require('../components/demo-section').default;
            return <DemoSection />;
          }}
        </BrowserOnly>
      </div>
      <FeatureColumns />
      {codeBlocks.map((content, i) => (
        <NativeCode content={content} tint={!(i % 2)} corner={0} />
      ))}
      {/* <div>
        If you've read until here, you know the basics of xoid.
        .value getter, set, update, subscribe, watch, focus, map
      </div> */}
      <div>
        <BrowserOnly>
          {() => {
            const ReactiveDemo = require('../components/reactive-demo').default;
            return <ReactiveDemo />;
          }}
        </BrowserOnly>
      </div>
      <Section background="none" className="Embed" style={{ display: 'flex', justifyContent: 'center', padding: 25 }}>
        {isProd && <iframe
          src="https://codesandbox.io/embed/cool-dream-wp9rn6?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            maxWidth: 1080,
            height: 400,
            border: 0,
            borderRadius: 4,
            overflow: "hidden"
          }}
          title="competent-carson-j2tfqm"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />}
      </Section>
      <NativeApps />
    </Layout>
  )
}

export default Index

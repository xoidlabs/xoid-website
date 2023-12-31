import React from 'react'
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'
import GitHubButton from 'react-github-btn'
import Head from '@docusaurus/Head'
import useBaseUrl from '@docusaurus/useBaseUrl'
import marked from 'marked'
import Frameworks from '../components/frameworks'
import HeaderHero2 from '../components/header-hero' 
import DemoSection from '../components/demo-section'
import { TwoColumns, Section } from '../components'


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
  {text: `### Simple primitives
**xoid** is based on *atoms*. Atoms are holders of state. \`create\` function is used to create them.

It has a **Recoil**-inspired API for derived atoms. 

  `,
code: `import create from 'xoid'

const $counter = create(3)
console.log($counter.value) // 3
$counter.set(5)
$counter.update((state) => state + 1)
console.log($counter.value) // 6

const $doubleCounter = create((read) => read($counter) * 2)
`},
  {
    text: `### Actions

With the second argument, you can specify actions for your atoms.

`,
    code: `import create from 'xoid'

const $counter = create(3, (atom) => ({
  increment: () => atom.update((s) => s + 1),
  incrementBy: (by) => atom.update((s) => s + by)
}))

$counter.actions.incrementBy(5)
`,
  },
  {
    text: `
### Framework integrations

**xoid** has React, Vue, and Svelte integrations.
Just import \`useAtom\` for your favorite framework and start using!

`,
    code: `import create from 'xoid'
import { useAtom } from '@xoid/react'
// import { useAtom } from '@xoid/vue'
// import { useAtom } from '@xoid/svelte'

// in a component
const count = useAtom($counter)
const { increment } = $counter.actions

// vanilla JavaScript
const unsubscribe = $counter.subscribe(console.log)
`,
  },
  {
    text: `
### No more hand-written reducers!

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
### No-API Finite State Machines!
No additional syntax is required for finite state machines. 
Just use the \`create\` function.

`,
    code: `import create from 'xoid'

const red = { color: '#f00', onClick: () => machine.set(green) }
const green = { color: '#0f0', onClick: () => machine.set(red) }
const machine = create(red)

// in a React component
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
      href="https://twitter.com/intent/follow?screen_name=xoid&region=follow_link"
      className="twitter-follow-button">
      <div className="icon" />
      Follow @xoid
    </a>
  )
}

function GitHubStarButton() {
  return (
    <div className="github-button">
      <GitHubButton
        href="https://github.com/xoidlabs/xoid"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star xoidlabs/xoid on GitHub">
        Star
      </GitHubButton>
    </div>
  )
}

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
      <div className="FeatureSection">
        <div dangerouslySetInnerHTML={{ __html: marked(textContent.left) }} />
        <div dangerouslySetInnerHTML={{ __html: marked(textContent.right) }} />
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

const Index = () => {
  return (
    <Layout wrapperClassName="homepage">
      <Head>
        <title>
          xoid · Framework-agnostic state management for JavaScript
        </title>
        {/* <script async defer src="https://buttons.github.io/buttons.js"></script> */}
      </Head>
      <HeaderHero />
      <DemoSection />
      {codeBlocks.map((content, i) => (
        <NativeCode content={content} tint={(i % 2)} corner={i === 0} />
      ))}
      <Section background="none" className="Embed" style={{ display: 'flex', justifyContent: 'center', padding: 25 }}>
        <iframe
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
        />
      </Section>
      <NativeApps />
    </Layout>
  )
}

export default Index

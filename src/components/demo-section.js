import React, { useMemo, useState } from "react";
import { Section } from './'
import { defaultOptions, getText } from './demo'
import CodeAnimate from "code-animate";
import Prismjs from 'prismjs'
import 'prismjs/components/prism-jsx';


// setTimeout(() => {
//   var prt = document.querySelector('.metaballs');
//   var el = document.querySelector('.bigball');

//   window.onmousemove = function(e){
//     const rect = prt.getBoundingClientRect()
//     console.log(rect)
//     var x = e.clientX - rect.left - el.offsetWidth / 2;
//     var y = e.clientY - rect.top - el.offsetHeight / 2;
    
//     el.style.top = y + "px"
//     el.style.left = x + "px"
//   }
// })

const getKey = (line) =>
  line
    .trim()
    .replace(/^(export )?const /, '')
    .substring(0, 7);

export default () => {
  const [state, setState] = useState(defaultOptions)
  const codeText = useMemo(() => getText(state), [state])

  // TODO: fix sloppy, lazy implementation
  const set = (a, b) => {
    setState((options) => {
      const patches = {}
      patches[a] = b
      if(options.framework !== 'react' && options.framework !== 'doja') {
        patches.signals = false
      }
      if(options.framework === 'doja') options.signals = true
      else patches.signals = false

      return { ...options, ...patches }
    })
  }

  return (
    <Section className={'demo'}>
      <div>
        <div className="column">
          <h2>Quick Look</h2>
          <p>
          <b>xoid</b> makes it easier to refactor
          between scopes, frameworks, and different degrees of reusability.
          </p>
          <div className="controls-container">
          <fieldset>
            <div>Framework</div>
            <div>
              {['react', 'vue', 'svelte'].map((item) => (
                <label onClick={() => set('framework', item)}>
                  <input type="radio" checked={state.framework === item}/>
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
          <div>Scope</div>
          <div>
          {['local', 'global'].map((item) => (
                <label onClick={() => set('globalState', item === 'global' ? true : false)}>
                  <input type="radio" checked={!(state.globalState ^ item === 'global')}/>
                  <span>{item}</span>
                </label>
              ))}
          </div>
        </fieldset>

        <fieldset>
          <div>Reuse</div>
          <div>
          {['low', 'medium', 'high', 'highest'].map((item) => (
                <label onClick={() => set('reusability', item)}>
                  <input type="radio" checked={state.reusability === item}/>
                  <span>{item}</span>
                </label>
              ))}
          </div>
        </fieldset>
        <fieldset>
          {/* <div className="checkbox">
            <input id="c1" type="checkbox" disabled={options.framework !== 'react'} checked={state.signals} onChange={(e) => set('signals', e.target.checked)} />
            <label htmlFor="c1">Signals</label>
          </div> */}
          <div className="checkbox">
            <input id="c1" type="checkbox" checked={state.setterUpdates} onChange={(e) => set('setterUpdates', e.target.checked)} />
            <label htmlFor="c1">Setters</label>
          </div>
          {/* <div className="checkbox">
            <input id="c1" type="checkbox" />
            <label htmlFor="c1">Shorthands</label>
          </div> */}
          </fieldset>
            <a className='github-star' target="_blank" href="https://github.com/xoidlabs/xoid">
              Star us on GitHub 🤩
              <img src="https://img.shields.io/github/stars/xoidlabs/xoid.svg?style=social&label=Star" aria-label="Star xoidlabs/xoid on GitHub" />
            </a>
      </div>
      </div>
      <div className="code-demo-container">
        <div className="filename main">models.js</div>
        <div className="window-buttons">
          <div className="btn"></div>
          <div className="btn"></div>
          <div className="btn"></div>
        </div>
        <CodeAnimate 
          value={codeText}     
          checkSpecialLine={(line) => ['---'].includes(line)}
          renderSpecialLine={() => <Splitter framework={state.framework} key={'---'} />}
          getKey={getKey}
        />
      </div>
    </div>
  </Section>
  )
}

function Splitter(props) {
  return <div className='splitter'>
    <div className='filename'>
      Counter.{props.framework}
    </div>
  </div>;
}
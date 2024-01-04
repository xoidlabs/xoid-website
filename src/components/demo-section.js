import React, { useState } from "react";
import { TwoColumns, Section } from './'
import Demo, { options, buildEvent } from './demo'

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


export default () => {
  const [state, setState] = useState(options)

  // TODO: fix sloppy, lazy implementation
  const set = (a, b) => {
    options[a] = b
    if(options.framework !== 'react' && options.framework !== 'doja') {
      options.signals = false
    }
    if(options.framework === 'doja') options.signals = true
    setState({ ...options })

    window.dispatchEvent(buildEvent)
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
          <label for="c1">Signals</label>
        </div> */}
        <div className="checkbox">
          <input id="c1" type="checkbox" checked={state.setterUpdates} onChange={(e) => set('setterUpdates', e.target.checked)} />
          <label for="c1">Setters</label>
        </div>
        {/* <div className="checkbox">
          <input id="c1" type="checkbox" />
          <label for="c1">Shorthands</label>
        </div> */}
        </fieldset>
          <a className='github-star' target="_blank" href="https://github.com/xoidlabs/xoid">
          Support us with your GitHub star 🤩
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
        <Demo/>
    </div>
    </div>

  </Section>
  )
}
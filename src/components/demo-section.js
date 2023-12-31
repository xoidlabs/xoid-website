import React, { useState } from "react";
import { TwoColumns, Section } from './'
import Demo, { options, buildEvent } from './demo'

export default () => {
  const [state, setState] = useState(options)

  // TODO: fix sloppy, lazy implementation
  const set = (a, b) => {
    options[a] = b
    if(options.framework !== 'react' && options.framework !== 'doja') {
      options.signals = false
    }
    setState({ ...options })

    window.dispatchEvent(buildEvent)
  }

  return (
    <Section className={'demo'}>
    <div style={{display: 'flex', maxWidth: 900, margin: 'auto', gap: '25px'}}>
      <div style={{flex: 1}}>
        <h2>Quick Look</h2>
        <p>
        <b>xoid</b> makes it easy to refactor
        between frameworks, scopes, and different degrees of reusability.
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
        <div className="checkbox">
          <input id="c1" type="checkbox" disabled={options.framework !== 'react' && options.framework !== 'doja'} checked={state.signals} onChange={(e) => set('signals', e.target.checked)} />
          <label for="c1">Signals</label>
        </div>
        <div className="checkbox">
          <input id="c1" type="checkbox" checked={state.setterUpdates} onChange={(e) => set('setterUpdates', e.target.checked)} />
          <label for="c1">Setters</label>
        </div>
        {/* <div className="checkbox">
          <input id="c1" type="checkbox" />
          <label for="c1">Shorthands</label>
        </div> */}
        </fieldset>
    </div>
    </div>
    <div class="code-demo-container"  style={{flex: 2}}>
        <Demo/>
    </div>
    </div>

  </Section>
  )
}
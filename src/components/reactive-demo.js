import React, { useState } from "react";
import { Section } from './'
import CodeAnimate from "./code-animate";

const config = {}

config.split = {
  xoid: `import { create } from 'xoid'

const $alpha = create(9);
const $beta = create(16);
const $sum = create((get) => get($alpha) + get($beta));`, 
  
'@xoid/reactive': `import { create, computed } from '@xoid/reactive'
  
const $alpha = create(9);
const $beta = create(16);
const $sum = computed(() => $alpha.value + $beta.value);`, 
}
config.joined = {
  xoid: `import { create } from 'xoid'
  
const $state = create({
  alpha: 9,
  beta: 16
});

const $sum = create((get) => {
  const $alpha = $state.focus('alpha')
  const $beta = $state.focus('beta')
  return get($alpha) + get($beta)
});`,
'@xoid/reactive': `import { reactive, computed } from '@xoid/reactive'

const state = reactive({
  alpha: 9,
  beta: 16
});

const $sum = computed(() => state.alpha + state.beta);`
}

export default () => {
  const [state, setState] = useState({library: '@xoid/reactive', style: 'split'})

  // TODO: fix sloppy, lazy implementation
  const set = (a, b) => {
    setState(s => ({ ...s, [a]: b }))
  }

  return (
    <Section className={'demo'}>
      <div>
        <div className="column">
          <h2>Your Favorite Coding Style</h2>
          <p>
          While <b>xoid</b> is a robust library based on explicit subscriptions, <b>@xoid/reactive</b> is a thin proxy layer around it.
          They're interoperable.
          {/* If you enjoy ES6 proxy state, there's the <b>@xoid/reactive</b>, a thin layer over <b>xoid</b>. */}
          </p>
          <div className="controls-container">
          <fieldset className="large">
            <div>Flavor</div>
            <div>
              {['xoid', '@xoid/reactive'].map((item) => (
                <label onClick={() => set('library', item)}>
                  <input type="radio" checked={state.library === item}/>
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="large">
          <div>STYLE</div>
          <div>
          {['split', 'joined'].map((item) => (
                <label onClick={() => set('style', item)}>
                  <input type="radio" checked={(state.style === item)}/>
                  <span>{item}</span>
                </label>
              ))}
          </div>
        </fieldset>

        {/* <fieldset>
          <div className="checkbox">
            <input id="c1" type="checkbox" checked={state.setterUpdates} onChange={(e) => set('setterUpdates', e.target.checked)} />
            <label htmlFor="c1">Setters</label>
          </div>
          </fieldset> */}
            {/* <a className='github-star' target="_blank" href="https://github.com/xoidlabs/xoid">
            Support us with your GitHub star 🤩
            <img src="https://img.shields.io/github/stars/xoidlabs/xoid.svg?style=social&label=Star" aria-label="Star xoidlabs/xoid on GitHub" />
            </a> */}
      </div>
      </div>
      <div className="code-demo-container">
        <div className="filename main">models.js</div>
        <div className="window-buttons">
          <div className="btn"></div>
          <div className="btn"></div>
          <div className="btn"></div>
        </div>
        <CodeAnimate lines={config[state.style][state.library].split('\n')} />
      </div>
    </div>
  </Section>
  )
}
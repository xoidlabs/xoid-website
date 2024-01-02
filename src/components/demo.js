import React, { useEffect, useState, useRef, useMemo } from 'react';
import autoAnimate from '@formkit/auto-animate';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

const animationOptions = {
  duration: 330,
  easing: 'ease-in-out',
};

export const options = {
  reusability: 'medium', // high, medium, low
  setterUpdates: true, // on/off
  globalState: true, // global, local
  signals: false,
  framework: 'react',
  beau: false,
  addExports: true,
};

export const buildEvent = new Event('build');
// const pane = new Pane();
// pane.on('change', () => window.dispatchEvent(buildEvent));

// pane
//   .addBlade({
//     view: 'list',
//     label: 'Framework',
//     options: [
//       { text: 'React', value: 'react' },
//       { text: 'Doja', value: 'doja' },
//       { text: 'Vue', value: 'vue' },
//       { text: 'Svelte', value: 'svelte' },
//     ],
//     value: options.framework,
//   })
//   .on('change', ({ value }) => {
//     options.framework = value;
//     if (value === 'doja') {
//       options.signals = true;
//       pane.refresh();
//     }
//   });

// pane
//   .addBlade({
//     view: 'list',
//     label: 'Reusability',
//     options: [
//       { text: 'Highest', value: 'highest' },
//       { text: 'High', value: 'high' },
//       { text: 'Medium', value: 'medium' },
//       { text: 'Low', value: 'low' },
//     ],
//     value: options.reusability,
//   })
//   .on('change', ({ value }) => {
//     options.reusability = value;
//   });

// let lastGlobal;

// pane
//   .addBlade({
//     view: 'list',
//     label: 'State',
//     options: [
//       { text: 'Global', value: true },
//       { text: 'Local', value: false },
//     ],
//     value: options.globalState,
//   })
//   .on('change', ({ value }) => {
//     lastGlobal = options.globalState;
//     options.globalState = value;
//   });

// pane.addBinding(options, 'signals', { label: 'Signals' });
// pane.addBinding(options, 'setterUpdates', { label: 'Setters' });

function getText() {
  const inc = (name, sign = '+') =>
    !options.setterUpdates
      ? `() => ${name}.update((s) => s ${sign} 1)`
      : `() => ${name}.value${sign}${sign}`;

  const dec = (name) => inc(name, '-');

  let componentActions =
    options.reusability === 'low'
      ? ''
      : options.reusability !== 'medium'
      ? `  const { increment, decrement } = $counter.actions`
      : `  const increment = ${inc('$counter')}
  const decrement = ${dec('$counter')}`;

  const modelDeclarationText = `export const NumberModel = (payload) =>
  create(payload, (atom) => ({
    increment: ${inc('atom')},
    decrement: ${dec('atom')},
  }))`;

  const globalDeclarationText =
    options.reusability === 'highest'
      ? `const $counter = NumberModel(0)`
      : options.reusability === 'high'
      ? `const $counter = create(0, (atom) => ({
  increment: ${inc('atom')},
  decrement: ${dec('atom')},
}))`
      : `const $counter = create(0)`;

  const maybeDoja = (str) =>
    options.framework === 'react'
      ? str.replace('r = ', 'r = useSetup(() => ') + ')'
      : str;

  const localDeclarationText = maybeDoja(globalDeclarationText)
    .split('\n')
    .map((s) => '  ' + s)
    .join('\n');

  const frameworkImports = {
    useAtom: !options.signals,
    useSetup:
      !options.globalState &&
      (options.framework === 'react' || options.framework === 'doja'),
  };

  const frameworkImportText =
    frameworkImports.useAtom || frameworkImports.useSetup
      ? `import { ${Object.keys(frameworkImports)
          .filter((key) => frameworkImports[key])
          .join(', ')} } from '@xoid/${options.framework}'`
      : '';

  const markupInc =
    options.reusability === 'low' ? inc('$counter') : `increment`;
  const markupDec =
    options.reusability === 'low' ? dec('$counter') : `decrement`;

  const getSmall =
    options.signals && options.reusability === 'low' && options.globalState;

  if (getSmall) {
    if (!options.beau) {
      setTimeout(() => {
        options.beau = true;
        window.dispatchEvent(buildEvent);
      }, animationOptions.duration * 1.5);
    }
  } else options.beau = false;

  const soSmall = getSmall && options.beau;

  const reactHeader =
    options.framework === 'svelte' || options.framework === 'vue'
      ? `<script${options.framework === 'vue' ? ' setup' : ''}>
${[
  options.reusability !== 'highest' && !options.globalState
    ? `  import create from 'xoid'`
    : ``,
  `  ${frameworkImportText}`,
  options.reusability === 'highest' && !options.globalState
    ? `  import { NumberModel } from './models.js'`
    : ``,
  options.globalState ? `  import { ${options.framework === 'svelte' ? `$counter as counterAtom` : `$counter`} } from './models.js'` : ``,
]
  .filter((s) => s)
  .join('\n')}
`
      : `export const Counter = ${
          options.framework === 'doja' ? 'Doja(' : ''
        }() => ${soSmall ? '(' : '{'}`;

  let reactFooter =
    options.framework === 'svelte'
      ? `</script>

{$count}
<button on:click={${markupInc}}>+</button>
<button on:click={${markupDec}}>-</button>`
      : options.framework === 'vue'
      ? `</script>

<template>
  {{ count }}
  <button @click="${markupInc}">+</button>
  <button @click="${markupDec}">-</button>
</template>`
      : soSmall
      ? `  <>
    {${options.signals ? '$counter.value' : `count`}}
    <button onClick={${markupInc}}>+</button>
    <button onClick={${markupDec}}>-</button>
  </>
)`
      : `  return ${options.framework === 'doja' ? '() => ' : ''}(
    <>
      {${options.signals ? '$counter.value' : `count`}}
      <button onClick={${markupInc}}>+</button>
      <button onClick={${markupDec}}>-</button>
    </>
  )
}`;

  if (options.framework === 'doja') reactFooter = reactFooter + ')';

  const imports = [
    options.framework === 'doja'
      ? `import Doja, { create } from 'doja'`
      : options.framework === 'react' ||
        !(!options.globalState && options.reusability !== 'highest')
      ? `import create from 'xoid'`
      : '',
    options.framework === 'react' ? frameworkImportText : '',
  ];

  // if (!lastGlobal && options.globalState) {
  //   if (!options.addExports) {
  //     setTimeout(() => {
  //       options.addExports = true;
  //       window.dispatchEvent(buildEvent);
  //     }, 500);
  //   }
  // } else options.addExports = false;

  const maybeReplaceConst = (s) => {
    if (!options.addExports) return s;
    return s.replace(/const/g, 'export const');
  };

  const globalDeclarations = [
    options.reusability === 'highest' ? modelDeclarationText : '',
    options.globalState ? maybeReplaceConst(globalDeclarationText) : '',
  ];
  const join = (arr) => {
    return arr
      .map((s) => s.filter((p) => p).join('\n'))
      .filter((s) => s)
      .join('\n\n');
  };

  const splitView = (options.framework === 'vue' || options.framework === 'svelte') && (options.globalState || options.reusability === 'highest')
  const el = document.querySelector('.code-demo-container')
  if(el){if(splitView) {
    el.classList.add('split')
  } else { 
    el.classList.remove('split')
  }}

  return join([
    imports,
    globalDeclarations,
    splitView ? ['---']: [],
    [
      reactHeader,
      ...maybeAddNewLine([
        !options.globalState ? localDeclarationText : '',
        options.signals ? '' : `  const count = useAtom($counter)`,
        componentActions,
      ]),
      reactFooter,
    ],
  ]);
}

const maybeAddNewLine = (arr) => {
  if (options.framework !== 'react' && options.framework !== 'doja') {
    if (options.framework === 'svelte')
    arr = arr.map((s) => s.replace(/\$counter/g, 'counterAtom'));
    
    return arr;}
  arr = arr.filter((s) => s).flatMap((s) => s.split('\n'));
  if (arr.length > 1) arr[arr.length - 1] = arr[arr.length - 1] + '\n';


  return arr;
};

const getLines = () => {
  const text = getText();
  return text.split('\n').map((s) => (!s ? ' ' : s));
};

const getKey = (line) =>
  line
    .trim()
    .replace(/^(export )?const /, '')
    .substring(0, 7);

window.addEventListener('build', () => {
  const el = document.querySelector('.code-demo-container')

  el.classList.remove('animate')
  setTimeout(() => el.classList.add('animate'))
})

export default function App() {
  const [lines, setLines] = useState(() => getLines());
  const keys = useMemo(() => {
    const arr = [];
    const cache = {};
    let j = 0;
    lines.forEach((line) => {
      let attempt = getKey(line);
      if (!attempt) {
        arr.push(++j);
        return;
      }
      if (cache[attempt]) attempt = attempt + ++cache[attempt];
      arr.push(attempt);
      cache[attempt] = 1;
    });
    return arr;
  }, [lines]);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) autoAnimate(ref.current, animationOptions);
    const listener = () => setLines(() => getLines());
    window.addEventListener('build', listener, false);
    return () => window.removeEventListener('build', listener, false);
  }, []);

  return (
    <code ref={ref}>
      {lines.map((line, i) => (
        line === '---' ? <Splitter framework={options.framework} key={'---'} /> : <Line key={keys[i]} line={line} />
      ))}
    </code>
  );
}

const Line = (props) => {
  const { line } = props;
  const indent = line.match(/^\s*/)[0].length;
  const hasConst = line.match('const');
  const hasExportConst = line.match('export const');

  const num = 13 - (hasExportConst ? 13 : hasConst ? 6 : 0);
  return (
    <div
      style={{
        marginLeft: indent - num + 'ch',
        paddingLeft: num - indent + 'ch',
      }}
      className={'line'}
      dangerouslySetInnerHTML={{
        __html:
          Prism.highlight(
            line || ' ',
            Prism.languages.jsx,
            'javascript'
          ),
      }}
    />
  );
};

function Splitter(props) {
  return <div className='splitter'>
    <div className='filename'>
      Counter.{props.framework}
    </div>
  </div>;
}


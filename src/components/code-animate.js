import autoAnimate from '@formkit/auto-animate';
import Prism from 'prismjs';
import React, { useRef, useEffect, useMemo } from 'react';

const animationOptions = {
  duration: 330,
  easing: 'ease-in-out',
};

const getKey = (line) =>
  line
    .trim()
    .replace(/^(export )?const /, '')
    .substring(0, 7);

export default function CodeAnimate(props) {
  const { lines, framework } = props
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
  }, []);

  return (
    <code ref={ref}>
      {lines.map((line, i) => (
        line === '---' ? <Splitter framework={framework} key={'---'} /> : <Line key={keys[i]} line={line} />
      ))}
    </code>
  );
}

function Splitter(props) {
  return <div className='splitter'>
    <div className='filename'>
      Counter.{props.framework}
    </div>
  </div>;
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
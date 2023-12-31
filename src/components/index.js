import React from "react"

export function Section({
  element = 'section',
  children,
  className,
  background = 'light',
  style
}) {
  const El = element
  return <El className={`Section ${className} ${background}`} style={style}>{children}</El>
}

export function TwoColumns({ columnOne, columnTwo, reverse, demo }) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'} ${demo ? 'demo' : ''}`}>
        {columnTwo}
      </div>
    </div>
  )
}
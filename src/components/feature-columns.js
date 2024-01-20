import { Section } from "."

import React from "react"

export default () => {
  return (
    <Section>
      <div className="feature-columns">
        <div className="css-0">
          <div className="chakra-stack css-1fcydsv">
            <div className="css-1rtuhur">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-theme="dark"
                focusable="false"
                className="chakra-icon css-s48i3l"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1={12} y1="22.08" x2={12} y2={12} />
              </svg>
            </div>
            <div className="css-0">
              <h2 className="chakra-heading css-9dycqs">
                Small
              </h2>
              <p className="chakra-text css-s66uvp">
                It's easy-to-learn, has no external dependencies, and it's only 1.1kB minified and gzipped.
              </p>
            </div>
          </div>
        </div>
        <div className="css-0">
          <div className="chakra-stack css-1fcydsv">
            <div className="css-1rtuhur">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-theme="dark"
                focusable="false"
                className="chakra-icon css-s48i3l"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="css-0">
              <h2 className="chakra-heading css-9dycqs">
                Robust
              </h2>
              <p className="chakra-text css-s66uvp">
                It's based on immutable updates and explicit subscriptions.
                This makes it ideal for teams.
              </p>
            </div>
          </div>
        </div>
        <div className="css-0">
          <div className="chakra-stack css-1fcydsv">
            <div className="css-1rtuhur">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-theme="dark"
                focusable="false"
                className="chakra-icon css-s48i3l"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="css-0">
              <h2 className="chakra-heading css-9dycqs">
                Well-documented
              </h2>
              <p className="chakra-text css-s66uvp">
                Extensively documented, including a rich "Recipes" section and examples.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return (
    <div>
      <h3>Web Developer</h3>
      <p>
        TypeScript, React.js, Vue.js, Node.js, Redis, Firebase,
        Kubernetes, etc...
      </p>
      <p>
        Worked at DeNA <span className="note">(2017 - present)</span> and
        DWANGO <span className="note">(2012 - 2017)</span>
      </p>
    </div>
  )
}

// const Example = styled.div`
//
// `

export default Component

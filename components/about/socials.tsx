import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Component: React.FC = props => {
  return (
    <div>
      <a href="https://github.com/nanocloudx" target="_blank" rel="noopener">
        <FontAwesomeIcon icon={['fab', 'github-square']} />
      </a>
      <a href="https://twitter.com/nanocloudx" target="_blank" rel="noopener">
        <FontAwesomeIcon icon={['fab', 'twitter-square']} />
      </a>
      <a
        href="https://www.facebook.com/nanocloudx"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
      </a>
      <a
        href="https://www.instagram.com/nanocloudx"
        target="_blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
    </div>
  )
}

// const Example = styled.div`
//
// `

export default Component

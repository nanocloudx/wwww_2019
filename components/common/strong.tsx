import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return <Strong>{props.children}</Strong>
}

const Strong = styled.strong`
  font-weight: bold;
`

export default Component

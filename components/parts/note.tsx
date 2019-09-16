import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return <Note>{props.children}</Note>
}

const Note = styled.span`
  font-size: 1.4rem;
  color: #666666;
`

export default Component

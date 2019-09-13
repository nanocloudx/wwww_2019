import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return <Image src="/static/images/nanocloudx.jpg" alt="nanocloudx" />
}

const Image = styled.img`
  display: block;
  margin: 0 auto 20px;
  max-width: 100%;
  width: 300px;
`

export default Component

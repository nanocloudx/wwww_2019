import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return (
    <Image src="/static/images/nanocloudx.jpg" alt="nanocloudx" />
  )
}

const Image = styled.img`
  display: block;
  margin: 0 auto;
`

export default Component

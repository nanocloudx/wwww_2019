import * as React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_DESKTOP } from '../constants'

const Component: React.FC = props => {
  return <Image src="/static/images/nanocloudx.jpg" alt="nanocloudx" />
}

const Image = styled.img`
  display: block;
  margin: 0 auto 20px;
  max-width: 100%;
  width: 300px;
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    margin-right: 70px;
  }
`

export default Component

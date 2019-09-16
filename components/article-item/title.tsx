import * as React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_TABLET } from '../common/constants'

const Component: React.FC = props => {
  return <Title>{props.children}</Title>
}

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 50px 0;
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    font-size: 3rem;
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    font-size: 3.5rem;
  }
`

export default Component

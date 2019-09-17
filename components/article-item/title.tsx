import * as React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_TABLET } from '../constants'
import RevealText from '../parts/animaiton/reveal-text'

const Component: React.FC = props => {
  return (
    <Title>
      <RevealText>{props.children}</RevealText>
    </Title>
  )
}

const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: bold;
  margin: 60px 0;
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    font-size: 3.2rem;
    margin: 70px 0;
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    font-size: 3.7rem;
    margin: 80px 0;
  }
`

export default Component

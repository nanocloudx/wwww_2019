import * as React from 'react'
import styled from 'styled-components'
import Strong from '../parts/strong'
import RevealText from '../parts/animaiton/reveal-text'
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_TABLET } from '../constants'

const Component: React.FC = props => {
  return (
    <Wrapper>
      <Message>
        Hi!
        <br />
        You've reached the
        <br />
        <Strong>End of the Internet</Strong>.<br />
        <RevealText>wwww.dev</RevealText>
      </Message>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`
const Message = styled.p`
  padding: 10px;
  cursor: default;
  font-size: 7rem;
  line-height: 7rem;
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    padding: 30px;
    font-size: 9rem;
    line-height: 9rem;
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    padding: 40px;
    font-size: 11rem;
    line-height: 11rem;
  }
`

export default Component

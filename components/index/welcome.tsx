import * as React from 'react'
import styled from 'styled-components'
import Strong from '../parts/strong'
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_TABLET } from '../parts/constants'

const Component: React.FC = props => {
  return (
    <Message>
      Hi!
      <br />
      You've reached the
      <br />
      <Strong>End of the Internet</Strong>.<br />
      wwww.dev
    </Message>
  )
}

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

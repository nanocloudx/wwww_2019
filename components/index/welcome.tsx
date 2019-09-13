import * as React from 'react'
import styled from 'styled-components'
import Strong from '../common/strong'

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
  padding: 20px;
  cursor: default;
  font-size: 7rem;
  line-height: 7rem;
  @media screen and (min-width: 560px) {
    padding: 30px;
    font-size: 9rem;
    line-height: 9rem;
  }
  @media screen and (min-width: 960px) {
    padding: 40px;
    font-size: 11rem;
    line-height: 11rem;
  }
`

export default Component

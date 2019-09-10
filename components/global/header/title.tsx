import React from 'react'
import styled from 'styled-components'
import Anchor from '../../anchor'

const Component: React.FC = props => {
  return (
    <Title>
      <Anchor href="/">wwww.dev</Anchor>
    </Title>
  )
}

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.8rem;
  padding: 1.6rem 0;
  color: #ffffff;
  &:before {
    content: '>_';
    padding: 0 10px;
    color: #aaaaaa;
  }
`

export default Component

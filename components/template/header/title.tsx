import React from 'react'
import styled from 'styled-components'
import Anchor from '../../common/anchor'

const Component: React.FC = props => {
  return (
    <Title>
      <Anchor href="/" label="wwww.dev">wwww.dev</Anchor>
    </Title>
  )
}

const Title = styled.h1`
  display: flex;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 5rem;
  &::before {
    content: '>_';
    color: #aaaaaa;
    padding: 15px 0;
  }
`

export default Component

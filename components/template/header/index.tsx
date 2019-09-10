import * as React from 'react'
import styled from 'styled-components'
import Title from './title'
import List from './list'

const Component: React.FC = props => {
  return (
    <Header>
      <Navigation>
        <Title />
        <List />
      </Navigation>
    </Header>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  background-color: #222222;
  color: #ffffff;
`

const Navigation = styled.nav`
  width: 100%;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
`

export default Component

import React from 'react'
import styled from 'styled-components'
import Anchor from '../../common/anchor'

const Component: React.FC = props => {
  return (
    <List>
      <Item>
        <Anchor href="/about" label="about">
          about
        </Anchor>
      </Item>
    </List>
  )
}

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  display: flex;
  font-size: 1.8rem;
  line-height: 5rem;
  &:before {
    content: '/';
    color: #aaaaaa;
    padding: 15px 0;
  }
`

export default Component

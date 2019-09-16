import React from 'react'
import styled from 'styled-components'
import Anchor from '../../parts/anchor'
import { MEDIA_QUERY_DESKTOP } from '../../parts/constants'

type Props = {
  pathname: string
}

const Component: React.FC<Props> = props => {
  const paths = props.pathname.split('/')
  const category = paths[1] || ''
  return (
    <List>
      <Item className={category === 'articles' && 'active'}>
        <Anchor href="/articles" label="Articles">
          Articles
        </Anchor>
      </Item>
      <Item className={category === 'about-me' && 'active'}>
        <Anchor href="/about-me" label="About me">
          About me
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
  position: relative;
  &.active {
    &::after {
      position: absolute;
      top: 30px;
      right: 0;
      content: '';
      display: block;
      width: 5px;
      height: calc(100% - 25px);
      background-color: #777777;
      @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
        right: -10px;
      }
    }
  }
  &::before {
    content: '/';
    color: #aaaaaa;
    padding: 15px 0;
  }
`

export default Component

import React from 'react'
import styled from 'styled-components'
import Anchor from '../../parts/anchor'
import {
  HEADER_LARGE_WIDTH,
  HEADER_SMALL_WIDTH,
  MEDIA_QUERY_DESKTOP
} from '../../constants'

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
  font-size: 1.6rem;
  line-height: ${HEADER_SMALL_WIDTH}px;
  position: relative;
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    font-size: 1.8rem;
    line-height: ${HEADER_LARGE_WIDTH}px;
  }
  &.active {
    &::after {
      position: absolute;
      top: 30px;
      right: 0;
      content: '';
      display: block;
      width: 4px;
      height: calc(100% - 25px);
      background-color: #777777;
    }
  }
  &::before {
    content: '/';
    color: #aaaaaa;
    padding: 15px 0;
  }
`

export default Component

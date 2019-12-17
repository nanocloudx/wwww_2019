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
      {/*<Item className={category === 'articles' && 'active'}>*/}
      {/*  <Anchor href="/articles" label="Articles">*/}
      {/*    Articles*/}
      {/*  </Anchor>*/}
      {/*</Item>*/}
      <Item className={category === 'about' && 'active'}>
        <Anchor href="/about" label="About me">
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
      content: '';
      display: block;
      height: calc(100% - 25px);
      background-color: rgba(255, 255, 255, 0.8);
      right: -3px;
      width: 6px;
      @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
        right: -5px;
        width: 10px;
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

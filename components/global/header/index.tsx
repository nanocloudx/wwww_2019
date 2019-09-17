import * as React from 'react'
import styled from 'styled-components'
import Title from './title'
import List from './list'
import {
  HEADER_LARGE_WIDTH,
  HEADER_SMALL_WIDTH,
  MEDIA_QUERY_DESKTOP
} from '../../constants'

type Props = {
  pathname: string
}

const Component: React.FC<Props> = props => {
  return (
    <Header>
      <Navigation>
        <Title />
        <List pathname={props.pathname} />
      </Navigation>
    </Header>
  )
}

const Header = styled.header`
  width: ${HEADER_SMALL_WIDTH}px;
  height: 100vh;
  background-color: #222222;
  color: #ffffff;
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    width: ${HEADER_LARGE_WIDTH}px;
  }
`

const Navigation = styled.nav`
  width: 100%;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
`

export default Component

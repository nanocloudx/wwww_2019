import * as React from 'react'
import styled from 'styled-components'
import {
  HEADER_WIDTH,
  MEDIA_TABLET_MIN,
  MEDIA_DESKTOP_MIN,
  SCROLLBAR_WIDTH
} from './constants'

const Component: React.FC = props => {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 50px 20px;
  @media screen and (min-width: ${MEDIA_TABLET_MIN + SCROLLBAR_WIDTH}px) {
    width: calc(${MEDIA_TABLET_MIN}px - ${HEADER_WIDTH}px);
  }
  @media screen and (min-width: ${MEDIA_DESKTOP_MIN + SCROLLBAR_WIDTH}px) {
    display: flex;
    width: calc(${MEDIA_DESKTOP_MIN}px - ${HEADER_WIDTH}px);
    padding: 70px 20px;
  }
`

export default Component

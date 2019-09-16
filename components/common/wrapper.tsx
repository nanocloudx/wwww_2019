import * as React from 'react'
import styled from 'styled-components'
import {
  HEADER_LARGE_WIDTH,
  MEDIA_TABLET_MIN,
  MEDIA_DESKTOP_MIN,
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_TABLET,
  HEADER_SMALL_WIDTH
} from './constants'

const Component: React.FC = props => {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    width: calc(${MEDIA_TABLET_MIN}px - ${HEADER_SMALL_WIDTH}px);
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    display: flex;
    width: calc(${MEDIA_DESKTOP_MIN}px - ${HEADER_LARGE_WIDTH}px);
  }
`

export default Component

import * as React from 'react'
import styled from 'styled-components'
import {
  HEADER_LARGE_WIDTH,
  HEADER_SMALL_WIDTH,
  MEDIA_DESKTOP_MIN,
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_TABLET,
  MEDIA_TABLET_MIN
} from '../constants'

const Component: React.FC = props => {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
  margin: 20px auto;
  padding: 0 20px;
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    width: calc(${MEDIA_TABLET_MIN}px - ${HEADER_SMALL_WIDTH}px);
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    width: calc(${MEDIA_DESKTOP_MIN}px - ${HEADER_LARGE_WIDTH}px);
    padding: 0 30px;
  }
`

export default Component

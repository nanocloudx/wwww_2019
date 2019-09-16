import * as React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_DESKTOP } from '../parts/constants'

const Component: React.FC = props => {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    display: flex;
  }
`

export default Component

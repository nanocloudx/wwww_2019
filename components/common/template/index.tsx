import * as React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import {HEADER_WIDTH, MEDIA_TABLET_MIN, MEDIA_DESKTOP_MIN} from '../constants'

const Component: React.FC = props => {
  return (
    <Template>
      <Header />
      <Main>
        <View>
          {props.children}
        </View>
        <Footer />
      </Main>
    </Template>
  )
}

const Template = styled.div`
  position: relative;
`

const Main = styled.div`
  width: calc(100% - ${HEADER_WIDTH}px);
  margin-left: ${HEADER_WIDTH}px;
`

const View = styled.div`
  @media screen and (min-width: ${MEDIA_TABLET_MIN}px) {
    
  }
  @media screen and (min-width: ${MEDIA_DESKTOP_MIN}px) {
    display: flex;
  }
`

export default Component

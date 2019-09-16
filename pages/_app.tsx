import React from 'react'
import App from 'next/app'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import {
  HEADER_LARGE_WIDTH,
  HEADER_SMALL_WIDTH,
  MEDIA_QUERY_DESKTOP,
  MEDIA_QUERY_TABLET
} from '../components/common/constants'
import Header from '../components/template/header'
import Footer from '../components/template/footer'

library.add(
  faBolt,
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faGithubSquare
)

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Side>
          <Header />
        </Side>
        <Main>
          <Component {...pageProps} />
          <Footer />
        </Main>
      </>
    )
  }
}

const Side = styled.div`
  position: fixed;
`

const Main = styled.div`
  margin-left: ${HEADER_SMALL_WIDTH}px;
  width: calc(100% - ${HEADER_SMALL_WIDTH}px);
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    margin-left: ${HEADER_LARGE_WIDTH}px;
    width: calc(100% - ${HEADER_LARGE_WIDTH}px);
  }
`

export default MyApp

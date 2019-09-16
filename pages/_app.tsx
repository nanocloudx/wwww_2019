import React from 'react'
import App from 'next/app'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBolt } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagram,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import {
  HEADER_LARGE_WIDTH,
  HEADER_SMALL_WIDTH,
  MEDIA_QUERY_DESKTOP
} from '../components/parts/constants'
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import Category from '../components/global/category'

library.add(faFacebookSquare, faTwitterSquare, faInstagram, faGithubSquare)

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const pathname = router.asPath.replace(/(\?|\#).*$/, '')
    return (
      <>
        <Side>
          <Header pathname={pathname} />
        </Side>
        <Main>
          <Category pathname={pathname} />
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

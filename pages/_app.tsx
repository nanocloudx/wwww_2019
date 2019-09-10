import React from 'react'
import App from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
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
        <Header />
        <div style={{ marginLeft: 50 }}>
          <Component {...pageProps} />
          <Footer />
        </div>
      </>
    )
  }
}

export default MyApp

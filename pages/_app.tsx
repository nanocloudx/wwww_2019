import React from 'react'
import App from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faHeart,
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faGithubSquare
)

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp

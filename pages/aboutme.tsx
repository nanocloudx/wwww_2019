import React from 'react'
import Head from 'next/head'
import View from '../components/aboutme'
import Header from '../components/global/header'
import Footer from '../components/global/footer'

type Props = {
  title: string
}

class Index extends React.Component<Props> {
  static async getInitialProps() {
    return {
      title: 'index'
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title>wwww.dev</title>
          <meta name="Description" content="wwww.dev" />
        </Head>
        <Header category={'aboutme'} />
        <View />
        <Footer />
      </div>
    )
  }
}

export default Index

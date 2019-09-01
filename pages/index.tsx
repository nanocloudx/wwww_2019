import React from 'react'
import Head from 'next/head'
import View from '../components/index'

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
        <View />
      </div>
    )
  }
}

export default Index

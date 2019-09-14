import React from 'react'
import Head from 'next/head'
import View from '../components/about'

type Props = {
  //
}

class Page extends React.Component<Props> {
  static async getInitialProps() {
    return {}
  }
  render() {
    return (
      <>
        <Head>
          <title>About | wwww.dev</title>
          <meta name="Description" content="wwww.dev" />
        </Head>
        <View />
      </>
    )
  }
}

export default Page

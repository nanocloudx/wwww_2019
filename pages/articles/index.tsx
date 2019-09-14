import React from 'react'
import Head from 'next/head'
import View from '../../components/article-list'
import { getArticles } from '../../models/articles'
import { Article } from '../../interfaces/article'

type Props = {
  articles: Article[]
}

class Index extends React.Component<Props> {
  static async getInitialProps() {
    const articles = await getArticles()
    return {
      articles
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>Articles | wwww.dev</title>
          <meta name="Description" content="wwww.dev" />
        </Head>
        <View articles={this.props.articles} />
      </>
    )
  }
}

export default Index

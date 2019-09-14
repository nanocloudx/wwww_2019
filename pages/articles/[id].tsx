import React from 'react'
import Head from 'next/head'
import View from '../../components/article-item'
import { getArticleById } from '../../models/articles'
import { Article } from '../../interfaces/article'

type Props = {
  article: Article
}

class Index extends React.Component<Props> {
  static async getInitialProps({ query }) {
    const article = await getArticleById(query.id)
    return {
      article
    }
  }
  render() {
    return (
      <>
        <Head>
          <title>{this.props.article.title} | wwww.dev</title>
          <meta name="Description" content="wwww.dev" />
        </Head>
        <View article={this.props.article} />
      </>
    )
  }
}

export default Index

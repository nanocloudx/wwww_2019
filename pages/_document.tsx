import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'
import Header from '../components/global/header'
import Footer from '../components/global/footer'

export default class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/images/favicon.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="robots" content="index, follow" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" href="/static/styles/style.css" />
        </Head>
        <body>
          <Header />
          <div style={{ marginLeft: 50 }}>
            <Main />
            <Footer />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

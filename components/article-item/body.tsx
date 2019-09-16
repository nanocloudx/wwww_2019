import * as React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'

type Props = {
  markdown: string
}

const Component: React.FC<Props> = props => {
  return (
    <Body>
      <Markdown source={props.markdown} />
    </Body>
  )
}

const Body = styled.div`
  h1,
  h2,
  h3,
  h4,
  p,
  pre,
  code,
  ul,
  blockquote {
    margin-bottom: 20px;
  }
  h1,
  h2,
  h3,
  h4,
  strong,
  a {
    font-weight: bold;
  }
  h1 {
    background-color: #ff0000;
  }
  h2 {
    font-size: 2.6rem;
  }
  h3 {
    font-size: 2.3rem;
  }
  h3 {
    font-size: 2rem;
  }
  em {
    font-style: italic;
  }
  pre,
  code {
    font-family: monospace, sans-serif;
    background-color: #333333;
    color: #ffffff;
  }
  code {
    margin: 0 4px;
    padding: 2px 6px;
  }
  pre {
    padding: 20px;
    > code {
      margin: 0;
      padding: 0;
    }
  }
  ul {
    > li {
      list-style-type: square;
      list-style-position: inside;
    }
  }
  blockquote {
    padding: 20px;
    background-color: #f0f0f0;
    border-left: 5px solid #666666;
    > p {
      margin: 0;
    }
  }
  a {
    color: #1e50a2;
    text-decoration: none;
  }
  hr {
    margin: 50px auto;
    height: 2px;
    background-color: #dddddd;
    width: 80%;
    border: none;
  }
`

export default Component

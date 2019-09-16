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
  p,
  pre,
  code,
  ul,
  blockquote {
    margin-bottom: 20px;
  }
  h1,
  h2,
  h3 {
    font-weight: bold;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.6rem;
  }
  h3 {
    font-size: 2.2rem;
  }
  em {
    font-style: italic;
  }
  strong {
    font-weight: bold;
  }
  pre,
  code {
    font-family: monospace, sans-serif;
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
    > p {
      margin: 0;
    }
  }
`

export default Component

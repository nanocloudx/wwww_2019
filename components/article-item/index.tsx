import * as React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import Wrapper from '../parts/template/wrapper'
import { Article } from '../../interfaces/article'
import Title from './title'

type Props = {
  article: Article
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <Example>
        <Title>{props.article.title}</Title>
        <p>{props.article.date}</p>
        <Markdown source={props.article.body} />
      </Example>
    </Wrapper>
  )
}

const Example = styled.div``

export default Component

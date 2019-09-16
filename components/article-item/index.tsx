import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../parts/template/wrapper'
import { Article } from '../../interfaces/article'
import Title from './title'
import Meta from './meta'
import Body from './body'

type Props = {
  article: Article
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <Example>
        <Title>{props.article.title}</Title>
        <Meta
          id={props.article.id}
          date={props.article.date}
          tags={props.article.tags}
        />
        <Body markdown={props.article.body} />
      </Example>
    </Wrapper>
  )
}

const Example = styled.div``

export default Component

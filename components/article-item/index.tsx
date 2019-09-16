import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../template/wrapper'
import { Article } from '../../interfaces/article'
import Title from './title'
import Info from './info'
import Body from './body'

type Props = {
  article: Article
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <Example>
        <Title>{props.article.title}</Title>
        <Info
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

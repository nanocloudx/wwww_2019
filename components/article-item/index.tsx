import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../common/wrapper'
import { Article } from '../../interfaces/article'
import Title from './title'
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_TABLET } from '../common/constants'

type Props = {
  article: Article
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <Example>
        <Title>{props.article.title}</Title>
        <p>{props.article.date}</p>
        <p>{props.article.body}</p>
      </Example>
    </Wrapper>
  )
}

const Example = styled.div``

export default Component

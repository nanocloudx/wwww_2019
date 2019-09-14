import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../common/wrapper'
import { Article } from '../../interfaces/article'

type Props = {
  article: Article
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <div>
        <h3>{props.article.title}</h3>
        <p>{props.article.date}</p>
        <p>{props.article.body}</p>
      </div>
    </Wrapper>
  )
}

export default Component

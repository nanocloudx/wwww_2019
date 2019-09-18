import * as React from 'react'
import styled from 'styled-components'
import LatestItem from './latest-item'
import { Article } from '../../interfaces/article'
import {MEDIA_QUERY_DESKTOP} from '../constants'

type Props = {
  articles: Article[]
}

const Component: React.FC<Props> = props => {
  return (
    <ArticleList>
      {props.articles.map(article => (
        <LatestItem article={article} />
      ))}
    </ArticleList>
  )
}

const ArticleList = styled.div`
  padding: 20px;
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    // width: 70%;
  }
`

export default Component

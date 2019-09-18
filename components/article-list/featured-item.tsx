import * as React from 'react'
import styled from 'styled-components'
import Anchor from '../parts/anchor'
import { Article } from '../../interfaces/article'
import {MEDIA_QUERY_TABLET} from '../constants'

type Props = {
  article: Article
}

const Component: React.FC<Props> = props => {
  return (
    <div>
      <Anchor
        key={props.article.id}
        href={`/articles/${props.article.category}/${props.article.id}`}
        label={props.article.title}
      >
        <ArticleItem>
          <Image src={props.article.image} />
          <ArticleItemContent>
            <Title>{props.article.title}</Title>
            <Date>{props.article.date}</Date>
          </ArticleItemContent>
        </ArticleItem>
      </Anchor>
    </div>
  )
}

const ArticleItem = styled.div`
  position: relative;
  color: #ffffff;
  width: 300px;
`

const ArticleItemContent = styled.div`
  position: absolute;
  padding: 10px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
`

const Image = styled.img`
  width: 100%;
  display: block;
`

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
`

const Date = styled.p`
  font-size: 1.4rem;
`

const Tag = styled.span`
  font-size: 1.3rem;
  margin-right: 6px;
  color: #ffffff;
  background-color: #333333;
  padding: 2px 6px;
`

export default Component

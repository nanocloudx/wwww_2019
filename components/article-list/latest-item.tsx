import * as React from 'react'
import styled from 'styled-components'
import Anchor from '../parts/anchor'
import { Article } from '../../interfaces/article'
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_TABLET } from '../constants'

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
            <p>
              {props.article.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </p>
          </ArticleItemContent>
        </ArticleItem>
      </Anchor>
    </div>
  )
}

const ArticleItem = styled.div`
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    display: flex;
  }
`

const ArticleItemContent = styled.div`
  //margin: 10px 0;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    max-width: 180px;
    margin-right: 15px;
    margin-bottom: 0;
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    max-width: 220px;
  }
`

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    font-size: 2rem;
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    font-size: 2.2rem;
  }
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

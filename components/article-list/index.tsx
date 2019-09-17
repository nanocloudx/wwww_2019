import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../template/wrapper'
import Anchor from '../parts/anchor'
import { Article } from '../../interfaces/article'
import { MEDIA_QUERY_TABLET } from '../constants'

type Props = {
  articles: Article[]
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <ArticleList>
        {props.articles.map(article => (
          <ArticleItem>
            <Anchor
              key={article.id}
              href={`/articles/${article.category}/${article.id}`}
              label={article.title}
            >
              <Image src={article.image} />
              <Title>{article.title}</Title>
              <Date>{article.date}</Date>
              <Tags>
                {article.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
            </Anchor>
          </ArticleItem>
        ))}
      </ArticleList>
    </Wrapper>
  )
}

const ArticleList = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const ArticleItem = styled.div`
  cursor: pointer;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    max-width: 300px;
  }
`
const Image = styled.img`
  width: 100%;
`
const Title = styled.h3`
  font-size: 1.9rem;
  font-weight: bold;
`
const Date = styled.p`
  font-size: 1.4rem;
  margin-bottom: 5px;
`
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Tag = styled.span`
  font-size: 1.3rem;
  margin: 0 6px 3px 0;
  color: #ffffff;
  background-color: #333333;
  padding: 2px 6px;
`

export default Component

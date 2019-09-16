import * as React from 'react'
import Wrapper from '../parts/template/wrapper'
import Anchor from '../parts/anchor'
import { Article } from '../../interfaces/article'

type Props = {
  articles: Article[]
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <div>
        <h2>Articles</h2>
        {props.articles.map(article => (
          <Anchor href={`/articles/${article.id}`} label={article.title}>
            <div>
              <h3>{article.title}</h3>
              <p>{article.date}</p>
            </div>
          </Anchor>
        ))}
      </div>
    </Wrapper>
  )
}

export default Component

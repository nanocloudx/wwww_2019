import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../template/wrapper'
import LatestItem from './latest-item'
import { Article } from '../../interfaces/article'

type Props = {
  articles: Article[]
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <div>
        {props.articles.map(article => (
          <>
            <LatestItem article={article} />
            <Hr />
          </>
        ))}
      </div>
    </Wrapper>
  )
}

const Hr = styled.hr`
  margin: 20px -20px;
  border: none;
  border-bottom: 1px solid #dddddd;
`

export default Component

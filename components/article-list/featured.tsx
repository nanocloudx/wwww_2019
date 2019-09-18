import * as React from 'react'
import styled from 'styled-components'
import FeaturedItem from './featured-item'
import { Article } from '../../interfaces/article'
import {MEDIA_QUERY_DESKTOP} from '../constants'

type Props = {
  articles: Article[]
}

const Component: React.FC<Props> = props => {
  return (
    <Featured>
      <FeaturedItem article={props.articles[0]} />
      <FeaturedItem article={props.articles[0]} />
      <FeaturedItem article={props.articles[0]} />
    </Featured>
  )
}

const Featured = styled.div`
  padding: 20px;
  background-color: #333333;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    width: 350px;
    margin-right: 20px;
  }
`

const Heading = styled.h2`
  color: #ffffff;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 5px;
`

export default Component

import * as React from 'react'
import styled from 'styled-components'
import { Article } from '../../interfaces/article'
import Latest from './latest'

type Props = {
  articles: Article[]
}

const Component: React.FC<Props> = props => {
  return (
    <div>
      <Latest articles={props.articles} />
    </div>
  )
}

export default Component

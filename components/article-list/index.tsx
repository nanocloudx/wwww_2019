import * as React from 'react'
import styled from 'styled-components'
import TwoColumn from '../template/two-column'
import { Article } from '../../interfaces/article'
import Featured from './featured'
import Latest from './latest'

type Props = {
  articles: Article[]
}

const Component: React.FC<Props> = props => {
  return (
    <TwoColumnR>
      <Featured articles={props.articles} />
      <Latest articles={props.articles} />
    </TwoColumnR>
  )
}

const TwoColumnR = styled(TwoColumn)`
  flex-direction: row-reverse;
  justify-content: space-between;
`

export default Component

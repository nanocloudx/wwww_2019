import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../template/wrapper'
import { CategoryType } from '../../interfaces/category'
import { MEDIA_QUERY_TABLET } from '../constants'

type Props = {
  current: string
  onClick: (category: CategoryType) => void
}

const Component: React.FC<Props> = props => {
  return (
    <Wrapper>
      <Categories>
        <Category
          className={props.current === 'all' && 'current'}
          onClick={() => props.onClick('all')}
        >
          ALL
        </Category>
        <Category
          className={props.current === 'development' && 'current'}
          onClick={() => props.onClick('development')}
        >
          DEVELOPMENT
        </Category>
        <Category
          className={props.current === 'travel' && 'current'}
          onClick={() => props.onClick('travel')}
        >
          TRAVEL
        </Category>
        <Category
          className={props.current === 'other' && 'current'}
          onClick={() => props.onClick('other')}
        >
          OTHER
        </Category>
      </Categories>
    </Wrapper>
  )
}

const Categories = styled.ul`
  display: flex;
`

const Category = styled.li`
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: bold;
  margin-right: 5px;
  &.current {
    border-bottom: 2px solid #222222;
  }
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    font-size: 2rem;
    margin-right: 10px;
  }
`

export default Component

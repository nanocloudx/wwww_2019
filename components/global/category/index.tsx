import * as React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_TABLET } from '../../parts/constants'

type Props = {
  pathname: string
}

const Component: React.FC<Props> = props => {
  const category = props.pathname.split('/')[1] || ''
  if (!category) {
    return <></>
  }
  return <Category>{capitalizeFirstLetter(category)}</Category>
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Category = styled.h2`
  display: inline-block;
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: bold;
  margin: 30px 20px 10px;
  padding-right: 50px;
  border-bottom: 3px solid #333333;
  &::before {
    content: '>_';
    padding-right: 5px;
    font-size: 50%;
    color: #555555;
  }
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    font-size: 2.75rem;
    line-height: 2.75rem;
    border-bottom: 4px solid #333333;
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    font-size: 3rem;
    line-height: 3rem;
    margin: 40px 30px 10px;
    border-bottom: 5px solid #333333;
  }
`

export default Component

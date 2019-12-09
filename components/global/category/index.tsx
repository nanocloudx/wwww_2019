import * as React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_DESKTOP } from '../../constants'

type Props = {
  pathname: string
}

const Component: React.FC<Props> = props => {
  const paths = props.pathname.split('/')
  const category = paths[1] || ''
  const subCategory = paths[2] || ''

  if (!category) {
    return <></>
  }
  if (!subCategory) {
    return <Category>{getCategoryName(category)}</Category>
  }
  return (
    <Category>
      {getCategoryName(category)}
      <SubCategory>{capitalizeFirstLetter(subCategory)}</SubCategory>
    </Category>
  )
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function getCategoryName(str) {
  switch (str) {
    case 'articles':
      return 'Articles'
    case 'about':
      return 'About me'
    default:
      return ''
  }
}

const Category = styled.h2`
  cursor: default;
  display: inline-block;
  font-size: 2.4rem;
  font-weight: bold;
  margin: 20px 20px 0;
  padding-right: 50px;
  padding-bottom: 5px;
  border-bottom: 1px solid #aaaaaa;
  &::before {
    content: '/';
    padding-right: 5px;
    font-size: 1.8rem;
    color: #555555;
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    margin: 20px 30px 0;
  }
`

const SubCategory = styled.span`
  font-size: 1.8rem;
  color: #555555;
  &::before {
    content: '/';
    padding: 0 5px;
  }
`

export default Component

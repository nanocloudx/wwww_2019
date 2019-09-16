import * as React from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY_DESKTOP, MEDIA_QUERY_TABLET } from '../../common/constants'

type Props = {
  pathname: string
}

const Component: React.FC<Props> = props => {
  const path = props.pathname.split('/')[1] || ''
  if (!path) {
    return <></>
  }
  return <Category>{capitalizeFirstLetter(path)}</Category>
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Category = styled.h2`
  display: inline-block;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 20px;
  padding-right: 50px;
  border-bottom: 2px solid #222222;
  &::before {
    content: '>_';
    padding-right: 5px;
    font-size: 50%;
    color: #555555;
  }
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    font-size: 3rem;
    margin: 30px;
  }
  @media screen and (min-width: ${MEDIA_QUERY_DESKTOP}px) {
    font-size: 3rem;
  }
`

export default Component

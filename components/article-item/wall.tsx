import * as React from 'react'
import styled from 'styled-components'

type Props = {
  src: string
}

const Component: React.FC<Props> = props => {
  return <Image src={props.src} />
}

const Image = styled.img`
  width: calc(100% + 40px);
  margin: 20px -20px 40px;
`

export default Component

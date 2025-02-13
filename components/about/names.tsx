import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return (
    <div>
      <Name>Syuhei Kobayashi</Name>
      <AlternateName>(なのくろ / @nanocloudx)</AlternateName>
    </div>
  )
}

const Name = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`

const AlternateName = styled.p`
  font-size: 1.8rem;
  margin-right: 15px;
`

export default Component

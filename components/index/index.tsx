import * as React from 'react'
import styled from 'styled-components'
import Welcome from './welcome'

const Component: React.FC = props => {
  return (
    <View>
      <Welcome />
    </View>
  )
}

const View = styled.div`
  padding: 20px;
`

export default Component

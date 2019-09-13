import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return <Section>{props.children}</Section>
}

const Section = styled.section`
  margin-bottom: 30px;
`

export default Component

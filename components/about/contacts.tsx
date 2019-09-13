import * as React from 'react'
import styled from 'styled-components'
import Section from '../common/section'

const Component: React.FC = props => {
  return (
    <Section>
      <Title>Contacts</Title>
      <p>nanocloudx@gmail.com or Twitter DM</p>
    </Section>
  )
}

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export default Component

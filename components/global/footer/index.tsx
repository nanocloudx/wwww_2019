import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return (
    <Footer>
      <p>
        <small>&copy; nanocloudx</small>
      </p>
      <p>
        <small>
          Made with<Heart>&#9829;</Heart>in Akihabara
        </small>
      </p>
    </Footer>
  )
}

const Footer = styled.footer`
  font-size: 1.1rem;
  margin: 40px;
  text-align: center;
  color: #666666;
`

const Heart = styled.span`
  color: #eb6ea0;
  font-size: 1.3rem;
  padding: 0 2px;
`

export default Component

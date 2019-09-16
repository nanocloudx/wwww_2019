import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Component: React.FC = props => {
  return (
    <Footer>
      <p>
        <small>&copy; 2019 nanocloudx</small>
      </p>
      <p>
        <small>
          Built with{' '}
          <Bolt>
            <FontAwesomeIcon icon="bolt" />
          </Bolt>{' '}
          in Tokyo International Airport
        </small>
      </p>
    </Footer>
  )
}

const Footer = styled.footer`
  font-size: 1.1rem;
  margin: 30px;
  text-align: center;
  color: #666666;
`

const Bolt = styled.span`
  color: #ffb000;
  > svg {
    font-size: 1.1rem;
  }
`

export default Component

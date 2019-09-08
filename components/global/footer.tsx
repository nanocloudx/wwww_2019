import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  return (
    <footer className={props.className}>
      <p>
        <small>&copy; 2019 nanocloudx</small>
      </p>
      <p>
        <small>
          Built with <FontAwesomeIcon icon="heart" /> in Akihabara
        </small>
      </p>
    </footer>
  )
}

const Styled = styled(View)`
  text-align: center;
  margin: 40px;
  > p {
    > small {
      font-size: 1.2rem;
      > svg {
        height: 1.2rem;
      }
    }
  }
`

export default Styled

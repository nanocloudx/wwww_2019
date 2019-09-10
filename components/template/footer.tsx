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
          Built with <FontAwesomeIcon icon="bolt" /> in Akihabara Electric Town
        </small>
      </p>
    </footer>
  )
}

const Styled = styled(View)`
  margin: 40px;
  > p {
    text-align: center;
    > small {
      font-size: 1.2rem;
      > svg {
        height: 1.2rem;
        color: #ffb000;
      }
    }
  }
`

export default Styled

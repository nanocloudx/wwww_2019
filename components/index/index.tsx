import * as React from 'react'
import styled from 'styled-components'
import * as styles from '../styles'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <p>It works!</p>
    </div>
  )
}

const Styled = styled(View)``

export default Styled

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  iteration?: number | 'infinite'
}

const Component: React.FC<Props> = props => {
  return <Wiggle iteration={props.iteration}>{props.children}</Wiggle>
}

const Wiggle = styled.div`
  animation: wiggle 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-iteration-count: ${props =>
    props.iteration ? props.iteration : '1'};
  @keyframes wiggle {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`

export default Component

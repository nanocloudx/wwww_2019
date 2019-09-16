import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return <RevealText>{props.children}</RevealText>
}

const RevealText = styled.p`
  animation-delay: 0.5s;
  animation-iteration-count: 1;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  &::after {
    animation-delay: 0.5s;
    animation-iteration-count: 1;
    animation-duration: 0.8s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  position: relative;
  animation-name: clip-text;
  cursor: default;
  &::after {
    content: '';
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #222222;
    transform: scaleX(0);
    transform-origin: 0 50%;
    pointer-events: none;
    animation-name: text-revealer;
  }
  @keyframes clip-text {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }
  @keyframes text-revealer {
    0%,
    50% {
      transform-origin: 0 50%;
    }
    60%,
    100% {
      transform-origin: 100% 50%;
    }
    60% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
`

export default Component

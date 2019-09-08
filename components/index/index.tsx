import * as React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <p>Hello!</p>
      <p>You've reached the</p>
      <p className="strong">
        <strong>End of the Internet</strong>.
      </p>
      <p>wwww.dev</p>
    </div>
  )
}

const Styled = styled(View)`
  margin: 70px 40px;
  > p {
    font-size: 7rem;
    line-height: 7rem;
    cursor: default;
    &.strong {
      font-weight: bold;
      &:hover {
        animation: wiggle 0.1s;
        animation-iteration-count: infinite;
        cursor: progress;
      }
      @keyframes wiggle {
        0% {
          transform: translate(2px, -2px);
        }
        20% {
          transform: translate(-2px, -2px);
        }
        20% {
          transform: translate(2px, 2px);
        }
        30% {
          transform: translate(-2px, 2px);
        }
        40% {
          transform: translate(2px, -2px);
        }
        50% {
          transform: translate(-2px, -2px);
        }
        60% {
          transform: translate(2px, -2px);
        }
        70% {
          transform: translate(-2px, 2px);
        }
        80% {
          transform: translate(2px, 2px);
        }
        90% {
          transform: translate(-2px, -2px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    }
    @media screen and (min-width: 560px) {
      font-size: 9rem;
      line-height: 9rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 11rem;
      line-height: 11rem;
    }
  }
`

export default Styled

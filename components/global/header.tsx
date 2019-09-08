import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  className?: string
  category?: string
}

const View: React.FC<Props> = props => {
  return (
    <header className={props.className}>
      <div className="menu">
        <h1>wwww.dev</h1>
        <ul>
          <li>
            <Link href="/">
              <a>index</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

const Styled = styled(View)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  background-color: #222222;
  color: #ffffff;
  > .menu {
    position: absolute;
    background-color: #222222;
    width: 100vh;
    transform: rotate(90deg);
    transform-origin: left top;
    right: -100vh;
    line-height: 50px;
    padding: 0 10px;
    font-weight: bold;
    display: flex;
    > h1 {
      &:before {
        content: '>_';
        padding: 0 10px;
        color: #aaaaaa;
      }
    }
    > ul {
      display: flex;
      > li {
        &:before {
          content: '/';
          padding: 0 10px;
          color: #aaaaaa;
        }
        > a {
          color: inherit;
          text-decoration: none;
        }
      }
    }
  }
`

export default Styled

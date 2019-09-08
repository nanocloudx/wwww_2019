import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

type Props = {
  className?: string
  category?: string
  page?: string
}

const View: React.FC<Props> = props => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)

  return (
    <header className={props.className}>
      <h1>
        <span className="terminal">&gt;_ </span>
        <Link href="/">
          <a>wwww.dev</a>
        </Link>
        {props.category && (
          <>
            <span className="terminal"> / </span>
            <Link href={`/${props.category}`}>
              <a>{props.category}</a>
            </Link>
          </>
        )}
      </h1>
      <div className="menu">
        <FontAwesomeIcon icon="bars" />
      </div>
      {isVisibleMenu && (
        <div className="menu-list">
          <ul>
            <li>
              <Link href="/aboutme">
                <a>About Me</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

const Styled = styled(View)`
  margin-bottom: 30px;
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #222222;
  color: #ffffff;
  // for tablet
  @media screen and (min-width: 560px) {
  }
  // for desktop
  @media screen and (min-width: 960px) {
    background-color: transparent;
    margin: 40px 40px 50px;
    border: none;
    height: auto;
  }
  > h1 {
    padding: 10px 20px;
    font-size: 2rem;
    font-weight: bold;
    @media screen and (min-width: 960px) {
      display: inline-block;
      background-color: #222222;
      color: #ffffff;
    }
    > .terminal {
      color: #aaaaaa;
    }
    > a {
      color: inherit;
      text-decoration: none;
    }
  }
  > .menu {
    font-size: 2.4rem;
    padding: 0 20px;
    color: #aaaaaa;
  }
`

export default Styled

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href: string
}

const Component: React.FC<Props> = props => {
  return (
    <Link href={props.href}>
      <Anchor>{props.children}</Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  cursor: pointer;
  text-decoration: inherit;
  color: inherit;
  padding: inherit;
`

export default Component

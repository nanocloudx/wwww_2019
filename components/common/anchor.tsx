import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href: string
  label: string
  isExternal?: boolean
}

const Component: React.FC<Props> = props => {
  if (props.isExternal) {
    return (
      <Anchor href={props.href} target="_blank" rel="noopener" aria-label={props.label}>
        {props.children}
      </Anchor>
    )
  }
  return (
    <Link href={props.href}>
      <Anchor aria-label={props.label}>{props.children}</Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  cursor: pointer;
  display: block;
  color: inherit;
`

export default Component

import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Anchor from '../parts/anchor'

type Props = {
  id: string
  date: string
  tags: string[]
}

const Component: React.FC<Props> = props => {
  return (
    <Info>
      <Meta>
        {props.tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
        {props.date}
      </Meta>
      <Socials>
        <Icons>
          <Anchor
            href="https://twitter.com/nanocloudx"
            isExternal={true}
            label="Twitter"
          >
            <FontAwesomeIcon icon={['fab', 'twitter-square']} />
          </Anchor>
        </Icons>
        <Icons>
          <Anchor
            href="https://www.facebook.com/nanocloudx"
            isExternal={true}
            label="Facebook"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
          </Anchor>
        </Icons>
      </Socials>
    </Info>
  )
}

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;
`
const Meta = styled.p`
  color: #555555;
`
const Tag = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
  color: #ffffff;
  background-color: #222222;
  padding: 2px 6px;
`
const Icons = styled.div`
  font-size: 3rem;
  line-height: 3rem;
  margin-right: 10px;
`
const Socials = styled.div`
  display: flex;
`

export default Component

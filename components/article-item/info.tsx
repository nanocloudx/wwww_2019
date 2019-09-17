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
      <Tags>
        {props.tags.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </Tags>
      <Meta>LastUpdate {props.date}</Meta>
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
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.6rem;
`
const Tags = styled.div`
  width: 100%;
`
const Tag = styled.span`
  font-size: 1.4rem;
  margin-right: 10px;
  color: #ffffff;
  background-color: #333333;
  padding: 2px 6px;
`
const Meta = styled.p`
  color: #555555;
`
const Socials = styled.div`
  display: flex;
`
const Icons = styled.div`
  font-size: 2.6rem;
  line-height: 2.6rem;
  margin-right: 10px;
`

export default Component

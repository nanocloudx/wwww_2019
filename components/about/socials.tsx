import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Anchor from '../common/anchor'

const Component: React.FC = props => {
  return (
    <Socials>
      <Icons>
        <Anchor
          href="https://github.com/nanocloudx"
          isExternal={true}
          label="Github"
        >
          <FontAwesomeIcon icon={['fab', 'github-square']} />
        </Anchor>
      </Icons>
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
      <Icons>
        <Anchor
          href="https://www.instagram.com/nanocloudx"
          isExternal={true}
          label="Instagram"
        >
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </Anchor>
      </Icons>
    </Socials>
  )
}

const Socials = styled.div`
  display: flex;
`
const Icons = styled.div`
  font-size: 2.4rem;
  line-height: 2.4rem;
  margin-top: 10px;
  margin-right: 10px;
`

export default Component

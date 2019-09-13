import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../common/wrapper'
import Section from '../common/section'
import Images from './image'
import Names from './names'
import Socials from './socials'
import Works from './works'
import Likes from './likes'
import Contacts from './contacts'
import { MEDIA_QUERY_TABLET } from '../common/constants'

const Component: React.FC = props => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Images />
      </ImageWrapper>
      <div>
        <Section>
          <Column>
            <Names />
            <Socials />
          </Column>
          <Works />
        </Section>
        <Likes />
        <Contacts />
      </div>
    </Wrapper>
  )
}

const ImageWrapper = styled.div`
  margin-right: 70px;
`
const Column = styled.div`
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    display: flex;
    align-items: flex-end;
  }
`

export default Component

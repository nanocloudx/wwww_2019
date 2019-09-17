import * as React from 'react'
import styled from 'styled-components'
import Wrapper from '../template/wrapper'
import TwoColumn from '../template/two-column'
import Section from '../parts/section'
import Images from './image'
import Names from './names'
import Socials from './socials'
import Works from './works'
import Likes from './likes'
import Contacts from './contacts'
import { MEDIA_QUERY_TABLET } from '../constants'

const Component: React.FC = props => {
  return (
    <Wrapper>
      <TwoColumn>
        <div>
          <Images />
        </div>
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
      </TwoColumn>
    </Wrapper>
  )
}

const Column = styled.div`
  @media screen and (min-width: ${MEDIA_QUERY_TABLET}px) {
    display: flex;
    align-items: flex-end;
  }
`

export default Component

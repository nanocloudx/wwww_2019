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

// const Styled = styled(View)`
//   > .image {
//     margin-bottom: 30px;
//     > img {
//       display: block;
//       margin: 0 auto;
//       width: 300px;
//       height: 300px;
//     }
//     @media screen and (min-width: 960px) {
//       margin: 0 50px 20px 0;
//     }
//   }
//   > .description {
//     margin: 0 20px;
//     > section {
//       margin-bottom: 30px;
//       .note {
//         font-size: 1.4rem;
//         color: #666666;
//       }
//       &.abouts {
//         > .name {
//           font-size: 2.4rem;
//           font-weight: bold;
//         }
//         > .alternate {
//           @media screen and (min-width: 560px) {
//             display: flex;
//           }
//           > .name-alternate {
//             font-size: 1.8rem;
//             margin-right: 10px;
//             margin-bottom: 5px;
//           }
//           > .socials {
//             > a {
//               color: inherit;
//               margin-right: 10px;
//               > svg {
//                 width: 25px;
//                 height: 25px;
//               }
//             }
//           }
//         }
//         > .works {
//           margin: 15px 0;
//           > h3 {
//             font-size: 1.8rem;
//           }
//         }
//       }
//       &.likes,
//       &.links,
//       &.contacts {
//         > h3 {
//           font-size: 2rem;
//           font-weight: bold;
//           margin-bottom: 1.5rem;
//         }
//       }
//       &.likes {
//         > dl > div {
//           margin-bottom: 10px;
//           > dt {
//             font-weight: bold;
//           }
//         }
//       }
//       &.links {
//         > ul {
//           display: flex;
//           > li {
//             margin-right: 10px;
//             > a {
//               text-decoration: none;
//               color: #6a5acd;
//             }
//           }
//         }
//       }
//     }
//   }
// `

import * as React from 'react'
import styled from 'styled-components'
import Section from '../parts/section'
import Note from '../parts/note'

const Component: React.FC = props => {
  return (
    <Section>
      <Title>Likes</Title>
      <dl>
        <LikeItem>
          <dt>Travel</dt>
          <dd>Flew 62,729+ miles</dd>
          <dd className="note">
            <Note>
              Went: California, NewYork, Singapole, Melbourne, Venezia, Manila,
              Macau
            </Note>
          </dd>
        </LikeItem>
        <LikeItem>
          <dt>Anime</dt>
          <dd>I like almost anything!</dd>
          <dd className="note">
            <Note>
              Love: The Melancholy of Haruhi Suzumiya, Sound! Euphonium, etc...
            </Note>
          </dd>
        </LikeItem>
        <LikeItem>
          <dt>Videography</dt>
          <dd>Graduated from school of shooting film</dd>
          <dd className="note">
            <Note>Use: Sony alpha 7III</Note>
          </dd>
        </LikeItem>
        <LikeItem>
          <dt>Poker</dt>
          <dd>IT Poker Committee (ITPC) Organizer</dd>
          <dd className="note">
            <Note>
              "ITPC" is a poker tournament co-organized by IT companies in
              Tokyo.
            </Note>
          </dd>
        </LikeItem>
        <LikeItem>
          <dt>Golf</dt>
          <dd>Score 140+</dd>
          <dd className="note">
            <Note>Bad... but I like it!</Note>
          </dd>
        </LikeItem>
        <LikeItem>
          <dt>Niconico</dt>
          <dd>Starring on the Niconico-Chokaigi official opening</dd>
          <dd className="note">
            <Note>"Mizuiro" from Nakasone-off</Note>
          </dd>
        </LikeItem>
      </dl>
    </Section>
  )
}

const Title = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

const LikeItem = styled.div`
  margin-bottom: 10px;
  > dt {
    font-weight: bold;
  }
  > dd.note {
    font-size: 1.4rem;
  }
`

export default Component

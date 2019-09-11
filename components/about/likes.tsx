import * as React from 'react'
import styled from 'styled-components'

const Component: React.FC = props => {
  return (
    <section>
      <h3>Likes</h3>
      <dl>
        <div>
          <dt>Travel</dt>
          <dd>Flew 66,209+ miles</dd>
          <dd className="note">
            Went: California, NewYork, Singapole, Melbourne, Venezia,
            Manila, Macau
          </dd>
        </div>
        <div>
          <dt>Anime</dt>
          <dd>I like almost anything!</dd>
          <dd className="note">
            Love: The Melancholy of Haruhi Suzumiya, Sound! Euphonium,
            etc...
          </dd>
        </div>
        <div>
          <dt>Videography</dt>
          <dd>Graduated from school of shooting film</dd>
          <dd className="note">
            Use: Sony alpha 7III / Vario-Tessar T* FE 16-35mm F4 ZA OSS
          </dd>
        </div>
        <div>
          <dt>Poker</dt>
          <dd>IT Poker Committee (ITPC) Organizer</dd>
          <dd className="note">
            "ITPC" is a poker tournament co-organized by IT companies in
            Tokyo.
          </dd>
        </div>
        <div>
          <dt>Golf</dt>
          <dd>Score 180+</dd>
          <dd className="note">Terribly bad... but I like it!</dd>
        </div>
        <div>
          <dt>Niconico</dt>
          <dd>Starring on the Niconico-Chokaigi official opening</dd>
          <dd className="note">"Mizuiro" from Nakasone-off</dd>
        </div>
      </dl>
    </section>
  )
}

// const Example = styled.div`
//
// `

export default Component

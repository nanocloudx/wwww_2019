import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  className?: string
}

const View: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <div className="image">
        <img src="/static/images/nanocloudx.jpg" alt="nanocloudx" />
      </div>
      <div className="description">
        <section className="abouts">
          <h2 className="name">Syuhei Kobayashi</h2>
          <div className="alternate">
            <p className="name-alternate">(なのくろ / @nanocloudx)</p>
            <div className="socials">
              <a
                href="https://github.com/nanocloudx"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={['fab', 'github-square']} />
              </a>
              <a
                href="https://twitter.com/nanocloudx"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={['fab', 'twitter-square']} />
              </a>
              <a
                href="https://www.facebook.com/nanocloudx"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={['fab', 'facebook-square']} />
              </a>
              <a
                href="https://www.instagram.com/nanocloudx"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
            </div>
          </div>
          <div className="works">
            <h3>Web Developer</h3>
            <p>
              TypeScript, React.js, Vue.js, Node.js, Redis, Firebase,
              Kubernetes, etc...
            </p>
            <p>
              Worked at DeNA <span className="note">(2017 - present)</span> and
              DWANGO <span className="note">(2012 - 2017)</span>
            </p>
          </div>
        </section>

        <section className="likes">
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

        <section className="contacts">
          <h3>Contacts</h3>
          <p>nanocloudx@gmail.com or Twitter DM</p>
        </section>
      </div>
    </div>
  )
}

const Styled = styled(View)`
  margin: 0 auto;
  @media screen and (min-width: 560px) {
    width: 560px;
  }
  @media screen and (min-width: 960px) {
    display: flex;
    width: 960px;
  }
  > .image {
    margin-bottom: 30px;
    > img {
      display: block;
      margin: 0 auto;
      width: 300px;
      height: 300px;
    }
    @media screen and (min-width: 960px) {
      margin: 0 50px 20px 0;
    }
  }
  > .description {
    margin: 0 20px;
    > section {
      margin-bottom: 30px;
      .note {
        font-size: 1.4rem;
        color: #666666;
      }
      &.abouts {
        > .name {
          font-size: 2.4rem;
          font-weight: bold;
        }
        > .alternate {
          @media screen and (min-width: 560px) {
            display: flex;
          }
          > .name-alternate {
            font-size: 1.8rem;
            margin-right: 10px;
            margin-bottom: 5px;
          }
          > .socials {
            > a {
              color: inherit;
              margin-right: 10px;
              > svg {
                width: 25px;
                height: 25px;
              }
            }
          }
        }
        > .works {
          margin: 15px 0;
          > h3 {
            font-size: 1.8rem;
          }
        }
      }
      &.likes,
      &.links,
      &.contacts {
        > h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }
      }
      &.likes {
        > dl > div {
          margin-bottom: 10px;
          > dt {
            font-weight: bold;
          }
        }
      }
      &.links {
        > ul {
          display: flex;
          > li {
            margin-right: 10px;
            > a {
              text-decoration: none;
              color: #6a5acd;
            }
          }
        }
      }
    }
  }
`

export default Styled

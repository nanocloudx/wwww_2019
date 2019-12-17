import * as React from 'react'
import styled from 'styled-components'
import Note from '../parts/note'

const Component: React.FC = props => {
  return (
    <Works>
      <Occupation>Web Developer</Occupation>
      <p>TypeScript, React.js, Vue.js, Node.js, Redis, GCP, Firebase, etc...</p>
      <p>
        Worked at ABEJA <Note>(2020 - present)</Note>
      </p>
      <p>
        -- Past DeNA <Note>(2017 - 2019)</Note> and DWANGO{' '}
        <Note>(2012 - 2017)</Note>
      </p>
    </Works>
  )
}

const Works = styled.div`
  margin: 20px 0;
`
const Occupation = styled.h3`
  font-size: 2rem;
`

export default Component

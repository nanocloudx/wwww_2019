import * as React from 'react'
import styled from 'styled-components'
import Note from '../common/note'

const Component: React.FC = props => {
  return (
    <Works>
      <Occupation>Web Developer</Occupation>
      <p>
        TypeScript, React.js, Vue.js, Node.js, Redis, Firebase, Kubernetes,
        etc...
      </p>
      <p>
        Worked at DeNA <Note>(2017 - present)</Note> and DWANGO{' '}
        <Note>(2012 - 2017)</Note>
      </p>
    </Works>
  )
}

const Works = styled.div`
  margin: 20px 0;
`
const Occupation = styled.h3`
  font-size: 1.8rem;
`

export default Component

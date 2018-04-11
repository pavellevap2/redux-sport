import React from 'react'
import CompletedMatch from './CompletedMatch'
import styled from 'styled-components'

const MatchesItems = styled.ul`
  margin-top: 4%;
`

const CompletedMatches = ({ completedMatches }) => {
  return (
    <MatchesItems>
      {completedMatches.map((match, i) => (
        <CompletedMatch key={i} match={match} />
      ))}
    </MatchesItems>
  )
}
export default CompletedMatches

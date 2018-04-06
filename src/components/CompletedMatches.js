import React from 'react'
import CompletedMatch from './CompletedMatch'

const CompletedMatches = ({ completedMatches }) => {
  return (
    <ul>
      {completedMatches.map((match, i) => (
        <CompletedMatch key={i} match={match} />
      ))}
    </ul>
  )
}
export default CompletedMatches

import React from 'react'
import styled from 'styled-components'

const MatchItem = styled.li`
  flex-shrink: 0;
  width: 33.33%;
`

const ScheduledMatch = ({ match, i }) => {
  return (
    <MatchItem>
      <div>
        {`${match.competitors[0].competitorName} VS ${
          match.competitors[1].competitorName
        }`}
      </div>
      {match.matchTimeUTC}
      <div />
      <div>
        <img
          src={
            match.competitors[0].images.logo.S1 === undefined
              ? match.competitors[0].images.logo.T1.url
              : match.competitors[0].images.logo.S1.url
          }
          alt={'logo'}
        />
        <img
          src={
            match.competitors[1].images.logo.S1 === undefined
              ? match.competitors[1].images.logo.T1.url
              : match.competitors[1].images.logo.S1.url
          }
          alt={'logo'}
        />
      </div>
    </MatchItem>
  )
}
export default ScheduledMatch

import React from 'react'

const ScheduledMatch = ({ match }) => {
  return (
    <li>
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
    </li>
  )
}
export default ScheduledMatch

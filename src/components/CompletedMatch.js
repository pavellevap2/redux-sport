import React from 'react'

const CompletedMatch = ({ match }) => {
  return (
    <li>
      <div>
        {`${match.competitors[0].competitorName} VS ${
          match.competitors[1].competitorName
        }`}
      </div>
      {match.matchTime}
      <div />
      <div>{`${match.competitors[0].scoreString}: ${
        match.competitors[1].scoreString
      }`}</div>
      <div>
        <img
          src={
            match.competitors[0].images.logo.S1 === undefined
              ? match.competitors[0].images.logo.T1.url
              : match.competitors[0].images.logo.S1.url
          }
        />
        <img
          src={
            match.competitors[1].images.logo.S1 === undefined
              ? match.competitors[1].images.logo.T1.url
              : match.competitors[1].images.logo.S1.url
          }
        />
      </div>
    </li>
  )
}
export default CompletedMatch

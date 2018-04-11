import React from 'react'
import styled from 'styled-components'

const MatchItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 2% 20%;
  border: 2px solid ${props => props.theme.tretiary};
  border-radius: 8px;
`

const CompletedMatch = ({ match }) => {
  return (
    <MatchItem>
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
export default CompletedMatch

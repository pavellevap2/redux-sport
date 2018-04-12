import React from 'react'
import styled from 'styled-components'

const MatchItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 2.5% 20%;
  padding-bottom: 1.3em;
  border: 2px solid ${props => props.theme.tretiary};
  border-top: none;
  border-radius: 8px;
  box-shadow: 0 0 20px ${props => props.theme.tretiary};
`
const MatchDate = styled.div`
  width: 100%;
  padding: 0.4em 0;
  height: 100%;
  margin-bottom: 1em;
  border: 3px solid ${props => props.theme.primaryBack};
  border-radius: 8px;
  text-align: center;
  font-size: 2em;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.secondaryBack};
  font-weight: bold;
`

const MatchImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const MatchImg = styled.img`
  height: 100%;
  width: 25%;
`

const ScoreText = styled.span`
  font-size: 4em;
  font-family: 'Kurale', serif;
  font-weight: 500;
  color: ${props => props.theme.primaryBack};
`

const CompletedMatch = ({ match }) => (
  <MatchItem>
    <MatchDate>{match.dateMSK} </MatchDate>
    <MatchImages>
      <MatchImg src={match.firstImg} alt={'logo'} />
      <ScoreText>
        {`${match.competitors[0].scoreString} : ${
          match.competitors[1].scoreString
        }`}
      </ScoreText>
      <MatchImg src={match.secondImg} alt={'logo'} />
    </MatchImages>
  </MatchItem>
)

export default CompletedMatch

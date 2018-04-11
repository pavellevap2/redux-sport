import React from 'react'
import styled from 'styled-components'
import camera from './camera.png'
import email from './email.png'
import userMale from './user-male.png'
import home from './home.png'

const ICONS = [camera, email, userMale, home]

const MatchItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  width: 20%;
  margin: 0 2.5%;
  padding: 0;
  border: 2px solid ${props => props.theme.tretiary};
  box-shadow: 0 0 1.4em rgba(0, 0, 0, 0.5);
`

const MatchLogo = styled.img`
  width: 30%;
  height: 15vh;
`
const MatchItemImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1em 0;
`

const MatchDate = styled.p`
  padding: 0.5em 0;
  margin: 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid black;
  color: ${props => props.theme.tretiary};
  font-size: 1.4em;
  font-weight: 500;
`

const VersusText = styled.span`
  font-size: 2em;
  font-family: 'Kurale', serif;
  font-weight: 500;
`

const MatchBottomBox = styled.div`
  width: 100%;
  height: 10%;
  padding: 1em 0;
  margin-top: 1em;
  border-top: 1px solid black;
  background: lightgray;
`

const IconsItems = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
`

const IconsItem = styled.li`
  margin: 0 0.5em;
`

const IconsImage = styled.img`
  width: 1.1em;
  height: 1.1em;
`

const ScheduledMatch = ({ match, i }) => {
  const date = `${match.matchTimeUTC.slice(5, 10)} /
   ${match.matchTimeUTC.slice(10, 16)}`

  return (
    <MatchItem>
      <MatchDate>{date} MSK</MatchDate>
      <MatchItemImages>
        <MatchLogo
          src={
            match.competitors[0].images.logo.S1 === undefined
              ? match.competitors[0].images.logo.T1.url
              : match.competitors[0].images.logo.S1.url
          }
          alt={'logo'}
        />
        <VersusText>VS</VersusText>
        <MatchLogo
          src={
            match.competitors[1].images.logo.S1 === undefined
              ? match.competitors[1].images.logo.T1.url
              : match.competitors[1].images.logo.S1.url
          }
          alt={'logo'}
        />
      </MatchItemImages>
      <MatchBottomBox>
        <IconsItems>
          {ICONS.map((icon, i) => (
            <IconsItem>
              <IconsImage src={icon} alt="icon" />
            </IconsItem>
          ))}
        </IconsItems>
      </MatchBottomBox>
    </MatchItem>
  )
}

export default ScheduledMatch

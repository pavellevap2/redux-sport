import React from 'react'
import MatchCalendar from './MatchCalendar'
import styled from 'styled-components'

const CalendarTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const CalendarHeadCell = styled.td`
  width: 25%;
  padding: 0.3em 0;
  background: lightgrey;
  color: ${props => props.theme.primaryBack};
  font-size: 1.3em;
  font-weight: bold;
  border: 1.5px solid black;
`

const MatchesCalendar = ({ matches }) => (
  <CalendarTable>
    <thead>
      <tr>
        <CalendarHeadCell>Дата и время</CalendarHeadCell>
        <CalendarHeadCell>Хозяева</CalendarHeadCell>
        <CalendarHeadCell>Гости</CalendarHeadCell>
        <CalendarHeadCell>Арена</CalendarHeadCell>
      </tr>
    </thead>
    <tbody>
      {matches.map((match, i) => (
        <MatchCalendar
          matchData={[
            match.matchTimeUTC,
            match.competitors[0].competitorName,
            match.competitors[1].competitorName,
            match.venue.venueName,
          ]}
          key={i}
          id={i}
        />
      ))}
    </tbody>
  </CalendarTable>
)

export default MatchesCalendar

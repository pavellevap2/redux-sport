import React from 'react'
import styled from 'styled-components'

const CalendarCell = styled.td`
  width: 25%;
  padding: 0.3em 0;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  font-size: 1.3em;
  font-weight: ${({ weight }) => weight};
  border: 1.5px solid ${props => props.theme.tretiary};
`

const MatchCalendar = ({ matchData, id }) => (
  <tr>
    {matchData.map((match, i) => (
      <CalendarCell
        key={i}
        weight={id % 2 !== 0 ? 'normal' : 'bold'}
        color={id % 2 !== 0 ? '#1d1e30' : 'lightgrey'}
        background={id % 2 !== 0 ? 'lightgrey' : '#1d1e30'}
      >
        {match}
      </CalendarCell>
    ))}
  </tr>
)

export default MatchCalendar

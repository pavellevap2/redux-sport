import React from 'react'

const MatchCalendar = ({ match }) => {
  return (
    <tr>
      <td>{match.matchTimeUTC}</td>
      <td>{match.competitors[0].competitorName}</td>
      <td>{match.competitors[1].competitorName}</td>
      <td>{match.venue.venueName}</td>
    </tr>
  )
}
export default MatchCalendar

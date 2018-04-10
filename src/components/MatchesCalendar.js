import React from 'react'
import MatchCalendar from './MatchCalendar'
import CalendarFiltersContainer from '../containers/CalendarFiltersContainer'

class MatchesCalendar extends React.Component {
  componentDidMount() {
    this.props.loadCalendarData()
  }

  render() {
    const { matches, teams } = this.props
    return (
      <div>
        <div>
          <CalendarFiltersContainer teams={teams} />
        </div>
        <table>
          <thead>
            <tr>
              <td>Дата и время</td>
              <td>Хозяева</td>
              <td>Гости</td>
              <td>Арена</td>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, i) => <MatchCalendar match={match} key={i} />)}
          </tbody>
        </table>
        <button onClick={() => console.log(this.props.matches)}>matches</button>
      </div>
    )
  }
}

export default MatchesCalendar

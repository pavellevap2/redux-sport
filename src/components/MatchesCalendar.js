import React from 'react'
import MatchCalendar from './MatchCalendar'
import CalendarFiltersContainer from '../containers/CalendarFiltersContainer'
import CalendarCarousel from './CalendarCarousel'
import styled from 'styled-components'

const CalendarContainer = styled.div`
  margin-bottom: 3em;
`

const Calendar = styled.div`
  display: flex;
  width: 70%;
  margin: 3% 15% 0 15%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 0.4px solid ${props => props.theme.tretiary};
`
const CalendarTitle = styled.div`
  text-align: center;
  width: 100%;
  padding: 0.6em 0;
  font-size: 2em;
  font-weight: bold;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.primaryBack};
  border: 1px solid ${props => props.theme.secondary};
  border-bottom: none;
`
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

class MatchesCalendar extends React.Component {
  componentDidMount() {
    this.props.loadCalendarData()
  }

  render() {
    const { matches, teams } = this.props

    return (
      <CalendarContainer>
        <CalendarCarousel />
        <Calendar>
          <CalendarTitle>Расписание предстоящих матчей</CalendarTitle>
          <CalendarFiltersContainer teams={teams} />
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
        </Calendar>
      </CalendarContainer>
    )
  }
}

export default MatchesCalendar

import React from 'react'
import MatchesCalendar from './MatchesCalendar'
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

class CalendarPage extends React.Component {
  componentDidMount() {
    this.props.loadCalendarData()
  }

  render() {
    const { matches } = this.props

    return (
      <CalendarContainer>
        <CalendarCarousel />
        <Calendar>
          <CalendarTitle>Расписание предстоящих матчей</CalendarTitle>
          <CalendarFiltersContainer />
          <MatchesCalendar matches={matches} />
        </Calendar>
      </CalendarContainer>
    )
  }
}

export default CalendarPage

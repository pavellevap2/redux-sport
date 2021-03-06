import CalendarFilters from '../components/CalendarFilters'
import { connect } from 'react-redux'
import { getDate, getTeamName } from '../selectors/calendarData'
import { selectDate, selectTeamName } from '../actions/calendar'
import { getTeams } from '../selectors/teams'

const mapStateToProps = state => ({
  date: getDate(state),
  teamName: getTeamName(state),
  teams: getTeams(state),
})

const mapDispatchToProps = dispatch => ({
  selectDate: date => dispatch(selectDate(date)),
  selectTeamName: teamName => dispatch(selectTeamName(teamName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarFilters)

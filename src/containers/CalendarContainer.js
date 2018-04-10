import { connect } from 'react-redux'
import MatchesCalendar from '../components/MatchesCalendar'
import { loadCalendarData } from '../actions/teamsActions'
import { getTeams } from '../selectors/teams'
import { getCalendarMatches } from '../selectors/CalendarMatches'

const mapStateToProps = state => ({
  matches: getCalendarMatches(state),
  teams: getTeams(state),
})

const mapDispatchToProps = dispatch => ({
  loadCalendarData: () => dispatch(loadCalendarData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchesCalendar)

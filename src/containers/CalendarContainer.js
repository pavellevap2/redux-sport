import { connect } from 'react-redux'
import CalendarPage from '../components/CalendarPage'
import { loadCalendarData } from '../actions/teams'
import { getCalendarMatches } from '../selectors/CalendarMatches'

const mapStateToProps = state => ({
  matches: getCalendarMatches(state),
})

const mapDispatchToProps = dispatch => ({
  loadCalendarData: () => dispatch(loadCalendarData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage)

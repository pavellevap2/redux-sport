import { connect } from 'react-redux'
import MatchesCalendar from '../components/MatchesCalendar'
import { getScheduledMatches } from '../selectors/matches'
import { takeScheduledMatches } from '../actions/matchesActions'

const mapStateToProps = state => ({ matches: getScheduledMatches(state) })

const mapDispatchToProps = dispatch => ({
  takeScheduledMatches: () => dispatch(takeScheduledMatches()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchesCalendar)

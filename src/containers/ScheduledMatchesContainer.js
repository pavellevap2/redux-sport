import ScheduledMatches from '../components/ScheduledMatches'
import { getScheduledMatches } from '../selectors/matches'
import { connect } from 'react-redux'
import { takeScheduledMatches } from '../actions/matchesActions'

const mapStateToProps = state => ({
  scheduledMatches: getScheduledMatches(state),
})
const mapDispatchToProps = dispatch => ({
  takeScheduledMatches: () => dispatch(takeScheduledMatches()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledMatches)

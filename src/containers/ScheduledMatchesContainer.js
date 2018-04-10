import ScheduledMatches from '../components/ScheduledMatches'
import { getFiveScheduledMatches } from '../selectors/matches'
import { connect } from 'react-redux'
import { takeScheduledMatches } from '../actions/matchesActions'

const mapStateToProps = state => ({
  scheduledMatches: getFiveScheduledMatches(state),
})

const mapDispatchToProps = dispatch => ({
  takeScheduledMatches: () => dispatch(takeScheduledMatches()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledMatches)

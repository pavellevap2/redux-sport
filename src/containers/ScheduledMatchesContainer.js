import ScheduledMatches from '../components/ScheduledMatches'
import { getTenScheduledMatches } from '../selectors/matches'
import { connect } from 'react-redux'
import { takeScheduledMatches } from '../actions/matches'

const mapStateToProps = state => ({
  scheduledMatches: getTenScheduledMatches(state),
})

const mapDispatchToProps = dispatch => ({
  takeScheduledMatches: () => dispatch(takeScheduledMatches()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledMatches)

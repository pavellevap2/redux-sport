import HomePage from '../components/HomePage'
import { connect } from 'react-redux'
import { getCompletedMatches } from '../selectors/matches'
import { takeMatches } from '../actions/matchesActions'

const mapStateToProps = state => ({
  completedMatches: getCompletedMatches(state),
})

const mapDispatchToProps = dispatch => ({
  takeMatches: matches => dispatch(takeMatches(matches)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

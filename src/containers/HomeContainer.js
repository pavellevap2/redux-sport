import HomePage from '../components/HomePage'
import { connect } from 'react-redux'
import { getCompletedMatches } from '../selectors/matches'
import { takeMatches, nextPage } from '../actions/matches'

const mapStateToProps = state => ({
  completedMatches: getCompletedMatches(state),
})

const mapDispatchToProps = dispatch => ({
  takeMatches: matchesLength => dispatch(takeMatches(matchesLength)),
  nextPage: pageLength => dispatch(nextPage(pageLength)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

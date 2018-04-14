import HomePage from '../components/HomePage'
import { connect } from 'react-redux'
import {
  getCompletedMatches,
  getPageNumber,
  getMatchesLoading,
} from '../selectors/matches'
import { takeMatches, nextPage } from '../actions/matches'
import { getScheduledMatchesLoading } from '../selectors/scheduledMatches'

const mapStateToProps = state => ({
  completedMatches: getCompletedMatches(state),
  pageNumber: getPageNumber(state),
  isMatchesLoading: getMatchesLoading(state),
  isScheduledMatchesLoading: getScheduledMatchesLoading(state),
})

const mapDispatchToProps = dispatch => ({
  takeMatches: matchesLength => dispatch(takeMatches(matchesLength)),
  nextPage: pageLength => dispatch(nextPage(pageLength)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

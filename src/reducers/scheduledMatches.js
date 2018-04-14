import { combineReducers } from 'redux'
import {
  LOAD_SCHEDULED_MATCHES,
  SCHEDULED_MATCHES_LOADING,
} from '../actions/matches'
import { handleAction } from 'redux-actions'

const scheduledMatches = handleAction(
  LOAD_SCHEDULED_MATCHES,
  (state, { payload }) => payload,
  [],
)

const scheduledMatchesLoading = handleAction(
  SCHEDULED_MATCHES_LOADING,
  (state, { payload }) => payload,
  false,
)

const scheduledMatchesData = combineReducers({
  scheduledMatches,
  scheduledMatchesLoading,
})
export default scheduledMatchesData

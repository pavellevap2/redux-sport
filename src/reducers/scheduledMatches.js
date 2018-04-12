import { LOAD_SCHEDULED_MATCHES } from '../actions/matches'
import { handleAction } from 'redux-actions'

const scheduledMatches = handleAction(
  [LOAD_SCHEDULED_MATCHES],
  (state, { payload }) => payload,
  [],
)
export default scheduledMatches

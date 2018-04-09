import { LOAD_SCHEDULED_MATCHES } from '../actions/matchesActions'
import { handleAction } from 'redux-actions'

const scheduledMatches = handleAction(
  [LOAD_SCHEDULED_MATCHES],
  (state, { payload }) =>
    payload.filter(match => match.matchStatus === 'SCHEDULED'),
  [],
)
export default scheduledMatches

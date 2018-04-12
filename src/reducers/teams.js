import { handleAction } from 'redux-actions'
import { LOAD_ALL_TEAMS } from '../actions/teams'

const teams = handleAction(
  [LOAD_ALL_TEAMS],
  (state, { payload }) => payload,
  [],
)
export default teams

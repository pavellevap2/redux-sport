import { LOAD_MATCHES } from '../actions/matchesActions'
import { handleAction } from 'redux-actions'

const matches = handleAction(
  [LOAD_MATCHES],
  (state, { payload }) => [...state, ...payload],
  [],
)
export default matches

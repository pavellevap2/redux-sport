import { LOAD_MATCHES } from '../actions/matches'
import { handleAction } from 'redux-actions'

const matches = handleAction(
  [LOAD_MATCHES],
  (state, { payload }) => [...state, ...payload],
  [],
)
export default matches

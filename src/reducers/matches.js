import { LOAD_MATCHES, NEXT_PAGE } from '../actions/matches'
import { handleAction } from 'redux-actions'
import { combineReducers } from 'redux'

const matches = handleAction(
  [LOAD_MATCHES],
  (state, { payload }) => [...state, ...payload],
  [],
)

const pageNumber = handleAction(
  [NEXT_PAGE],
  state => (!state ? 1 : state + 1),
  0,
)

const matchesData = combineReducers({ matches, pageNumber })

export default matchesData

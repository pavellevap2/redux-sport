import { LOAD_MATCHES, NEXT_PAGE, MATCHES_LOADING } from '../actions/matches'
import { handleAction } from 'redux-actions'
import { combineReducers } from 'redux'

const matches = handleAction(
  LOAD_MATCHES,
  (state, { payload }) => [...state, ...payload],
  [],
)

const pageNumber = handleAction(NEXT_PAGE, state => (!state ? 1 : state + 1), 0)

export const matchesLoading = handleAction(
  MATCHES_LOADING,
  (state, { payload }) => payload,
  false,
)

const matchesData = combineReducers({ matches, pageNumber, matchesLoading })

export default matchesData

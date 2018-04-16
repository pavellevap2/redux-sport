import { fetchMatches } from '../managers/matchesManager'
import { put, call, select, takeEvery } from 'redux-saga/effects'
import {
  fetchGetMatches,
  TAKE_MATCHES,
  nextPage,
  matchesLoading,
  matchesLimit,
} from '../actions/matches'
import { getPageNumber } from '../selectors/matches'

const loadMatches = function*() {
  yield put(matchesLoading(false))
  yield put(nextPage())
  const pageLength = yield select(getPageNumber)
  const { data: matches, meta } = yield call(fetchMatches, 10, pageLength * 10)
  yield put(fetchGetMatches(matches))
  yield put(matchesLimit(meta))
  yield put(matchesLoading(true))
}

const watcherLoadMatches = function*() {
  yield takeEvery(TAKE_MATCHES, loadMatches)
}

export default watcherLoadMatches

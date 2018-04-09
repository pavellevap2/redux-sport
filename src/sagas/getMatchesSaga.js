import { fetchMatches } from '../managers/matchesManager'
import { put, call, select, takeEvery } from 'redux-saga/effects'
import { loadMatches, TAKE_MATCHES } from '../actions/matchesActions'
import { getPageNumber } from '../selectors/pageNumber'

const getMatches = function*() {
  const pageLength = yield select(getPageNumber)
  const matches = yield call(fetchMatches, pageLength)
  yield put(loadMatches(matches))
}

const watcherGetMatches = function*() {
  yield takeEvery(TAKE_MATCHES, getMatches)
}

export default watcherGetMatches

import { fetchMatches } from '../managers/matchesManager'
import { put, call, select, takeEvery } from 'redux-saga/effects'
import { loadMatches, TAKE_MATCHES } from '../actions/matchesActions'

const getMatches = function*() {
  const matches = yield call(fetchMatches)
  yield put(loadMatches(matches))
}

const watcherGetMatches = function*() {
  yield takeEvery(TAKE_MATCHES, getMatches)
}

export default watcherGetMatches

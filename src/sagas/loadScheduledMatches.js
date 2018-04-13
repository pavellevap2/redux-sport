import { fetchMatches } from '../managers/matchesManager'
import { put, call, takeEvery } from 'redux-saga/effects'
import {
  loadScheduledMatches,
  TAKE_SCHEDULED_MATCHES,
} from '../actions/matches'

const getScheduledMatches = function*() {
  const matches = yield call(fetchMatches, 500, 0)
  yield put(loadScheduledMatches(matches))
}

const watcherLoadScheduledMatches = function*() {
  yield takeEvery(TAKE_SCHEDULED_MATCHES, getScheduledMatches)
}

export default watcherLoadScheduledMatches
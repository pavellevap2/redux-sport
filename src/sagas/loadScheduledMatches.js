import { fetchShceduledMatches } from '../managers/matchesManager'
import { put, call, takeEvery } from 'redux-saga/effects'
import {
  loadScheduledMatches,
  TAKE_SCHEDULED_MATCHES,
} from '../actions/matches'

const getScheduledMatches = function*() {
  const matches = yield call(fetchShceduledMatches)
  yield put(loadScheduledMatches(matches))
}

const watcherLoadScheduledMatches = function*() {
  yield takeEvery(TAKE_SCHEDULED_MATCHES, getScheduledMatches)
}

export default watcherLoadScheduledMatches

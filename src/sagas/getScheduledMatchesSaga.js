import { fetchShceduledMatches } from '../managers/matchesManager'
import { put, call, takeEvery } from 'redux-saga/effects'
import {
  loadScheduledMatches,
  TAKE_SCHEDULED_MATCHES,
} from '../actions/matchesActions'

const getScheduledMatches = function*() {
  const matches = yield call(fetchShceduledMatches)
  yield put(loadScheduledMatches(matches))
}

const watcherGetScheduledMatches = function*() {
  yield takeEvery(TAKE_SCHEDULED_MATCHES, getScheduledMatches)
}

export default watcherGetScheduledMatches

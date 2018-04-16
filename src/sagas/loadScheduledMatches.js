import { fetchMatches } from '../managers/matchesManager'
import { put, call, takeEvery } from 'redux-saga/effects'
import {
  loadScheduledMatches,
  TAKE_SCHEDULED_MATCHES,
  scheduledMatchesLOading,
} from '../actions/matches'

const getScheduledMatches = function*() {
  yield put(scheduledMatchesLOading(false))
  const { data: matches, meta } = yield call(fetchMatches, 500, 0)
  yield put(loadScheduledMatches(matches))
  yield put(scheduledMatchesLOading(true))
}

const watcherLoadScheduledMatches = function*() {
  yield takeEvery(TAKE_SCHEDULED_MATCHES, getScheduledMatches)
}

export default watcherLoadScheduledMatches

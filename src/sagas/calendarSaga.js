import { fetchShceduledMatches } from '../managers/matchesManager'
import { put, call, takeEvery } from 'redux-saga/effects'
import { loadScheduledMatches } from '../actions/matchesActions'
import { fetchAllTeams } from '../managers/teamsManager'
import { loadAllTeams, LOAD_CALENDAR_DATA } from '../actions/teamsActions'

const getCalendarData = function*() {
  const matches = yield call(fetchShceduledMatches)
  yield put(loadScheduledMatches(matches))
  const teams = yield call(fetchAllTeams)
  yield put(loadAllTeams(teams))
}

const watcherGetCalendarData = function*() {
  yield takeEvery(LOAD_CALENDAR_DATA, getCalendarData)
}

export default watcherGetCalendarData

import { fetchMatches } from '../managers/matchesManager'
import { put, call, takeEvery } from 'redux-saga/effects'
import { loadScheduledMatches } from '../actions/matches'
import { fetchAllTeams } from '../managers/teamsManager'
import { loadAllTeams, LOAD_CALENDAR_DATA } from '../actions/teams'

const loadCalendarData = function*() {
  const matches = yield call(fetchMatches, 500, 0)
  yield put(loadScheduledMatches(matches))
  const teams = yield call(fetchAllTeams)
  yield put(loadAllTeams(teams))
}

const watcherLoadCalendarData = function*() {
  yield takeEvery(LOAD_CALENDAR_DATA, loadCalendarData)
}

export default watcherLoadCalendarData

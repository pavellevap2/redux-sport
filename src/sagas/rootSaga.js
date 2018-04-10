import { all, call } from 'redux-saga/effects'
import watcherGetMatches from './getMatchesSaga'
import watcherGetShceduledMatches from './getScheduledMatchesSaga'
import watcherGetCalendarData from './calendarSaga'

const rootReducer = function*() {
  yield all([
    call(watcherGetMatches),
    call(watcherGetShceduledMatches),
    call(watcherGetCalendarData),
  ])
}

export default rootReducer

import { all, call } from 'redux-saga/effects'
import watcherLoadMatches from './loadMatches'
import watcherLoadScheduledMatches from './loadScheduledMatches'
import watcherLoadCalendarData from './loadCalendarData'

const rootReducer = function*() {
  yield all([
    call(watcherLoadMatches),
    call(watcherLoadScheduledMatches),
    call(watcherLoadCalendarData),
  ])
}

export default rootReducer

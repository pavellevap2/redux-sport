import { all, call } from 'redux-saga/effects'
import watcherGetMatches from './getMatchesSaga'
import watcherGetShceduledMatches from './getScheduledMatchesSaga'

const rootReducer = function*() {
  yield all([call(watcherGetMatches), call(watcherGetShceduledMatches)])
}

export default rootReducer

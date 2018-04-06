import { all, call } from 'redux-saga/effects'
import watcherGetMatches from './getMatchesSaga'

const rootReducer = function*() {
  yield all([call(watcherGetMatches)])
}

export default rootReducer

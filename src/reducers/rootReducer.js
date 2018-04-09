import { combineReducers } from 'redux'
import matches from './matches'
import pageNumber from './pageNumber'
import scheduledMatches from './scheduledMatches'

const rootReducer = combineReducers({
  matches,
  pageNumber,
  scheduledMatches,
})

export default rootReducer

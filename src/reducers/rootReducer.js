import { combineReducers } from 'redux'
import matches from './matches'
import pageNumber from './pageNumber'

const rootReducer = combineReducers({
  matches,
  pageNumber,
})

export default rootReducer

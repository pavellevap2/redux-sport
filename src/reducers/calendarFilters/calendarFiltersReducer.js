import { teamName, date } from './filters'
import { combineReducers } from 'redux'

const calendarReducer = combineReducers({
  teamName,
  date,
})

export default calendarReducer

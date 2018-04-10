import { combineReducers } from 'redux'
import matches from './matches'
import pageNumber from './pageNumber'
import scheduledMatches from './scheduledMatches'
import teams from './teams'
import calendarReducer from './CalendarFilters/calendarFiltersReducer'

const rootReducer = combineReducers({
  matches,
  pageNumber,
  scheduledMatches,
  teams,
  calendarReducer,
})

export default rootReducer

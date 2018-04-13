import { combineReducers } from 'redux'
import matchesData from './matches'
import scheduledMatches from './scheduledMatches'
import teams from './teams'
import calendarReducer from './CalendarFilters/calendarFiltersReducer'

const rootReducer = combineReducers({
  matchesData,
  scheduledMatches,
  teams,
  calendarReducer,
})

export default rootReducer

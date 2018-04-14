import { combineReducers } from 'redux'
import matchesData from './matches'
import scheduledMatchesData from './scheduledMatches'
import teams from './teams'
import calendarReducer from './CalendarFilters/calendarFiltersReducer'

const rootReducer = combineReducers({
  matchesData,
  scheduledMatchesData,
  teams,
  calendarReducer,
})

export default rootReducer

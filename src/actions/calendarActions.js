import { createAction } from 'redux-actions'

export const SELECT__DATE = 'MATCHES_CALENDAR/SELECT_DATE'
export const SELECT__TEAM_NAME = 'MATCHES_CALENDAR/SELECT_TEAM_NAME'

export const selectDate = createAction(SELECT__DATE)
export const selectTeamName = createAction(SELECT__TEAM_NAME)

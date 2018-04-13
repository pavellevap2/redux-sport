import { createAction } from 'redux-actions'

export const SELECT__DATE = '@@CALENDAR/SELECT_DATE'
export const SELECT__TEAM_NAME = '@@CALENDAR/SELECT_TEAM_NAME'

export const selectDate = createAction(SELECT__DATE)
export const selectTeamName = createAction(SELECT__TEAM_NAME)

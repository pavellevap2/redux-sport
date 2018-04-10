import { createAction } from 'redux-actions'

export const LOAD_ALL_TEAMS = 'CALENDAR/GET_ALL_TEAMS'
export const LOAD_CALENDAR_DATA = `CALENDAR/LOAD_CALENDAR_DATA`

export const loadAllTeams = createAction(LOAD_ALL_TEAMS)
export const loadCalendarData = createAction(LOAD_CALENDAR_DATA)

import { createAction } from 'redux-actions'

export const LOAD_MATCHES = `@@MATCHES/LOAD_MATCHES`
export const TAKE_MATCHES = `@@MATCHES/TAKE_MATCHES`
export const NEXT_PAGE = `@@MATCHES/NEXT_PAGE`

export const LOAD_SCHEDULED_MATCHES = '@@MATCHES/LOAD_SCHEDULED_MATCHES'
export const TAKE_SCHEDULED_MATCHES = '@@MATCHES/TAKE_SHEDULED_MATCHES'

export const fetchGetMatches = createAction(LOAD_MATCHES)
export const takeMatches = createAction(TAKE_MATCHES)
export const nextPage = createAction(NEXT_PAGE)

export const loadScheduledMatches = createAction(LOAD_SCHEDULED_MATCHES)
export const takeScheduledMatches = createAction(TAKE_SCHEDULED_MATCHES)

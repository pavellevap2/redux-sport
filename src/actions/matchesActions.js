import { createAction } from 'redux-actions'
export const LOAD_MATCHES = `@@HOMEPAGE/LOAD_MATCHES`
export const TAKE_MATCHES = `@@HOMEPAGE/TAKE_MATCHES`
export const NEXT_PAGE = `@@HOME_PAGE/PAGE_NUMBER`

export const LOAD_SCHEDULED_MATCHES = '@@SHEDULED_MATCHES/SAGA'
export const TAKE_SCHEDULED_MATCHES = '@@SHEDULED_MATCHES/TAKE_SHEDULED_MATCHES'

export const loadMatches = createAction(LOAD_MATCHES)
export const takeMatches = createAction(TAKE_MATCHES)
export const nextPage = createAction(NEXT_PAGE)

export const loadScheduledMatches = createAction(LOAD_SCHEDULED_MATCHES)
export const takeScheduledMatches = createAction(TAKE_SCHEDULED_MATCHES)

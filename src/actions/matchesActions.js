import { createAction } from 'redux-actions'
export const LOAD_MATCHES = `@@HOMEPAGE/LOAD_MATCHES`
export const TAKE_MATCHES = `@@HOMEPAGE/TAKE_MATCHES`
export const NEXT_PAGE = `@@HOME_PAGE/PAGE_NUMBER`

export const loadMatches = createAction(LOAD_MATCHES)
export const takeMatches = createAction(TAKE_MATCHES)
export const nextPage = createAction(NEXT_PAGE)

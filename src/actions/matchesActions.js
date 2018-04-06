import { createAction } from 'redux-actions'
export const LOAD_MATCHES = `@@HOMEPAGE/LOAD_MATCHES`
export const TAKE_MATCHES = `@@HOMEPAGE/TAKE_MATCHES`

export const loadMatches = createAction(LOAD_MATCHES)
export const takeMatches = createAction(TAKE_MATCHES)

import { handleAction } from 'redux-actions'
import { SELECT__DATE, SELECT__TEAM_NAME } from '../../actions/calendar'

export const date = handleAction(
  SELECT__DATE,
  (state, { payload }) => payload,
  '',
)

export const teamName = handleAction(
  SELECT__TEAM_NAME,
  (state, { payload }) => payload,
  '',
)

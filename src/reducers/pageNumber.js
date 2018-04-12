import { handleAction } from 'redux-actions'
import { NEXT_PAGE } from '../actions/matches'

const pageNumber = handleAction(
  [NEXT_PAGE],
  state => {
    return !state ? 1 : state + 1
  },
  0,
)

export default pageNumber

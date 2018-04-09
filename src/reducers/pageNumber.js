import { handleAction } from 'redux-actions'
import { NEXT_PAGE } from '../actions/matchesActions'

const pageNumber = handleAction([NEXT_PAGE], state => state + 1, 0)

export default pageNumber

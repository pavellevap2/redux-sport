import { ENDPOINTS } from '../api'

export const fetchMatches = () =>
  fetch(ENDPOINTS.GET_COMPLETED_MATCHES, {})
    .then(response => response.json())
    .then(response => response.response.data)
    .catch(err => console.log(err))

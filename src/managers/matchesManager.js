import ENDPOINTS from '../api'

export const fetchMatches = (limit, offset) =>
  fetch(ENDPOINTS.GET_COMPLETED_MATCHES(limit, offset))
    .then(response => response.json())
    .then(response => response.response.data)
    .catch(err => console.log(err))

export const fetchShceduledMatches = () =>
  fetch(ENDPOINTS.GET_SCHEDULED_MATCHES)
    .then(response => response.json())
    .then(response => response.response.data)
    .catch(err => console.log(err))

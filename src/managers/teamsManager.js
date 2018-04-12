import ENDPOINTS from '../api'

export const fetchAllTeams = () =>
  fetch(ENDPOINTS.GET_ALL_TEAMS)
    .then(response => response.json())
    .then(response => response.response.data)
    .catch(err => console.log(err))

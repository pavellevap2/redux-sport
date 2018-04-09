import { ENDPOINTS } from '../api'

export const fetchMatches = data =>
  fetch(ENDPOINTS.GET_COMPLETED_MATCHES(data))
    .then(response => response.json())
    .then(response => response.response.data)
    .catch(err => console.log(err))
//ловить событие и сравнить кооринаты скрола к низу
//поиск по странице

const API_KEY = 'a49755699622d8fe2d87e6d2ac24a7bb'

const ENDPOINTS = {
  GET_COMPLETED_MATCHES: (limit, offset) =>
    `/v1/basketball/competitions/18530/matches?limit=${limit}&ak=${API_KEY}&offset=${offset}`,
  GET_SCHEDULED_MATCHES: `/v1/basketball/competitions/18530/matches?limit=500&ak=${API_KEY}`,
  GET_ALL_TEAMS: `/v1/basketball/competitions/18530/teams?limit=500&ak=${API_KEY}`,
}

export default ENDPOINTS

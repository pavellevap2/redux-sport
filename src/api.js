export const ENDPOINTS = {
  GET_COMPLETED_MATCHES: data =>
    `/v1/basketball/competitions/18530/matches?limit=10&ak=a49755699622d8fe2d87e6d2ac24a7bb&offset=${data}`,
  GET_SCHEDULED_MATCHES: `/v1/basketball/competitions/18530/matches?limit=500&ak=a49755699622d8fe2d87e6d2ac24a7bb`,
}

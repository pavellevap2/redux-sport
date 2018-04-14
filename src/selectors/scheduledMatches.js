export const getScheduledMatches = state =>
  state.scheduledMatches.filter(match => match.status === 'SCHEDULED')

export const getTenScheduledMatches = state =>
  getScheduledMatches(state).slice(0, 11)

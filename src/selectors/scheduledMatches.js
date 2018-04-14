export const getScheduledMatches = state =>
  state.scheduledMatchesData.scheduledMatches.filter(
    match => match.status === 'SCHEDULED',
  )

export const getTenScheduledMatches = state =>
  getScheduledMatches(state).slice(0, 11)

export const getScheduledMatchesLoading = state =>
  state.scheduledMatchesData.scheduledMatchesLoading

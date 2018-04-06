export const getCompletedMatches = state =>
  state.matches.filter(match => match.matchStatus === 'COMPLETE')

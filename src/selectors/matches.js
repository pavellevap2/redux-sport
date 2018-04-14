export const getPageNumber = state => state.matchesData.pageNumber

export const getCompletedMatches = state =>
  state.matchesData.matches.filter(match => match.status === 'COMPLETE')

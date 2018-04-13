export const getPageNumber = state => state.matchesData.pageNumber

export const getCompletedMatches = state => {
  const matches = state.matchesData.matches.map(match => {
    return {
      ...match,
      firstImg:
        match.competitors[0].images.logo.S1 === undefined
          ? match.competitors[0].images.logo.T1.url
          : match.competitors[0].images.logo.S1.url,
      secondImg:
        match.competitors[1].images.logo.S1 === undefined
          ? match.competitors[1].images.logo.T1.url
          : match.competitors[1].images.logo.S1.url,
      dateMSK: `${match.matchTimeUTC.slice(5, 10)} /
          ${match.matchTimeUTC.slice(10, 16)} MSK`,
    }
  })
  return matches.filter(match => match.matchStatus === 'COMPLETE')
}

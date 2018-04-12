import * as R from 'ramda'

export const getCompletedMatches = state => {
  const matches = state.matches.map(match => {
    return {
      ...match,
      dateMSK: `${match.matchTimeUTC.slice(5, 10)} /
  ${match.matchTimeUTC.slice(10, 16)} MSK`,
    }
  })
  return matches.filter(match => match.matchStatus === 'COMPLETE')
}

export const getScheduledMatches = state => {
  const matches = state.scheduledMatches.filter(
    match => match.matchStatus === 'SCHEDULED',
  )
  const selectedMatches = matches.map(match => {
    const selectedMatch = { ...match }
    selectedMatch.matchTime = selectedMatch.matchTime.slice(0, 10)

    selectedMatch.matchTime = selectedMatch.matchTime
      .split('')
      .filter(x => x !== '-')
      .join('')
    selectedMatch.matchTime = Number(selectedMatch.matchTime)
    return selectedMatch
  })
  const byTime = R.ascend(R.prop('matchTime'))
  return R.sort(byTime, selectedMatches)
}

export const getTenScheduledMatches = state =>
  getScheduledMatches(state)
    .slice(0, 11)
    .map(match => {
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

export const getAllMatches = state => state.scheduledMatches

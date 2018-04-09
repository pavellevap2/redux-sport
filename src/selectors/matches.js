import * as R from 'ramda'

export const getCompletedMatches = state =>
  state.matches.filter(match => match.matchStatus === 'COMPLETE')

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

export const getFiveScheduledMatches = state =>
  getScheduledMatches(state).slice(0, 6)

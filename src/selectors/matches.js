import * as R from 'ramda'

export const getCompletedMatches = state =>
  state.matches.filter(match => match.matchStatus === 'COMPLETE')

export const getScheduledMatches = state => {
  state.scheduledMatches.map(match => {
    match.matchTime = match.matchTime.slice(0, 10)
    match.matchTime = match.matchTime
      .split('')
      .filter(x => x !== '-')
      .join('')
    match.matchTime = Number(match.matchTime)
    return match
  })
  const byTime = R.ascend(R.prop('matchTime'))
  return R.sort(byTime, state.scheduledMatches).slice(0, 6)
}

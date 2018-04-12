import { getScheduledMatches } from './scheduledMatches'
import { getDate, getTeamName } from './calendarData'

export const getCalendarMatches = state => {
  const allMatches = getScheduledMatches(state)
  const teamName = getTeamName(state)
  const date = getDate(state)

  return allMatches.filter(
    match =>
      (match.competitors[0].competitorName === teamName ||
        match.competitors[1].competitorName === teamName ||
        teamName === 'Все команды' ||
        !teamName) &&
      (date === match.matchTimeUTC[6] || !date || date === 'Все месяцы'),
  )
}

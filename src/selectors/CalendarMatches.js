import { getScheduledMatches } from './scheduledMatches'
import { getDate, getTeamName } from './calendarData'

export const getCalendarMatches = state => {
  const allMatches = getScheduledMatches(state)
  const teamName = getTeamName(state)
  const date = getDate(state)

  return allMatches.filter(
    match =>
      (match.firstTeamName === teamName ||
        match.secondTeamName === teamName ||
        teamName === 'Все команды' ||
        !teamName) &&
      (date === match.dateTimeUTC[6] || !date || date === 'Все месяцы'),
  )
}

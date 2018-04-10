import React from 'react'

const CalendarFilters = ({
  teams,
  date,
  teamName,
  selectDate,
  selectTeamName,
}) => {
  return (
    <div>
      <select onChange={e => selectTeamName(e.target.value)}>
        <option value="Все команды">Все команды</option>
        {teams.map((team, i) => (
          <option value={team} key={i}>
            {team}
          </option>
        ))}
      </select>

      <select onChange={e => selectDate(e.target.value)}>
        <option defaultValue="Все месяцы">Все месяцы</option>
        <option value="4">Апрель</option>
        <option value="5">Май</option>
      </select>
    </div>
  )
}

export default CalendarFilters

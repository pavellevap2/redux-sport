import React from 'react'
import styled from 'styled-components'

const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.4em;
`

const FiltersOption = styled.select`
  width: 15%;
  color: ${props => props.theme.primaryBack};
  font-size: 1em;
  font-weight: bolder;
  padding: 0.4em 0;
  background: ${props => props.theme.tretiary};
`
const CalendarFilters = ({
  teams,
  date,
  teamName,
  selectDate,
  selectTeamName,
}) => (
  <Filters>
    <FiltersOption onChange={e => selectTeamName(e.target.value)}>
      <option value="Все команды">Все команды</option>
      {teams.map((team, i) => (
        <option value={team} key={i}>
          {team}
        </option>
      ))}
    </FiltersOption>

    <FiltersOption onChange={e => selectDate(e.target.value)}>
      <option defaultValue="Все месяцы">Все месяцы</option>
      <option value="4">Апрель</option>
      <option value="5">Май</option>
    </FiltersOption>
  </Filters>
)

export default CalendarFilters

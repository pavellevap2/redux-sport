import { NavLink } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink exact to="/">
            Пора домой
          </NavLink>
        </li>
        <li>
          <NavLink to="/сalendar">Календарь</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header

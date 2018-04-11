import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from './logo.png'

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <img src={logo} alt="logo" />
        </li>
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

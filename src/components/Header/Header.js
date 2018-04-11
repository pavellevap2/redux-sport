import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from './logo.png'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #1d1e30;
  width: 100vw;
  height: 11vh;
  margin-top: -1%;
`
const HeaderItems = styled.ul`
  display: flex;
  align-items: center;
`
const HeaderItem = styled.li`
  &:not(:first-child) {
    margin-right: 5%;
  }
  &:first-child {
    margin: 0 5%;
    background: rgba(#1e2341, 0.9);
    height: 11vh;
    padding: 0 5em;
  }
`

const HeaderLink = styled(NavLink)`
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
  &.active {
    transition: 0.9s;
    padding-bottom: 4px;
    color: #db8429;
  }
`
const HeaderLogo = styled.img`
  height: 100%;
  width: 100%;
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItems>
        <HeaderItem>
          <HeaderLogo src={logo} alt="logo" />
        </HeaderItem>
        <HeaderItem>
          <HeaderLink exact to="/">
            Пора домой
          </HeaderLink>
        </HeaderItem>
        <HeaderItem>
          <HeaderLink to="/сalendar">Календарь</HeaderLink>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header

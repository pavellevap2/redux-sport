import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from './logo.png'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.primaryBack};
  width: 100%;
  height: 11%;
`

const HeaderItems = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`

const HeaderItem = styled.li`
  &:not(:first-child) {
    margin-right: 5%;
  }
  &:first-child {
    margin: 0 5%;
    background: rgba(${props => props.theme.secondaryBack}, 0.9);
    height: 11vh;
    padding: 0 5em;
  }
`

const HeaderLink = styled(NavLink)`
  color: ${props => props.theme.primary};
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
  &.active {
    transition: 0.9s;
    padding-bottom: 4px;
    color: ${props => props.theme.secondary};
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

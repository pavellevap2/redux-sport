import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from './logo.png'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.primaryBack};
  width: 100%;
  height: 11%;
`
//vh -> %
//преобразовать manager
//переименовать файлы
//export и return
//в саге увеличить сисло страниц
//объединить редюсерыъ
//header rem, ul em

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
    box-shadow: 0 0 15px inset rgba(30, 35, 65, 0.5);
    padding: 0 5em;
  }
`

const HeaderLink = styled(NavLink)`
  color: ${props => props.theme.primary};
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  &.active {
    transition: 0.9s;
    padding-bottom: 4px;
    color: ${props => props.theme.secondary};
  }
`

const HeaderLogo = styled.img`
  height: 7em;
  width: 7em;
`

const Header = () => (
  <HeaderContainer>
    <HeaderItems>
      <HeaderItem>
        <HeaderLogo src={logo} alt="logo" />
      </HeaderItem>
      <HeaderItem>
        <HeaderLink exact to="/">
          Главная
        </HeaderLink>
      </HeaderItem>
      <HeaderItem>
        <HeaderLink to="/сalendar">Календарь</HeaderLink>
      </HeaderItem>
    </HeaderItems>
  </HeaderContainer>
)

export default Header

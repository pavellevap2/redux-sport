import HomeContainer from '../containers/HomeContainer'
import Header from './Header'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CalendarContainer from '../containers/CalendarContainer'

const Root = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/сalendar" component={CalendarContainer} />
    </Switch>
  </div>
)

export default Root

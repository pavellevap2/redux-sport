import HomeContainer from '../containers/HomeContainer'
import Header from './Header'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </div>
  )
}
export default Root

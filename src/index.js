import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider>
    <Root />
  </Provider>,
  document.getElementById('root'),
)

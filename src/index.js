import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import { Provider } from 'react-redux'
import store, { sagaMiddleware } from './configureStore'
import rootSaga from './sagas'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body{
    padding:0;
    margin:0;
  },
  a{
    text-decoration:none;
  }
  li{
    list-style:none;
  }
`

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)

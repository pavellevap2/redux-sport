import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import { Provider } from 'react-redux'
import store from './configureStore'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { ThemeProvider } from 'styled-components'
import THEME from './theme'

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

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
        <Root />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)

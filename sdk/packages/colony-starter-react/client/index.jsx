import React from 'react'
import { createStore } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import middleware from './middleware'
import reducers from './reducers'
import App from './containers/App'
import './index.scss'

const store = createStore(reducers, middleware)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
)

export { store }

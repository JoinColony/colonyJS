import React from 'react'
import { createStore } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactTestRenderer from 'react-test-renderer'
import middleware from './middleware'
import reducers from './reducers'
import App from './containers/App'

// Mock react-dom for testing
jest.mock('react-dom', () => ({
  render: () => null,
  unmountComponentAtNode: () => null,
  findDOMNode: () => {},
}))

// Testing colony-example-react
describe('colony-example-react', () => {

  // Create store using reducers and middleware
  const store = createStore(reducers, middleware)

  // Test if application renders
  test('Application renders', () => {
    const renderer = ReactTestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Provider>,
    )
    expect(renderer.toJSON()).toMatchSnapshot()
  })

})

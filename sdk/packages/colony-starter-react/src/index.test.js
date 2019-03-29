import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from './App';

// Mock react-dom for testing
jest.mock('react-dom', () => ({
  render: () => null,
  unmountComponentAtNode: () => null,
  findDOMNode: () => {},
}));

// Testing colony-starter-react
describe('colony-starter-react', () => {

  // Test if application renders
  test('Application renders', () => {
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });

});

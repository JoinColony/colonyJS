import React, { Component } from 'react'
import App from '../components/App'
import connectNetwork from '../actions/connectNetwork'

class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      connectNetworkError: null,
      connectNetworkLoading: true,
      networkClient: null,
    }
  }

  componentDidMount() {
    const testAccountIndex = prompt('test account index:', '0')
    connectNetwork(testAccountIndex)
    .then(networkClient => {
      this.setState({
        connectNetworkLoading: false,
        networkClient,
      })
    })
    .catch(error => {
      this.setState({
        connectNetwork: {
          connectNetworkError: error,
          connectNetworkLoading: false,
        },
      })
    })
  }

  render() {
    return (
      <App
        connectNetworkError={this.state.connectNetworkError}
        connectNetworkLoading={this.state.connectNetworkLoading}
        networkClient={this.state.networkClient}
      />
    )
  }

}

export default AppContainer

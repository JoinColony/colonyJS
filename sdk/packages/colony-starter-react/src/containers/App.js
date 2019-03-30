import React, { Component } from 'react'
import { getNetworkClient } from '@colony/colony-js-client'
import { open } from '@colony/purser-metamask'
import App from '../components/App'

class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      loading: true,
      networkClient: null,
    }
  }

  componentDidMount() {
    open()
      .then(wallet => getNetworkClient('local', wallet))
      .then(networkClient => this.setState({
        loading: false,
        networkClient,
      }))
      .catch(error => this.setState({
        loading: false,
        error,
      }))
  }

  render() {
    return (
      <App
        error={this.state.error}
        loading={this.state.loading}
        networkClient={this.state.networkClient}
      />
    )
  }

}

export default AppContainer

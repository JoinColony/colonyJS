import React, { Component } from 'react'
import { getNetworkClient } from '@colony/colony-js-client'
import { open } from '@colony/purser-metamask'
import App from '../components/App'

class AppContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      colonyClient: null,
      error: null,
      loading: true,
    }
  }

  componentDidMount() {
    open()
      .then(wallet => getNetworkClient('local', wallet))
      .then(networkClient => networkClient.getColonyClient(1))
      .then(colonyClient => this.setState({
        loading: false,
        colonyClient,
      }))
      .catch(error => this.setState({
        loading: false,
        error,
      }))
  }

  render() {
    return (
      <App
        colonyClient={this.state.colonyClient}
        error={this.state.error}
        loading={this.state.loading}
      />
    )
  }

}

export default AppContainer

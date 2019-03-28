import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as networkActions from '../actions/networkActions'
import App from '../components/App'

class AppContainer extends Component {

  componentDidMount() {
    this.props.connectNetwork('local')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scroll(0,0)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  render() {
    return (
      <App
        error={
          this.props.connectNetworkError ||
          this.props.getNetworkClientError
        }
        loading={
          this.props.connectNetworkLoading ||
          this.props.getNetworkClientLoading
        }
        success={
          this.props.connectNetworkSuccess ||
          this.props.getNetworkClientSuccess
        }
      />
    )
  }

}

const mapStateToProps = state => ({
  connectNetworkError: state.network.connectNetworkError,
  connectNetworkLoading: state.network.connectNetworkLoading,
  connectNetworkSuccess: state.network.connectNetworkSuccess,
  getNetworkClientError: state.network.getNetworkClientError,
  getNetworkClientLoading: state.network.getNetworkClientLoading,
  getNetworkClientSuccess: state.network.getNetworkClientSuccess,
})

const mapDispatchToProps = dispatch => ({
  connectNetwork(network) {
    dispatch(networkActions.connectNetwork(network))
  },
  resetActions() {
    dispatch(networkActions.connectNetworkError(null))
    dispatch(networkActions.connectNetworkSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createColony, createColonySuccess } from '../../actions/colonyActions'
import CreateColony from '../../components/Create/CreateColony'

class CreateColonyContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { tokenAddress: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.createColonySuccess && prevProps.createColonySuccess !== this.props.createColonySuccess) {
      this.props.history.push('/manage')
    }
  }

  componentWillUnmount() {
    this.props.resetSuccess()
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.createColony(this.props.networkClient, this.state.tokenAddress)
  }

  render() {
    return (
      <CreateColony
        colonyAddress={this.props.colonyAddress}
        createColonyError={this.props.createColonyError}
        createColonyLoading={this.props.createColonyLoading}
        createColonySuccess={this.props.createColonySuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyAddress: state.colony.colonyAddress,
  createColonyError: state.colony.createColonyError,
  createColonyLoading: state.colony.createColonyLoading,
  createColonySuccess: state.colony.createColonySuccess,
  networkClient: state.network.networkClient,
})

const mapDispatchToProps = dispatch => ({
  createColony(networkClient, tokenAddress) {
    dispatch(createColony(networkClient, tokenAddress))
  },
  resetSuccess() {
    dispatch(createColonySuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateColonyContainer))

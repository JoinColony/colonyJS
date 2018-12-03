import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authorityActions from '../../../actions/authorityActions'
import RemoveAdmin from '../../../components/Manage/Admins/RemoveAdmin'

class RemoveAdminContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { userAddress: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.removeAdminSuccess && prevProps.removeAdminSuccess !== this.props.removeAdminSuccess) {
      this.setState({ userAddress: '' })
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.removeAdmin(this.props.colonyClient, this.state.userAddress)
  }

  render() {
    return (
      <RemoveAdmin
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        removeAdminError={this.props.removeAdminError}
        removeAdminLoading={this.props.removeAdminLoading}
        removeAdminSuccess={this.props.removeAdminSuccess}
        userAddress={this.state.userAddress}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  removeAdminError: state.authority.removeAdminError,
  removeAdminLoading: state.authority.removeAdminLoading,
  removeAdminSuccess: state.authority.removeAdminSuccess,
})

const mapDispatchToProps = dispatch => ({
  removeAdmin(colonyClient, userAddress) {
    dispatch(authorityActions.removeAdmin(colonyClient, userAddress))
  },
  resetActions() {
    dispatch(authorityActions.removeAdminError(null))
    dispatch(authorityActions.removeAdminSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAdminContainer)

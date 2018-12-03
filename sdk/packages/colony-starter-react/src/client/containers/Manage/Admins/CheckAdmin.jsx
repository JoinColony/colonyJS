import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authorityActions from '../../../actions/authorityActions'
import CheckAdmin from '../../../components/Manage/Admins/CheckAdmin'

class CheckAdminContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { userAddress: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.checkAdminSuccess && prevProps.checkAdminSuccess !== this.props.checkAdminSuccess) {
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
    this.props.checkAdmin(this.props.colonyClient, this.state.userAddress)
  }

  render() {
    return (
      <CheckAdmin
        admin={this.props.admin}
        checkAdminError={this.props.checkAdminError}
        checkAdminLoading={this.props.checkAdminLoading}
        checkAdminSuccess={this.props.checkAdminSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        userAddress={this.state.userAddress}
      />
    )
  }

}

const mapStateToProps = state => ({
  admin: state.authority.admin,
  colonyClient: state.colony.colonyClient,
  checkAdminError: state.authority.checkAdminError,
  checkAdminLoading: state.authority.checkAdminLoading,
  checkAdminSuccess: state.authority.checkAdminSuccess,
})

const mapDispatchToProps = dispatch => ({
  checkAdmin(colonyClient, userAddress) {
    dispatch(authorityActions.checkAdmin(colonyClient, userAddress))
  },
  resetActions() {
    dispatch(authorityActions.checkAdminError(null))
    dispatch(authorityActions.checkAdminSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckAdminContainer)

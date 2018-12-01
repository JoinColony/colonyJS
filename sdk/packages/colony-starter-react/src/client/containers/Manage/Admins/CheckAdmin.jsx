import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as adminsActions from '../../../actions/adminsActions'
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
  admin: state.admins.admin,
  colonyClient: state.colony.colonyClient,
  checkAdminError: state.admins.checkAdminError,
  checkAdminLoading: state.admins.checkAdminLoading,
  checkAdminSuccess: state.admins.checkAdminSuccess,
})

const mapDispatchToProps = dispatch => ({
  checkAdmin(colonyClient, userAddress) {
    dispatch(adminsActions.checkAdmin(colonyClient, userAddress))
  },
  resetActions() {
    dispatch(adminsActions.checkAdminError(null))
    dispatch(adminsActions.checkAdminSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckAdminContainer)

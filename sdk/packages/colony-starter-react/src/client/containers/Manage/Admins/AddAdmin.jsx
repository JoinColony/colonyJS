import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as adminActions from '../../../actions/adminActions'
import AddAdmin from '../../../components/Manage/Admins/AddAdmin'

class AddAdminContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { userAddress: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.addAdminSuccess && prevProps.addAdminSuccess !== this.props.addAdminSuccess) {
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
    this.props.addAdmin(this.props.colonyClient, this.state.userAddress)
  }

  render() {
    return (
      <AddAdmin
        addAdminError={this.props.addAdminError}
        addAdminLoading={this.props.addAdminLoading}
        addAdminSuccess={this.props.addAdminSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        userAddress={this.state.userAddress}
      />
    )
  }

}

const mapStateToProps = state => ({
  addAdminError: state.admin.addAdminError,
  addAdminLoading: state.admin.addAdminLoading,
  addAdminSuccess: state.admin.addAdminSuccess,
  colonyClient: state.colony.colonyClient,
})

const mapDispatchToProps = dispatch => ({
  addAdmin(colonyClient, userAddress) {
    dispatch(adminActions.addAdmin(colonyClient, userAddress))
  },
  resetActions() {
    dispatch(adminActions.addAdminError(null))
    dispatch(adminActions.addAdminSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAdminContainer)

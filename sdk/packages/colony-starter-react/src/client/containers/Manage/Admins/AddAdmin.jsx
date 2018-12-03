import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authorityActions from '../../../actions/authorityActions'
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
  addAdminError: state.authority.addAdminError,
  addAdminLoading: state.authority.addAdminLoading,
  addAdminSuccess: state.authority.addAdminSuccess,
  colonyClient: state.colony.colonyClient,
})

const mapDispatchToProps = dispatch => ({
  addAdmin(colonyClient, userAddress) {
    dispatch(authorityActions.addAdmin(colonyClient, userAddress))
  },
  resetActions() {
    dispatch(authorityActions.addAdminError(null))
    dispatch(authorityActions.addAdminSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAdminContainer)

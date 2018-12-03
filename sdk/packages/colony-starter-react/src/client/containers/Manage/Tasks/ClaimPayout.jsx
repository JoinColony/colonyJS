import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../../actions/taskActions'
import ClaimPayout from '../../../components/Manage/Tasks/ClaimPayout'

class ClaimPayoutContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { role: 'MANAGER' }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.claimPayoutSuccess && prevProps.claimPayoutSuccess !== this.props.claimPayoutSuccess) {
      this.setState({ role: 'MANAGER' })
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
    this.props.claimPayout(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.role,
    )
  }

  render() {
    return (
      <ClaimPayout
        claimPayoutError={this.props.claimPayoutError}
        claimPayoutLoading={this.props.claimPayoutLoading}
        claimPayoutSuccess={this.props.claimPayoutSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        role={this.state.role}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  claimPayoutError: state.task.claimPayoutError,
  claimPayoutLoading: state.task.claimPayoutLoading,
  claimPayoutSuccess: state.task.claimPayoutSuccess,
})

const mapDispatchToProps = dispatch => ({
  claimPayout(colonyClient, taskId, role) {
    dispatch(taskActions.claimPayout(colonyClient, taskId, role))
  },
  resetActions() {
    dispatch(taskActions.claimPayoutError(null))
    dispatch(taskActions.claimPayoutSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClaimPayoutContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { claimPayout } from '../../../actions/tasksActions'
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
  claimPayoutError: state.tasks.claimPayoutError,
  claimPayoutLoading: state.tasks.claimPayoutLoading,
  claimPayoutSuccess: state.tasks.claimPayoutSuccess,
})

const mapDispatchToProps = dispatch => ({
  claimPayout(colonyClient, taskId, role) {
    dispatch(claimPayout(colonyClient, taskId, role))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClaimPayoutContainer)

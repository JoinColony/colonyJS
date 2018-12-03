import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../../../actions/tasksActions'
import SetPayout from '../../../../components/Manage/Tasks/EditTask/SetPayout'

class SetPayoutContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: 'MANAGER',
      amount: 0,
    }
    this.canSetPayout = this.canSetPayout.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.setTaskPayoutSuccess && this.props.setTaskPayoutSuccess) {
      this.setState({
        role: 'MANAGER',
        amount: 0,
      })
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  canSetPayout() {
    const completionDate = this.props.task.completionDate
    return completionDate === null
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.setTaskPayout(
      this.props.colonyClient,
      Number(this.props.task.id),
      this.state.role,
      Number(this.state.amount),
    )
  }

  render() {
    return (
      <SetPayout
        amount={this.state.amount}
        canSetPayout={this.canSetPayout}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        role={this.state.role}
        payouts={this.props.payouts}
        setTaskPayoutError={this.props.setTaskPayoutError}
        setTaskPayoutLoading={this.props.setTaskPayoutLoading}
        setTaskPayoutSuccess={this.props.setTaskPayoutSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  payouts: state.tasks.task.payouts,
  setTaskPayoutError: state.tasks.setTaskPayoutError,
  setTaskPayoutLoading: state.tasks.setTaskPayoutLoading,
  setTaskPayoutSuccess: state.tasks.setTaskPayoutSuccess,
  task: state.tasks.task,
})

const mapDispatchToProps = dispatch => ({
  setTaskPayout(colonyClient, taskId, role, amount) {
    dispatch(tasksActions.setTaskPayout(colonyClient, taskId, role, amount))
  },
  resetActions() {
    dispatch(tasksActions.setTaskPayoutError(null))
    dispatch(tasksActions.setTaskPayoutSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SetPayoutContainer)

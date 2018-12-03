import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../../../actions/tasksActions'
import SetPayouts from '../../../../components/Manage/Tasks/EditTask/SetPayouts'

class SetPayoutsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      payouts: {
        manager: props.task.payouts.manager,
        evaluator: props.task.payouts.evaluator,
        worker: props.task.payouts.worker,
      },
    }
    this.canSetPayouts = this.canSetPayouts.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.setTaskPayoutsSuccess && this.props.setTaskPayoutsSuccess) {
      this.setState({
        payouts: {
          manager: this.props.task.payouts.manager,
          evaluator: this.props.task.payouts.evaluator,
          worker: this.props.task.payouts.worker,
        },
      })
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  canSetPayouts() {
    const completionDate = this.props.task.completionDate
    const managerAddress = this.props.task.roles.manager.address
    const evaluatorAddress = this.props.task.roles.evaluator.address
    const workerAddress = this.props.task.roles.worker.address
    const userAddress = this.props.colonyClient.adapter.wallet.address
    return (
      managerAddress === userAddress &&
      (evaluatorAddress === userAddress || evaluatorAddress === null) &&
      (workerAddress === userAddress || workerAddress === null) &&
      completionDate === null
    )
  }

  handleChange(event) {
    let state = this.state
    state.payouts[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.setTaskPayouts(
      this.props.colonyClient,
      Number(this.props.task.id),
      Number(this.state.payouts.manager),
      Number(this.state.payouts.evaluator),
      Number(this.state.payouts.worker),
    )
  }

  render() {
    return (
      <SetPayouts
        canSetPayouts={this.canSetPayouts}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        payouts={this.state.payouts}
        setTaskPayoutsError={this.props.setTaskPayoutsError}
        setTaskPayoutsLoading={this.props.setTaskPayoutsLoading}
        setTaskPayoutsSuccess={this.props.setTaskPayoutsSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  setTaskPayoutsError: state.tasks.setTaskPayoutsError,
  setTaskPayoutsLoading: state.tasks.setTaskPayoutsLoading,
  setTaskPayoutsSuccess: state.tasks.setTaskPayoutsSuccess,
  task: state.tasks.task,
})

const mapDispatchToProps = dispatch => ({
  resetActions() {
    dispatch(tasksActions.setTaskPayoutsError(null))
    dispatch(tasksActions.setTaskPayoutsSuccess(false))
  },
  setTaskPayouts(colonyClient, taskId, managerAmount, evaluatorAmount, workerAmount) {
    dispatch(tasksActions.setTaskPayouts(colonyClient, taskId, managerAmount, evaluatorAmount, workerAmount))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SetPayoutsContainer)

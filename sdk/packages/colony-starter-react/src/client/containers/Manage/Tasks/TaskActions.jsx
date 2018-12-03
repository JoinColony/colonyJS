import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as tasksActions from '../../../actions/tasksActions'
import TaskActions from '../../../components/Manage/Tasks/TaskActions'

class TaskActionsContainer extends Component {

  constructor(props) {
    super(props)
    this.cancelTask = this.cancelTask.bind(this)
    this.canCancelTask = this.canCancelTask.bind(this)
    this.canClaimPayout = this.canClaimPayout.bind(this)
    this.canEditTask = this.canEditTask.bind(this)
    this.canFinalizeTask = this.canFinalizeTask.bind(this)
    this.canRevealRating = this.canRevealRating.bind(this)
    this.canSubmitRating = this.canSubmitRating.bind(this)
    this.canSubmitWork = this.canSubmitWork.bind(this)
    this.claimPayout = this.claimPayout.bind(this)
    this.editTask = this.editTask.bind(this)
    this.finalizeTask = this.finalizeTask.bind(this)
    this.revealRating = this.revealRating.bind(this)
    this.submitRating = this.submitRating.bind(this)
    this.submitWork = this.submitWork.bind(this)
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  canCancelTask() {
    const completionDate = this.props.task.completionDate
    return completionDate !== null
  }

  canClaimPayout() {
    const status = this.props.task.status
    const userAddress = this.props.colonyClient.adapter.wallet.address
    const managerAddress = this.props.task.roles.manager.address
    const evaluatorAddress = this.props.task.roles.evaluator.address
    const workerAddress = this.props.task.roles.worker.address
    const potBalance = this.props.task.pot.balance
    return (
      status === 'FINALIZED' && (
        userAddress === managerAddress ||
        userAddress === evaluatorAddress ||
        userAddress === workerAddress
      ) && potBalance > 0
    )
  }

  canEditTask() {
    const completionDate = this.props.task.completionDate
    return completionDate === null
  }

  canFinalizeTask() {
    const status = this.props.task.status
    const managerRating = this.props.task.roles.manager.rating
    const workerRating = this.props.task.roles.worker.rating
    return (
      status === 'ACTIVE' &&
      (managerRating !== 0 && workerRating !== 0)
    )
  }

  canRevealRating() {
    const userAddress = this.props.colonyClient.adapter.wallet.address
    const evaluatorAddress = this.props.task.roles.evaluator.address
    const workerAddress = this.props.task.roles.worker.address
    const completionDate = this.props.task.completionDate
    const ratingsCount = this.props.task.ratings.count
    const managerRating = this.props.task.roles.manager.rating
    const workerRating = this.props.task.roles.worker.rating
    return (
      (userAddress === evaluatorAddress || userAddress === workerAddress) &&
      completionDate !== null &&
      ratingsCount === 2 &&
      (managerRating === 0 && workerRating === 0)
    )
  }

  canSubmitRating() {
    const userAddress = this.props.colonyClient.adapter.wallet.address
    const evaluatorAddress = this.props.task.roles.evaluator.address
    const workerAddress = this.props.task.roles.worker.address
    const completionDate = this.props.task.completionDate
    const ratingsCount = this.props.task.ratings.count
    return (
      (userAddress === evaluatorAddress || userAddress === workerAddress) &&
      completionDate !== null &&
      ratingsCount !== 2
    )
  }

  canSubmitWork() {
    const userAddress = this.props.colonyClient.adapter.wallet.address
    const workerAddress = this.props.task.roles.worker.address
    const completionDate = this.props.task.completionDate
    return (
      userAddress === workerAddress &&
      completionDate === null
    )
  }

  claimPayout() {
    this.props.history.push(`/manage/tasks/claim/${this.props.task.id}`)
  }

  editTask() {
    this.props.history.push(`/manage/tasks/edit/${this.props.task.id}`)
  }

  finalizeTask() {
    this.props.finalizeTask(this.props.colonyClient, this.props.task.id)
  }

  revealRating() {
    this.props.history.push(`/manage/tasks/reveal/${this.props.task.id}`)
  }

  submitRating() {
    this.props.history.push(`/manage/tasks/rate/${this.props.task.id}`)
  }

  submitWork() {
    this.props.history.push(`/manage/tasks/submit/${this.props.task.id}`)
  }

  render() {
    return (
      <TaskActions
        cancelTask={this.cancelTask}
        canCancelTask={this.canCancelTask}
        canClaimPayout={this.canClaimPayout}
        canEditTask={this.canEditTask}
        canFinalizeTask={this.canFinalizeTask}
        canRevealRating={this.canRevealRating}
        canSubmitRating={this.canSubmitRating}
        canSubmitWork={this.canSubmitWork}
        claimPayout={this.claimPayout}
        editTask={this.editTask}
        error={
          this.props.cancelTaskError ||
          this.props.finalizeTaskError
        }
        finalizeTask={this.finalizeTask}
        loading={
          this.props.cancelTaskLoading ||
          this.props.finalizeTaskLoading
        }
        revealRating={this.revealRating}
        signTask={this.signTask}
        submitRating={this.submitRating}
        submitWork={this.submitWork}
        success={
          this.props.cancelTaskSuccess ||
          this.props.finalizeTaskSuccess
        }
      />
    )
  }

}

const mapStateToProps = state => ({
  cancelTaskError: state.tasks.cancelTaskError,
  cancelTaskLoading: state.tasks.cancelTaskLoading,
  cancelTaskSuccess: state.tasks.cancelTaskSuccess,
  colonyClient: state.colony.colonyClient,
  finalizeTaskError: state.tasks.finalizeTaskError,
  finalizeTaskLoading: state.tasks.finalizeTaskLoading,
  finalizeTaskSuccess: state.tasks.finalizeTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  cancelTask(colonyClient, taskId) {
    dispatch(tasksActions.cancelTask(colonyClient, taskId))
  },
  finalizeTask(colonyClient, taskId) {
    dispatch(tasksActions.finalizeTask(colonyClient, taskId))
  },
  resetActions() {
    dispatch(tasksActions.cancelTaskError(null))
    dispatch(tasksActions.cancelTaskSuccess(false))
    dispatch(tasksActions.finalizeTaskError(null))
    dispatch(tasksActions.finalizeTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskActionsContainer))

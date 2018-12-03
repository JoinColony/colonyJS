import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as adminsActions from '../../../actions/adminsActions'
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

  componentDidMount() {
    const colonyClient = this.props.colonyClient
    const userAddress = this.props.colonyClient.adapter.wallet.address
    this.props.checkAdmin(colonyClient, userAddress)
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  canCancelTask() {
    const completionDate = this.props.task.completionDate
    return (this.props.admin && completionDate !== null)
  }

  canClaimPayout() {
    const userAddress = this.props.colonyClient.adapter.wallet.address
    const managerAddress = this.props.task.roles.manager.address
    const evaluatorAddress = this.props.task.roles.evaluator.address
    const workerAddress = this.props.task.roles.worker.address
    const status = this.props.task.status
    return (
      (
        userAddress === managerAddress ||
        userAddress === evaluatorAddress ||
        userAddress === workerAddress
      ) && status === 'FINALIZED'
    )
  }

  canEditTask() {
    const completionDate = this.props.task.completionDate
    return completionDate === null
  }

  canFinalizeTask() {
    const ratingsCount = this.props.task.ratings.count

    // TODO check whether both reveals are submitted ?

    return (ratingsCount === 2)
  }

  canRevealRating() {
    const userAddress = this.props.colonyClient.adapter.wallet.address
    const evaluatorAddress = this.props.task.roles.evaluator.address
    const workerAddress = this.props.task.roles.worker.address
    const ratingsCount = this.props.task.ratings.count
    return (
      (userAddress === evaluatorAddress || userAddress === workerAddress) &&
      ratingsCount === 2
    )
  }

  canSubmitRating() {
    const userAddress = this.props.colonyClient.adapter.wallet.address
    const evaluatorAddress = this.props.task.roles.evaluator.address
    const workerAddress = this.props.task.roles.worker.address
    const completionDate = this.props.task.completionDate
    return (
      (userAddress === evaluatorAddress || userAddress === workerAddress) &&
      completionDate !== null
    )
  }

  canSubmitWork() {
    const userAddress = this.props.colonyClient.adapter.wallet.address
    const workerAddress = this.props.task.roles.worker.address
    return (userAddress === workerAddress)
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
  admin: state.admins.admin,
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
  checkAdmin(colonyClient, userAddress) {
    dispatch(adminsActions.checkAdmin(colonyClient, userAddress))
  },
  finalizeTask(colonyClient, taskId) {
    dispatch(tasksActions.finalizeTask(colonyClient, taskId))
  },
  resetActions() {
    dispatch(adminsActions.checkAdminError(null))
    dispatch(adminsActions.checkAdminSuccess(false))
    dispatch(tasksActions.cancelTaskError(null))
    dispatch(tasksActions.cancelTaskSuccess(false))
    dispatch(tasksActions.finalizeTaskError(null))
    dispatch(tasksActions.finalizeTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskActionsContainer))

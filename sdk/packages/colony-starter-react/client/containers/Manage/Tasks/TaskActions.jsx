import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as tasksActions from '../../../actions/tasksActions'
import TaskActions from '../../../components/Manage/Tasks/TaskActions'

class TaskActionsContainer extends Component {

  constructor(props) {
    super(props)
    this.cancelTask = this.cancelTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.finalizeTask = this.finalizeTask.bind(this)
    this.fundTask = this.fundTask.bind(this)
    this.revealRating = this.revealRating.bind(this)
    this.signTask = this.signTask.bind(this)
    this.submitRating = this.submitRating.bind(this)
    this.submitWork = this.submitWork.bind(this)
    this.viewTask = this.viewTask.bind(this)
  }

  cancelTask() {
    this.props.cancelTask(this.props.colonyClient, this.props.task.id)
  }

  editTask() {
    this.props.history.push(`/manage/tasks/edit/${this.props.task.id}`)
  }

  finalizeTask() {
    this.props.finalizeTask(this.props.colonyClient, this.props.task.id)
  }

  fundTask() {
    this.props.history.push(`/manage/tasks/fund/${this.props.task.id}`)
  }

  revealRating() {
    this.props.history.push(`/manage/tasks/reveal/${this.props.task.id}`)
  }

  signTask() {
    this.props.signTask(this.props.colonyClient, this.props.task.id)
  }

  submitRating() {
    this.props.history.push(`/manage/tasks/rate/${this.props.task.id}`)
  }

  submitWork() {
    this.props.history.push(`/manage/tasks/submit/${this.props.task.id}`)
  }

  viewTask() {
    this.props.history.push(`/manage/tasks/${this.props.task.id}`)
  }

  render() {
    return (
      <TaskActions
        cancelTask={this.cancelTask}
        editTask={this.editTask}
        error={
          this.props.cancelTaskError ||
          this.props.finalizeTaskError ||
          this.props.signTaskError
        }
        finalizeTask={this.finalizeTask}
        fundTask={this.fundTask}
        loading={
          this.props.cancelTaskLoading ||
          this.props.finalizeTaskLoading ||
          this.props.signTaskLoading
        }
        revealRating={this.revealRating}
        signTask={this.signTask}
        submitRating={this.submitRating}
        submitWork={this.submitWork}
        success={
          this.props.cancelTaskSuccess ||
          this.props.finalizeTaskSuccess ||
          this.props.signTaskSuccess
        }
        task={this.props.task}
        viewTask={this.viewTask}
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
  fundTaskError: state.tasks.fundTaskError,
  fundTaskLoading: state.tasks.fundTaskLoading,
  fundTaskSuccess: state.tasks.fundTaskSuccess,
  signTaskError: state.tasks.signTaskError,
  signTaskLoading: state.tasks.signTaskLoading,
  signTaskSuccess: state.tasks.signTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  cancelTask(colonyClient, taskId) {
    dispatch(tasksActions.cancelTask(colonyClient, taskId))
  },
  finalizeTask(colonyClient, taskId) {
    dispatch(tasksActions.finalizeTask(colonyClient, taskId))
  },
  signTask(colonyClient, taskId) {
    dispatch(tasksActions.signTask(colonyClient, taskId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TaskActionsContainer))

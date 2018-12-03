import React, { Component } from 'react'
import { connect } from 'react-redux'
import formatDate from '../../../../helpers/formatDate'
import * as tasksActions from '../../../../actions/tasksActions'
import SignTask from '../../../../components/Manage/Tasks/EditTask/SignTask'

class SignTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.canSignTask = this.canSignTask.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  canSignTask() {

    // TODO check whether user is required to sign anything ?

    return true
  }

  handleClick() {
    this.props.signTask(this.props.colonyClient, this.props.task.id)
  }

  render() {
    return (
      <SignTask
        canSignTask={this.canSignTask}
        handleClick={this.handleClick}
        signTaskError={this.props.signTaskError}
        signTaskLoading={this.props.signTaskLoading}
        signTaskSuccess={this.props.signTaskSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  signTaskError: state.tasks.signTaskError,
  signTaskLoading: state.tasks.signTaskLoading,
  signTaskSuccess: state.tasks.signTaskSuccess,
  task: state.tasks.task,
})

const mapDispatchToProps = dispatch => ({
  resetActions() {
    dispatch(tasksActions.signTaskError(null))
    dispatch(tasksActions.signTaskSuccess(false))
  },
  signTask(colonyClient, taskId) {
    dispatch(tasksActions.signTask(colonyClient, taskId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignTaskContainer)

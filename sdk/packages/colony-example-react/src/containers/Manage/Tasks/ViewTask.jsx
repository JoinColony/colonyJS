import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../../actions/taskActions'
import ViewTask from '../../../components/Manage/Tasks/ViewTask'

class ViewTaskContainer extends Component {

  componentDidMount() {
    const taskId = Number(this.props.match.params.id)
    this.props.getTask(this.props.colonyClient, taskId)
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  render() {
    return (
      <ViewTask
        getTaskError={this.props.getTaskError}
        getTaskLoading={this.props.getTaskLoading}
        getTaskSuccess={this.props.getTaskSuccess}
        task={this.props.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  getTaskError: state.task.getTaskError,
  getTaskLoading: state.task.getTaskLoading,
  getTaskSuccess: state.task.getTaskSuccess,
  task: state.task.task,
})

const mapDispatchToProps = dispatch => ({
  getTask(colonyClient, taskId) {
    dispatch(taskActions.getTask(colonyClient, taskId))
  },
  resetActions() {
    dispatch(taskActions.getTaskError(null))
    dispatch(taskActions.getTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTaskContainer)

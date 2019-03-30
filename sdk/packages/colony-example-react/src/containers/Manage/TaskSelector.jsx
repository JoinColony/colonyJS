import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../actions/taskActions'
import TaskSelector from '../../components/Manage/TaskSelector'

class TaskSelectorContainer extends Component {

  componentDidMount() {
    if (this.props.tasks === null) {
      this.props.getTasks(this.props.colonyClient)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  render() {
    return (
      <TaskSelector
        getTasksError={this.props.getTasksError}
        getTasksLoading={this.props.getTasksLoading}
        getTasksSuccess={this.props.getTasksSuccess}
        handleChange={this.props.handleChange}
        taskId={this.props.taskId}
        tasks={this.props.tasks}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  getTasksError: state.task.getTasksError,
  getTasksLoading: state.task.getTasksLoading,
  getTasksSuccess: state.task.getTasksSuccess,
  tasks: state.task.tasks,
})

const mapDispatchToProps = dispatch => ({
  getTasks(colonyClient) {
    dispatch(taskActions.getTasks(colonyClient))
  },
  resetActions() {
    dispatch(taskActions.getTasksError(null))
    dispatch(taskActions.getTasksSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskSelectorContainer)

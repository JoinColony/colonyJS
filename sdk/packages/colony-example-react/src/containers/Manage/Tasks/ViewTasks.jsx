import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../../actions/taskActions'
import ViewTasks from '../../../components/Manage/Tasks/ViewTasks'

class ViewTasksContainer extends Component {

  constructor(props) {
    super(props)
    this.viewTask = this.viewTask.bind(this)
  }

  componentDidMount() {
    if (this.props.tasks === null) {
      this.props.getTasks(this.props.colonyClient)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  viewTask(taskId) {
    this.props.history.push(`/manage/tasks/${taskId}`)
  }

  render() {
    return (
      <ViewTasks
        getTasksError={this.props.getTasksError}
        getTasksLoading={this.props.getTasksLoading}
        getTasksSuccess={this.props.getTasksSuccess}
        tasks={this.props.tasks}
        viewTask={this.viewTask}
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewTasksContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTasks } from '../../../actions/tasksActions'
import TaskSelector from '../../../components/Manage/Funds/TaskSelector'

class TaskSelectorContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.tasks === null) {
      this.props.getTasks(this.props.colonyClient)
    }
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
  getTasksError: state.tasks.getTasksError,
  getTasksLoading: state.tasks.getTasksLoading,
  getTasksSuccess: state.tasks.getTasksSuccess,
  tasks: state.tasks.tasks,
})

const mapDispatchToProps = dispatch => ({
  getTasks(colonyClient) {
    dispatch(getTasks(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskSelectorContainer)

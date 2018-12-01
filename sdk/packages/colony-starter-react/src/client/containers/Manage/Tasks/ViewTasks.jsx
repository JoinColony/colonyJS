import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../../actions/tasksActions'
import ViewTasks from '../../../components/Manage/Tasks/ViewTasks'

class ViewTasksContainer extends Component {

  constructor(props) {
    super(props)
  }

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
      <ViewTasks
        getTasksError={this.props.getTasksError}
        getTasksLoading={this.props.getTasksLoading}
        getTasksSuccess={this.props.getTasksSuccess}
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
    dispatch(tasksActions.getTasks(colonyClient))
  },
  resetActions() {
    dispatch(tasksActions.getTasksError(null))
    dispatch(tasksActions.getTasksSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTasksContainer)

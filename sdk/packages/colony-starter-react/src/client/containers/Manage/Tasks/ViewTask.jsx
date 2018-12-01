import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../../actions/tasksActions'
import ViewTask from '../../../components/Manage/Tasks/ViewTask'

class ViewTaskContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const taskId = Number(this.props.match.params.id)
    const task = this.props.tasks.find(task => task.id === taskId)
    this.props.getTask(this.props.colonyClient, task)
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
  getTaskError: state.tasks.getTaskError,
  getTaskLoading: state.tasks.getTaskLoading,
  getTaskSuccess: state.tasks.getTaskSuccess,
  task: state.tasks.task,
  tasks: state.tasks.tasks,
})

const mapDispatchToProps = dispatch => ({
  getTask(colonyClient, task) {
    dispatch(tasksActions.getTask(colonyClient, task))
  },
  resetActions() {
    dispatch(tasksActions.getTaskError(null))
    dispatch(tasksActions.getTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewTaskContainer)

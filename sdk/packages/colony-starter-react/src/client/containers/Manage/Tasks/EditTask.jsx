import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../../actions/taskActions'
import EditTask from '../../../components/Manage/Tasks/EditTask'

class EditTaskContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const taskId = Number(this.props.match.params.id)
    this.props.getTask(this.props.colonyClient, taskId)
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  render() {
    return (
      <EditTask
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
  getTask(colonyClient, task) {
    dispatch(taskActions.getTask(colonyClient, task))
  },
  resetActions() {
    dispatch(taskActions.getTaskError(null))
    dispatch(taskActions.getTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskContainer)

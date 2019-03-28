import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as adminActions from '../../../actions/adminActions'
import * as taskActions from '../../../actions/taskActions'
import EditTask from '../../../components/Manage/Tasks/EditTask'

class EditTaskContainer extends Component {

  componentDidMount() {
    const colonyClient = this.props.colonyClient
    const taskId = Number(this.props.match.params.id)
    const userAddress = colonyClient.adapter.wallet.address
    this.props.getTask(colonyClient, taskId)
    this.props.checkAdmin(colonyClient, userAddress)
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
  checkAdmin(colonyClient, userAddress) {
    dispatch(adminActions.checkAdmin(colonyClient, userAddress))
  },
  getTask(colonyClient, task) {
    dispatch(taskActions.getTask(colonyClient, task))
  },
  resetActions() {
    dispatch(adminActions.checkAdminError(null))
    dispatch(adminActions.checkAdminSuccess(false))
    dispatch(taskActions.getTaskError(null))
    dispatch(taskActions.getTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import formatDate from '../../../../helpers/formatDate'
import * as taskActions from '../../../../actions/taskActions'
import SignTask from '../../../../components/Manage/Tasks/EditTask/SignTask'

class SignTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.canSignTask = this.canSignTask.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getMultisigOperations(this.props.colonyClient, this.props.task.id)
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  canSignTask() {
    if (this.props.multisigOperations) {
      const userAddress = this.props.colonyClient.adapter.wallet.address.toLowerCase()
      const multisigOperations = this.props.multisigOperations.filter(op => op.missingSignees.includes(userAddress))
      return multisigOperations.length > 0
    } else {
      return false
    }
  }

  handleClick() {
    this.props.signTask(this.props.colonyClient, this.props.task.id)
  }

  render() {
    return (
      <SignTask
        canSignTask={this.canSignTask}
        handleClick={this.handleClick}
        multisigOperations={this.props.multisigOperations}
        signTaskError={this.props.signTaskError}
        signTaskLoading={this.props.signTaskLoading}
        signTaskSuccess={this.props.signTaskSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  getMultisigOperationsError: state.task.getMultisigOperationsError,
  getMultisigOperationsLoading: state.task.getMultisigOperationsLoading,
  getMultisigOperationsSuccess: state.task.getMultisigOperationsSuccess,
  multisigOperations: state.task.multisigOperations,
  signTaskError: state.task.signTaskError,
  signTaskLoading: state.task.signTaskLoading,
  signTaskSuccess: state.task.signTaskSuccess,
  task: state.task.task,
})

const mapDispatchToProps = dispatch => ({
  getMultisigOperations(colonyClient, taskId) {
    dispatch(taskActions.getMultisigOperations(colonyClient, taskId))
  },
  resetActions() {
    dispatch(taskActions.signTaskError(null))
    dispatch(taskActions.signTaskSuccess(false))
  },
  signTask(colonyClient, taskId) {
    dispatch(taskActions.signTask(colonyClient, taskId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignTaskContainer)

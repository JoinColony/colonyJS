import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authorityActions from '../../../../actions/authorityActions'
import * as taskActions from '../../../../actions/taskActions'
import SetRoles from '../../../../components/Manage/Tasks/EditTask/SetRoles'

class SetRolesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      roles: {
        manager: {
          address: props.task.roles.manager.address,
        },
        evaluator: {
          address: props.task.roles.evaluator.address || '',
        },
        worker: {
          address: props.task.roles.worker.address || '',
        },
      },
    }
    this.canSetManagerRole = this.canSetManagerRole.bind(this)
    this.canSetEvaluatorRole = this.canSetEvaluatorRole.bind(this)
    this.canSetWorkerRole = this.canSetWorkerRole.bind(this)
    this.setManagerRole = this.setManagerRole.bind(this)
    this.setEvaluatorRole = this.setEvaluatorRole.bind(this)
    this.setWorkerRole = this.setWorkerRole.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.setTaskRoleSuccess && this.props.setTaskRoleSuccess) {
      this.setState({
        roles: {
          manager: {
            address: this.props.task.roles.manager.address,
          },
          evaluator: {
            address: this.props.task.roles.evaluator.address || '',
          },
          worker: {
            address: this.props.task.roles.worker.address || '',
          },
        },
      })
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  canSetManagerRole() {
    const completionDate = this.props.task.completionDate
    return (this.props.admin && completionDate === null)
  }

  canSetEvaluatorRole() {
    const completionDate = this.props.task.completionDate
    const evaluatorAddress = this.props.task.roles.evaluator.address
    return (!evaluatorAddress && completionDate === null)
  }

  canSetWorkerRole() {
    const completionDate = this.props.task.completionDate
    const workerAddress = this.props.task.roles.worker.address
    return (!workerAddress && completionDate === null)
  }

  handleChange(event) {
    let state = this.state
    state.roles[event.target.id].address = event.target.value
    this.setState({ ...state })
  }

  setManagerRole() {
    this.props.setTaskRole(
      this.props.colonyClient,
      Number(this.props.task.id),
      'MANAGER',
      this.state.roles.manager.address,
    )
  }

  setEvaluatorRole() {
    this.props.setTaskRole(
      this.props.colonyClient,
      Number(this.props.task.id),
      'EVALUATOR',
      this.state.roles.evaluator.address,
    )
  }

  setWorkerRole() {
    this.props.setTaskRole(
      this.props.colonyClient,
      Number(this.props.task.id),
      'WORKER',
      this.state.roles.worker.address,
    )
  }

  render() {
    return (
      <SetRoles
        canSetManagerRole={this.canSetManagerRole}
        canSetEvaluatorRole={this.canSetEvaluatorRole}
        canSetWorkerRole={this.canSetWorkerRole}
        handleChange={this.handleChange}
        setManagerRole={this.setManagerRole}
        setEvaluatorRole={this.setEvaluatorRole}
        setWorkerRole={this.setWorkerRole}
        roles={this.state.roles}
        setTaskRoleError={this.props.setTaskRoleError}
        setTaskRoleLoading={this.props.setTaskRoleLoading}
        setTaskRoleSuccess={this.props.setTaskRoleSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  admin: state.authority.admin,
  colonyClient: state.colony.colonyClient,
  setTaskRoleError: state.task.setTaskRoleError,
  setTaskRoleLoading: state.task.setTaskRoleLoading,
  setTaskRoleSuccess: state.task.setTaskRoleSuccess,
  task: state.task.task,
})

const mapDispatchToProps = dispatch => ({
  resetActions() {
    dispatch(taskActions.setTaskRoleError(null))
    dispatch(taskActions.setTaskRoleSuccess(false))
  },
  setTaskRole(colonyClient, taskId, role, user) {
    dispatch(taskActions.setTaskRole(colonyClient, taskId, role, user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SetRolesContainer)

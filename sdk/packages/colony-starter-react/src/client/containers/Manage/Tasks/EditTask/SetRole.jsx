import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../../../actions/tasksActions'
import SetRole from '../../../../components/Manage/Tasks/EditTask/SetRole'

class SetRoleContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: 'MANAGER',
      user: '',
    }
    this.canSetRole = this.canSetRole.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.setTaskRoleSuccess && this.props.setTaskRoleSuccess) {
      this.setState({
        role: 'MANAGER',
        user: '',
      })
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  canSetRole() {
    const completionDate = this.props.task.completionDate
    return completionDate === null
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.setTaskRole(
      this.props.colonyClient,
      Number(this.props.task.id),
      this.state.role,
      this.state.user,
    )
  }

  render() {
    return (
      <SetRole
        canSetRole={this.canSetRole}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        role={this.state.role}
        roles={this.props.roles}
        setTaskRoleError={this.props.setTaskRoleError}
        setTaskRoleLoading={this.props.setTaskRoleLoading}
        setTaskRoleSuccess={this.props.setTaskRoleSuccess}
        user={this.state.user}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  roles: state.tasks.task.roles,
  setTaskRoleError: state.tasks.setTaskRoleError,
  setTaskRoleLoading: state.tasks.setTaskRoleLoading,
  setTaskRoleSuccess: state.tasks.setTaskRoleSuccess,
  task: state.tasks.task,
})

const mapDispatchToProps = dispatch => ({
  setTaskRole(colonyClient, taskId, role, user) {
    dispatch(tasksActions.setTaskRole(colonyClient, taskId, role, user))
  },
  resetActions() {
    dispatch(tasksActions.setTaskRoleError(null))
    dispatch(tasksActions.setTaskRoleSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SetRoleContainer)

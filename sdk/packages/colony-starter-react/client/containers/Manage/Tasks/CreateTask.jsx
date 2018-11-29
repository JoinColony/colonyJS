import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../../actions/tasksActions'
import CreateTask from '../../../components/Manage/Tasks/CreateTask'

class CreateTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      task: {
        domainId: 0,
        dueDate: '',
        payouts: {
          evaluator: 0,
          manager: 0,
          worker: 0,
        },
        roles: {
          evaluator: '',
          manager: '',
          worker: '',
        },
        skillId: 0,
        specification: {
          description: '',
          title: '',
        },
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate() {
    if (this.state.submitted && this.props.createTaskSuccess) {
      this.props.history.push(`/manage/tasks/${this.props.task.id}`)
    }
  }

  handleChange(event) {

    // set task
    let task = this.state.task

    // check event target id
    switch (event.target.id) {

      // payouts

      case 'payout-evaluator':
      case 'payout-manager':
      case 'payout-worker':
        task.payouts[event.target.id.substring(7)] = event.target.value
        break

      // roles

      case 'role-evaluator':
      case 'role-manager':
      case 'role-worker':
        task.roles[event.target.id.substring(5)] = event.target.value
        break

      // specification

      case 'specification-description':
      case 'specification-title':
        task.specification[event.target.id.substring(14)] = event.target.value
        break

      // default

      default:
        task[event.target.id] = event.target.value
        break

    }

    // set state
    this.setState({ task })

  }

  handleClick() {

    // create task
    this.props.createTask(this.props.colonyClient, this.state.task)

    // set state
    this.setState({ submitted: true })

  }

  render() {
    return (
      <CreateTask
        createTaskError={this.props.createTaskError}
        createTaskLoading={this.props.createTaskLoading}
        createTaskSuccess={this.props.createTaskSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        task={this.state.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  createTaskError: state.tasks.createTaskError,
  createTaskLoading: state.tasks.createTaskLoading,
  createTaskSuccess: state.tasks.createTaskSuccess,
  task: state.tasks.task,
})

const mapDispatchToProps = dispatch => ({
  createTask(colonyClient, task) {
    dispatch(createTask(colonyClient, task))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer)

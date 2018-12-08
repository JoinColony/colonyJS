import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../../actions/taskActions'
import CreateTask from '../../../components/Manage/Tasks/CreateTask'

class CreateTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: {
        domainId: 0,
        dueDate: '',
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

  componentDidUpdate(prevProps) {
    if (!prevProps.createTaskSuccess && this.props.createTaskSuccess) {
      this.props.history.push(`/manage/tasks/${this.props.taskCount}`)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  handleChange(event) {
    let task = this.state.task
    switch (event.target.id) {
      case 'specification-description':
      case 'specification-title':
        task.specification[event.target.id.substring(14)] = event.target.value
        break
      case 'domainId':
        task[event.target.id] = Number(event.target.value)
        break
      default:
        task[event.target.id] = event.target.value
        break
    }
    this.setState({ task })
  }

  handleClick() {
    this.props.createTask(this.props.colonyClient, this.state.task)
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
  createTaskError: state.task.createTaskError,
  createTaskLoading: state.task.createTaskLoading,
  createTaskSuccess: state.task.createTaskSuccess,
  task: state.task.task,
  taskCount: state.task.taskCount,
})

const mapDispatchToProps = dispatch => ({
  createTask(colonyClient, task) {
    dispatch(taskActions.createTask(colonyClient, task))
  },
  resetActions() {
    dispatch(taskActions.createTaskError(null))
    dispatch(taskActions.createTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskContainer)

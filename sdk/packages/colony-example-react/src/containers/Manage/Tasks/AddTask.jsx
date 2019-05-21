import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as taskActions from '../../../actions/taskActions'
import AddTask from '../../../components/Manage/Tasks/AddTask'

class AddTaskContainer extends Component {

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
    if (!prevProps.addTaskSuccess && this.props.addTaskSuccess) {
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
      case 'skillId':
        task[event.target.id] = Number(event.target.value)
        break
      default:
        task[event.target.id] = event.target.value
        break
    }
    this.setState({ task })
  }

  handleClick() {
    this.props.addTask(this.props.colonyClient, this.state.task)
  }

  render() {
    return (
      <AddTask
        addTaskError={this.props.addTaskError}
        addTaskLoading={this.props.addTaskLoading}
        addTaskSuccess={this.props.addTaskSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        task={this.state.task}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  addTaskError: state.task.addTaskError,
  addTaskLoading: state.task.addTaskLoading,
  addTaskSuccess: state.task.addTaskSuccess,
  task: state.task.task,
  taskCount: state.task.taskCount,
})

const mapDispatchToProps = dispatch => ({
  addTask(colonyClient, task) {
    dispatch(taskActions.addTask(colonyClient, task))
  },
  resetActions() {
    dispatch(taskActions.addTaskError(null))
    dispatch(taskActions.addTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskContainer)

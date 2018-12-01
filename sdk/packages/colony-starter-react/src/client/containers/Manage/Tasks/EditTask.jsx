import React, { Component } from 'react'
import { connect } from 'react-redux'
import formatDate from '../../../helpers/formatDate'
import * as tasksActions from '../../../actions/tasksActions'
import EditTask from '../../../components/Manage/Tasks/EditTask'

class EditTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { submitted: false, task: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const taskId = Number(this.props.match.params.id)
    const task = this.props.tasks.find(task => task.id === taskId)
    this.props.getTask(this.props.colonyClient, task)
  }

  componentDidUpdate(prevProps) {
    if (this.state.task === null && this.props.getTaskSuccess) {
      this.setState({
        task: {
          domainId: this.props.task.domainId,
          dueDate: formatDate(this.props.task.dueDate),
          payouts: {
            evaluator: this.props.task.payouts.evaluator,
            manager: this.props.task.payouts.manager,
            worker: this.props.task.payouts.worker,
          },
          roles: {
            evaluator: this.props.task.roles.evaluator.address || '',
            manager: this.props.task.roles.manager.address || '',
            worker: this.props.task.roles.worker.address || '',
          },
          skillId: this.props.task.skillId,
          specification: {
            description: this.props.task.specification.description,
            title: this.props.task.specification.title,
          },
        },
      })
    }
    if (this.state.submitted && this.props.updateTaskSuccess) {
      this.props.history.push(`/manage/tasks/${this.props.task.id}`)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
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

    // set prev and next
    const prev = this.props.tasks.find(task => task.id === Number(this.props.match.params.id))
    const next = this.state.task

    // declare task parameters
    let domainId, dueDate, payouts = {}, roles = {}, skillId, specification

    // set domainId if domainId has changed
    if (prev.domainId !== next.domainId) {
      domainId = next.domainId
    }

    // set dueDate if dueDate has changed
    if (prev.dueDate !== next.dueDate) {
      dueDate = next.dueDate
    }

    // set evaluator payout if evaluator payout has changed
    if (prev.payouts.evaluator.address !== next.payouts.evaluator) {
      payouts.evaluator = next.payouts.evaluator
    }

    // set manager payout if manager payout has changed
    if (prev.payouts.manager.address !== next.payouts.manager) {
      payouts.manager = next.payouts.manager
    }

    // set worker payout if worker payout has changed
    if (prev.payouts.worker.address !== next.payouts.worker) {
      payouts.worker = next.payouts.worker
    }

    // set evaluator if evaluator has changed
    if (prev.roles.evaluator.address !== next.roles.evaluator) {
      roles.evaluator = next.roles.evaluator
    }

    // set manager if manager has changed
    if (prev.roles.manager.address !== next.roles.manager) {
      roles.manager = next.roles.manager
    }

    // set worker if worker has changed
    if (prev.roles.worker.address !== next.roles.worker) {
      roles.worker = next.roles.worker
    }

    // set skillId if skillId has changed
    if (prev.skillId !== next.skillId) {
      skillId = next.skillId
    }

    // set specification if specification has changed
    if (
      prev.specification.description !== next.specification.description ||
      prev.specification.title !== next.specification.title
    ) {
      specification = next.specification
    }

    // set task
    const task = {
      domainId,
      dueDate,
      id: prev.id,
      payouts,
      roles,
      skillId,
      specification,
    }

    // update task
    this.props.updateTask(this.props.colonyClient, task)

    // set state
    this.setState({ submitted: true })

  }

  render() {
    return (
      <EditTask
        getTaskError={this.props.getTaskError}
        getTaskLoading={this.props.getTaskLoading}
        getTaskSuccess={this.props.getTaskSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        task={this.state.task}
        updateTaskError={this.props.updateTaskError}
        updateTaskLoading={this.props.updateTaskLoading}
        updateTaskSuccess={this.props.updateTaskSuccess}
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
  updateTaskError: state.tasks.updateTaskError,
  updateTaskLoading: state.tasks.updateTaskLoading,
  updateTaskSuccess: state.tasks.updateTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  getTask(colonyClient, task) {
    dispatch(tasksActions.getTask(colonyClient, task))
  },
  updateTask(colonyClient, task) {
    dispatch(tasksActions.updateTask(colonyClient, task))
  },
  resetActions() {
    dispatch(tasksActions.getTaskError(null))
    dispatch(tasksActions.getTaskSuccess(false))
    dispatch(tasksActions.updateTaskError(null))
    dispatch(tasksActions.updateTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskContainer)

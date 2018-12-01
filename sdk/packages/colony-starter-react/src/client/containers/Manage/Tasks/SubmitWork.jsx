import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as tasksActions from '../../../actions/tasksActions'
import SubmitWork from '../../../components/Manage/Tasks/SubmitWork'

class SubmitWorkContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      deliverable: {
        message: '',
      },
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.submitWorkSuccess && prevProps.submitWorkSuccess !== this.props.submitWorkSuccess) {
      this.setState({
        deliverable: {
          message: '',
        },
      })
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  handleChange(event) {
    let deliverable = this.state.deliverable
    deliverable[event.target.id] = event.target.value
    this.setState({ deliverable })
  }

  handleClick() {
    this.props.submitWork(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.deliverable
    )
  }

  render() {
    return (
      <SubmitWork
        deliverable={this.state.deliverable}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        submitWorkError={this.props.submitWorkError}
        submitWorkLoading={this.props.submitWorkLoading}
        submitWorkSuccess={this.props.submitWorkSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  submitWorkError: state.tasks.submitWorkError,
  submitWorkLoading: state.tasks.submitWorkLoading,
  submitWorkSuccess: state.tasks.submitWorkSuccess,
})

const mapDispatchToProps = dispatch => ({
  submitWork(colonyClient, taskId, deliverable) {
    dispatch(tasksActions.submitWork(colonyClient, taskId, deliverable))
  },
  resetActions() {
    dispatch(tasksActions.submitWorkError(null))
    dispatch(tasksActions.submitWorkSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitWorkContainer)

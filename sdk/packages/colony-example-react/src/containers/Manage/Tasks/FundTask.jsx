import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as taskActions from '../../../actions/taskActions'
import FundTask from '../../../components/Manage/Tasks/FundTask'

class FundTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { funding: { amount: 0, taskId: 0 } }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.fundTaskSuccess && prevProps.fundTaskSuccess !== this.props.fundTaskSuccess) {
      this.setState({ funding: { amount: 0, taskId: 0 } })
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  handleChange(event) {
    let funding = this.state.funding
    funding[event.target.id] = event.target.value
    this.setState({ funding })
  }

  handleClick() {
    this.props.fundTask(
      this.props.colonyClient,
      Number(this.state.funding.taskId),
      this.state.funding.amount,
    )
  }

  render() {
    return (
      <FundTask
        funding={this.state.funding}
        fundTaskError={this.props.fundTaskError}
        fundTaskLoading={this.props.fundTaskLoading}
        fundTaskSuccess={this.props.fundTaskSuccess}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  fundTaskError: state.task.fundTaskError,
  fundTaskLoading: state.task.fundTaskLoading,
  fundTaskSuccess: state.task.fundTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  fundTask(colonyClient, taskId, amount) {
    dispatch(taskActions.fundTask(colonyClient, taskId, amount))
  },
  resetActions() {
    dispatch(taskActions.fundTaskError(null))
    dispatch(taskActions.fundTaskSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FundTaskContainer))

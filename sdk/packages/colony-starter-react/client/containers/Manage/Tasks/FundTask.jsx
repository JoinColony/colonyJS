import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fundTask } from '../../../actions/tasksActions'
import FundTask from '../../../components/Manage/Tasks/FundTask'
import formatDate from '../../../helpers/formatDate'

class FundTaskContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { amount: 0 }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.fundTaskSuccess && prevProps.fundTaskSuccess !== this.props.fundTaskSuccess) {
      this.setState({ amount: 0 })
    }
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.fundTask(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.amount,
    )
  }

  render() {
    return (
      <FundTask
        amount={this.state.amount}
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
  fundTaskError: state.tasks.fundTaskError,
  fundTaskLoading: state.tasks.fundTaskLoading,
  fundTaskSuccess: state.tasks.fundTaskSuccess,
})

const mapDispatchToProps = dispatch => ({
  fundTask(colonyClient, taskId, amount) {
    dispatch(fundTask(colonyClient, taskId, amount))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FundTaskContainer))

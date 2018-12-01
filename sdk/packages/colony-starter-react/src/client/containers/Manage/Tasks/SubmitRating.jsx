import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitRating } from '../../../actions/tasksActions'
import SubmitRating from '../../../components/Manage/Tasks/SubmitRating'

class SubmitRatingContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rating: 1,
      role: 'MANAGER',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.submitRatingSuccess && prevProps.submitRatingSuccess !== this.props.submitRatingSuccess) {
      this.setState({
        rating: 1,
        role: 'MANAGER',
      })
    }
  }

  handleChange(event) {
    let state = this.state
    state[event.target.id] = event.target.value
    this.setState({ ...state })
  }

  handleClick() {
    this.props.submitRating(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.role,
      Number(this.state.rating),
    )
  }

  render() {
    return (
      <SubmitRating
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        rating={this.state.rating}
        role={this.state.role}
        submitRatingError={this.props.submitRatingError}
        submitRatingLoading={this.props.submitRatingLoading}
        submitRatingSuccess={this.props.submitRatingSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  submitRatingError: state.tasks.submitRatingError,
  submitRatingLoading: state.tasks.submitRatingLoading,
  submitRatingSuccess: state.tasks.submitRatingSuccess,
})

const mapDispatchToProps = dispatch => ({
  submitRating(colonyClient, taskId, role, rating) {
    dispatch(submitRating(colonyClient, taskId, role, rating))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitRatingContainer)

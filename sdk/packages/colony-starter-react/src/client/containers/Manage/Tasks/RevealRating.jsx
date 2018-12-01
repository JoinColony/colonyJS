import React, { Component } from 'react'
import { connect } from 'react-redux'
import { revealRating } from '../../../actions/tasksActions'
import RevealRating from '../../../components/Manage/Tasks/RevealRating'

class RevealRatingContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rating: 10,
      role: 'MANAGER',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.revealRatingSuccess && prevProps.revealRatingSuccess !== this.props.revealRatingSuccess) {
      this.setState({
        rating: 10,
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
    this.props.revealRating(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.role,
      Number(this.state.rating),
    )
  }

  render() {
    return (
      <RevealRating
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        rating={this.state.rating}
        role={this.state.role}
        revealRatingError={this.props.revealRatingError}
        revealRatingLoading={this.props.revealRatingLoading}
        revealRatingSuccess={this.props.revealRatingSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  revealRatingError: state.tasks.revealRatingError,
  revealRatingLoading: state.tasks.revealRatingLoading,
  revealRatingSuccess: state.tasks.revealRatingSuccess,
})

const mapDispatchToProps = dispatch => ({
  revealRating(colonyClient, taskId, role, rating) {
    dispatch(revealRating(colonyClient, taskId, role, rating))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RevealRatingContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { moveFunds, moveFundsSuccess } from '../../../actions/fundingActions'
import MoveFunds from '../../../components/Manage/Funding/MoveFunds'

class MoveFundsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { funding: { amount: 0, fromPot: 0, toPot: 0 } }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.moveFundsSuccess && prevProps.moveFundsSuccess !== this.props.moveFundsSuccess) {
      this.setState({ funding: { amount: 0, fromPot: 0, toPot: 0 } })
    }
  }

  componentWillUnmount() {
    this.props.resetSuccess()
  }

  handleChange(event) {
    let funding = this.state.funding
    funding[event.target.id] = event.target.value
    this.setState({ funding })
  }

  handleClick() {
    this.props.moveFunds(
      this.props.colonyClient,
      Number(this.state.funding.fromPot),
      Number(this.state.funding.toPot),
      this.state.funding.amount,
    )
  }

  render() {
    return (
      <MoveFunds
        funding={this.state.funding}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
        moveFundsError={this.props.moveFundsError}
        moveFundsLoading={this.props.moveFundsLoading}
        moveFundsSuccess={this.props.moveFundsSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  moveFundsError: state.funds.moveFundsError,
  moveFundsLoading: state.funds.moveFundsLoading,
  moveFundsSuccess: state.funds.moveFundsSuccess,
})

const mapDispatchToProps = dispatch => ({
  moveFunds(colonyClient, fromPot, toPot, amount) {
    dispatch(moveFunds(colonyClient, fromPot, toPot, amount))
  },
  resetSuccess() {
    dispatch(moveFundsSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MoveFundsContainer)

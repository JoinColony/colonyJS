import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fundingActions from '../../../actions/fundingActions'
import ClaimFunds from '../../../components/Manage/Funding/ClaimFunds'

class ClaimFundsContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    if (this.props.claimableFunds === null) {
      this.props.getClaimableFunds(this.props.colonyClient)
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.claimableFunds !== null &&
      this.props.claimableFunds === null &&
      this.props.claimableFundsError === null &&
      this.props.claimableFundsLoading === false
    ) {
      this.props.getClaimableFunds(this.props.colonyClient)
    }
    if (this.props.claimFundsSuccess && prevProps.claimFundsSuccess !== this.props.claimFundsSuccess) {
      this.props.getClaimableFunds(this.props.colonyClient)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  handleClick() {
    this.props.claimFunds(this.props.colonyClient)
  }

  render() {
    return (
      <ClaimFunds
        claimableFunds={this.props.claimableFunds}
        claimFundsError={this.props.claimFundsError}
        claimFundsLoading={this.props.claimFundsLoading}
        claimFundsSuccess={this.props.claimFundsSuccess}
        getClaimableFundsError={this.props.getClaimableFundsError}
        getClaimableFundsLoading={this.props.getClaimableFundsLoading}
        getClaimableFundsSuccess={this.props.getClaimableFundsSuccess}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  claimableFunds: state.funds.claimableFunds,
  claimFundsError: state.funds.claimFundsError,
  claimFundsLoading: state.funds.claimFundsLoading,
  claimFundsSuccess: state.funds.claimFundsSuccess,
  colonyClient: state.colony.colonyClient,
  getClaimableFundsError: state.funds.getClaimableFundsError,
  getClaimableFundsLoading: state.funds.getClaimableFundsLoading,
  getClaimableFundsSuccess: state.funds.getClaimableFundsSuccess,
})

const mapDispatchToProps = dispatch => ({
  claimFunds(colonyClient) {
    dispatch(fundingActions.claimFunds(colonyClient))
  },
  getClaimableFunds(colonyClient) {
    dispatch(fundingActions.getClaimableFunds(colonyClient))
  },
  resetActions() {
    dispatch(fundingActions.claimFundsError(null))
    dispatch(fundingActions.claimFundsSuccess(false))
    dispatch(fundingActions.getClaimableFundsError(null))
    dispatch(fundingActions.getClaimableFundsSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ClaimFundsContainer)

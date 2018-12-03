import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as domainActions from '../../../actions/domainActions'
import FundDomain from '../../../components/Manage/Domains/FundDomain'

class FundDomainContainer extends Component {

  constructor(props) {
    super(props)
    this.state = { funding: { amount: 0, domainId: 0 } }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.fundDomainSuccess && prevProps.fundDomainSuccess !== this.props.fundDomainSuccess) {
      this.setState({ funding: { amount: 0, domainId: 0 } })
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
    this.props.fundDomain(
      this.props.colonyClient,
      Number(this.state.funding.domainId),
      this.state.funding.amount,
    )
  }

  render() {
    return (
      <FundDomain
        funding={this.state.funding}
        fundDomainError={this.props.fundDomainError}
        fundDomainLoading={this.props.fundDomainLoading}
        fundDomainSuccess={this.props.fundDomainSuccess}
        handleClick={this.handleClick}
        handleChange={this.handleChange}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  fundDomainError: state.domain.fundDomainError,
  fundDomainLoading: state.domain.fundDomainLoading,
  fundDomainSuccess: state.domain.fundDomainSuccess,
})

const mapDispatchToProps = dispatch => ({
  fundDomain(colonyClient, domainId, amount) {
    dispatch(domainActions.fundDomain(colonyClient, domainId, amount))
  },
  resetActions() {
    dispatch(domainActions.fundDomainError(null))
    dispatch(domainActions.fundDomainSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FundDomainContainer)

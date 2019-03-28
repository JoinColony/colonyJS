import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as domainActions from '../../actions/domainActions'
import DomainSelector from '../../components/Manage/DomainSelector'

class DomainSelectorContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.domains === null) {
      this.props.getDomains(this.props.colonyClient)
    }
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  render() {
    return (
      <DomainSelector
        domainId={this.props.domainId}
        domains={this.props.domains}
        getDomainsError={this.props.getDomainsError}
        getDomainsLoading={this.props.getDomainsLoading}
        getDomainsSuccess={this.props.getDomainsSuccess}
        handleChange={this.props.handleChange}
        slice={this.props.slice}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  domains: state.domain.domains,
  getDomainsError: state.domain.getDomainsError,
  getDomainsLoading: state.domain.getDomainsLoading,
  getDomainsSuccess: state.domain.getDomainsSuccess,
})

const mapDispatchToProps = dispatch => ({
  getDomains(colonyClient) {
    dispatch(domainActions.getDomains(colonyClient))
  },
  resetActions() {
    dispatch(domainActions.getDomainsError(null))
    dispatch(domainActions.getDomainsSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DomainSelectorContainer)

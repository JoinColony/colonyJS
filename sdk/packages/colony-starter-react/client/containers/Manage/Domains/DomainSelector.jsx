import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDomains } from '../../../actions/domainsActions'
import DomainSelector from '../../../components/Manage/Funding/DomainSelector'

class DomainSelectorContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.domains === null) {
      this.props.getDomains(this.props.colonyClient)
    }
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
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  domains: state.domains.domains,
  getDomainsError: state.domains.getDomainsError,
  getDomainsLoading: state.domains.getDomainsLoading,
  getDomainsSuccess: state.domains.getDomainsSuccess,
})

const mapDispatchToProps = dispatch => ({
  getDomains(colonyClient) {
    dispatch(getDomains(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DomainSelectorContainer)

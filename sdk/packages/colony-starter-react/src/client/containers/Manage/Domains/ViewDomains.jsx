import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDomains, getDomainsSuccess } from '../../../actions/domainsActions'
import ViewDomains from '../../../components/Manage/Domains/ViewDomains'

class ViewDomainsContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.domains === null) {
      this.props.getDomains(this.props.colonyClient)
    }
  }

  componentDidUpdate() {
    if (this.props.domains === null && !this.props.getDomainsLoading) {
      this.props.getDomains(this.props.colonyClient)
    }
  }

  componentWillUnmount() {
    this.props.resetSuccess()
  }

  render() {
    return (
      <ViewDomains
        domains={this.props.domains}
        getDomainsError={this.props.getDomainsError}
        getDomainsLoading={this.props.getDomainsLoading}
        getDomainsSuccess={this.props.getDomainsSuccess}
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
  resetSuccess() {
    dispatch(getDomainsSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewDomainsContainer)

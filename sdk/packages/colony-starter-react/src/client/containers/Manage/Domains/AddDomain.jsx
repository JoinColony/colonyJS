import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as domainsActions from '../../../actions/domainsActions'
import AddDomain from '../../../components/Manage/Domains/AddDomain'

class AddDomainContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  handleClick() {
    this.props.addDomain(this.props.colonyClient)
  }

  render() {
    return (
      <AddDomain
        addDomainError={this.props.addDomainError}
        addDomainLoading={this.props.addDomainLoading}
        addDomainSuccess={this.props.addDomainSuccess}
        handleClick={this.handleClick}
      />
    )
  }

}

const mapStateToProps = state => ({
  addDomainError: state.domains.addDomainError,
  addDomainLoading: state.domains.addDomainLoading,
  addDomainSuccess: state.domains.addDomainSuccess,
  colonyClient: state.colony.colonyClient,
})

const mapDispatchToProps = dispatch => ({
  addDomain(colonyClient) {
    dispatch(domainsActions.addDomain(colonyClient))
  },
  resetActions() {
    dispatch(domainsActions.addDomainError(null))
    dispatch(domainsActions.addDomainSuccess(false))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDomainContainer)

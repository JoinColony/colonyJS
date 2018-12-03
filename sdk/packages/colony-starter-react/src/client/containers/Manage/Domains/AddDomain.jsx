import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as domainActions from '../../../actions/domainActions'
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
  addDomainError: state.domain.addDomainError,
  addDomainLoading: state.domain.addDomainLoading,
  addDomainSuccess: state.domain.addDomainSuccess,
  colonyClient: state.colony.colonyClient,
})

const mapDispatchToProps = dispatch => ({
  addDomain(colonyClient) {
    dispatch(domainActions.addDomain(colonyClient))
  },
  resetActions() {
    dispatch(domainActions.addDomainError(null))
    dispatch(domainActions.addDomainSuccess(false))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDomainContainer)

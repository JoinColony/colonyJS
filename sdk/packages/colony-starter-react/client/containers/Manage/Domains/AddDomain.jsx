import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDomain } from '../../../actions/domainsActions'
import AddDomain from '../../../components/Manage/Domains/AddDomain'

class AddDomainContainer extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
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
  colonyClient: state.colony.colonyClient,
  addDomainError: state.tasks.addDomainError,
  addDomainLoading: state.tasks.addDomainLoading,
  addDomainSuccess: state.tasks.addDomainSuccess,
})

const mapDispatchToProps = dispatch => ({
  addDomain(colonyClient) {
    dispatch(addDomain(colonyClient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDomainContainer)

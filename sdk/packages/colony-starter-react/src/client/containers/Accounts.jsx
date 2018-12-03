import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as accountActions from '../actions/accountActions'
import Accounts from '../components/Accounts'

class AccountsContainer extends Component {

  constructor(props) {
    super(props)
    this.selectAccount = this.selectAccount.bind(this)
  }

  componentDidMount() {
    this.props.getAccounts()
  }

  componentWillUnmount() {
    this.props.resetActions()
  }

  selectAccount(accountIndex) {
    this.props.connectNetwork(accountIndex)
  }

  render() {
    return (
      <Accounts
        accounts={this.props.accounts}
        getAccountsError={this.props.getAccountsError}
        getAccountsLoading={this.props.getAccountsLoading}
        getAccountsSuccess={this.props.getAccountsSuccess}
        selectAccount={this.selectAccount}
      />
    )
  }

}

const mapStateToProps = state => ({
  accounts: state.account.accounts,
  getAccountsError: state.account.getAccountsError,
  getAccountsLoading: state.account.getAccountsLoading,
  getAccountsSuccess: state.account.getAccountsSuccess,
})

const mapDispatchToProps = dispatch => ({
  getAccounts() {
    dispatch(accountActions.getAccounts())
  },
  resetActions() {
    dispatch(accountActions.getAccountsError(null))
    dispatch(accountActions.getAccountsSuccess(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountsContainer)

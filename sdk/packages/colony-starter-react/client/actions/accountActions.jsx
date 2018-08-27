import { store } from '../index'
import * as actions from '../constants/actions'
import * as accountActions from '../../helpers/actions/accountActions'

// getAccounts

export const getAccounts = (accountIndex) => ({
  type: actions.GET_ACCOUNTS,
  payload: accountActions.getAccounts(accountIndex)
    .then(accounts => {
      store.dispatch(setStateAccounts(accounts))
      store.dispatch(getAccountsSuccess())
    })
    .catch(error => {
      store.dispatch(getAccountsError(error.message))
    }),
})

export const getAccountsError = (message) => ({
  type: actions.GET_ACCOUNTS_ERROR,
  payload: message,
})

export const getAccountsSuccess = (message) => ({
  type: actions.GET_ACCOUNTS_SUCCESS,
  payload: message,
})

// setStateAccounts

export const setStateAccounts = (accounts) => ({
  type: actions.SET_STATE_ACCOUNTS,
  payload: accounts,
})

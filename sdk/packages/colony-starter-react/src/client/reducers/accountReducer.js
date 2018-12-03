import * as actions from '../constants/actions'

const initialState = {

  // accounts
  accounts: null,

  // getAccounts
  getAccountsError: null,
  getAccountsLoading: false,
  getAccountsSuccess: false,

}

const accountReducer = (state = initialState, action) => {

  switch (action.type) {

    // getAccounts

    case actions.GET_ACCOUNTS:
      return {
        ...state,
        getAccountsError: null,
        getAccountsLoading: true,
        getAccountsSuccess: false,
      }

    case actions.GET_ACCOUNTS_ERROR:
      return {
        ...state,
        getAccountsError: action.payload,
        getAccountsLoading: false,
      }

    case actions.GET_ACCOUNTS_SUCCESS:
      return {
        ...state,
        getAccountsLoading: false,
        getAccountsSuccess: action.payload,
      }

    // setStateAccounts

    case actions.SET_STATE_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
      }

    // default

    default:
      return state

  }

}

export default accountReducer

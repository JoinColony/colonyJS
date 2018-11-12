import * as actions from '../constants/actions'

const initialState = {

  // domains
  domains: null,

  // getDomains
  getDomainsError: null,
  getDomainsLoading: false,
  getDomainsSuccess: false,

}

const domainsReducer = (state = initialState, action) => {

  switch (action.type) {

    // getDomains

    case actions.GET_DOMAINS:
      return {
        ...state,
        getDomainsError: null,
        getDomainsLoading: true,
        getDomainsSuccess: false,
      }

    case actions.GET_DOMAINS_ERROR:
      return {
        ...state,
        getDomainsError: action.payload,
        getDomainsLoading: false,
      }

    case actions.GET_DOMAINS_SUCCESS:
      return {
        ...state,
        getDomainsLoading: false,
        getDomainsSuccess: true,
      }

    // setStateDomains

    case actions.SET_STATE_DOMAINS:
      return {
        ...state,
        domains: action.payload,
      }

    // default

    default:
      return state

  }

}

export default domainsReducer

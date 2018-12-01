import * as actions from '../constants/actions'

const initialState = {

  // addDomain
  addDomainError: null,
  addDomainLoading: false,
  addDomainSuccess: false,

  // domains
  domains: null,

  // fundDomain
  fundDomainError: null,
  fundDomainLoading: false,
  fundDomainSuccess: false,

  // getDomains
  getDomainsError: null,
  getDomainsLoading: false,
  getDomainsSuccess: false,

}

const domainsReducer = (state = initialState, action) => {

  switch (action.type) {

    // addDomain

    case actions.ADD_DOMAIN:
      return {
        ...state,
        addDomainError: null,
        addDomainLoading: true,
        addDomainSuccess: false,
      }

    case actions.ADD_DOMAIN_ERROR:
      return {
        ...state,
        addDomainError: action.payload,
        addDomainLoading: false,
      }

    case actions.ADD_DOMAIN_SUCCESS:
      return {
        ...state,
        addDomainLoading: false,
        addDomainSuccess: action.payload,
      }

    // fundDomain

    case actions.FUND_DOMAIN:
      return {
        ...state,
        fundDomainError: null,
        fundDomainLoading: true,
        fundDomainSuccess: false,
      }

    case actions.FUND_DOMAIN_ERROR:
      return {
        ...state,
        fundDomainError: action.payload,
        fundDomainLoading: false,
      }

    case actions.FUND_DOMAIN_SUCCESS:
      return {
        ...state,
        fundDomainLoading: false,
        fundDomainSuccess: action.payload,
      }

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
        getDomainsSuccess: action.payload,
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

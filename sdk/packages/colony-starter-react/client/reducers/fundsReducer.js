import * as actions from '../constants/actions'

const initialState = {

  // claimableFunds
  claimableFunds: null,

  // claimFunds
  claimFundsError: null,
  claimFundsLoading: false,
  claimFundsSuccess: false,

  // fundDomain
  fundDomainError: null,
  fundDomainLoading: false,
  fundDomainSuccess: false,

  // getClaimableFunds
  getClaimableFundsError: null,
  getClaimableFundsLoading: false,
  getClaimableFundsSuccess: false,

  // getPots
  getPotsError: null,
  getPotsLoading: false,
  getPotsSuccess: false,

  // pots
  pots: null,

}

const fundsReducer = (state = initialState, action) => {

  switch (action.type) {

    // claimFunds

    case actions.CLAIM_FUNDS:
      return {
        ...state,
        claimFundsError: null,
        claimFundsLoading: true,
        claimFundsSuccess: false,
      }

    case actions.CLAIM_FUNDS_ERROR:
      return {
        ...state,
        claimFundsError: action.payload,
        claimFundsLoading: false,
      }

    case actions.CLAIM_FUNDS_SUCCESS:
      return {
        ...state,
        claimFundsLoading: false,
        claimFundsSuccess: true,
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
        fundDomainSuccess: true,
      }

    // getClaimableFunds

    case actions.GET_CLAIMABLE_FUNDS:
      return {
        ...state,
        getClaimableFundsError: null,
        getClaimableFundsLoading: true,
        getClaimableFundsSuccess: false,
      }

    case actions.GET_CLAIMABLE_FUNDS_ERROR:
      return {
        ...state,
        getClaimableFundsError: action.payload,
        getClaimableFundsLoading: false,
      }

    case actions.GET_CLAIMABLE_FUNDS_SUCCESS:
      return {
        ...state,
        getClaimableFundsLoading: false,
        getClaimableFundsSuccess: true,
      }

    // getPots

    case actions.GET_POTS:
      return {
        ...state,
        getPotsError: null,
        getPotsLoading: true,
        getPotsSuccess: false,
      }

    case actions.GET_POTS_ERROR:
      return {
        ...state,
        getPotsError: action.payload,
        getPotsLoading: false,
      }

    case actions.GET_POTS_SUCCESS:
      return {
        ...state,
        getPotsLoading: false,
        getPotsSuccess: true,
      }

    // setStateClaimableFunds

    case actions.SET_STATE_CLAIMABLE_FUNDS:
      return {
        ...state,
        claimableFunds: action.payload,
      }

    // setStatePots

    case actions.SET_STATE_POTS:
      return {
        ...state,
        pots: action.payload,
      }

    // default

    default:
      return state

  }

}

export default fundsReducer

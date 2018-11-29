import { store } from '../index'
import * as actions from '../constants/actions'
import * as fundingActions from '../../helpers/actions/fundingActions'

// claimFunds

export const claimFunds = (colonyClient) => ({
  type: actions.CLAIM_FUNDS,
  payload: fundingActions.claimFunds(colonyClient)
    .then(pots => {
      store.dispatch(setStatePots(pots))
      store.dispatch(claimFundsSuccess())
    })
    .catch(error => {
      store.dispatch(claimFundsError(error.message))
    }),
})

export const claimFundsError = (message) => ({
  type: actions.CLAIM_FUNDS_ERROR,
  payload: message,
})

export const claimFundsSuccess = (message) => ({
  type: actions.CLAIM_FUNDS_SUCCESS,
  payload: message,
})

// getClaimableFunds

export const getClaimableFunds = (colonyClient) => ({
  type: actions.GET_CLAIMABLE_FUNDS,
  payload: fundingActions.getClaimableFunds(colonyClient)
    .then(claimableFunds => {
      store.dispatch(setStateClaimableFunds(claimableFunds))
      store.dispatch(getClaimableFundsSuccess())
    })
    .catch(error => {
      store.dispatch(getClaimableFundsError(error.message))
    }),
})

export const getClaimableFundsError = (message) => ({
  type: actions.GET_CLAIMABLE_FUNDS_ERROR,
  payload: message,
})

export const getClaimableFundsSuccess = (message) => ({
  type: actions.GET_CLAIMABLE_FUNDS_SUCCESS,
  payload: message,
})

// getPots

export const getPots = (colonyClient) => ({
  type: actions.GET_POTS,
  payload: fundingActions.getPots(colonyClient)
    .then(pots => {
      store.dispatch(setStatePots(pots))
      store.dispatch(getPotsSuccess())
    })
    .catch(error => {
      store.dispatch(getPotsError(error.message))
    }),
})

export const getPotsError = (message) => ({
  type: actions.GET_POTS_ERROR,
  payload: message,
})

export const getPotsSuccess = (message) => ({
  type: actions.GET_POTS_SUCCESS,
  payload: message,
})

// moveFunds

export const moveFunds = (colonyClient, fromPot, toPot, amount) => ({
  type: actions.MOVE_FUNDS,
  payload: fundingActions.moveFunds(colonyClient, fromPot, toPot, amount)
    .then(pots => {
      store.dispatch(setStatePots(pots))
      store.dispatch(moveFundsSuccess())
    })
    .catch(error => {
      store.dispatch(moveFundsError(error.message))
    }),
})

export const moveFundsError = (message) => ({
  type: actions.MOVE_FUNDS_ERROR,
  payload: message,
})

export const moveFundsSuccess = (message) => ({
  type: actions.MOVE_FUNDS_SUCCESS,
  payload: message,
})

// setStateClaimableFunds

export const setStateClaimableFunds = (claimableFunds) => ({
  type: actions.SET_STATE_CLAIMABLE_FUNDS,
  payload: claimableFunds,
})

// setStatePots

export const setStatePots = (pots) => ({
  type: actions.SET_STATE_POTS,
  payload: pots,
})

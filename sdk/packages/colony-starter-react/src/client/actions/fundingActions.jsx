import { store } from '../index'
import * as actions from '../constants/actions'
import * as fundingActions from '../../helpers/actions/fundingActions'

// claimFunds

export const claimFunds = (colonyClient) => ({
  type: actions.CLAIM_FUNDS,
  payload: fundingActions.claimFunds(colonyClient)
    .then(pots => {
      store.dispatch(setStatePots(pots))
      store.dispatch(claimFundsSuccess(true))
    })
    .catch(error => {
      store.dispatch(claimFundsError(error.message))
    }),
})

export const claimFundsError = (error) => ({
  type: actions.CLAIM_FUNDS_ERROR,
  payload: error,
})

export const claimFundsSuccess = (success) => ({
  type: actions.CLAIM_FUNDS_SUCCESS,
  payload: success,
})

// getClaimableFunds

export const getClaimableFunds = (colonyClient) => ({
  type: actions.GET_CLAIMABLE_FUNDS,
  payload: fundingActions.getClaimableFunds(colonyClient)
    .then(claimableFunds => {
      store.dispatch(setStateClaimableFunds(claimableFunds))
      store.dispatch(getClaimableFundsSuccess(true))
    })
    .catch(error => {
      store.dispatch(getClaimableFundsError(error.message))
    }),
})

export const getClaimableFundsError = (error) => ({
  type: actions.GET_CLAIMABLE_FUNDS_ERROR,
  payload: error,
})

export const getClaimableFundsSuccess = (success) => ({
  type: actions.GET_CLAIMABLE_FUNDS_SUCCESS,
  payload: success,
})

// getPots

export const getPots = (colonyClient) => ({
  type: actions.GET_POTS,
  payload: fundingActions.getPots(colonyClient)
    .then(pots => {
      store.dispatch(setStatePots(pots))
      store.dispatch(getPotsSuccess(true))
    })
    .catch(error => {
      store.dispatch(getPotsError(error.message))
    }),
})

export const getPotsError = (error) => ({
  type: actions.GET_POTS_ERROR,
  payload: error,
})

export const getPotsSuccess = (success) => ({
  type: actions.GET_POTS_SUCCESS,
  payload: success,
})

// moveFunds

export const moveFunds = (colonyClient, fromPot, toPot, amount) => ({
  type: actions.MOVE_FUNDS,
  payload: fundingActions.moveFunds(colonyClient, fromPot, toPot, amount)
    .then(pots => {
      store.dispatch(setStatePots(pots))
      store.dispatch(moveFundsSuccess(true))
    })
    .catch(error => {
      store.dispatch(moveFundsError(error.message))
    }),
})

export const moveFundsError = (error) => ({
  type: actions.MOVE_FUNDS_ERROR,
  payload: error,
})

export const moveFundsSuccess = (success) => ({
  type: actions.MOVE_FUNDS_SUCCESS,
  payload: success,
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

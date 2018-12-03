import { store } from '../index'
import * as actions from '../constants/actions'
import * as tokenActions from '../../helpers/actions/tokenActions'
import { setStateClaimableFunds } from './fundingActions'

// createToken

export const createToken = (networkClient, name, symbol) => ({
  type: actions.CREATE_TOKEN,
  payload: tokenActions.createToken(networkClient, name, symbol)
    .then(tokenAddress => {
      store.dispatch(setStateTokenAddress(tokenAddress))
      store.dispatch(createTokenSuccess(true))
    })
    .catch(error => {
      store.dispatch(createTokenError(error.message))
    }),
})

export const createTokenError = (error) => ({
  type: actions.CREATE_TOKEN_ERROR,
  payload: error,
})

export const createTokenSuccess = (success) => ({
  type: actions.CREATE_TOKEN_SUCCESS,
  payload: success,
})

// getToken

export const getToken = (colonyClient) => ({
  type: actions.GET_TOKEN,
  payload: tokenActions.getToken(colonyClient)
    .then(token => {
      store.dispatch(setStateToken(token))
      store.dispatch(getTokenSuccess(true))
    })
    .catch(error => {
      store.dispatch(getTokenError(error.message))
    }),
})

export const getTokenError = (error) => ({
  type: actions.GET_TOKEN_ERROR,
  payload: error,
})

export const getTokenSuccess = (success) => ({
  type: actions.GET_TOKEN_SUCCESS,
  payload: success,
})

// mintTokens

export const mintTokens = (colonyClient, amount) => ({
  type: actions.MINT_TOKENS,
  payload: tokenActions.mintTokens(colonyClient, amount)
    .then(token => {
      store.dispatch(setStateToken(token))
      store.dispatch(setStateClaimableFunds(null))
      store.dispatch(mintTokensSuccess(true))
    })
    .catch(error => {
      store.dispatch(mintTokensError(error.message))
    }),
})

export const mintTokensError = (error) => ({
  type: actions.MINT_TOKENS_ERROR,
  payload: error,
})

export const mintTokensSuccess = (success) => ({
  type: actions.MINT_TOKENS_SUCCESS,
  payload: success,
})

// setStateToken

export const setStateToken = (token) => ({
  type: actions.SET_STATE_TOKEN,
  payload: token,
})

// setStateTokenAddress

export const setStateTokenAddress = (tokenAddress) => ({
  type: actions.SET_STATE_TOKEN_ADDRESS,
  payload: tokenAddress,
})

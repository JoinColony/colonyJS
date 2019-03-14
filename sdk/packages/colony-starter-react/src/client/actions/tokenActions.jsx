import BN from 'bn.js'
import { store } from '../index'
import * as actions from '../constants/actions'
import { setStateClaimableFunds } from './fundingActions'

// createToken

export const createToken = (networkClient, name, symbol) => ({
  type: actions.CREATE_TOKEN,
  payload: (async () => {

    // create token
    const tx = await networkClient.createToken.send({
      name,
      symbol,
    })

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // return token address
    return tx.meta.receipt.contractAddress

  })()
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
  payload: (async () => {

    // set token address
    const address = colonyClient.tokenClient.contract.address

    const info = await colonyClient.tokenClient.getTokenInfo.call()

    // get total supply
    const { amount } = await colonyClient.tokenClient.getTotalSupply.call()

    // set supply
    const supply = amount.toNumber()

    // return token
    return {
      address,
      supply,
      ...info,
    }

  })()
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
  payload: (async () => {

    // mint tokens
    const tx = await colonyClient.mintTokens.send({ amount: new BN(amount) })

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // return true
    return true

  })()
  .then(success => {
    store.dispatch(getToken(colonyClient))
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

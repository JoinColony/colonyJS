import { BN } from 'web3-utils'

import { store } from '../index'
import * as actions from '../constants/actions'

// claimFunds

export const claimFunds = (colonyClient) => ({
  type: actions.CLAIM_FUNDS,
  payload: (async () => {

    // Set token
    const token = colonyClient.tokenClient.contract.address

    // Claim funds
    const tx = await colonyClient.claimColonyFunds.send({ token })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getPots(colonyClient))
    store.dispatch(claimFundsSuccess(success))
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
  payload: (async () => {

    // Get colony balance
    const { amount: balance } = await colonyClient.tokenClient.getBalanceOf.call({
      sourceAddress: colonyClient.contract.address,
    })

    // Get non-rewards pot balance
    const { total: nonRewards } = await colonyClient.getNonRewardPotsTotal.call({
      token: colonyClient.tokenClient.contract.address,
    })

    // Calculate claimable funds
    const claimableFunds = balance.sub(nonRewards).toNumber()

    // Return claimable funds
    return claimableFunds

  })()
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
  payload: (async () => {

    // Declare pots
    let pots = []

    // Get domain count
    const { count: domainCount} = await colonyClient.getDomainCount.call()

    // Set domain id
    let domainId = 1

    // Get domains
    while (domainId <= domainCount) {

      // Declare pot
      let pot = {}

      // Get domain pot id
      const { potId } = await colonyClient.getDomain.call({ domainId })

      // Get pot balance
      const potBalance = await colonyClient.getFundingPotBalance.call({
        potId,
        token: colonyClient.tokenClient.contract.address,
      })

      // Set pot properties
      pot.id = potId
      pot.type = 'domain'
      pot.balance = potBalance.balance.toNumber()

      // Add pot to pots
      pots.push(pot)

      // Increment domain id
      domainId++

    }

    // Get task count
    const { count: taskCount } = await colonyClient.getTaskCount.call()

    // Set task id
    let taskId = 1

    // Get tasks
    while (taskId <= taskCount) {

      // Set pot
      let pot = {}

      // Get task
      const { potId } = await colonyClient.getTask.call({ taskId })

      // Get pot balance
      const potBalance = await colonyClient.getFundingPotBalance.call({
        potId,
        token: colonyClient.tokenClient.contract.address,
      })

      // Set properties
      pot.id = potId
      pot.type = 'task'
      pot.balance = potBalance.balance.toNumber()

      // Add pot to pots
      pots.push(pot)

      // Increment task id
      taskId++

    }

    // Return pots
    return pots

  })()
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
  payload: (async () => {

    // Set token
    const token = colonyClient.tokenClient.contract.address

    // Move funds between pots
    const tx = await colonyClient.moveFundsBetweenPots.send({
      fromPot,
      toPot,
      amount: new BN(amount),
      token,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(getPots(colonyClient))
    store.dispatch(moveFundsSuccess(success))
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

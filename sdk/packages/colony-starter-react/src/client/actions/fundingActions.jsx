import BN from 'bn.js'
import { store } from '../index'
import * as actions from '../constants/actions'

// claimFunds

export const claimFunds = (colonyClient) => ({
  type: actions.CLAIM_FUNDS,
  payload: (async () => {

    // set token
    const token = colonyClient.tokenClient.contract.address

    // claim funds
    const tx = await colonyClient.claimColonyFunds.send({ token })

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // return true
    return true

  })()
  .then(success => {
    store.dispatch(getPots(colonyClient))
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
  payload: (async () => {

    // get colony balance
    const { amount: balance } = await colonyClient.tokenClient.getBalanceOf.call({
      sourceAddress: colonyClient.contract.address,
    })

    const { total: nonRewards } = await colonyClient.getNonRewardPotsTotal.call({
      token: colonyClient.tokenClient.contract.address,
    })

    // calculate claimable funds
    const claimableFunds = balance.sub(nonRewards).toNumber()

    // return claimed funds
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

    // set pots
    let pots = []

    // get domain count
    const { count: domainCount} = await colonyClient.getDomainCount.call()

    // set domain id
    let domainId = 1

    // set domains
    let domains = []

    // get domains
    while (domainId <= domainCount) {

      // set pot
      let pot = {}

      // get domain pot id
      const { potId } = await colonyClient.getDomain.call({ domainId })

      // get pot balance
      const potBalance = await colonyClient.getFundingPotBalance.call({
        potId,
        token: colonyClient.tokenClient.contract.address,
      })

      // set pot properties
      pot.id = potId
      pot.type = 'domain'
      pot.balance = potBalance.balance.toNumber()

      // add pot to pots
      pots.push(pot)

      // increment domain id
      domainId++

    }

    // get task count
    const { count: taskCount } = await colonyClient.getTaskCount.call()

    // set task id
    let taskId = 1

    // set tasks
    let tasks = []

    // get tasks
    while (taskId <= taskCount) {

      // set pot
      let pot = {}

      // get task
      const { potId } = await colonyClient.getTask.call({ taskId })

      // get pot balance
      const potBalance = await colonyClient.getFundingPotBalance.call({
        potId,
        token: colonyClient.tokenClient.contract.address,
      })

      // set properties
      pot.id = potId
      pot.type = 'task'
      pot.balance = potBalance.balance.toNumber()

      // add pot to pots
      pots.push(pot)

      // increment task id
      taskId++

    }

    // return pots
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

    // set token
    const token = colonyClient.tokenClient.contract.address

    // move funds between pots
    const tx = await colonyClient.moveFundsBetweenPots.send({
      fromPot,
      toPot,
      amount: new BN(amount),
      token,
    })

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // return true
    return true

  })()
  .then(success => {
    store.dispatch(getPots(colonyClient))
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

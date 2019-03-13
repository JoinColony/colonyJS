import { store } from '../index'
import * as actions from '../constants/actions'
import { setStateDomains } from './domainActions'

// createColony

export const createColony = (networkClient, tokenAddress) => ({
  type: actions.CREATE_COLONY,
  payload: (async () => {

    // create colony
    const tx1 = await networkClient.createColony.send({ tokenAddress })

    // check unsuccessful
    if (!tx1.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx1.meta.transaction.hash)

    }

    // get colony client
    const colonyClient = await networkClient.getColonyClientByAddress(
      tx1.eventData.colonyAddress,
    )

    // set colony contract as token owner
    const tx2 = await colonyClient.tokenClient.setOwner.send({
      owner: tx1.eventData.colonyAddress,
    })

    // check unsuccessful
    if (!tx2.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx2.meta.transaction.hash)

    }

    // return colony client
    return colonyClient

  })()
  .then(colonyClient => {
    store.dispatch(setStateColonyClient(colonyClient))
    store.dispatch(createColonySuccess(true))
  })
  .catch(error => {
    store.dispatch(createColonyError(error.message))
  }),
})

export const createColonyError = (error) => ({
  type: actions.CREATE_COLONY_ERROR,
  payload: error,
})

export const createColonySuccess = (success) => ({
  type: actions.CREATE_COLONY_SUCCESS,
  payload: success,
})

// getColonyClient

export const getColonyClient = (networkClient, colonyAddress) => ({
  type: actions.GET_COLONY_CLIENT,
  payload: (async() => {

    // get colony client
    const colonyClient = await networkClient.getColonyClientByAddress(
      colonyAddress,
    )

    // return colony client
    return colonyClient

  })()
  .then(colonyClient => {
    store.dispatch(setStateColonyClient(colonyClient))
    store.dispatch(getColonyClientSuccess(true))
  })
  .catch(error => {
    store.dispatch(getColonyClientError(error.message))
  }),
})

export const getColonyClientError = (error) => ({
  type: actions.GET_COLONY_CLIENT_ERROR,
  payload: error,
})

export const getColonyClientSuccess = (success) => ({
  type: actions.GET_COLONY_CLIENT_SUCCESS,
  payload: success,
})

// setStateColonyClient

export const setStateColonyClient = (colonyClient) => ({
  type: actions.SET_STATE_COLONY_CLIENT,
  payload: colonyClient,
})

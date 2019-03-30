import { store } from '../index'
import * as actions from '../constants/actions'

// createColony

export const createColony = (networkClient, tokenAddress) => ({
  type: actions.CREATE_COLONY,
  payload: (async () => {

    // Create colony
    const tx = await networkClient.createColony.send({ tokenAddress })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Get colony client
    const colonyClient = await networkClient.getColonyClientByAddress(
      tx.eventData.colonyAddress,
    )

    // Return colony client
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

    // Get colony client
    const colonyClient = await networkClient.getColonyClientByAddress(
      colonyAddress,
    )

    // Return colony client
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

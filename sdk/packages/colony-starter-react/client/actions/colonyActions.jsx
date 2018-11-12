import { store } from '../index'
import * as actions from '../constants/actions'
import * as colonyActions from '../../helpers/actions/colonyActions'
import { setStateDomains } from './domainsActions'

// createColony

export const createColony = (networkClient, tokenAddress) => ({
  type: actions.CREATE_COLONY,
  payload: colonyActions.createColony(networkClient, tokenAddress)
    .then(colonyClient => {
      store.dispatch(setStateColonyClient(colonyClient))
      store.dispatch(createColonySuccess())
    })
    .catch(error => {
      store.dispatch(createColonyError(error.message))
    }),
})

export const createColonyError = (message) => ({
  type: actions.CREATE_COLONY_ERROR,
  payload: message,
})

export const createColonySuccess = (message) => ({
  type: actions.CREATE_COLONY_SUCCESS,
  payload: message,
})

// getColonyClient

export const getColonyClient = (networkClient, colonyAddress) => ({
  type: actions.GET_COLONY_CLIENT,
  payload: colonyActions.getColonyClient(networkClient, colonyAddress)
    .then(colonyClient => {
      store.dispatch(setStateColonyClient(colonyClient))
      store.dispatch(getColonyClientSuccess())
    })
    .catch(error => {
      store.dispatch(getColonyClientError(error.message))
    }),
})

export const getColonyClientError = (message) => ({
  type: actions.GET_COLONY_CLIENT_ERROR,
  payload: message,
})

export const getColonyClientSuccess = (message) => ({
  type: actions.GET_COLONY_CLIENT_SUCCESS,
  payload: message,
})

// setStateColonyClient

export const setStateColonyClient = (colonyClient) => ({
  type: actions.SET_STATE_COLONY_CLIENT,
  payload: colonyClient,
})

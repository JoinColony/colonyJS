import { store } from '../index'
import * as actions from '../constants/actions'
import * as networkActions from '../../helpers/actions/networkActions'

// connectNetwork

export const connectNetwork = (accountIndex) => ({
  type: actions.CONNECT_NETWORK,
  payload: networkActions.connectNetwork(accountIndex)
    .then(networkClient => {
      store.dispatch(setStateNetworkClient(networkClient))
      store.dispatch(connectNetworkSuccess())
    })
    .catch(error => {
      store.dispatch(connectNetworkError(error.message))
    }),
})

export const connectNetworkError = (message) => ({
  type: actions.CONNECT_NETWORK_ERROR,
  payload: message,
})

export const connectNetworkSuccess = (message) => ({
  type: actions.CONNECT_NETWORK_SUCCESS,
  payload: message,
})

// setStateNetworkClient

export const setStateNetworkClient = (networkClient) => ({
  type: actions.SET_STATE_NETWORK_CLIENT,
  payload: networkClient,
})

import { store } from '../index'
import * as actions from '../constants/actions'
import * as networkActions from '../../helpers/actions/networkActions'

// connectNetwork

export const connectNetwork = (network) => ({
  type: actions.CONNECT_NETWORK,
  payload: networkActions.connectNetwork(network)
    .then(networkClient => {
      store.dispatch(setStateNetworkClient(networkClient))
      store.dispatch(connectNetworkSuccess(true))
    })
    .catch(error => {
      store.dispatch(connectNetworkError(error.message))
    }),
})

export const connectNetworkError = (error) => ({
  type: actions.CONNECT_NETWORK_ERROR,
  payload: error,
})

export const connectNetworkSuccess = (success) => ({
  type: actions.CONNECT_NETWORK_SUCCESS,
  payload: success,
})

// getSkills

export const getSkills = (networkClient) => ({
  type: actions.GET_SKILLS,
  payload: networkActions.getSkills(networkClient)
    .then(skills => {
      store.dispatch(setStateSkills(skills))
      store.dispatch(getSkillsSuccess(true))
    })
    .catch(error => {
      store.dispatch(getSkillsError(error.message))
    }),
})

export const getSkillsError = (error) => ({
  type: actions.GET_SKILLS_ERROR,
  payload: error,
})

export const getSkillsSuccess = (success) => ({
  type: actions.GET_SKILLS_SUCCESS,
  payload: success,
})

// setStateNetworkClient

export const setStateNetworkClient = (networkClient) => ({
  type: actions.SET_STATE_NETWORK_CLIENT,
  payload: networkClient,
})

// setStateSkills

export const setStateSkills = (skills) => ({
  type: actions.SET_STATE_SKILLS,
  payload: skills,
})

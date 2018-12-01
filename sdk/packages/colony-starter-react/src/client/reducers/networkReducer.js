import * as actions from '../constants/actions'

const initialState = {

  // connectNetwork
  connectNetworkError: null,
  connectNetworkLoading: false,
  connectNetworkSuccess: false,

  // networkClient
  networkClient: null,

}

const networkReducer = (state = initialState, action) => {

  switch (action.type) {

    // connectNetwork

    case actions.CONNECT_NETWORK:
      return {
        ...state,
        connectNetworkError: null,
        connectNetworkLoading: true,
        connectNetworkSuccess: false,
      }

    case actions.CONNECT_NETWORK_ERROR:
      return {
        ...state,
        connectNetworkError: action.payload,
        connectNetworkLoading: false,
      }

    case actions.CONNECT_NETWORK_SUCCESS:
      return {
        ...state,
        connectNetworkLoading: false,
        connectNetworkSuccess: true,
      }

    // setStateNetworkClient

    case actions.SET_STATE_NETWORK_CLIENT:
      return {
        ...state,
        networkClient: action.payload,
      }

    // default

    default:
      return state

  }

}

export default networkReducer

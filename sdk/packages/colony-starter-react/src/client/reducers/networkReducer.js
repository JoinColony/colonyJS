import * as actions from '../constants/actions'

const initialState = {

  // connectNetwork
  connectNetworkError: null,
  connectNetworkLoading: false,
  connectNetworkSuccess: false,

  // getNetworkClient
  getNetworkClientError: null,
  getNetworkClientLoading: false,
  getNetworkClientSuccess: false,

  // getSkills
  getSkillsError: null,
  getSkillsLoading: false,
  getSkillsSuccess: false,

  // networkClient
  networkClient: null,

  // skills
  skills: null,

  // wallet
  wallet: null,

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
        connectNetworkSuccess: action.payload,
      }

    // getNetworkClient

    case actions.GET_NETWORK_CLIENT:
      return {
        ...state,
        getNetworkClientError: null,
        getNetworkClientLoading: true,
        getNetworkClientSuccess: false,
      }

    case actions.GET_NETWORK_CLIENT_ERROR:
      return {
        ...state,
        getNetworkClientError: action.payload,
        getNetworkClientLoading: false,
      }

    case actions.GET_NETWORK_CLIENT_SUCCESS:
      return {
        ...state,
        getNetworkClientLoading: false,
        getNetworkClientSuccess: action.payload,
      }

    // getSkills

    case actions.GET_SKILLS:
      return {
        ...state,
        getSkillsError: null,
        getSkillsLoading: true,
        getSkillsSuccess: false,
      }

    case actions.GET_SKILLS_ERROR:
      return {
        ...state,
        getSkillsError: action.payload,
        getSkillsLoading: false,
      }

    case actions.GET_SKILLS_SUCCESS:
      return {
        ...state,
        getSkillsLoading: false,
        getSkillsSuccess: action.payload,
      }

    // setStateNetworkClient

    case actions.SET_STATE_NETWORK_CLIENT:
      return {
        ...state,
        networkClient: action.payload,
      }

    // setStateSkills

    case actions.SET_STATE_SKILLS:
      return {
        ...state,
        skills: action.payload,
      }

    // setStateWallet

    case actions.SET_STATE_WALLET:
      return {
        ...state,
        wallet: action.payload,
      }

    // default

    default:
      return state

  }

}

export default networkReducer

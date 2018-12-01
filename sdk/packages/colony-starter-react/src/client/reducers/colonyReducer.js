import * as actions from '../constants/actions'

const initialState = {

  // colonyClient
  colonyClient: null,

  // createColony
  createColonyError: null,
  createColonyLoading: false,
  createColonySuccess: false,

  // getColonyClient
  getColonyClientError: null,
  getColonyClientLoading: false,
  getColonyClientSuccess: false,

}

const colonyReducer = (state = initialState, action) => {

  switch (action.type) {

    // createColony

    case actions.CREATE_COLONY:
      return {
        ...state,
        createColonyError: null,
        createColonyLoading: true,
        createColonySuccess: false,
      }

    case actions.CREATE_COLONY_ERROR:
      return {
        ...state,
        createColonyError: action.payload,
        createColonyLoading: false,
      }

    case actions.CREATE_COLONY_SUCCESS:
      return {
        ...state,
        createColonyLoading: false,
        createColonySuccess: action.payload,
      }

    // getColonyClient

    case actions.GET_COLONY_CLIENT:
      return {
        ...state,
        getColonyClientError: null,
        getColonyClientLoading: true,
        getColonyClientSuccess: false,
      }

    case actions.GET_COLONY_CLIENT_ERROR:
      return {
        ...state,
        getColonyClientError: action.payload,
        getColonyClientLoading: false,
      }

    case actions.GET_COLONY_CLIENT_SUCCESS:
      return {
        ...state,
        getColonyClientLoading: false,
        getColonyClientSuccess: action.payload,
      }

    // setStateColonyClient

    case actions.SET_STATE_COLONY_CLIENT:
      return {
        ...state,
        colonyClient: action.payload,
      }

    // default

    default:
      return state

  }

}

export default colonyReducer

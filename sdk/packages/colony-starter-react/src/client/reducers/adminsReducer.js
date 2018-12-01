import * as actions from '../constants/actions'

const initialState = {

  // addAdmin
  addAdminError: null,
  addAdminLoading: false,
  addAdminSuccess: false,

  // admin
  admin: null,

  // checkAdmin
  checkAdminError: null,
  checkAdminLoading: false,
  checkAdminSuccess: false,

  // removeAdmin
  removeAdminError: null,
  removeAdminLoading: false,
  removeAdminSuccess: false,

}

const adminsReducer = (state = initialState, action) => {

  switch (action.type) {

    // addAdmin

    case actions.ADD_ADMIN:
      return {
        ...state,
        addAdminError: null,
        addAdminLoading: true,
        addAdminSuccess: false,
      }

    case actions.ADD_ADMIN_ERROR:
      return {
        ...state,
        addAdminError: action.payload,
        addAdminLoading: false,
      }

    case actions.ADD_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminLoading: false,
        addAdminSuccess: action.payload,
      }

    // checkAdmin

    case actions.CHECK_ADMIN:
      return {
        ...state,
        checkAdminError: null,
        checkAdminLoading: true,
        checkAdminSuccess: false,
      }

    case actions.CHECK_ADMIN_ERROR:
      return {
        ...state,
        checkAdminError: action.payload,
        checkAdminLoading: false,
      }

    case actions.CHECK_ADMIN_SUCCESS:
      return {
        ...state,
        checkAdminLoading: false,
        checkAdminSuccess: action.payload,
      }

    // removeAdmin

    case actions.REMOVE_ADMIN:
      return {
        ...state,
        removeAdminError: null,
        removeAdminLoading: true,
        removeAdminSuccess: false,
      }

    case actions.REMOVE_ADMIN_ERROR:
      return {
        ...state,
        removeAdminError: action.payload,
        removeAdminLoading: false,
      }

    case actions.REMOVE_ADMIN_SUCCESS:
      return {
        ...state,
        removeAdminLoading: false,
        removeAdminSuccess: action.payload,
      }

    // setStateAdmin

    case actions.SET_STATE_ADMIN:
      return {
        ...state,
        admin: action.payload,
      }

    // default

    default:
      return state

  }

}

export default adminsReducer

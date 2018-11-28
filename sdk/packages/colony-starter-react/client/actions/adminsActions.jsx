import { store } from '../index'
import * as actions from '../constants/actions'
import * as adminsActions from '../../helpers/actions/adminsActions'

// addAdmin

export const addAdmin = (colonyClient, userAddress) => ({
  type: actions.ADD_ADMIN,
  payload: adminsActions.addAdmin(colonyClient, userAddress)
    .then(success => {
      store.dispatch(addAdminSuccess())
    })
    .catch(error => {
      store.dispatch(addAdminError(error.message))
    }),
})

export const addAdminError = (message) => ({
  type: actions.ADD_ADMIN_ERROR,
  payload: message,
})

export const addAdminSuccess = (message) => ({
  type: actions.ADD_ADMIN_SUCCESS,
  payload: message,
})

// checkAdmin

export const checkAdmin = (colonyClient, userAddress) => ({
  type: actions.CHECK_ADMIN,
  payload: adminsActions.checkAdmin(colonyClient, userAddress)
    .then(admin => {
      store.dispatch(setStateAdmin(admin))
      store.dispatch(checkAdminSuccess())
    })
    .catch(error => {
      store.dispatch(checkAdminError(error.message))
    }),
})

export const checkAdminError = (message) => ({
  type: actions.CHECK_ADMIN_ERROR,
  payload: message,
})

export const checkAdminSuccess = (message) => ({
  type: actions.CHECK_ADMIN_SUCCESS,
  payload: message,
})

// removeAdmin

export const removeAdmin = (colonyClient, userAddress) => ({
  type: actions.REMOVE_ADMIN,
  payload: adminsActions.removeAdmin(colonyClient, userAddress)
    .then(success => {
      store.dispatch(removeAdminSuccess())
    })
    .catch(error => {
      store.dispatch(removeAdminError(error.message))
    }),
})

export const removeAdminError = (message) => ({
  type: actions.REMOVE_ADMIN_ERROR,
  payload: message,
})

export const removeAdminSuccess = (message) => ({
  type: actions.REMOVE_ADMIN_SUCCESS,
  payload: message,
})

// setStateAdmin

export const setStateAdmin = (admin) => ({
  type: actions.SET_STATE_ADMIN,
  payload: admin,
})

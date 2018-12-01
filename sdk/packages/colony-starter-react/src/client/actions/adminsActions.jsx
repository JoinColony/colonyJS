import { store } from '../index'
import * as actions from '../constants/actions'
import * as adminsActions from '../../helpers/actions/adminsActions'

// addAdmin

export const addAdmin = (colonyClient, userAddress) => ({
  type: actions.ADD_ADMIN,
  payload: adminsActions.addAdmin(colonyClient, userAddress)
    .then(success => {
      store.dispatch(addAdminSuccess(true))
    })
    .catch(error => {
      store.dispatch(addAdminError(error.message))
    }),
})

export const addAdminError = (error) => ({
  type: actions.ADD_ADMIN_ERROR,
  payload: error,
})

export const addAdminSuccess = (success) => ({
  type: actions.ADD_ADMIN_SUCCESS,
  payload: success,
})

// checkAdmin

export const checkAdmin = (colonyClient, userAddress) => ({
  type: actions.CHECK_ADMIN,
  payload: adminsActions.checkAdmin(colonyClient, userAddress)
    .then(admin => {
      store.dispatch(setStateAdmin(admin))
      store.dispatch(checkAdminSuccess(true))
    })
    .catch(error => {
      store.dispatch(checkAdminError(error.message))
    }),
})

export const checkAdminError = (error) => ({
  type: actions.CHECK_ADMIN_ERROR,
  payload: error,
})

export const checkAdminSuccess = (success) => ({
  type: actions.CHECK_ADMIN_SUCCESS,
  payload: success,
})

// removeAdmin

export const removeAdmin = (colonyClient, userAddress) => ({
  type: actions.REMOVE_ADMIN,
  payload: adminsActions.removeAdmin(colonyClient, userAddress)
    .then(success => {
      store.dispatch(removeAdminSuccess(true))
    })
    .catch(error => {
      store.dispatch(removeAdminError(error.message))
    }),
})

export const removeAdminError = (error) => ({
  type: actions.REMOVE_ADMIN_ERROR,
  payload: error,
})

export const removeAdminSuccess = (success) => ({
  type: actions.REMOVE_ADMIN_SUCCESS,
  payload: success,
})

// setStateAdmin

export const setStateAdmin = (admin) => ({
  type: actions.SET_STATE_ADMIN,
  payload: admin,
})

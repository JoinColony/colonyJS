import { store } from '../index'
import * as actions from '../constants/actions'

// addAdmin

export const addAdmin = (colonyClient, userAddress) => ({
  type: actions.ADD_ADMIN,
  payload: (async () => {

    // add user role admin
    const tx = await colonyClient.setAdminRole.send({
      user: userAddress,
    })

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // return true
    return true

  })()
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
  payload: (async () => {

    // check user role owner
    const { hasRole: owner } = await colonyClient.hasUserRole.call({
      user: userAddress,
      role: 'FOUNDER',
    })

    // check user role admin
    const { hasRole: admin } = await colonyClient.hasUserRole.call({
      user: userAddress,
      role: 'ADMIN',
    })

    // return condition
    return (owner || admin)

  })()
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
  payload: (async () => {

    // remove user role admin
    const tx = await colonyClient.removeAdminRole.send({
      user: userAddress,
    })

    // check unsuccessful
    if (!tx.successful) {

      // throw error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // return true
    return true

  })()
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

import { store } from '../index'
import * as actions from '../constants/actions'

// addAdmin

export const addAdmin = (colonyClient, userAddress) => ({
  type: actions.ADD_ADMIN,
  payload: (async () => {

    // Add admin
    const tx = await colonyClient.setAdministrationRole.send({
      address: userAddress,
      domainId: 1,
      setTo: true,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(addAdminSuccess(success))
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

    // Check root
    const { hasRole: root } = await colonyClient.hasColonyRole.call({
      address: userAddress,
      domainId: 1,
      role: 'ROOT',
    })

    // Check admin
    const { hasRole: admin } = await colonyClient.hasColonyRole.call({
      address: userAddress,
      domainId: 1,
      role: 'ADMINISTRATION',
    })

    // Return root or admin
    return (root || admin)

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

    // Remove admin
    const tx = await colonyClient.setAdministrationRole.send({
      address: userAddress,
      domainId: 1,
      setTo: false,
    })

    // Check unsuccessful
    if (!tx.successful) {

      // Throw failed transaction error
      throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

    }

    // Return successful
    return tx.successful

  })()
  .then(success => {
    store.dispatch(removeAdminSuccess(success))
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

import { store } from '../index'
import * as actions from '../constants/actions'
import * as tasksActions from '../../helpers/actions/tasksActions'
import { setStatePots } from './fundingActions'

// cancelTask

export const cancelTask = (colonyClient, taskId) => ({
  type: actions.CANCEL_TASK,
  payload: tasksActions.cancelTask(colonyClient, taskId)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(cancelTaskSuccess(true))
    })
    .catch(error => {
      store.dispatch(cancelTaskError(error.message))
    }),
})

export const cancelTaskError = (error) => ({
  type: actions.CANCEL_TASK_ERROR,
  payload: error,
})

export const cancelTaskSuccess = (success) => ({
  type: actions.CANCEL_TASK_SUCCESS,
  payload: success,
})

// claimPayout

export const claimPayout = (colonyClient, taskId, role) => ({
  type: actions.CLAIM_PAYOUT,
  payload: tasksActions.claimPayout(colonyClient, taskId, role)
    .then(success => {
      store.dispatch(claimPayoutSuccess(true))
    })
    .catch(error => {
      store.dispatch(claimPayoutError(error.message))
    }),
})

export const claimPayoutError = (error) => ({
  type: actions.CLAIM_PAYOUT_ERROR,
  payload: error,
})

export const claimPayoutSuccess = (success) => ({
  type: actions.CLAIM_PAYOUT_SUCCESS,
  payload: success,
})

// createTask

export const createTask = (colonyClient, task) => ({
  type: actions.CREATE_TASK,
  payload: tasksActions.createTask(colonyClient, task)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(setStateTaskCount(taskId))
      store.dispatch(createTaskSuccess(true))
    })
    .catch(error => {
      store.dispatch(createTaskError(error.message))
    }),
})

export const createTaskError = (error) => ({
  type: actions.CREATE_TASK_ERROR,
  payload: error,
})

export const createTaskSuccess = (success) => ({
  type: actions.CREATE_TASK_SUCCESS,
  payload: success,
})

// finalizeTask

export const finalizeTask = (colonyClient, taskId) => ({
  type: actions.FINALIZE_TASK,
  payload: tasksActions.finalizeTask(colonyClient, taskId)
    .then(success => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(finalizeTaskSuccess(success))
    })
    .catch(error => {
      store.dispatch(finalizeTaskError(error.message))
    }),
})

export const finalizeTaskError = (error) => ({
  type: actions.FINALIZE_TASK_ERROR,
  payload: error,
})

export const finalizeTaskSuccess = (success) => ({
  type: actions.FINALIZE_TASK_SUCCESS,
  payload: success,
})

// fundTask

export const fundTask = (colonyClient, taskId, amount) => ({
  type: actions.FUND_TASK,
  payload: tasksActions.fundTask(colonyClient, taskId, amount)
    .then(success => {
      store.dispatch(setStatePots(null))
      store.dispatch(fundTaskSuccess(true))
    })
    .catch(error => {
      store.dispatch(fundTaskError(error.message))
    }),
})

export const fundTaskError = (error) => ({
  type: actions.FUND_TASK_ERROR,
  payload: error,
})

export const fundTaskSuccess = (success) => ({
  type: actions.FUND_TASK_SUCCESS,
  payload: success,
})

// getMultisigOperations

export const getMultisigOperations = (colonyClient, taskId) => ({
  type: actions.GET_MULTISIG_OPERATIONS,
  payload: tasksActions.getMultisigOperations(colonyClient, taskId)
    .then(multisigOperations => {
      store.dispatch(setStateMultisigOperations(multisigOperations))
      store.dispatch(getMultisigOperationsSuccess(true))
    })
    .catch(error => {
      store.dispatch(getMultisigOperationsError(error.message))
    }),
})

export const getMultisigOperationsError = (error) => ({
  type: actions.GET_MULTISIG_OPERATIONS_ERROR,
  payload: error,
})

export const getMultisigOperationsSuccess = (success) => ({
  type: actions.GET_MULTISIG_OPERATIONS_SUCCESS,
  payload: success,
})

// getTask

export const getTask = (colonyClient, taskId) => ({
  type: actions.GET_TASK,
  payload: tasksActions.getTaskExtended(colonyClient, taskId)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(getTaskSuccess(true))
    })
    .catch(error => {
      store.dispatch(getTaskError(error.message))
    }),
})

export const getTaskError = (error) => ({
  type: actions.GET_TASK_ERROR,
  payload: error,
})

export const getTaskSuccess = (success) => ({
  type: actions.GET_TASK_SUCCESS,
  payload: success,
})

// getTasks

export const getTasks = (colonyClient) => ({
  type: actions.GET_TASKS,
  payload: tasksActions.getTasks(colonyClient)
    .then(tasks => {
      store.dispatch(setStateTasks(tasks))
      store.dispatch(getTasksSuccess(true))
    })
    .catch(error => {
      store.dispatch(getTasksError(error.message))
    }),
})

export const getTasksError = (error) => ({
  type: actions.GET_TASKS_ERROR,
  payload: error,
})

export const getTasksSuccess = (success) => ({
  type: actions.GET_TASKS_SUCCESS,
  payload: success,
})

// revealRating

export const revealRating = (colonyClient, taskId, role, rating) => ({
  type: actions.REVEAL_RATING,
  payload: tasksActions.revealRating(colonyClient, taskId, role, rating)
    .then(success => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(revealRatingSuccess(true))
    })
    .catch(error => {
      store.dispatch(revealRatingError(error.message))
    }),
})

export const revealRatingError = (error) => ({
  type: actions.REVEAL_RATING_ERROR,
  payload: error,
})

export const revealRatingSuccess = (success) => ({
  type: actions.REVEAL_RATING_SUCCESS,
  payload: success,
})

// setStateMultisigOperations

export const setStateMultisigOperations = (multisigOperations) => ({
  type: actions.SET_STATE_MULTISIG_OPERATIONS,
  payload: multisigOperations,
})

// setStateTask

export const setStateTask = (task) => ({
  type: actions.SET_STATE_TASK,
  payload: task,
})

// setStateTaskCount

export const setStateTaskCount = (taskCount) => ({
  type: actions.SET_STATE_TASK_COUNT,
  payload: taskCount,
})

// setStateTasks

export const setStateTasks = (tasks) => ({
  type: actions.SET_STATE_TASKS,
  payload: tasks,
})

// setTaskDetails

export const setTaskDetails = (colonyClient, taskId, details) => ({
  type: actions.SET_TASK_DETAILS,
  payload: tasksActions.setTaskDetails(colonyClient, taskId, details)
    .then(success => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(setTaskDetailsSuccess(true))
    })
    .catch(error => {
      store.dispatch(setTaskDetailsError(error.message))
    }),
})

export const setTaskDetailsError = (error) => ({
  type: actions.SET_TASK_DETAILS_ERROR,
  payload: error,
})

export const setTaskDetailsSuccess = (success) => ({
  type: actions.SET_TASK_DETAILS_SUCCESS,
  payload: success,
})

// setTaskPayouts

export const setTaskPayouts = (colonyClient, taskId, managerAmount, evaluatorAmount, workerAmount) => ({
  type: actions.SET_TASK_PAYOUTS,
  payload: tasksActions.setTaskPayouts(colonyClient, taskId, managerAmount, evaluatorAmount, workerAmount)
    .then(success => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(setTaskPayoutsSuccess(true))
    })
    .catch(error => {
      store.dispatch(setTaskPayoutsError(error.message))
    }),
})

export const setTaskPayoutsError = (error) => ({
  type: actions.SET_TASK_PAYOUTS_ERROR,
  payload: error,
})

export const setTaskPayoutsSuccess = (success) => ({
  type: actions.SET_TASK_PAYOUTS_SUCCESS,
  payload: success,
})

// setTaskRole

export const setTaskRole = (colonyClient, taskId, role, user) => ({
  type: actions.SET_TASK_ROLE,
  payload: tasksActions.setTaskRole(colonyClient, taskId, role, user)
    .then(success => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(setTaskRoleSuccess(true))
    })
    .catch(error => {
      store.dispatch(setTaskRoleError(error.message))
    }),
})

export const setTaskRoleError = (error) => ({
  type: actions.SET_TASK_ROLE_ERROR,
  payload: error,
})

export const setTaskRoleSuccess = (success) => ({
  type: actions.SET_TASK_ROLE_SUCCESS,
  payload: success,
})

// signTask

export const signTask = (colonyClient, taskId) => ({
  type: actions.SIGN_TASK,
  payload: tasksActions.signTask(colonyClient, taskId)
    .then(success => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(getMultisigOperations(colonyClient, taskId))
      store.dispatch(signTaskSuccess(true))
    })
    .catch(error => {
      store.dispatch(signTaskError(error.message))
    }),
})

export const signTaskError = (error) => ({
  type: actions.SIGN_TASK_ERROR,
  payload: error,
})

export const signTaskSuccess = (success) => ({
  type: actions.SIGN_TASK_SUCCESS,
  payload: success,
})

// submitRating

export const submitRating = (colonyClient, taskId, role, rating) => ({
  type: actions.SUBMIT_RATING,
  payload: tasksActions.submitRating(colonyClient, taskId, role, rating)
    .then(success => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(submitRatingSuccess(true))
    })
    .catch(error => {
      store.dispatch(submitRatingError(error.message))
    }),
})

export const submitRatingError = (error) => ({
  type: actions.SUBMIT_RATING_ERROR,
  payload: error,
})

export const submitRatingSuccess = (success) => ({
  type: actions.SUBMIT_RATING_SUCCESS,
  payload: success,
})

// submitWork

export const submitWork = (colonyClient, taskId, deliverable) => ({
  type: actions.SUBMIT_WORK,
  payload: tasksActions.submitWork(colonyClient, taskId, deliverable)
    .then(success => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(submitWorkSuccess(true))
    })
    .catch(error => {
      store.dispatch(submitWorkError(error.message))
    }),
})

export const submitWorkError = (error) => ({
  type: actions.SUBMIT_WORK_ERROR,
  payload: error,
})

export const submitWorkSuccess = (success) => ({
  type: actions.SUBMIT_WORK_SUCCESS,
  payload: success,
})

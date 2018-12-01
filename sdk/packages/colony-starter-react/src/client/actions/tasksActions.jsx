import { store } from '../index'
import * as actions from '../constants/actions'
import * as tasksActions from '../../helpers/actions/tasksActions'
import { getPots } from './fundingActions'

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
    .then(task => {
      store.dispatch(setStateTask(task))
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
      store.dispatch(getTask(taskId))
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
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(getPots(colonyClient))
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

// getTask

export const getTask = (colonyClient, task) => ({
  type: actions.GET_TASK,
  payload: tasksActions.getTaskExtended(colonyClient, task)
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
    .then(task => {
      store.dispatch(setStateTasks(task))
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
    .then(task => {
      store.dispatch(setStateTask(task))
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

// setStateTask

export const setStateTask = (task) => ({
  type: actions.SET_STATE_TASK,
  payload: task,
})

// setStateTasks

export const setStateTasks = (tasks) => ({
  type: actions.SET_STATE_TASKS,
  payload: tasks,
})

// signTask

export const signTask = (colonyClient, taskId) => ({
  type: actions.SIGN_TASK,
  payload: tasksActions.signTask(colonyClient, taskId)
    .then(task => {
      store.dispatch(setStateTask(task))
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
    .then(task => {
      store.dispatch(setStateTask(task))
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
    .then(task => {
      store.dispatch(setStateTask(task))
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

// updateTask

export const updateTask = (colonyClient, task) => ({
  type: actions.UPDATE_TASK,
  payload: tasksActions.updateTask(colonyClient, task)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(updateTaskSuccess(true))
    })
    .catch(error => {
      store.dispatch(updateTaskError(error.message))
    }),
})

export const updateTaskError = (error) => ({
  type: actions.UPDATE_TASK_ERROR,
  payload: error,
})

export const updateTaskSuccess = (success) => ({
  type: actions.UPDATE_TASK_SUCCESS,
  payload: success,
})

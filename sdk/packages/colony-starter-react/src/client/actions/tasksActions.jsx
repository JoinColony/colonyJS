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
      store.dispatch(cancelTaskSuccess())
    })
    .catch(error => {
      store.dispatch(cancelTaskError(error.message))
    }),
})

export const cancelTaskError = (message) => ({
  type: actions.CANCEL_TASK_ERROR,
  payload: message,
})

export const cancelTaskSuccess = (message) => ({
  type: actions.CANCEL_TASK_SUCCESS,
  payload: message,
})

// claimPayout

export const claimPayout = (colonyClient, taskId, role) => ({
  type: actions.CLAIM_PAYOUT,
  payload: tasksActions.claimPayout(colonyClient, taskId, role)
    .then(success => {
      store.dispatch(claimPayoutSuccess())
    })
    .catch(error => {
      store.dispatch(claimPayoutError(error.message))
    }),
})

export const claimPayoutError = (message) => ({
  type: actions.CLAIM_PAYOUT_ERROR,
  payload: message,
})

export const claimPayoutSuccess = (message) => ({
  type: actions.CLAIM_PAYOUT_SUCCESS,
  payload: message,
})

// createTask

export const createTask = (colonyClient, task) => ({
  type: actions.CREATE_TASK,
  payload: tasksActions.createTask(colonyClient, task)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(createTaskSuccess())
    })
    .catch(error => {
      store.dispatch(createTaskError(error.message))
    }),
})

export const createTaskError = (message) => ({
  type: actions.CREATE_TASK_ERROR,
  payload: message,
})

export const createTaskSuccess = (message) => ({
  type: actions.CREATE_TASK_SUCCESS,
  payload: message,
})

// finalizeTask

export const finalizeTask = (colonyClient, taskId) => ({
  type: actions.FINALIZE_TASK,
  payload: tasksActions.finalizeTask(colonyClient, taskId)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(finalizeTaskSuccess())
    })
    .catch(error => {
      store.dispatch(finalizeTaskError(error.message))
    }),
})

export const finalizeTaskError = (message) => ({
  type: actions.FINALIZE_TASK_ERROR,
  payload: message,
})

export const finalizeTaskSuccess = (message) => ({
  type: actions.FINALIZE_TASK_SUCCESS,
  payload: message,
})

// fundTask

export const fundTask = (colonyClient, taskId, amount) => ({
  type: actions.FUND_TASK,
  payload: tasksActions.fundTask(colonyClient, taskId, amount)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(getPots(colonyClient))
      store.dispatch(fundTaskSuccess())
    })
    .catch(error => {
      store.dispatch(fundTaskError(error.message))
    }),
})

export const fundTaskError = (message) => ({
  type: actions.FUND_TASK_ERROR,
  payload: message,
})

export const fundTaskSuccess = (message) => ({
  type: actions.FUND_TASK_SUCCESS,
  payload: message,
})

// getTask

export const getTask = (colonyClient, task) => ({
  type: actions.GET_TASK,
  payload: tasksActions.getTaskExtended(colonyClient, task)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(getTaskSuccess())
    })
    .catch(error => {
      store.dispatch(getTaskError(error.message))
    }),
})

export const getTaskError = (message) => ({
  type: actions.GET_TASK_ERROR,
  payload: message,
})

export const getTaskSuccess = (message) => ({
  type: actions.GET_TASK_SUCCESS,
  payload: message,
})

// getTasks

export const getTasks = (colonyClient) => ({
  type: actions.GET_TASKS,
  payload: tasksActions.getTasks(colonyClient)
    .then(task => {
      store.dispatch(setStateTasks(task))
      store.dispatch(getTasksSuccess())
    })
    .catch(error => {
      store.dispatch(getTasksError(error.message))
    }),
})

export const getTasksError = (message) => ({
  type: actions.GET_TASKS_ERROR,
  payload: message,
})

export const getTasksSuccess = (message) => ({
  type: actions.GET_TASKS_SUCCESS,
  payload: message,
})

// revealRating

export const revealRating = (colonyClient, taskId, role, rating) => ({
  type: actions.REVEAL_RATING,
  payload: tasksActions.revealRating(colonyClient, taskId, role, rating)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(revealRatingSuccess())
    })
    .catch(error => {
      store.dispatch(revealRatingError(error.message))
    }),
})

export const revealRatingError = (message) => ({
  type: actions.REVEAL_RATING_ERROR,
  payload: message,
})

export const revealRatingSuccess = (message) => ({
  type: actions.REVEAL_RATING_SUCCESS,
  payload: message,
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
      store.dispatch(signTaskSuccess())
    })
    .catch(error => {
      store.dispatch(signTaskError(error.message))
    }),
})

export const signTaskError = (message) => ({
  type: actions.SIGN_TASK_ERROR,
  payload: message,
})

export const signTaskSuccess = (message) => ({
  type: actions.SIGN_TASK_SUCCESS,
  payload: message,
})

// submitRating

export const submitRating = (colonyClient, taskId, role, rating) => ({
  type: actions.SUBMIT_RATING,
  payload: tasksActions.submitRating(colonyClient, taskId, role, rating)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(submitRatingSuccess())
    })
    .catch(error => {
      store.dispatch(submitRatingError(error.message))
    }),
})

export const submitRatingError = (message) => ({
  type: actions.SUBMIT_RATING_ERROR,
  payload: message,
})

export const submitRatingSuccess = (message) => ({
  type: actions.SUBMIT_RATING_SUCCESS,
  payload: message,
})

// submitWork

export const submitWork = (colonyClient, taskId, deliverable) => ({
  type: actions.SUBMIT_WORK,
  payload: tasksActions.submitWork(colonyClient, taskId, deliverable)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(submitWorkSuccess())
    })
    .catch(error => {
      store.dispatch(submitWorkError(error.message))
    }),
})

export const submitWorkError = (message) => ({
  type: actions.SUBMIT_WORK_ERROR,
  payload: message,
})

export const submitWorkSuccess = (message) => ({
  type: actions.SUBMIT_WORK_SUCCESS,
  payload: message,
})

// updateTask

export const updateTask = (colonyClient, task) => ({
  type: actions.UPDATE_TASK,
  payload: tasksActions.updateTask(colonyClient, task)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(updateTaskSuccess())
    })
    .catch(error => {
      store.dispatch(updateTaskError(error.message))
    }),
})

export const updateTaskError = (message) => ({
  type: actions.UPDATE_TASK_ERROR,
  payload: message,
})

export const updateTaskSuccess = (message) => ({
  type: actions.UPDATE_TASK_SUCCESS,
  payload: message,
})

import * as actions from '../constants/actions'

const initialState = {

  // cancelTask
  cancelTaskError: null,
  cancelTaskLoading: false,
  cancelTaskSuccess: false,

  // claimPayout
  claimPayoutError: null,
  claimPayoutLoading: false,
  claimPayoutSuccess: false,

  // createTask
  createTaskError: null,
  createTaskLoading: false,
  createTaskSuccess: false,

  // finalizeTask
  finalizeTaskError: null,
  finalizeTaskLoading: false,
  finalizeTaskSuccess: false,

  // fundTask
  fundTaskError: null,
  fundTaskLoading: false,
  fundTaskSuccess: false,

  // getTask
  getTaskError: null,
  getTaskLoading: false,
  getTaskSuccess: false,

  // getTasks
  getTasksError: null,
  getTasksLoading: false,
  getTasksSuccess: false,

  // revealRating
  revealRatingError: null,
  revealRatingLoading: false,
  revealRatingSuccess: false,

  // signTask
  signTaskError: null,
  signTaskLoading: false,
  signTaskSuccess: false,

  // submitRating
  submitRatingError: null,
  submitRatingLoading: false,
  submitRatingSuccess: false,

  // submitWork
  submitWorkError: null,
  submitWorkLoading: false,
  submitWorkSuccess: false,

  // updateTask
  updateTaskError: null,
  updateTaskLoading: false,
  updateTaskSuccess: false,

  // task
  task: null,

  // tasks
  tasks: null,

}

const tasksReducer = (state = initialState, action) => {

  switch (action.type) {

    // cancelTask

    case actions.CANCEL_TASK:
      return {
        ...state,
        cancelTaskError: null,
        cancelTaskLoading: true,
        cancelTaskSuccess: false,
      }

    case actions.CANCEL_TASK_ERROR:
      return {
        ...state,
        cancelTaskError: action.payload,
        cancelTaskLoading: false,
      }

    case actions.CANCEL_TASK_SUCCESS:
      return {
        ...state,
        cancelTaskLoading: false,
        cancelTaskSuccess: true,
      }

    // claimPayout

    case actions.CLAIM_PAYOUT:
      return {
        ...state,
        claimPayoutError: null,
        claimPayoutLoading: true,
        claimPayoutSuccess: false,
      }

    case actions.CLAIM_PAYOUT_ERROR:
      return {
        ...state,
        claimPayoutError: action.payload,
        claimPayoutLoading: false,
      }

    case actions.CLAIM_PAYOUT_SUCCESS:
      return {
        ...state,
        claimPayoutLoading: false,
        claimPayoutSuccess: true,
      }

    // createTask

    case actions.CREATE_TASK:
      return {
        ...state,
        createTaskError: null,
        createTaskLoading: true,
        createTaskSuccess: false,
      }

    case actions.CREATE_TASK_ERROR:
      return {
        ...state,
        createTaskError: action.payload,
        createTaskLoading: false,
      }

    case actions.CREATE_TASK_SUCCESS:
      return {
        ...state,
        createTaskLoading: false,
        createTaskSuccess: true,
      }

    // finalizeTask

    case actions.FINALIZE_TASK:
      return {
        ...state,
        finalizeTaskError: null,
        finalizeTaskLoading: true,
        finalizeTaskSuccess: false,
      }

    case actions.FINALIZE_TASK_ERROR:
      return {
        ...state,
        finalizeTaskError: action.payload,
        finalizeTaskLoading: false,
      }

    case actions.FINALIZE_TASK_SUCCESS:
      return {
        ...state,
        finalizeTaskLoading: false,
        finalizeTaskSuccess: true,
      }

    // fundTask

    case actions.FUND_TASK:
      return {
        ...state,
        fundTaskError: null,
        fundTaskLoading: true,
        fundTaskSuccess: false,
      }

    case actions.FUND_TASK_ERROR:
      return {
        ...state,
        fundTaskError: action.payload,
        fundTaskLoading: false,
      }

    case actions.FUND_TASK_SUCCESS:
      return {
        ...state,
        fundTaskLoading: false,
        fundTaskSuccess: true,
      }

    // getTask

    case actions.GET_TASK:
      return {
        ...state,
        getTaskError: null,
        getTaskLoading: true,
        getTaskSuccess: false,
      }

    case actions.GET_TASK_ERROR:
      return {
        ...state,
        getTaskError: action.payload,
        getTaskLoading: false,
      }

    case actions.GET_TASK_SUCCESS:
      return {
        ...state,
        getTaskLoading: false,
        getTaskSuccess: true,
      }

    // getTasks

    case actions.GET_TASKS:
      return {
        ...state,
        getTasksError: null,
        getTasksLoading: true,
        getTasksSuccess: false,
      }

    case actions.GET_TASKS_ERROR:
      return {
        ...state,
        getTasksError: action.payload,
        getTasksLoading: false,
      }

    case actions.GET_TASKS_SUCCESS:
      return {
        ...state,
        getTasksLoading: false,
        getTasksSuccess: true,
      }

    // revealRating

    case actions.REVEAL_RATING:
      return {
        ...state,
        revealRatingError: null,
        revealRatingLoading: true,
        revealRatingSuccess: false,
      }

    case actions.REVEAL_RATING_ERROR:
      return {
        ...state,
        revealRatingError: action.payload,
        revealRatingLoading: false,
      }

    case actions.REVEAL_RATING_SUCCESS:
      return {
        ...state,
        revealRatingLoading: false,
        revealRatingSuccess: true,
      }

    // setStateTask

    case actions.SET_STATE_TASK:
      if (action.payload === null) return { ...state, task: action.payload }
      let index = state.tasks.findIndex(task => task.id === action.payload.id)
      let tasks = state.tasks
      if (index >= 0) {
        tasks[index] = action.payload
        return {
          ...state,
          task: action.payload,
          tasks: [ ...tasks ]
        }
      } else {
        return {
          ...state,
          task: action.payload,
          tasks: [ ...tasks, action.payload ],
        }
      }

    // setStateTasks

    case actions.SET_STATE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }

    // signTask

    case actions.SIGN_TASK:
      return {
        ...state,
        signTaskError: null,
        signTaskLoading: true,
        signTaskSuccess: false,
      }

    case actions.SIGN_TASK_ERROR:
      return {
        ...state,
        signTaskError: action.payload,
        signTaskLoading: false,
      }

    case actions.SIGN_TASK_SUCCESS:
      return {
        ...state,
        signTaskLoading: false,
        signTaskSuccess: true,
      }

    // submitRating

    case actions.SUBMIT_RATING:
      return {
        ...state,
        submitRatingError: null,
        submitRatingLoading: true,
        submitRatingSuccess: false,
      }

    case actions.SUBMIT_RATING_ERROR:
      return {
        ...state,
        submitRatingError: action.payload,
        submitRatingLoading: false,
      }

    case actions.SUBMIT_RATING_SUCCESS:
      return {
        ...state,
        submitRatingLoading: false,
        submitRatingSuccess: true,
      }

    // submitWork

    case actions.SUBMIT_WORK:
      return {
        ...state,
        submitWorkError: null,
        submitWorkLoading: true,
        submitWorkSuccess: false,
      }

    case actions.SUBMIT_WORK_ERROR:
      return {
        ...state,
        submitWorkError: action.payload,
        submitWorkLoading: false,
      }

    case actions.SUBMIT_WORK_SUCCESS:
      return {
        ...state,
        submitWorkLoading: false,
        submitWorkSuccess: true,
      }

    // updateTask

    case actions.UPDATE_TASK:
      return {
        ...state,
        updateTaskError: null,
        updateTaskLoading: true,
        updateTaskSuccess: false,
      }

    case actions.UPDATE_TASK_ERROR:
      return {
        ...state,
        updateTaskError: action.payload,
        updateTaskLoading: false,
      }

    case actions.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        updateTaskLoading: false,
        updateTaskSuccess: true,
      }

    // default

    default:
      return state

  }

}

export default tasksReducer

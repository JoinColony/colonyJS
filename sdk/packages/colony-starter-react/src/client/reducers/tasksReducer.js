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

  // setTaskDetails
  setTaskDetailsError: null,
  setTaskDetailsLoading: false,
  setTaskDetailsSuccess: false,

  // setTaskPayout
  setTaskPayoutError: null,
  setTaskPayoutLoading: false,
  setTaskPayoutSuccess: false,

  // setTaskRole
  setTaskRoleError: null,
  setTaskRoleLoading: false,
  setTaskRoleSuccess: false,

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

  // task
  task: null,

  // taskCount
  taskCount: null,

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
        cancelTaskSuccess: action.payload,
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
        claimPayoutSuccess: action.payload,
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
        createTaskSuccess: action.payload,
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
        finalizeTaskSuccess: action.payload,
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
        fundTaskSuccess: action.payload,
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
        getTaskSuccess: action.payload,
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
        getTasksSuccess: action.payload,
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
        revealRatingSuccess: action.payload,
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

    case actions.SET_STATE_TASK_COUNT:
      return {
        ...state,
        taskCount: action.payload,
      }

    // setStateTasks

    case actions.SET_STATE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }

    // setTaskDetails

    case actions.SET_TASK_DETAILS:
      return {
        ...state,
        setTaskDetailsError: null,
        setTaskDetailsLoading: true,
        setTaskDetailsSuccess: false,
      }

    case actions.SET_TASK_DETAILS_ERROR:
      return {
        ...state,
        setTaskDetailsError: action.payload,
        setTaskDetailsLoading: false,
      }

    case actions.SET_TASK_DETAILS_SUCCESS:
      return {
        ...state,
        setTaskDetailsLoading: false,
        setTaskDetailsSuccess: action.payload,
      }

    // setTaskPayout

    case actions.SET_TASK_PAYOUT:
      return {
        ...state,
        setTaskPayoutError: null,
        setTaskPayoutLoading: true,
        setTaskPayoutSuccess: false,
      }

    case actions.SET_TASK_PAYOUT_ERROR:
      return {
        ...state,
        setTaskPayoutError: action.payload,
        setTaskPayoutLoading: false,
      }

    case actions.SET_TASK_PAYOUT_SUCCESS:
      return {
        ...state,
        setTaskPayoutLoading: false,
        setTaskPayoutSuccess: action.payload,
      }

    // setTaskRole

    case actions.SET_TASK_ROLE:
      return {
        ...state,
        setTaskRoleError: null,
        setTaskRoleLoading: true,
        setTaskRoleSuccess: false,
      }

    case actions.SET_TASK_ROLE_ERROR:
      return {
        ...state,
        setTaskRoleError: action.payload,
        setTaskRoleLoading: false,
      }

    case actions.SET_TASK_ROLE_SUCCESS:
      return {
        ...state,
        setTaskRoleLoading: false,
        setTaskRoleSuccess: action.payload,
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
        signTaskSuccess: action.payload,
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
        submitRatingSuccess: action.payload,
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
        submitWorkSuccess: action.payload,
      }

    // default

    default:
      return state

  }

}

export default tasksReducer

import { store } from '../index'
import * as actions from '../constants/actions'
import * as skillsActions from '../../helpers/actions/skillsActions'

// getSkills

export const getSkills = (networkClient) => ({
  type: actions.GET_SKILLS,
  payload: skillsActions.getSkills(networkClient)
    .then(skills => {
      store.dispatch(setStateSkills(skills))
      store.dispatch(getSkillsSuccess(true))
    })
    .catch(error => {
      store.dispatch(getSkillsError(error.message))
    }),
})

export const getSkillsError = (error) => ({
  type: actions.GET_SKILLS_ERROR,
  payload: error,
})

export const getSkillsSuccess = (success) => ({
  type: actions.GET_SKILLS_SUCCESS,
  payload: success,
})

// setStateSkills

export const setStateSkills = (skills) => ({
  type: actions.SET_STATE_SKILLS,
  payload: skills,
})

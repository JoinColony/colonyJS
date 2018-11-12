import { store } from '../index'
import * as actions from '../constants/actions'
import * as skillsActions from '../../helpers/actions/skillsActions'

// getSkills

export const getSkills = (networkClient) => ({
  type: actions.GET_SKILLS,
  payload: skillsActions.getSkills(networkClient)
    .then(skills => {
      store.dispatch(setStateSkills(skills))
      store.dispatch(getSkillsSuccess())
    })
    .catch(error => {
      store.dispatch(getSkillsError(error.message))
    }),
})

export const getSkillsError = (message) => ({
  type: actions.GET_SKILLS_ERROR,
  payload: message,
})

export const getSkillsSuccess = (message) => ({
  type: actions.GET_SKILLS_SUCCESS,
  payload: message,
})

// setStateSkills

export const setStateSkills = (skills) => ({
  type: actions.SET_STATE_SKILLS,
  payload: skills,
})

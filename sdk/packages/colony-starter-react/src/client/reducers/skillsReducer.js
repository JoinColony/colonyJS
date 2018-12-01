import * as actions from '../constants/actions'

const initialState = {

  // getSkills
  getSkillsError: null,
  getSkillsLoading: false,
  getSkillsSuccess: false,

  // skills
  skills: null,

}

const skillsReducer = (state = initialState, action) => {

  switch (action.type) {

    // getSkills

    case actions.GET_SKILLS:
      return {
        ...state,
        getSkillsError: null,
        getSkillsLoading: true,
        getSkillsSuccess: false,
      }

    case actions.GET_SKILLS_ERROR:
      return {
        ...state,
        getSkillsError: action.payload,
        getSkillsLoading: false,
      }

    case actions.GET_SKILLS_SUCCESS:
      return {
        ...state,
        getSkillsLoading: false,
        getSkillsSuccess: action.payload,
      }

    // setStateSkills

    case actions.SET_STATE_SKILLS:
      return {
        ...state,
        skills: action.payload,
      }

    // default

    default:
      return state

  }

}

export default skillsReducer

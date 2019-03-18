import { getNetworkClient } from '@colony/colony-js-client'
import { open } from '@colony/purser-metamask'
import { store } from '../index'
import * as actions from '../constants/actions'

// connectNetwork

export const connectNetwork = (network) => ({
  type: actions.CONNECT_NETWORK,
  payload: (async () => open())()
  .then(wallet => getNetworkClient(network, wallet))
  .then(networkClient => {
    store.dispatch(setStateNetworkClient(networkClient))
    store.dispatch(connectNetworkSuccess(true))
  })
  .catch(error => {
    store.dispatch(connectNetworkError(error.message))
  }),
})

export const connectNetworkError = (error) => ({
  type: actions.CONNECT_NETWORK_ERROR,
  payload: error,
})

export const connectNetworkSuccess = (success) => ({
  type: actions.CONNECT_NETWORK_SUCCESS,
  payload: success,
})

// getSkills

export const getSkills = (networkClient) => ({
  type: actions.GET_SKILLS,
  payload: (async () => {

    // Get skill count
    const { count: skillCount } = await networkClient.getSkillCount.call()

    // Set skill id
    let skillId = 1

    // Set skills
    let skills = []

    // Loop through skills
    while (skillId <= skillCount) {

      // Get parent skill id and prevent throwing error with catch
      const { parentSkillId } = await networkClient.getParentSkillId.call({
        skillId,
        parentSkillIndex: 0,
      })
      .catch(() => false)

      // Check global skill
      if (parentSkillId && parentSkillId === 1) {

        // Get skill
        let skill = await networkClient.getSkill.call({ skillId })

        // Append skill id
        skill.id = skillId

        // Add skill to skills
        skills.push(skill)

      }

      // Increment id
      skillId++

    }

    // Return skills
    return skills

  })()
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

// setStateNetworkClient

export const setStateNetworkClient = (networkClient) => ({
  type: actions.SET_STATE_NETWORK_CLIENT,
  payload: networkClient,
})

// setStateSkills

export const setStateSkills = (skills) => ({
  type: actions.SET_STATE_SKILLS,
  payload: skills,
})

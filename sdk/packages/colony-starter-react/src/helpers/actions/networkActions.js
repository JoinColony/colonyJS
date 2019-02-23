// Import the prerequisites
import { getNetworkClient } from '@colony/colony-js-client'
import { open } from '@colony/purser-metamask'

// An example method for connecting to the network
export const connectNetwork = async (network) => {

  // Create a wallet
  const wallet = await open()

  // Get the network client
  const networkClient = await getNetworkClient(network, wallet)

  // Return networkClient
  return networkClient

}

// getSkill

export const getSkill = async (networkClient, skillId) => {

  // get skill
  const skill = await networkClient.getSkill.call({ skillId })

  // return skill
  return skill

}

// getSkills

export const getSkills = async (networkClient) => {

  // get skill count
  const { count: skillCount } = await networkClient.getSkillCount.call()

  // set skill id
  let skillId = 1

  // set skills
  let skills = []

  // loop through skills
  while (skillId <= skillCount) {

    // get parent skill id and prevent throwing error with catch
    const { parentSkillId } = await networkClient.getParentSkillId.call({
      skillId,
      parentSkillIndex: 0,
    }).catch(() => false)

    // check if global skill
    if (parentSkillId && parentSkillId === 1) {

      // get skill
      let skill = await getSkill(networkClient, skillId)

      // append skill id
      skill.id = skillId

      // add skill to skills
      skills.push(skill)

    }

    // increment id
    skillId++

  }

  // return skills
  return skills

}

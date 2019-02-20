// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client')
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');
const { open } = require('@colony/purser-software')

// An example method for connecting to the local network
const connectNetwork = async (accountIndex) => {

  // Initialize TrufflepigLoader
  const loader = new TrufflepigLoader()

  // Get the private key from the given Ganache test account
  const { privateKey } = await loader.getAccount(accountIndex || 0)

  // Create a wallet with the private key (so we have a balance we can use)
  const wallet = await open({ privateKey })

  // Connect to ColonyNetwork with the adapter!
  const networkClient = await getNetworkClient('local', wallet)

  // Check out the logs to see the address of the contract signer
  console.log('Account Address: ' + networkClient.contract.signer.address)

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ' + networkClient.contract.address)

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

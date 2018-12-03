// import prerequisites
const { providers, Wallet } = require('ethers')
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers')
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http')
const { default: ColonyNetworkClient } = require('@colony/colony-js-client')

// instantiate TrufflepigLoader
const loader = new TrufflepigLoader()

// instantiate JsonRpcProvider
const provider = new providers.JsonRpcProvider('http://localhost:8545/')

// connectNetwork

export const connectNetwork = async (accountIndex) => {

  // get private key
  const { privateKey } = await loader.getAccount(accountIndex)

  // instantiate Wallet
  const wallet = new Wallet(privateKey, provider)

  // instantiate EthersAdapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  })

  // instantiate ColonyNetworkClient
  const networkClient = new ColonyNetworkClient({ adapter })

  // initialize network client
  await networkClient.init()

  // return network client
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

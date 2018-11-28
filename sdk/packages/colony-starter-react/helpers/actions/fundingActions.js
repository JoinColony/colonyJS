// import big number
import BN from 'bn.js'

// import get domain and domains from domain actions
import { getDomain } from './domainsActions'

// import get task from task actions
import { getTask } from './tasksActions'

// claimFunds

export const claimFunds = async (colonyClient) => {

  // set token
  const token = colonyClient.token._contract.address

  // claim funds
  await colonyClient.claimColonyFunds.send({ token })

  // get updated pots
  const pots = await getPots(colonyClient)

  // return updated pots
  return pots

}

// fundDomain

export const fundDomain = async (colonyClient, domainId, amount) => {

  // set token
  const token = colonyClient.token._contract.address

  // get domain
  const { potId } = await colonyClient.getDomain.call({ domainId })

  // move funds between pots
  await colonyClient.moveFundsBetweenPots.send({
    fromPot: 1,
    toPot: potId,
    amount: new BN(amount),
    token,
  })

  // get updated pots
  const pots = await getPots(colonyClient)

  // return updated pots
  return pots

}

// getClaimableFunds

export const getClaimableFunds = async (colonyClient) => {

  // set token
  const token = colonyClient.token._contract.address

  // get non rewards
  const { total: nonRewards } = await colonyClient.getNonRewardPotsTotal.call({ token })

  // get token supply
  const { amount: tokenSupply} = await colonyClient.token.getTotalSupply.call()

  // calculate claimable funds
  const claimableFunds = tokenSupply.sub(nonRewards).toNumber()

  // return claimed funds
  return claimableFunds

}

// getPotBalance

export const getPotBalance = async (colonyClient, potId) => {

  // get pot balance
  const potBalance = await colonyClient.getPotBalance.call({
    potId,
    token: colonyClient.token._contract.address,
  })

  // return pot balance
  return potBalance.balance.toNumber()

}

// getPots

export const getPots = async (colonyClient) => {

  // set pots
  let pots = []

  // get domain count
  const { count: domainCount} = await colonyClient.getDomainCount.call()

  // set domain id
  let domainId = 1

  // set domains
  let domains = []

  // get domains
  while (domainId <= domainCount) {

    // set pot
    let pot = {}

    // get domain
    const { potId } = await getDomain(colonyClient, domainId)

    // get pot balance for domain
    const potBalance = await getPotBalance(colonyClient, potId)

    // set pot properties
    pot.id = potId
    pot.type = 'domain'
    pot.balance = potBalance

    // add pot to pots
    pots.push(pot)

    // increment domain id
    domainId++

  }

  // get task count
  const { count: taskCount } = await colonyClient.getTaskCount.call()

  // set task id
  let taskId = 1

  // set tasks
  let tasks = []

  // get tasks
  while (taskId <= taskCount) {

    // set pot
    let pot = {}

    // get pot id and title of task
    const { potId, specification: { title } } = await getTask(colonyClient, taskId)

    // get pot balance for task
    const potBalance = await getPotBalance(colonyClient, potId)

    // set properties
    pot.id = potId
    pot.type = 'task'
    pot.balance = potBalance

    // add pot to pots
    pots.push(pot)

    // increment task id
    taskId++

  }

  // return pots
  return pots

}

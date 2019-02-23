// import big number
import BN from 'bn.js'

// import get domain and domains from domain actions
import { getDomain } from './domainActions'

// import get task from task actions
import { getTask } from './taskActions'

// claimFunds

export const claimFunds = async (colonyClient) => {

  // set token
  const token = colonyClient.tokenClient.contract.address

  // claim funds
  const tx = await colonyClient.claimColonyFunds.send({ token })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // get updated pots
  const pots = await getPots(colonyClient)

  // return updated pots
  return pots

}

// moveFunds

export const moveFunds = async (colonyClient, fromPot, toPot, amount) => {

  // set token
  const token = colonyClient.tokenClient.contract.address

  // move funds between pots
  const tx = await colonyClient.moveFundsBetweenPots.send({
    fromPot,
    toPot,
    amount: new BN(amount),
    token,
  })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // get updated pots
  const pots = await getPots(colonyClient)

  // return updated pots
  return pots

}

// getClaimableFunds

export const getClaimableFunds = async (colonyClient) => {

  // get colony balance
  const { amount: balance } = await colonyClient.tokenClient.getBalanceOf.call({
    sourceAddress: colonyClient.contract.address,
  })

  const { total: nonRewards } = await colonyClient.getNonRewardPotsTotal.call({
    token: colonyClient.tokenClient.contract.address,
  })

  // calculate claimable funds
  const claimableFunds = balance.sub(nonRewards).toNumber()

  // return claimed funds
  return claimableFunds

}

// getFundingPotBalance

export const getFundingPotBalance = async (colonyClient, potId) => {

  // get pot balance
  const potBalance = await colonyClient.getFundingPotBalance.call({
    potId,
    token: colonyClient.tokenClient.contract.address,
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
    const potBalance = await getFundingPotBalance(colonyClient, potId)

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
    const potBalance = await getFundingPotBalance(colonyClient, potId)

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

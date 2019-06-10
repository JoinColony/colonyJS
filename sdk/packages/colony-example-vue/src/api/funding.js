import { BN } from 'web3-utils'
import { getColony } from '@/lib/colony-store'
import sendProxy from '@/lib/send-proxy'

export function moveFunds({
  colony = getColony(), fromPot, toPot, amount,
}) {
  const token = colony.tokenClient.contract.address
  const proxy = sendProxy(colony)
  return proxy.moveFundsBetweenPots({
    fromPot: Number(fromPot),
    toPot: Number(toPot),
    amount: new BN(amount),
    token,
  })
}

export async function getPots({ colony = getColony() }) {
  const token = colony.tokenClient.contract.address
  const type = 'domain'
  const { count: domainCount } = await colony.getDomainCount.call()
  const domainIds = [...Array(domainCount).keys()].map(k => k + 1)
  const domainPots = await Promise.all(domainIds.map(domainId => (async () => {
    const { potId } = await colony.getDomain.call({ domainId })
    const { balance } = await colony.getFundingPotBalance.call({ potId, token })
    return { id: potId, type, balance: balance.toNumber() }
  })()))
  const { count: taskCount } = await colony.getTaskCount.call()
  const taskIds = [...Array(taskCount).keys()].map(k => k + 1)
  const taskPots = await Promise.all(taskIds.map(async taskId => (async () => {
    const { potId } = await colony.getTask.call({ taskId })
    const { balance } = await colony.getFundingPotBalance.call({ potId, token })
    return { id: potId, type, balance: balance.toNumber() }
  })()))
  return [...domainPots, ...taskPots]
}

export function claimFunds({ colony = getColony() }) {
  const token = colony.tokenClient.contract.address
  return sendProxy(colony).claimColonyFunds({ token })
}

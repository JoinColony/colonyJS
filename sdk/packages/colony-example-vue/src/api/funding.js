import { BN } from 'web3-utils'

import { send } from '@/helpers/proxies'
import { getColonyClient } from '@/stores/colonyClient'

export function claimFunds({ colonyClient = getColonyClient() }) {
  const token = colonyClient.tokenClient.contract.address
  return send(colonyClient).claimColonyFunds({ token })
}

export async function getClaimableFunds({ colonyClient = getColonyClient() }) {
  const {
    amount: balance,
  } = await colonyClient.tokenClient.getBalanceOf.call({
    sourceAddress: colonyClient.contract.address,
  })
  const {
    total: nonRewards,
  } = await colonyClient.getNonRewardPotsTotal.call({
    token: colonyClient.tokenClient.contract.address,
  })
  const claimableFunds = balance.sub(nonRewards).toNumber()
  return claimableFunds
}

export async function getPots({ colonyClient = getColonyClient() }) {
  const token = colonyClient.tokenClient.contract.address
  const type = 'domain'
  const { count: domainCount } = await colonyClient.getDomainCount.call()
  const domainIds = [...Array(domainCount).keys()].map(k => k + 1)
  const domainPots = await Promise.all(
    domainIds.map(
      domainId => (async () => {
        const { potId } = await colonyClient.getDomain.call({ domainId })
        const { balance } = await colonyClient.getFundingPotBalance.call({
          potId,
          token,
        })
        return { id: potId, type, balance: balance.toNumber() }
      })()
    )
  )
  const { count: taskCount } = await colonyClient.getTaskCount.call()
  const taskIds = [...Array(taskCount).keys()].map(k => k + 1)
  const taskPots = await Promise.all(
    taskIds.map(
      taskId => (async () => {
        const { potId } = await colonyClient.getTask.call({ taskId })
        const { balance } = await colonyClient.getFundingPotBalance.call({
          potId,
          token,
        })
        return { id: potId, type, balance: balance.toNumber() }
      })()
    )
  )
  return [...domainPots, ...taskPots]
}

export function moveFunds({
  colonyClient = getColonyClient(),
  fromPot,
  toPot,
  amount,
}) {
  const token = colonyClient.tokenClient.contract.address
  const proxy = send(colonyClient)
  return proxy.moveFundsBetweenPots({
    fromPot: Number(fromPot),
    toPot: Number(toPot),
    amount: new BN(amount),
    token,
  })
}

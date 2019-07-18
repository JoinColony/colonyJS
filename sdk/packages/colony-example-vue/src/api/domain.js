import { BN } from 'web3-utils'

import { send } from '@/helpers/proxies'
import { getColonyClient } from '@/stores/colonyClient'

export function addDomain({ colonyClient = getColonyClient() }) {
  const parentDomainId = 1
  return send(colonyClient).addDomain({ parentDomainId })
}

export async function getDomain({
  colonyClient = getColonyClient(),
  domainId,
}) {
  const domain = await colonyClient.getDomain.call({ domainId })
  domain.id = domainId
  return domain
}

export async function getDomains({ colonyClient = getColonyClient() }) {
  const { count: domainCount } = await colonyClient.getDomainCount.call()
  const domainIds = [...Array(domainCount).keys()].map(k => k + 1)
  const domains = await Promise.all(
    domainIds.map(
      domainId => getDomain({ domainId })
    )
  )
  return domains
}

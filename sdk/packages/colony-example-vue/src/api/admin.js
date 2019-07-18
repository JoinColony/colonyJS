import { send } from '@/helpers/proxies'
import { getColonyClient } from '@/stores/colonyClient'

export function addAdmin({
  colonyClient = getColonyClient(),
  address,
}) {
  return send(colonyClient).setAdministrationRole({
    address,
    domainId: 1,
    setTo: true,
  })
}

export async function checkAdmin({
  colonyClient = getColonyClient(),
  address,
}) {
  const { hasRole } = await colonyClient.hasColonyRole.call({
    address,
    domainId: 1,
    role: 'ADMINISTRATION',
  })
  return hasRole
}

export function removeAdmin({
  colonyClient = getColonyClient(),
  address,
}) {
  return send(colonyClient).setAdministrationRole({
    address,
    domainId: 1,
    setTo: false,
  })
}

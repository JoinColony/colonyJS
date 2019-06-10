import sendProxy from '@/lib/send-proxy'
import { getColony } from '@/lib/colony-store'

export async function checkAdmin({ colony = getColony(), address }) {
  const { hasRole: root } = await colony.hasColonyRole.call({
    address,
    domainId: 1,
    role: 'ROOT',
  })

  // Check admin
  const { hasRole: admin } = await colony.hasColonyRole.call({
    address,
    domainId: 1,
    role: 'ADMINISTRATION',
  })

  // Return root or admin
  return (root || admin)
}

export function addAdmin({ colony = getColony(), address }) {
  return sendProxy(colony).setAdministrationRole({
    address,
    domainId: 1,
    setTo: true,
  })
}

export function removeAdmin({ colony = getColony(), address }) {
  return sendProxy(colony).setAdministrationRole({
    address,
    domainId: 1,
    setTo: false,
  })
}

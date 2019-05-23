import { getColony, getColonyProxy } from '@/lib/colony-store'

export async function checkAdmin({ colony = getColony(), address }) {
  const { hasRole: owner } = await colony.hasUserRole.call({
    user: address,
    role: 'FOUNDER',
  })
  const { hasRole: admin } = await colony.hasUserRole.call({
    user: address,
    role: 'ADMIN',
  })
  return (owner || admin)
}

export function addAdmin({ colony = getColonyProxy(), address }) {
  return colony.setAdminRole({
    user: address,
  })
}

export function removeAdmin({ colony = getColonyProxy(), address }) {
  return colony.removeAdminRole({
    user: address,
  })
}

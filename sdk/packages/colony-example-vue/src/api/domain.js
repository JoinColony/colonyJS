import { getColonyProxy } from '@/lib/colony-store'

export function addDomain({ colony = getColonyProxy() }) {
  const parentDomainId = 1
  return colony.addDomain({ parentDomainId })
}

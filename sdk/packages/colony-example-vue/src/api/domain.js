import { getColony } from '@/lib/colony-store'
import colonyProxy from '@/lib/colony-proxy'

export function addDomain({ colony = getColony() }) {
  const parentDomainId = 1
  return colonyProxy(colony).addDomain({ parentDomainId })
}

export const asd = 'qwe'

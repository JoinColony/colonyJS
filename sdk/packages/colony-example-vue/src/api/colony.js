import { getNetwork } from '@/lib/network-store'
import networkProxy from '@/lib/network-proxy'

export async function createColony({ network = getNetwork(), tokenAddress }) {
  const result = await networkProxy(network).createColony({ tokenAddress })
  const {
    eventData: {
      colonyAddress: address,
      colonyId: id,
    },
  } = result
  return { address, id }
}

export function getColonyClient({ network = getNetwork(), colonyAddress }) {
  return network.getColonyClientByAddress(colonyAddress)
}

import { getNetworkProxy, getNetwork } from '@/lib/network-store'

export async function createColony({ network = getNetworkProxy(), tokenAddress }) {
  const result = await network.createColony({ tokenAddress })
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

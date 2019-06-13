import { getNetwork } from '@/helpers/network-store'
import sendProxy from '@/helpers/send-proxy'

export async function createColony({ network = getNetwork(), tokenAddress }) {
  const result = await sendProxy(network).createColony({ tokenAddress })
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

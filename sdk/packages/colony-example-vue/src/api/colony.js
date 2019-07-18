import { send } from '@/helpers/proxies'
import { getNetworkClient } from '@/stores/networkClient'

export async function createColony({
  networkClient = getNetworkClient(),
  tokenAddress,
}) {
  const result = await send(networkClient).createColony({ tokenAddress })
  const {
    eventData: {
      colonyAddress: address,
      colonyId: id,
    },
  } = result
  return { address, id }
}

export function getColonyClient({
  networkClient = getNetworkClient(),
  colonyAddress,
}) {
  return networkClient.getColonyClientByAddress(colonyAddress)
}

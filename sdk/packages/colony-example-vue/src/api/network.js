import { getNetworkClient } from '@colony/colony-js-client'
import { open } from '@/lib/purser'

export async function connect(network = 'local') {
  const wallet = await open()
  return getNetworkClient(network, wallet)
}

export const asd = 'asd'

import { getNetworkClient } from '@colony/colony-js-client'
import { open } from '@/helpers/purser'

export async function connect(network = 'local') {
  const wallet = await open()
  return getNetworkClient(network, wallet)
}

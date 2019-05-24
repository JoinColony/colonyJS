import { BN } from 'web3-utils'
import { getNetwork } from '@/lib/network-store'
import networkProxy from '@/lib/network-proxy'
import { getColony } from '@/lib/colony-store'
import colonyProxy from '@/lib/colony-proxy'

export async function createToken({ network = getNetwork(), name, symbol = 'TKN' }) {
  const decimals = 18
  const result = await networkProxy(network).createToken({ name, symbol, decimals })
  const { meta: { receipt: { contractAddress: tokenAddress } } } = result
  return tokenAddress
}

export function mintTokens({ colony = getColony(), amount }) {
  return colonyProxy(colony).mintTokens({ amount: new BN(amount) })
}

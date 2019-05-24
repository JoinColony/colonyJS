import { BN } from 'web3-utils'
import { getNetworkProxy } from '@/lib/network-store'
import { getColonyProxy } from '@/lib/colony-store'

export async function createToken({ network = getNetworkProxy(), name, symbol = 'TKN' }) {
  const decimals = 18
  const result = await network.createToken({ name, symbol, decimals })
  const { meta: { receipt: { contractAddress: tokenAddress } } } = result
  return tokenAddress
}

export function mintTokens({ colony = getColonyProxy(), amount }) {
  return colony.mintTokens({ amount: new BN(amount) })
}

import { getNetworkProxy } from '@/lib/network-store'

export async function createToken({ network = getNetworkProxy(), name, symbol = 'TKN' }) {
  const decimals = 18
  const result = await network.createToken({ name, symbol, decimals })
  const { meta: { receipt: { contractAddress: tokenAddress } } } = result
  return tokenAddress
}

export const asd = 'qwe'

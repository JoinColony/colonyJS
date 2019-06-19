import { BN } from 'web3-utils'
import { getNetwork } from '@/helpers/network-store'
import { getColony } from '@/helpers/colony-store'
import sendProxy from '@/helpers/send-proxy'

export async function createToken({ network = getNetwork(), name, symbol = 'TKN' }) {
  const decimals = 18
  const result = await sendProxy(network).createToken({ name, symbol, decimals })
  const { meta: { receipt: { contractAddress: tokenAddress } } } = result
  return tokenAddress
}

export function mintTokens({ colony = getColony(), amount }) {
  return sendProxy(colony).mintTokens({ amount: new BN(amount) })
}

export async function setTokenOwner({ colony = getColony() }) {
  sendProxy(colony.tokenClient).setOwner({
    owner: colony.contract.address,
  })
}

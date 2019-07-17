import { BN } from 'web3-utils'

import { send } from '@/helpers/proxies'
import { getColonyClient } from '@/stores/colonyClient'
import { getNetworkClient } from '@/stores/networkClient'

export async function createToken({
  networkClient = getNetworkClient(),
  name,
  symbol,
  decimals = 18,
}) {
  const result = await send(networkClient).createToken({
    name,
    symbol,
    decimals,
  })
  const { meta: { receipt: { contractAddress: tokenAddress } } } = result
  return tokenAddress
}

export function mintTokens({
  colonyClient = getColonyClient(),
  amount,
}) {
  return send(colonyClient).mintTokens({ amount: new BN(amount) })
}

export async function setTokenOwner({ colonyClient = getColonyClient() }) {
  send(colonyClient.tokenClient).setOwner({
    owner: colonyClient.contract.address,
  })
}

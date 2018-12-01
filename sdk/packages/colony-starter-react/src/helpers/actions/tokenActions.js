// import big number
import BN from 'bn.js'

// import web3 utilities
import { utils } from 'web3'

// createToken

export const createToken = async (networkClient, name, symbol) => {

  // create token
  const {
    meta: { receipt: { contractAddress: tokenAddress } }
  } = await networkClient.createToken.send({
    name: utils.sha3(name),
    symbol: utils.sha3(symbol),
  })

  // return token address
  return tokenAddress

}

// getToken

export const getToken = async (colonyClient) => {

  // set token address
  const address = colonyClient.token.contract.address

  // TODO: Add the following back in once colonyJS#306 is resolved
  // get token info
  // const info = await colonyClient.token.getTokenInfo.call()

  // get total supply
  const { amount } = await colonyClient.token.getTotalSupply.call()

  // set supply
  const supply = amount.toNumber()

  // return token
  return {
    address,
    supply,
    // TODO: Add the following back in once colonyJS#306 is resolved
    // ...info,
  }

}

// mintTokens

export const mintTokens = async (colonyClient, amount) => {

  // mint tokens
  await colonyClient.mintTokens.send({ amount: new BN(amount) })

  // get token
  const token = await getToken(colonyClient)

  // return token
  return token

}

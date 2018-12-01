// import big number
import BN from 'bn.js'

// import web3 utilities
import { utils } from 'web3'

// createToken

export const createToken = async (networkClient, name, symbol) => {

  // create token
  const tx = await networkClient.createToken.send({
    name: utils.sha3(name),
    symbol: utils.sha3(symbol),
  })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return token address
  return tx.meta.receipt.contractAddress

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
  const tx = await colonyClient.mintTokens.send({ amount: new BN(amount) })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // get token
  const token = await getToken(colonyClient)

  // return token
  return token

}

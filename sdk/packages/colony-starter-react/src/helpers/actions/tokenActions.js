// import big number
import BN from 'bn.js'

// createToken

export const createToken = async (networkClient, name, symbol) => {

  // create token
  const tx = await networkClient.createToken.send({
    name,
    symbol,
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
  const address = colonyClient.tokenClient.contract.address

  const info = await colonyClient.tokenClient.getTokenInfo.call()

  // get total supply
  const { amount } = await colonyClient.tokenClient.getTotalSupply.call()

  // set supply
  const supply = amount.toNumber()

  // return token
  return {
    address,
    supply,
    ...info,
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

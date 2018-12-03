// import setTokenOwner
import { setTokenOwner } from './tokenActions'

// createColony

export const createColony = async (networkClient, tokenAddress) => {

  // create colony
  const tx = await networkClient.createColony.send({ tokenAddress })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // get colony client
  const colonyClient = await getColonyClient(networkClient, tx.eventData.colonyAddress)

  // set colony as token owner
  await setTokenOwner(colonyClient, colonyClient.contract.address)

  // return colony client
  return colonyClient

}

// getColonyClient

export const getColonyClient = async (networkClient, colonyAddress) => {

  // get colony client
  const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress)

  // return colony client
  return colonyClient

}

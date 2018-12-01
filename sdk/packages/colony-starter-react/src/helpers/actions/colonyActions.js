// createColony

export const createColony = async (networkClient, tokenAddress) => {

  // create colony
  const tx1 = await networkClient.createColony.send({ tokenAddress })

  // check unsuccessful
  if (!tx1.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx1.meta.transaction.hash)

  }

  // get colony client
  const colonyClient = await getColonyClient(networkClient, tx1.eventData.colonyAddress)

  // set colony contract as token owner
  const tx2 = await colonyClient.token.setOwner.send({
    owner: colonyClient.contract.address,
  })

  // check unsuccessful
  if (!tx2.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx2.meta.transaction.hash)

  }

  // set current user as user role owner
  const tx3 = await colonyClient.authority.setUserRole.send({
    user: colonyClient.adapter.wallet.address,
    role: 'OWNER',
  })

  // check unsuccessful
  if (!tx3.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx3.meta.transaction.hash)

  }

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

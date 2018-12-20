// addAdmin

export const addAdmin = async (colonyClient, userAddress) => {

  // add user role admin
  const tx = await colonyClient.setAdminRole.send({
    user: userAddress,
  })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return true
  return true

}

// checkAdmin

export const checkAdmin = async (colonyClient, userAddress) => {

  // check user role owner
  const { hasRole: isOwner } = await colonyClient.hasUserRole.call({
    user: userAddress,
    role: 'FOUNDER',
  })

  // check user role admin
  const { hasRole: isAdmin } = await colonyClient.hasUserRole.call({
    user: userAddress,
    role: 'ADMIN',
  })

  // return condition
  return (isOwner || isAdmin)

}

// removeAdmin

export const removeAdmin = async (colonyClient, userAddress) => {

  // remove user role admin
  const tx = await colonyClient.removeAdminRole.send({
    user: userAddress,
  })

  // check unsuccessful
  if (!tx.successful) {

    // throw error
    throw Error ('Transaction Failed: ' + tx.meta.transaction.hash)

  }

  // return true
  return true

}

// addAdmin

export const addAdmin = async (colonyClient, userAddress) => {

  // add user role admin
  await colonyClient.setAdminRole.send({
    user: userAddress,
  })

  // return true
  return true

}

// checkAdmin

export const checkAdmin = async (colonyClient, userAddress) => {

  // check user role admin
  const { hasRole } = await colonyClient.authority.hasUserRole.call({
    user: userAddress,
    role: 'ADMIN',
  })

  // return hasRole
  return hasRole

}

// removeAdmin

export const removeAdmin = async (colonyClient, userAddress) => {

  // remove user role admin
  await colonyClient.removeAdminRole.send({
    user: userAddress,
  })

  // return true
  return true

}

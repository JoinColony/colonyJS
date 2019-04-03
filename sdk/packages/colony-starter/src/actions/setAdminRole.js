// An example action using the "setAdminRole" method
module.exports = async (colonyClient, user) => {

  // Set the admin role
  await colonyClient.setAdminRole.send({
    user,
  });

  // Check if the user has the admin role
  const { hasRole: hasAdminRole } = await colonyClient.hasUserRole.call({
    user,
    role: 'ADMIN',
  })

  // Check out the logs to see if the user has the admin role
  console.log('Admin Role Set: ' + hasAdminRole);

  // Return boolean indicating if the user has the admin role
  return hasAdminRole;

};

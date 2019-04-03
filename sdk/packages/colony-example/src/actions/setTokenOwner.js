// An example action using the "setTokenOwner" method
module.exports = async (colonyClient, colonyAddress) => {

  // Set the token owner to be the colony contract
  await colonyClient.tokenClient.setOwner.send({ owner: colonyAddress });

  // Get token owner
  const tokenOwner = await colonyClient.tokenClient.contract.owner();

  // Check out the logs to see token owner
  console.log('Token Owner: ' + tokenOwner);

  // Return the token owner
  return tokenOwner;

};

// An example using the setTokenOwner operation
const setTokenOwner = async (colonyClient, colonyAddress) => {

  // Set the token owner to be the colony contract. This will allow us to mint
  // and claim tokens using the colonyClient, which will then allow us to fund
  // domains and tasks within our colony.
  await colonyClient.tokenClient.setOwner.send({ owner: colonyAddress });

  // Get the owner of the token
  const tokenOwner = await colonyClient.tokenClient.contract.owner();

  // Check out the logs to see the owner of the token
  console.log('Token Owner: ' + tokenOwner);

  // Return tokenOwner
  return tokenOwner;

}

// Export setTokenOwner example
module.exports = setTokenOwner;

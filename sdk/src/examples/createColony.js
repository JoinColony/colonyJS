// An example using the createColony method
const createColony = async (networkClient, tokenAddress) => {

  // Create a colony with the given token
  const {
    eventData: { colonyAddress, colonyId }
  } = await networkClient.createColony.send({ tokenAddress });

  // Check out the logs to see the colonyAddress
  console.log('Colony Address: ' + colonyAddress);

  // Check out the logs to see the colonyId
  console.log('Colony ID: ' + colonyId);

  // Get the colonyClient using the colonyId
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // Set the token owner to be the colony contract. This will allow us to mint
  // and claim tokens using the colonyClient, which will then allow us to fund
  // domains and tasks within our colony.
  await colonyClient.token.setOwner.send({ owner: colonyAddress });

  // Return colonyClient
  return colonyClient;

};

// Export createColony example
module.exports = createColony;

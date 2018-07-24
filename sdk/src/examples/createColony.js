// An example using the createColony method
const createColony = async (networkClient, tokenAddress) => {

  // Create a Colony
  const {
    eventData: { colonyAddress, colonyId }
  } = await networkClient.createColony.send({ tokenAddress });

  // Check out the logs to see the colonyAddress
  console.log('Colony Address: ' + colonyAddress);

  // Check out the logs to see the colonyId
  console.log('Colony ID: ' + colonyId);

  // Get the colonyClient using the colonyId
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // Alternatively, we can get the colonyClient using the colonyAddress
  // const colonyClient = await networkClient.getColonyClientByAddress(
  //   colonyAddress,
  // );

  // Return colonyClient
  return colonyClient;

};

// Export createColony example
module.exports = createColony;

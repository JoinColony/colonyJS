// An example using the createColony sender function
const createColony = async (networkClient, tokenAddress) => {

  // Create a Colony
  const { eventData: { colonyId } } = await networkClient.createColony.send({
    tokenAddress,
  });

  // Get the colonyClient for the Colony we created
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // Return colonyClient
  return colonyClient;

};

module.exports = createColony;

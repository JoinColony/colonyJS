// An example using the getColonyClient method
const getColonyClient = async (networkClient, colonyAddress) => {

  // Get the colonyClient using the colonyId
  // const colonyClient = await networkClient.getColonyClient(colonyId);

  // Alternatively, we can get the colonyClient using the colonyAddress
  const colonyClient = await networkClient.getColonyClientByAddress(
    colonyAddress,
  );

  // Check out the logs to see the colony address
  console.log('Colony Address: ' + colonyClient._contract.address);

  // Return colonyClient
  return colonyClient;

};

// Export getColonyClient example
module.exports = getColonyClient;

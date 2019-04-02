// An example action using the getColonyClient method
const getColonyClient = async (networkClient, colonyId) => {

  // Get the colonyClient using the colony id
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // Get the colonyClient using the colony address
  // const colonyClient = await networkClient.getColonyClientByAddress(
  //   colonyAddress,
  // );

  // Check out the logs to see the address of the colony client
  console.log('Colony Address:', colonyClient.contract.address);

  // Return the colony client
  return colonyClient;

};

// Export getColonyClient action
module.exports = getColonyClient;

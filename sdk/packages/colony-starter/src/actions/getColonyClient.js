// An example action using the "getColonyClient" method
module.exports = async (networkClient, colonyId) => {

  // Get the colonyClient using the colony id
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // Check out the logs to see the address of the colony client
  console.log('Colony Address:', colonyClient.contract.address);

  // Return the colony client
  return colonyClient;

};

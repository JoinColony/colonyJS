// The following methods use Promises
const getColonyClient = async (networkClient, colonyAddress) => {

  // For a colony that exists already, you just need its address:
  const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress);

  // Or alternatively, just its id:
  // const colonyClient = await networkClient.getColonyClient(colonyId);

  // Return colonyClient
  return colonyClient;

};

module.exports = getColonyClient;

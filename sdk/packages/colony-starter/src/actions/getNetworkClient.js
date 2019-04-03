// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');

// An example action using the "getNetworkClient" method
module.exports = async (network, wallet) => {

  // Get the colony network client
  const networkClient = await getNetworkClient(network, wallet);

  // Check out the logs to see the address of the network router
  console.log('Network Address: ' + networkClient.contract.address);

  // Return networkClient
  return networkClient;

};

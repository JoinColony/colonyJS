// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-metamask');

// An example method for connecting to the network
const connectNetwork = async (network) => {

  // Create a wallet
  const wallet = await open()

  // Get the network client
  const networkClient = await getNetworkClient(network, wallet)

  // Return networkClient
  return networkClient

}

// Export connectNetwork example
module.exports = connectNetwork;

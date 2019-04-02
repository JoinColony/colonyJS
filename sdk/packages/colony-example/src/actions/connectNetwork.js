// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');

// An example action for connecting to the network
const connectNetwork = async (network, privateKey) => {

  // Open a wallet with the private key
  const wallet = await open({ privateKey });

  // Check out the logs to see the address of the wallet
  console.log('Wallet Address: ' + wallet.address);

  // Get the colony network client
  const networkClient = await getNetworkClient(network, wallet);

  // Check out the logs to see the address of the network router
  console.log('Network Address: ' + networkClient.contract.address);

  // Return networkClient
  return networkClient;

};

// Export connectNetwork action
module.exports = connectNetwork;

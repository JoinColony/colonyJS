// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');

// An example method for connecting to the local network
const connectNetwork = async (network, privateKey) => {

  // Create a wallet with the private key (so we have a balance we can use)
  const wallet = await open({ privateKey });

  // Check out the logs to see the address of the wallet
  console.log('Wallet Address: ' + wallet.address);

  // Connect to ColonyNetwork with the adapter!
  const networkClient = await getNetworkClient(network, wallet);

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ' + networkClient.contract.address);

  // Return networkClient
  return networkClient;

};

// Export connectNetwork example
module.exports = connectNetwork;

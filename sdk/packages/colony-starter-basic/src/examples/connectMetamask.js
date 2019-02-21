// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-metamask');

// An example method for connecting to the rinkeby network
const connectRinkeby = async () => {

  // Create a wallet
  const wallet = await open();

  // Check out the logs to see the address of the wallet
  console.log('Wallet Address: ' + wallet.address);

  // Connect to ColonyNetwork with the adapter!
  const networkClient = await getNetworkClient('rinkeby', wallet);

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ' + networkClient.contract.address);

  // Return networkClient
  return networkClient;

};

// Export connectRinkeby example
module.exports = connectRinkeby;

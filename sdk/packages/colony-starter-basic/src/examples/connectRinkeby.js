// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');
const { open } = require('@colony/purser-software');

// An example method for connecting to the rinkeby network
const connectRinkeby = async () => {

  // Set the private key (this is the private key for the first Ganache test account)
  const privateKey = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';

  // Create a wallet with the private key (so we have a balance we can use)
  const wallet = await open({ privateKey });

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

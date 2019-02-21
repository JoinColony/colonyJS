// Import the prerequisites
const { getNetworkClient } = require('@colony/colony-js-client');
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');
const { open } = require('@colony/purser-software');

// An example method for connecting to the local network
const connectNetwork = async (accountIndex) => {

  // Initialize TrufflepigLoader
  const loader = new TrufflepigLoader();

  // Get the private key from the given Ganache test account
  const { privateKey } = await loader.getAccount(accountIndex || 0);

  // Create a wallet with the private key (so we have a balance we can use)
  const wallet = await open({ privateKey });

  // Check out the logs to see the address of the wallet
  console.log('Wallet Address: ' + wallet.address);

  // Connect to ColonyNetwork with the adapter!
  const networkClient = await getNetworkClient('local', wallet);

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ' + networkClient.contract.address);

  // Return networkClient
  return networkClient;

};

// Export connectNetwork example
module.exports = connectNetwork;

// Import the prerequisites
const { providers, Wallet } = require('ethers');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

// Import the ColonyNetworkClient
const { default: ColonyNetworkClient } = require('@colony/colony-js-client');

// Create an instance of the Trufflepig contract loader
const loader = new TrufflepigLoader();

// Create a provider for local TestRPC (Ganache)
const provider = new providers.JsonRpcProvider('http://localhost:8545/');

// An example method for connecting to the local network
const connectNetwork = async (accountIndex) => {

  // Get the private key from the first Ganache test account
  const { privateKey } = await loader.getAccount(accountIndex || 0);

  // Create a wallet with the private key (so we have a balance we can use)
  const wallet = new Wallet(privateKey, provider);

  // Create an adapter (powered by ethers)
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  // Connect to ColonyNetwork with the adapter!
  const networkClient = new ColonyNetworkClient({ adapter });

  // Initialize networkClient
  await networkClient.init();

  // Check out the logs to see the address of the contract signer
  console.log('Account Address: ' + networkClient._contract.signer.address);

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ' + networkClient._contract.address);

  // Return networkClient
  return networkClient;

};

// Export connectNetwork example
module.exports = connectNetwork;
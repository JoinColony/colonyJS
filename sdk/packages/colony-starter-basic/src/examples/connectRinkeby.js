// Import the prerequisites
const { providers, Wallet } = require('ethers');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { default: NetworkLoader } = require('@colony/colony-js-contract-loader-network');
const { default: ColonyNetworkClient } = require('@colony/colony-js-client');

// Set network to rinkeby
const network = 'rinkeby';

// Create instance of NetworkLoader
const loader = new NetworkLoader({ network });

// Create provider for wallet and ethers adapter
const provider = providers.getDefaultProvider(network);

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';

// An example method for connecting to the rinkeby network
const connectRinkeby = async () => {

  // Create wallet with private key and provider
  const wallet = new Wallet(privateKey, provider);

  // Create a new ethers adapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  // Connect to ColonyNetwork with the adapter
  const networkClient = new ColonyNetworkClient({ adapter });

  // Initialize networkClient
  await networkClient.init();

  // Check out the logs to see the address of the contract signer
  console.log('Account Address: ' + networkClient.contract.signer.address);

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ' + networkClient.contract.address);

  // Return networkClient
  return networkClient;

};

// Export connectRinkeby example
module.exports = connectRinkeby;

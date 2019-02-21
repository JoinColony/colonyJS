// Import the prerequisites
const Web3 = require('web3');
const { providers } = require('ethers');
const MetaMaskConnector = require('node-metamask');
const { default: EthersAdapter } = require('@colony/colony-js-adapter-ethers');
const { default: NetworkLoader } = require('@colony/colony-js-contract-loader-network');
const { default: ColonyNetworkClient } = require('@colony/colony-js-client');
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

// Define get nework method
const getNetworkFromId = (id) => {
  return {
    1: 'mainnet',
    3: 'ropsten',
    4: 'rinkeby',
    42: 'kovan',
  }[id];
}

// An example method for connecting to metamask
const connectMetamask = async () => {

  // Create instance of metamask connector
  const metamaskConnector = new MetaMaskConnector({
    onConnect() { console.log('Connected to MetaMask!'); }
  });

  // You must open or refresh the browser to connect
  console.log('Open or refresh http://localhost:3333/');

  // Connect metamask
  await metamaskConnector.start();

  // Create instance of web3 and set metamask provider
  const web3 = new Web3(metamaskConnector.getProvider());

  // Get network from instance of web3 with metamask provider
  const network = getNetworkFromId(await web3.eth.net.getId());

  // Declare variables
  let loader, provider;

  // Check if local network
  if (network) {

    // Log the connected network
    console.log('Metamask is connected to the ' + network + ' network');

    // Create instance of NetworkLoader
    loader = new NetworkLoader({ network });

    // Create provider for wallet and ethers adapter
    provider = new providers.Web3Provider(web3.currentProvider, network);

  } else {

    // Log the connected network
    console.log('Metamask is connected to your local test network');

    // Create an instance of the Trufflepig contract loader
    loader = new TrufflepigLoader();

    // Create provider for wallet and ethers adapter
    provider = new providers.Web3Provider(web3.currentProvider);

  }

  // Get the signer from the provider
  const wallet = provider.getSigner();

  // Create a new ethers adapter
  const adapter = new EthersAdapter({
    loader,
    provider,
    wallet,
  });

  // Connect to Colony Network with the adapter
  const networkClient = new ColonyNetworkClient({ adapter });

  // Initialize networkClient
  await networkClient.init();

  // Get the address of the contract signer
  const signerAddress = await networkClient._contract.signer.getAddress();

  // Check out the logs to see the address of the contract signer
  console.log('Account Address: ' + signerAddress);

  // Check out the logs to see the address of the deployed network
  console.log('Network Address: ' + networkClient.contract.address);

  // Disconnect metamask
  metamaskConnector.stop();

  // Return networkClient
  return networkClient;

};

// Export connectMetamask example
module.exports = connectMetamask;

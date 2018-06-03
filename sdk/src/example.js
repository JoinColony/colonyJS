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

const ecp = require('./ecp');

// The following methods use Promises
const example = async () => {

  // Initialise the Extended Colony Protocol
  await ecp.init();

  // Get the private key from the first account from the ganache-accounts
  // through trufflepig
  const { privateKey } = await loader.getAccount(0);

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
  await networkClient.init();

  // Let's deploy a new ERC20 token for our Colony.
  // You could also skip this step and use a pre-existing/deployed contract.
  const tokenAddress = await networkClient.createToken({
    name: 'Cool Colony Token',
    symbol: 'COLNY',
  });
  console.log('Token address: ' + tokenAddress);

  // Create a cool Colony!
  const {
    eventData: { colonyId, colonyAddress },
  } = await networkClient.createColony.send({ tokenAddress });

  // Congrats, you've created a Colony!
  console.log('Colony ID: ' + colonyId);
  console.log('Colony address: ' + colonyAddress);

  // For a colony that exists already, you just need its ID:
  const colonyClient = await networkClient.getColonyClient(colonyId);

  // Or alternatively, just its address:
  // const colonyClient = await networkClient.getColonyClientByAddress(colonyAddress);

  // Create a task!
  const specificationHash = await ecp.saveTaskSpecification({ title: 'Cool task', description: 'Create this cool thing.' });

  // Unique, immutable hash on IPFS
  console.log('Specification hash', specificationHash);

  const { eventData: { taskId }} = await colonyClient.createTask.send({ specificationHash: 'foo', domainId: 1 });

  // Let's take a look at the newly created task
  const task = await colonyClient.getTask.call({ taskId })
  console.log(task);

  // You can also get the Meta Colony:
  const metaColonyClient = await networkClient.getMetaColonyClient();
  console.log('Meta Colony address: ' + metaColonyClient.contract.address);

  // Do some cleanup
  ecp.stop();
};

module.exports = example;

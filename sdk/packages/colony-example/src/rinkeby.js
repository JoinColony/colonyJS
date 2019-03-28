// Import helpers
const log = require('./helpers/log');

// Import example
const connectNetwork = require('./examples/connectNetwork');
const getAccounts = require('./examples/getAccounts');

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';

// A method that runs through the examples
const colonyStarterExample = async () => {

  log('account[0] getAccounts:');

  // Get the ganache test accounts and then store the returned "accounts" in
  // the state object.
  state.accounts = await getAccounts();

  log('connectNetwork:');

  // Connect to the network using the "connectNetwork" example and then store
  // the returned "networkClient" in the state object.
  await connectNetwork(
    'rinkeby',                      // network
    state.accounts[0][1],           // privateKey
  );

  log('Complete!');

}

// Execute example
colonyStarterExample()
  .then(() => process.exit())
  .catch(err => console.error(err));

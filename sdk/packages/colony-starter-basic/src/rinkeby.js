// Import helpers
const log = require('./helpers/log');

// Import example
const connectNetwork = require('./examples/connectNetwork');

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d';

// Colony Starter Basic example
const colonyStarterBasic = async () => {

  log('connectNetwork:');

  await connectNetwork('rinkeby', privateKey);

  log('Complete!');

}

// Execute example
colonyStarterBasic()
  .then(() => process.exit())
  .catch(err => console.error(err));

// Import helpers
const log = require('./helpers/log');

// Import examples
const connectMetamask = require('./examples/connectMetamask');

// Colony Starter Basic example
const colonyStarterBasic = async () => {

  log('connectMetamask:');

  await connectMetamask();

  log('Complete!');

}

// Execute example
colonyStarterBasic()
  .then(() => process.exit())
  .catch(err => console.error(err));

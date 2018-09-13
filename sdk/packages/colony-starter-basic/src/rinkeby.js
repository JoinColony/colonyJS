// Import helpers
const log = require('./helpers/log');

// Import example
const connectRinkeby = require('./examples/connectRinkeby');

// Colony Starter Basic example
const colonyStarterBasic = async () => {

  log('connectRinkeby:');

  await connectRinkeby();

  log('Complete!');

}

// Execute example
colonyStarterBasic()
  .then(() => process.exit())
  .catch(err => console.error(err));

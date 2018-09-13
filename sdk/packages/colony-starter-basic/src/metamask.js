// Import prerequisites
const chalk = require('chalk');

// Import examples
const connectMetamask = require('./examples/connectMetamask');

// Logging to help keep track of where we are in the script
const log = (msg) => console.log(chalk.cyan('\n' + msg + '\n'));

// Colony Starter Basic example
const colonyStarterBasic = async () => {

  log('connectMetamask:');

  await connectMetamask();

  log('complete');

}

// Execute example
colonyStarterBasic()
  .then(() => process.exit())
  .catch(err => console.error(err));

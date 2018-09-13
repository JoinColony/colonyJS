// Import prerequisites
const chalk = require('chalk');

// Import example
const connectRinkeby = require('./examples/connectRinkeby');

// Logging to help keep track of where we are in the script
const log = (msg) => console.log(chalk.cyan('\n' + msg + '\n'));

// Colony Starter Basic example
const colonyStarterBasic = async () => {

  log('connectRinkeby:');

  await connectRinkeby();

  log('complete');

}

// Execute example
colonyStarterBasic()
  .then(() => process.exit())
  .catch(err => console.error(err));

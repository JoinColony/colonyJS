// Import prerequisites
const chalk = require('chalk');

// Logging to help keep track of where we are in the script
const log = (msg) => console.log(chalk.cyan('\n' + msg + '\n'));

module.exports = log;

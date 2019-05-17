#!/usr/bin/env node

// Import dependencies
const chalk = require('chalk');
const commander = require('commander');

// Import package configuration
const package = require('../package.json');

// Import commander actions
const build = require('./actions/build');
const service = require('./actions/service');

// Exit without error
const handleExit = () => {
  console.log(chalk.cyan('  Exiting without error...'));
  console.log();
  process.exit();
};

// Exit with error
const handleError = (error) => {
  console.error(error);
  console.log();
  console.log(chalk.red('  Exiting with error...'));
  console.log();
  process.exit(1);
};

// Handle cancel and exceptions
process.on('SIGINT', handleExit);
process.on('uncaughtException', handleError);

commander
  .version(package.version)
  .description(package.description)
  .option('--verbose', 'print additional logs')
  .option('--specific <version-or-source>', 'use a specific version or source');

commander
  .command('build <package-name>')
  .description('Build a colonyStarter package')
  .action(packageName => build(commander, packageName));

commander
  .command('service <service-name>')
  .description('Run a local development service script')
  .allowUnknownOption() // Allow ganache and truffle options
  .action(serviceName => service(commander, serviceName));

commander
  .on('command:*', () => {

    // Log error
    console.log();
    console.log(chalk.red(`  ERROR: "${commander.args[0]}" is not a valid command.`));
    console.log();
    console.log(chalk.red('  See --help for a list of available commands.'));
    console.log();

    // Exit on error
    process.exit(1);

});

commander.parse(process.argv);

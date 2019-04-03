#!/usr/bin/env node

// Import dependencies
const commander = require('commander');

// Import package configuration
const package = require('../package.json');

// Import commander actions
const build = require('./actions/build');
const service = require('./actions/service');

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
  .action(serviceName => service(commander, serviceName));

commander
  .on('command:*', () => {

    // Log error
    console.log();
    console.log(`Invalid command: ${program.args.join(' ')}`);
    console.log();
    console.log('See --help for a list of available commands.');
    console.log();

    // Exit on error
    process.exit(1);

});

commander.parse(process.argv);

#!/usr/bin/env node

// Import dependencies
const commander = require('commander');

// Import package json
const package = require('./package.json');

// Import actions
const build = require('./actions/build');
const service = require('./actions/service');

// Define commander
commander
  .version(package.version)
  .description(package.description)
  .option('--verbose', 'print additional logs')
  .option('--specific <version-or-source>', 'use a specific version or source')

commander
  .command('build <package-name>')
  .description('Build a colonyStarter package')
  .action(packageName => build(commander, packageName))

commander
  .command('service <service-name>')
  .description('Run a local development service script')
  .action(serviceName => service(commander, serviceName))

commander.parse(process.argv)

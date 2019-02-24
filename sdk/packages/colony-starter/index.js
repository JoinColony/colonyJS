#!/usr/bin/env node

// Import dependencies
const commander = require('commander');

// Import package information
const package = require('./package.json');

// Import actions
const build = require('./actions/build');

// Define commander
commander
  .version(package.version)
  .description(package.description)
  .option('--verbose', 'print additional logs')
  .option('--specific <version-or-source>', 'use a specific version or source')

commander
  .command('build <package-name>')
  .description('Install and build a starter package')
  .action(packageName => build(commander, packageName))

commander.parse(process.argv)

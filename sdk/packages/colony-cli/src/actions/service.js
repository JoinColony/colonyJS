// Import dependencies
const chalk = require('chalk');
const cp = require('child_process');

// Run a local development service script
const service = async (commander, serviceName) => {

  // Log step
  console.log();
  console.log(`  Starting ${chalk.cyan('service')} action...`);

  // Make sure service name is defined
  if (typeof serviceName === 'undefined') {
    console.log();
    console.log('The name of the service is required.');
    console.log();
    console.log(`  ${commander.name()} service ${chalk.cyan('<service-name>')}`);
    console.log();
    process.exit(1);
  }

  if (serviceName === 'start-ganache') {

    // Log step
    console.log();
    console.log(`  Starting local test network...`);
    console.log();

    // Start ganache
    cp.execSync('sh scripts/start_ganache.sh', { stdio: [0, 1, 2] });

  } else if (serviceName === 'deploy-contracts') {

    // Log step
    console.log();
    console.log(`  Deploying the colonyNetwork smart contracts...`);
    console.log();

    // Start trufflepig
    cp.execSync('sh scripts/deploy_contracts.sh', { stdio: [0, 1, 2] });

  } else if (serviceName === 'seed-network') {

    // Log step
    console.log();
    console.log(`  Adding global skills to the Meta Colony...`);
    console.log();

    // Start trufflepig
    cp.execSync('node scripts/seed_network.js', { stdio: [0, 1, 2] });

  } else if (serviceName === 'start-trufflepig') {

    // Log step
    console.log();
    console.log(`  Starting trufflepig...`);
    console.log();

    // Start trufflepig
    cp.execSync('sh scripts/start_trufflepig.sh', { stdio: [0, 1, 2] });

  } else {

    // Log step
    console.log();
    console.log(chalk.red('  The service you provided does not exist.'));
    process.exit(1);

  }

}

module.exports = service;

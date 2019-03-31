// Import dependencies
const chalk = require('chalk');
const cp = require('child_process');
const path = require('path');

// Run a local development service script
const service = async (commander, serviceName) => {

  // Log step
  console.log();
  console.log(`  Starting ${chalk.cyan('service')} action...`);

  // Set scripts path
  const scriptsPath = path.join(__dirname, '../../scripts');

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
    cp.execSync(`sh ${scriptsPath}/start_ganache.sh`, { stdio: [0, 1, 2] });

  } else if (serviceName === 'deploy-contracts') {

    // Log step
    console.log();
    console.log(`  Deploying the colonyNetwork smart contracts...`);
    console.log();

    // Deploy contracts
    if (commander.specific) {
      cp.execSync(
        `sh ${scriptsPath}/deploy_contracts.sh ${commander.specific}`,
        { stdio: [0, 1, 2] },
      );
    } else {
      cp.execSync(`sh ${scriptsPath}/deploy_contracts.sh`, { stdio: [0, 1, 2] });
    }

  } else if (serviceName === 'seed-network') {

    // Log step
    console.log();
    console.log(`  Adding global skills to the Meta Colony...`);
    console.log();

    // Seed network
    cp.execSync(`node ${scriptsPath}/seed_network.js`, { stdio: [0, 1, 2] });

  } else if (serviceName === 'start-trufflepig') {

    // Log step
    console.log();
    console.log(`  Starting trufflepig...`);
    console.log();

    // Start trufflepig
    cp.execSync(`sh ${scriptsPath}/start_trufflepig.sh`, { stdio: [0, 1, 2] });

  } else {

    // Log step
    console.log();
    console.log(chalk.red('  The service you provided does not exist.'));
    process.exit(1);

  }

}

module.exports = service;

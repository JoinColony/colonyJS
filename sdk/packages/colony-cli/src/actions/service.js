// Import dependencies
const chalk = require('chalk');
const cp = require('child_process');
const path = require('path');

// Run a local development service script
const service = async (commander, serviceName) => {

  // Log step
  console.log();
  console.log(`  Starting ${chalk.cyan('service')} action...`);

  // Set path to service scripts directory
  const scriptsPath = path.join(__dirname, '../services');

  // Set path to colonyNetwork directory
  const colonyNetworkPath = path.join(__dirname, '../../lib/colonyNetwork');

  // Make sure service name is defined
  if (typeof serviceName === 'undefined') {
    console.log();
    console.log('The name of the service is required:');
    console.log();
    console.log(`  colony service ${chalk.cyan('<service-name>')}`);
    console.log();
    process.exit(1);
  }

  if (serviceName === 'start-ganache') {

    // Log step
    console.log();
    console.log(`  Starting local test network...`);
    console.log();

    // Start ganache
    cp.execSync(
      `sh ${scriptsPath}/start_ganache.sh`,
      {
        cwd: colonyNetworkPath,
        stdio: 'inherit',
      },
    );

  } else if (serviceName === 'deploy-contracts') {

    // Log step
    console.log();
    console.log(`  Starting deployment process...`);
    console.log();

    // Check specific
    if (commander.specific) {

      // Start deployment process using specific version
      cp.execSync(
        `sh ${scriptsPath}/deploy_contracts.sh ${commander.specific}`,
        {
          cwd: colonyNetworkPath,
          stdio: 'inherit',
        },
      );

    } else {

      // Start deployment process
      cp.execSync(
        `sh ${scriptsPath}/deploy_contracts.sh`,
        {
          cwd: colonyNetworkPath,
          stdio: 'inherit',
        }
      );
    }

  } else if (serviceName === 'seed-network') {

    // Log step
    console.log();
    console.log(`  Starting seed network process...`);
    console.log();

    // Seed network
    cp.execSync(
      `node ${scriptsPath}/seed_network.js`,
      {
        stdio: 'inherit',
      },
    );

  } else if (serviceName === 'start-trufflepig') {

    // Log step
    console.log();
    console.log(`  Starting trufflepig...`);
    console.log();

    // Start trufflepig
    cp.execSync(
      `sh ${scriptsPath}/start_trufflepig.sh ${colonyNetworkPath}`,
      {
        stdio: 'inherit',
      }
    );

  } else {

    // Log step
    console.log();
    console.log(chalk.red('  The service you provided does not exist.'));
    process.exit(1);

  }

}

module.exports = service;

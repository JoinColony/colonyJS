// Import dependencies
const chalk = require('chalk');
const cp = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Set services
const services = [
  'start-ganache',
  'deploy-contracts',
  'start-trufflepig',
  'seed-network',
  'colony-setup',
  'truffle',
];

// Run a local development service script
const service = async (commander, serviceName) => {

  // Log step
  console.log(chalk.cyan('Starting service command...'));

  // Log message
  console.log(`
  Thank you for trying the colony-cli service command. This feature is still
  in beta so please report any issues so that we can get them fixed.
  `);

  // Make sure service name is defined
  if (typeof serviceName === 'undefined') {

    // Log error
    console.log(chalk.red('ERROR: The name of the service is required.'));
    console.log();

    // Exit on error
    process.exit(1);

  } else if (!services.includes(serviceName)) {

    // Log error
    console.log(chalk.red(`ERROR: "${serviceName}" is not a valid service.`));
    console.log();

    // Exit on error
    process.exit(1);

  }

  // Set directory and file paths
  const rootPath = path.join(__dirname, '../../');
  const libPath = path.join(rootPath, 'lib');
  const scriptsPath = path.join(__dirname, '../scripts');
  const colonyNetworkPath = path.join(libPath, 'colonyNetwork');
  const colonyNetworkLockfile = path.join(colonyNetworkPath, 'yarn.lock');

  // Log step
  console.log(chalk.cyan('Checking colonyNetwork setup...'));

  // Check if colonyNetwork lock file exists
  if (!fs.existsSync(colonyNetworkLockfile)) {

    // Log message
    console.log(`
  It looks like this is the first time you are running a service command
  with a fresh install of the colony-cli package. The first time you run
  a service command, colony-cli will clone and install the colonyNetwork
  repository within the colony-cli package. This might take awhile!
    `);

    // Ensure lib path exists
    fs.ensureDirSync(libPath);

    // Check if failed installation exists
    if (fs.existsSync(colonyNetworkPath)) {

      // Remove failed installation
      fs.removeSync(colonyNetworkPath);

    }

    // Check specific
    if (commander.specific) {

      // Install colonyNetwork using specific version
      cp.execSync(
        `sh ${scriptsPath}/network_install.sh ${commander.specific}`,
        {
          cwd: libPath,
          stdio: 'inherit',
        },
      );

    } else {

      // Install colonyNetwork using the default version
      cp.execSync(
        `sh ${scriptsPath}/network_install.sh`,
        {
          cwd: libPath,
          stdio: 'inherit',
        },
      );
    }

  } else if (commander.specific) {

    // Update colonyNetwork using specific version
    cp.execSync(
      `sh ${scriptsPath}/network_update.sh ${commander.specific}`,
      {
        cwd: colonyNetworkPath,
        stdio: 'inherit',
      },
    );

  } else {

    let version = fs.readFileSync(path.join(colonyNetworkPath, '.git/HEAD'));
    version = version.toString().trim();

    if (version === 'b43238a4d14a0b6e31190045db25caafdb85da4c') {

      // Log version
      console.log();
      console.log(`  Using colonyNetwork version glider-rc.1`);
      console.log();

    } else {

      // Log version
      console.log();
      console.log(`  Using colonyNetwork version ${version}`);
      console.log();

    }

  }

  // Check service name and run service
  if (serviceName === 'start-ganache') {

    // Log step
    console.log(chalk.cyan('Starting Ganache...'));
    console.log();

    // Check for noVMErrorsOnRPCResponse flag
    if (commander.args[1].noVMErrorsOnRPCResponse) {

      // Start ganache using noVMErrorsOnRPCResponse flag
      cp.execSync(
        `sh ${scriptsPath}/start_ganache.sh --noVMErrorsOnRPCResponse`,
        {
          cwd: colonyNetworkPath,
          stdio: 'inherit',
        },
      );

    } else {

      // Start ganache
      cp.execSync(
        `sh ${scriptsPath}/start_ganache.sh`,
        {
          cwd: colonyNetworkPath,
          stdio: 'inherit',
        },
      );

    }

  } else if (serviceName === 'deploy-contracts') {

    // Start deployment process
    cp.execSync(
      `sh ${scriptsPath}/deploy_contracts.sh`,
      {
        cwd: colonyNetworkPath,
        stdio: 'inherit',
      }
    );

  } else if (serviceName === 'start-trufflepig') {

    // Log step
    console.log(chalk.cyan('Starting trufflepig...'));
    console.log();

    // Start trufflepig
    cp.execSync(
      `sh ${scriptsPath}/start_trufflepig.sh ${colonyNetworkPath}`,
      {
        cwd: rootPath,
        stdio: 'inherit',
      }
    );

  } else if (serviceName === 'seed-network') {

    // Log step
    console.log(chalk.cyan('Starting seed network...'));
    console.log();

    // Seed network
    cp.execSync(
      `node ${scriptsPath}/seed_network.js`,
      {
        stdio: 'inherit',
      },
    );

  } else if (serviceName === 'colony-setup') {

    // Log step
    console.log(chalk.cyan('Starting colony setup...'));
    console.log();

    // Start colony setup
    cp.execSync(
      `node ${scriptsPath}/colonySetup`,
      {
        stdio: 'inherit',
      },
    );

  } else if (serviceName === 'truffle') {

    const rawArgs = commander.args[1].parent.rawArgs;
    const truffleIndex = rawArgs.findIndex(arg => arg === 'truffle');
    const truffleArgs = rawArgs.splice(truffleIndex + 1);

    // Log step
    console.log(chalk.cyan('Running truffle command...'));
    console.log();

    // Run truffle command
    cp.execSync(
      `${colonyNetworkPath}/node_modules/.bin/truffle ${truffleArgs.join(' ')}`,
      {
        stdio: 'inherit',
      },
    );

  }

}

module.exports = service;

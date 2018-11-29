/* eslint-disable flowtype/require-valid-file-annotation, no-console */

const util = require('util');
const ganache = require('ganache-cli');
const chalk = require('chalk');
const childProcess = require('child_process');
const path = require('path');
const net = require('net');
const extfs = require('extfs');
const git = require('simple-git/promise');
const rimraf = require('rimraf');
const fs = require('fs');
const TrufflePig = require('trufflepig');

const { isEmptySync } = extfs;
const { writeFile } = fs;

global.DEBUG = process.env.DEBUG || false;
/*
 * If we're in watch mode, so we need to check if this is the first run or not.
 *
 * On the first run, we'll set up ganache and compile contracts, but if we're on
 * a subsequent run, we leave them just as they are.
 * Also, if this is NOT a first run, we're not killing the ganache server in the
 * teardown step.
 */
global.WATCH = process.env.WATCH || false;
global.WATCH_FIRST_RUN = true;

/**
 * Take a process-starting function (exec, spawn, etc)
 * and enable logging if we are in debug mode.
 */
const withLogging = func => {
  if (global.DEBUG) {
    return (...args) => {
      const runner = func(...args);
      runner.stdout.pipe(process.stdout);
      return runner;
    };
  }
  return func;
};

const remove = util.promisify(rimraf);
const write = util.promisify(writeFile);
const exec = util.promisify(withLogging(childProcess.exec));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const isPortAvailable = port =>
  new Promise((resolve, reject) => {
    const tester = net
      .createServer()
      .once(
        'error',
        err => (err.code === 'EADDRINUSE' ? resolve(false) : reject(err)),
      )
      .once('listening', () =>
        tester.once('close', () => resolve(true)).close(),
      )
      .listen(port);
  });

const waitUntilPortIsTaken = async port => {
  let count = 0;
  // eslint-disable-next-line no-await-in-loop
  while (await isPortAvailable(port)) {
    // await in loop to block until the port is taken.
    // eslint-disable-next-line no-await-in-loop
    await sleep(500);
    count += 1;

    if (count > 100) {
      throw Error(`port ${port} is still not taken after 100 attempts.`);
    }
  }
};

/*
 * Paths
 */
const libPath = path.resolve('src', 'lib');
const clientPath = path.resolve(libPath, 'colonyJS');
const walletPath = path.resolve(libPath, 'colony-wallet');
const networkPath = path.resolve(libPath, 'colonyNetwork');
const pinningServicePath = path.resolve(libPath, 'pinningService');
const ganacheAccountsFile = path.resolve('.', 'ganache-accounts.json');
const contractsFolder = path.resolve(networkPath, 'build', 'contracts');

const cleanupArtifacts = message => {
  console.log(chalk.green.bold(message));
  const cleanupPaths = [ganacheAccountsFile, contractsFolder];
  cleanupPaths.map(async artifactPath => {
    if (global.DEBUG) {
      console.log(`Removing: ${artifactPath}`);
    }
    await remove(artifactPath, { disableGlob: true });
  });
};

module.exports = async () => {
  /*
   * Leave an empty line.
   * Since first line of `jest`s output doesn't end with a new line
   */
  console.log();

  /*
   * Tell the user we're in DEBUG mode
   */
  if (global.DEBUG) {
    console.log(chalk.bgYellowBright.black.bold('  DEBUG MODE  \n'));
  }

  /*
   * Setup & configure ganache
   */
  const ganacheServerPort = '8545';
  const ganacheServerOptions = {
    default_balance_ether: 100,
    total_accounts: 10,
    gasLimit: 7000000,
    vmErrorsOnRPCResponse: true,
  };
  const ganacheServerDebugOptions = {
    debug: true,
    logger: console,
  };
  const server = ganache.server(
    Object.assign(
      {},
      ganacheServerOptions,
      global.DEBUG ? ganacheServerDebugOptions : {},
    ),
  );

  global.ganacheServer = {
    listen: util.promisify(server.listen),
    stop: util.promisify(server.close),
  };

  /*
   * Generate the accounts object. These addresses are generated at startup by ganache.
   *
   * They will be written to a file so other services can access them
   */
  const ganacheAccounts = {
    accounts: server.provider.manager.state.accounts,
    private_keys: Object.keys(server.provider.manager.state.accounts).reduce(
      (keys, address) =>
        Object.assign({}, keys, {
          [address]: server.provider.manager.state.accounts[
            address
          ].secretKey.toString('hex'),
        }),
      {},
    ),
  };

  /*
   * Setup & configure TrufflePig
   */
  const trufflePigOptionsServerPort = '3030';
  const trufflePigOptions = {
    contractDir: contractsFolder,
    port: trufflePigOptionsServerPort,
    verbose: global.DEBUG && true,
    ganacheKeyFile: ganacheAccountsFile,
  };

  global.trufflePigServer = new TrufflePig(trufflePigOptions);

  /*
   * Checking if submodules are provisioned. If they're not, just re-provision
   *
   * Maybe we also need to check here if we're in watch mode. Although it's very
   * unlikely that submodules are going to change during running of the tests.
   */
  if (
    isEmptySync(clientPath) ||
    isEmptySync(walletPath) ||
    isEmptySync(networkPath) ||
    isEmptySync(pinningServicePath)
  ) {
    console.log(chalk.yellow.bold('Provisioning submodules'));
    await exec('yarn provision');
  }

  /*
   * After we provision the modules, grab the `colonyNetwork` package json
   * so we can read values from it.
   *
   * Before this step, it may not be available
   */
  /* eslint-disable global-require, import/no-dynamic-require */
  const networkPackage = require(path.resolve(networkPath, 'package.json'));

  if (!global.WATCH || (global.WATCH && global.WATCH_FIRST_RUN)) {
    /*
     * Perform initial cleanup, since there's a good chance there are leftover
     * artifacts (build folders)
     */
    global.cleanupArtifacts = cleanupArtifacts;
    cleanupArtifacts('Removing leftover artifacts');

    /*
     * Start the ganache server
     *
     * In WATCH mode, only start the server if this is the first run
     */
    await global.ganacheServer.listen(ganacheServerPort);
    console.log(
      chalk.green.bold('Ganache Server started on'),
      chalk.bold(`${chalk.gray('http://')}localhost:${ganacheServerPort}`),
    );

    /*
     * Write the accounts to a Json file so they're available externally (most likely to trufflepig);
     *
     * If we're in WATCH mode, only write the file once.
     */
    await write(ganacheAccountsFile, JSON.stringify(ganacheAccounts));
    /*
     * If we're in DEBUG mode, tell the user we wrote the accounts file
     */
    if (global.DEBUG) {
      console.log(
        chalk.yellow.bold('Saved accounts to'),
        chalk.bold(ganacheAccountsFile),
        chalk.yellow.bold('JSON file'),
      );
    }

    /*
     * Compile the `colonyNetwork` contracts
     *
     * In WATCH mode, only compile contracts if this is the first run
     */
    const colonyNetworkSubmoduleHead = await git(networkPath).branchLocal();
    console.log(
      chalk.green.bold('Compiling Contracts using'),
      chalk.bold(
        `truffle${chalk.gray('@')}${networkPackage.devDependencies.truffle}`,
      ),
      chalk.green.bold('from'),
      chalk.bold(
        `colonyNetwork${chalk.gray('#')}${colonyNetworkSubmoduleHead.current}`,
      ),
    );
    await exec(
      `${networkPath}/node_modules/.bin/truffle migrate --reset --compile-all`,
      { cwd: networkPath },
    );

    await global.trufflePigServer.start();
    console.log(
      chalk.green.bold('TrufflePig Server started on'),
      chalk.bold(
        `${chalk.gray('http://')}localhost:${trufflePigOptionsServerPort}`,
      ),
    );
  }

  /*
   * Then start the pinning service if it's not already live.
   */
  const pinningServicePort = '9090';
  const portAvailable = await isPortAvailable(pinningServicePort);
  if (portAvailable) {
    console.log(
      chalk.green.bold('Pinning Service:'),
      chalk.bold('starting...'),
    );

    // Note: we use the regular exec, since we need access to the runner object.
    // Note: we start in detached mode so we can start and kill the processes as a group:
    //    When we spawn the pinning service through yarn it starts a tree of processes.
    //    SIGKILL'ing the root process (yarn) leaves zombie processes. Including the server.
    //    Detailed solution: https://azimi.me/2014/12/31/kill-child_process-node-js.html
    global.pinningService = withLogging(childProcess.spawn)(
      'yarn',
      ['test:integration:start-pinning'],
      { detached: true },
    );
    await waitUntilPortIsTaken(pinningServicePort);

    console.log(
      chalk.green.bold('Pinning Service:'),
      chalk.bold('started'),
      'on port:',
      chalk.bold(pinningServicePort),
    );
  } else {
    console.log(
      chalk.green.bold('Pinning Service:'),
      chalk.bold('skipped'),
      'port:',
      chalk.bold(pinningServicePort),
      'is busy',
    );
    global.pinningService = null;
  }

  /*
   * Start running Jest unit tests
   */
  console.log(chalk.green.bold('Starting integration test suites'));

  /*
   * If WATCH mode, and if this is the first run, at this stage we ran it's course.
   * So it's no longer a first run.
   */
  if (global.WATCH && global.WATCH_FIRST_RUN) {
    global.WATCH_FIRST_RUN = false;
  }

  /*
   * @TODO In WATCH mode run teardown
   *
   * Currently we don't run the teardown step in WATCH mode. This is because we
   * can't run it with the current config options `jest` provides us.
   *
   * If they will ever implement a `globalCleanup` config option, then we could
   * do teardown there.
   *
   * This just affects WATCH mode, in a normal run, cleanup/teardown
   * is performed as expected.
   */
};

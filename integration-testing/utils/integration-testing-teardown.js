/* eslint-disable flowtype/require-valid-file-annotation, no-console */

const chalk = require('chalk');

module.exports = async () => {
  /*
   * Stop the ganache server
   *
   * In WATCH mode, only stop the server if this is the first run
   */
  if (!global.WATCH) {
    await global.ganacheServer.stop();
    console.log(chalk.green.bold('Ganache Server Stopped'));

    global.trufflePigServer.close();
    console.log(chalk.green.bold('TrufflePig Server Stopped'));

    /*
     * Cleanup
     *
     * In WATCH mode, only perform cleanup if this is the first run
     */
    global.cleanupArtifacts('Cleaning up unneeded files');
  }

  /*
   * Debug log file
   */
  if (global.DEBUG) {
    console.log(
      chalk.yellow.bold('Saved'),
      chalk.bold('integration-testing-output.log'),
      chalk.yellow.bold('log file'),
    );
  }

  /*
   * If we're NOT in WATCH mode, manually kill the process
   *
   * This is because one of the servers hang and doesn't allow the test runner
   * to shut down gracefully.
   *
   * I suspect this is comming from TrufflePig, but it will require further
   * investigation to be sure.
   *
   * @TODO Cleaner test runner shutdown
   *
   * Find a way to close the process and not rely on `process.exit()`
   */
  if (!global.WATCH) {
    process.exit();
  }
};

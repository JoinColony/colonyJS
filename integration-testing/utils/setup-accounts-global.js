/*
 * We need to add the accounts to the `global` object here, since global setup/teardown
 * does not share the actual global state with the individual test suites.
 *
 * But this does.
 *
 * Also, this needs to be disabled from eslint checks.
 *
 * If you're linting the integration tests code (in a vacuum), this will fail
 * as this is temp file only available during the actual tests run
 */
/* eslint-disable import/no-unresolved */
global.ganacheAccounts = require('../../ganache-accounts.json');

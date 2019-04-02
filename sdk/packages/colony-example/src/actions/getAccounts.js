// Import the prerequisites
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

// An example action for getting local test accounts
const getAccounts = async () => {

  // Instantiate TrufflepigLoader
  const loader = new TrufflepigLoader();

  // Get local test accounts
  const accounts = Object.entries(await loader.getAccounts());

  // Check out the logs to see the local test accounts
  console.log('Accounts:', accounts);

  // Return the local test accounts
  return accounts;

}

// Export getAccounts action
module.exports = getAccounts;

// Import the prerequisites
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

// An example action using TrufflepigLoader to get test accounts
module.exports = async () => {

  // Instantiate TrufflepigLoader
  const loader = new TrufflepigLoader();

  // Get local test accounts
  const accounts = Object.entries(await loader.getAccounts());

  // Check out the logs to see the local test accounts
  console.log('Accounts:', accounts);

  // Return the local test accounts
  return accounts;

};

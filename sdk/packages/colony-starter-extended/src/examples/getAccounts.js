const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

// An example for getting the test accounts
const getAccounts = async () => {

  // Instantiate TrufflepigLoader
  const loader = new TrufflepigLoader();

  // Get ganache test accounts
  const accounts = Object.entries(await loader.getAccounts());

  console.log('Accounts:', accounts);
  
  // Return accounts
  return accounts;

}

// Export getAccounts example
module.exports = getAccounts;

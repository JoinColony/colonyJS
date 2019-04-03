// Import the prerequisites
const { open } = require('@colony/purser-software');

// An example action using the purser "open" method
module.exports = async (privateKey) => {

  // Open a wallet using the private key
  const wallet = await open({ privateKey });

  // Check out the logs to see the address of the wallet
  console.log('Wallet Address: ' + wallet.address);

  // Return wallet
  return wallet;

};

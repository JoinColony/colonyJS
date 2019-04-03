// Import helpers
const log = require('./helpers/log');

// Import actions
const getNetworkClient = require('./actions/getNetworkClient');
const openWallet = require('./actions/openWallet');

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae';

// Run example
(async () => {

  log('openWallet:');

  // Open a wallet using the "openWallet" example action.
  const wallet = await openWallet(
    privateKey,                     // privateKey
  );

  log('getNetworkClient:');

  // Get the network client using the "getNetworkClient" example action.
  const networkClient = await getNetworkClient(
    'rinkeby',                      // network
    wallet,                         // wallet
  );

  log('Complete!');

})()
  .then(() => process.exit())
  .catch(err => console.error(err));

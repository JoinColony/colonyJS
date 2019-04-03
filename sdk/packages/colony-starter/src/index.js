// Import dependencies
const BN = require('bn.js');

// Import helpers
const log = require('./helpers/log');

// Import actions
const claimColonyFunds = require('./actions/claimColonyFunds');
const createColony = require('./actions/createColony');
const createToken = require('./actions/createToken');
const getColonyClient = require('./actions/getColonyClient');
const getNetworkClient = require('./actions/getNetworkClient');
const makePayment = require('./actions/makePayment');
const mintTokens = require('./actions/mintTokens');
const openWallet = require('./actions/openWallet');
const setAdminRole = require('./actions/setAdminRole');
const setTokenOwner = require('./actions/setTokenOwner');

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae';

// Set contract address for OneTxPayment contract
const OneTxPayment = '0xA8DA163375713753Acc7e1D429c64F72b9412077';

// Set the worker address (this is the public key for the second Ganache test account)
const workerAddress = '0x9df24e73f40b2a911eb254a8825103723e13209c';

// Run example
(async () => {

  // Set state
  const state = {}

  log('openWallet:');

  // Open a wallet using the "openWallet" example action.
  state.wallet = await openWallet(
    privateKey,                     // privateKey
  );

  log('getNetworkClient:');

  // Get the network client using the "getNetworkClient" example action.
  state.networkClient = await getNetworkClient(
    'local',                        // network
    state.wallet,                   // wallet
  );

  log('createToken:');

  // Create a token using the "createToken" example action.
  state.tokenAddress = await createToken(
    state.networkClient,            // networkClient
    'TKN',                          // symbol
  );

  log('createColony:');

  // Create a colony using the "createColony" example action.
  state.colony = await createColony(
    state.networkClient,            // networkClient
    state.tokenAddress,             // tokenAddress
  );

  log('getColonyClient:');

  // Get the colony client using the "getColonyClient" example action.
  state.colonyClient = await getColonyClient(
    state.networkClient,            // networkClient
    state.colony.id,                // colonyId
  );

  log('setTokenOwner:');

  // Set the token owner using the "setTokenOwner" example action.
  await setTokenOwner(
    state.colonyClient,             // colonyClient
    state.colony.address,           // colonyAddress
  );

  log('mintTokens:');

  // Mint tokens using the "mintTokens" action.
  await mintTokens(
    state.colonyClient,             // colonyClient
    new BN('1000000000000000000'),  // amount
  );

  log('claimColonyFunds:');

  // Claim colony funds using the "claimColonyFunds" example action.
  await claimColonyFunds(
    state.colonyClient,             // colonyClient
    state.tokenAddress,             // tokenAddress
  );

  log('setAdminRole:');

  // Set an admin role using the "setAdminRole" example action.
  await setAdminRole(
    state.colonyClient,             // colonyClient
    OneTxPayment,                   // user
  );

  log('makePayment:');

  // Make a payment using the "makePayment" example action.
  await makePayment(
    state.colonyClient,             // colonyClient
    workerAddress,                  // worker
    state.tokenAddress,             // token
    new BN('1000000000000000000'),  // amount
    1,                              // domainId
    1,                              // skillId
  );

  log('Complete!');

})()
  .then(() => process.exit())
  .catch(err => console.error(err));

// Import dependencies
const { BN } = require('web3-utils');

// Import helpers
const log = require('./helpers/log');

// Import actions
const addPayment = require('./actions/addPayment');
const claimColonyFunds = require('./actions/claimColonyFunds');
const claimPayment = require('./actions/claimPayment');
const createColony = require('./actions/createColony');
const createToken = require('./actions/createToken');
const finalizePayment = require('./actions/finalizePayment');
const getColonyClient = require('./actions/getColonyClient');
const getNetworkClient = require('./actions/getNetworkClient');
const mintTokens = require('./actions/mintTokens');
const moveFundsBetweenPots = require('./actions/moveFundsBetweenPots');
const openWallet = require('./actions/openWallet');
const setTokenOwner = require('./actions/setTokenOwner');

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae';

// Set the recipient address (this is the public key for the second Ganache test account)
const recipientAddress = '0x9df24e73f40b2a911eb254a8825103723e13209c';

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
    'Token',                        // name
    'TKN',                          // symbol
    18,                             // decimals
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

  log('addPayment:');

  // Make a payment using the "addPayment" example action.
  state.payment = await addPayment(
    state.colonyClient,             // colonyClient
    recipientAddress,               // recipient
    state.tokenAddress,             // token
    new BN('1000000000000000000'),  // amount
    1,                              // domainId
  );

  log('moveFundsBetweenPots:');

  // Move funds between pots using the "moveFundsBetweenPots" example action.
  await moveFundsBetweenPots(
    state.colonyClient,             // colonyClient
    1,                              // fromPot
    state.payment.potId,            // toPot
    new BN('1000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('finalizePayment:');

  // Finalize a payment using the "finalizePayment" example action.
  await finalizePayment(
    state.colonyClient,             // colonyClient
    state.payment.id,               // paymentId
  );

  log('claimPayment:');

  // Claim a payment using the "claimPayment" example action.
  await claimPayment(
    state.colonyClient,             // colonyClient
    state.payment,                  // payment
    state.tokenAddress,             // token
  );

  log('Complete!');

})()
  .then(() => process.exit())
  .catch(err => console.error(err));

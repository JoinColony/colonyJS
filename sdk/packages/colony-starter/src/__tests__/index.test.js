// Import dependencies
const BN = require('bn.js');

// Import actions
const claimColonyFunds = require('../actions/claimColonyFunds');
const createColony = require('../actions/createColony');
const createToken = require('../actions/createToken');
const getColonyClient = require('../actions/getColonyClient');
const getNetworkClient = require('../actions/getNetworkClient');
const makePayment = require('../actions/makePayment');
const mintTokens = require('../actions/mintTokens');
const openWallet = require('../actions/openWallet');
const setAdminRole = require('../actions/setAdminRole');
const setTokenOwner = require('../actions/setTokenOwner');

// Set the public key (this is the public key for the first Ganache test account)
const publicKey = '0xb77d57f4959eafa0339424b83fcfaf9c15407461';

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae';

// Set contract address for OneTxPayment contract
const OneTxPayment = '0xA8DA163375713753Acc7e1D429c64F72b9412077';

// Set the worker address (this is the public key for the second Ganache test account)
const workerAddress = '0x9df24e73f40b2a911eb254a8825103723e13209c';

// Testing colony-starter actions
describe('colony-starter [ local ]', () => {

  // Set state
  const state = {}

  // Test the openWallet() example action
  test('openWallet() works', async () => {
    state.wallet = await openWallet(
      privateKey,                     // privateKey
    );
    expect(state.wallet.address.toLowerCase()).toEqual(publicKey);
  }, 5000)

  // Test the getNetworkClient() example action
  test('getNetworkClient() works', async () => {
    state.networkClient = await getNetworkClient(
      'local',                        // network
      state.wallet,                   // wallet
    );
    expect(state.networkClient).toEqual(expect.objectContaining({
      contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
      })
    }));
  }, 5000);

  // Test the createToken() example action
  test('createToken() works', async () => {
    state.tokenAddress = await createToken(
      state.networkClient,            // networkClient
      'TKN',                          // symbol
    );
    expect(state.tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  // Test the createColony() example action
  test('createColony() works', async () => {
    state.colony = await createColony(
      state.networkClient,            // networkClient
      state.tokenAddress,             // tokenAddress
    );
    expect(state.colony.address).toEqual(expect.stringContaining('0x'));
    expect(state.colony.id).toBeGreaterThan(0);
  }, 5000);

  // Test the getColonyClient() example action
  test('getColonyClient() works', async () => {
    state.colonyClient = await getColonyClient(
      state.networkClient,            // networkClient
      state.colony.id,                // colonyId
    );
    expect(state.colonyClient).toEqual(expect.objectContaining({
      contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the setTokenOwner() example action
  test('setTokenOwner() works', async () => {
    const tokenOwner = await setTokenOwner(
      state.colonyClient,             // colonyClient
      state.colony.address,           // colonyAddress
    );
    expect(tokenOwner).toEqual(state.colony.address);
  }, 5000);

  // Test the mintTokens() example action
  test('mintTokens() works', async () => {
    const tokenSupply = await mintTokens(
      state.colonyClient,             // colonyClient
      new BN('1000000000000000000'),  // amount
    );
    expect(tokenSupply.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the claimColonyFunds() example action
  test('claimColonyFunds() works', async () => {
    const colonyPotBalance = await claimColonyFunds(
      state.colonyClient,             // colonyClient
      state.tokenAddress,             // tokenAddress
    );
    expect(colonyPotBalance.balance.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setAdminRole() example action
  test('setAdminRole() works', async () => {
    const hasAdminRole = await setAdminRole(
      state.colonyClient,             // colonyClient
      OneTxPayment,                   // user
    );
    expect(hasAdminRole).toEqual(true);
  }, 5000);

  // Test the makePayment() example action
  test('makePayment() works', async () => {
    const transaction = await makePayment(
      state.colonyClient,             // colonyClient
      workerAddress,                  // worker
      state.tokenAddress,             // token
      new BN('1000000000000000000'),  // amount
      1,                              // domainId
      1,                              // skillId
    );
    expect(transaction.successful).toEqual(true);
  }, 5000);

});

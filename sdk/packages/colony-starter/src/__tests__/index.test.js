// Import dependencies
const { BN } = require('web3-utils');

// Import actions
const addPayment = require('../actions/addPayment');
const claimColonyFunds = require('../actions/claimColonyFunds');
const claimPayment = require('../actions/claimPayment');
const createColony = require('../actions/createColony');
const createToken = require('../actions/createToken');
const finalizePayment = require('../actions/finalizePayment');
const getColonyClient = require('../actions/getColonyClient');
const getNetworkClient = require('../actions/getNetworkClient');
const mintTokens = require('../actions/mintTokens');
const moveFundsBetweenPots = require('../actions/moveFundsBetweenPots');
const openWallet = require('../actions/openWallet');
const setTokenOwner = require('../actions/setTokenOwner');

// Set the public key (this is the public key for the first Ganache test account)
const publicKey = '0xb77d57f4959eafa0339424b83fcfaf9c15407461';

// Set the private key (this is the private key for the first Ganache test account)
const privateKey = '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae';

// Set the recipient address (this is the public key for the second Ganache test account)
const recipientAddress = '0x9df24e73f40b2a911eb254a8825103723e13209c';

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
      'Token',                        // name
      'TKN',                          // symbol
      18,                             // decimals
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

  // Test the addPayment() example action
  test('addPayment() works', async () => {
    state.payment = await addPayment(
      state.colonyClient,             // colonyClient
      recipientAddress,               // recipient
      state.tokenAddress,             // token
      new BN('1000000000000000000'),  // amount
      1,                              // domainId
    );
    expect(state.payment.id).toBeGreaterThan(0);
    expect(state.payment.potId).toBeGreaterThan(0);
  }, 5000);

  // Test the moveFundsBetweenPots() action
  test('moveFundsBetweenPots() works', async () => {
    const potBalance = await moveFundsBetweenPots(
      state.colonyClient,             // colonyClient
      1,                              // fromPot
      state.payment.potId,            // toPot
      new BN('1000000000000000000'),  // amount
      state.tokenAddress,             // token
    );
    expect(potBalance.balance.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the finalizePayment() action
  test('finalizePayment() works', async () => {
    state.payment = await finalizePayment(
      state.colonyClient,             // colonyClient
      1,                              // fromPot
      state.payment.potId,            // toPot
      new BN('1000000000000000000'),  // amount
      state.tokenAddress,             // token
    );
    expect(state.payment.finalized).toEqual(true);
  }, 5000);

  // Test the claimPayment() action
  test('claimPayment() works', async () => {
    const taskPayout = await claimPayment(
      state.colonyClient,             // colonyClient
      state.payment,                  // payment
      state.tokenAddress,             // token
    );
    expect(taskPayout.balance.toString()).toEqual('0');
  }, 5000);

});

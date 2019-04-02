// Import prerequisites
const BN = require('bn.js');

// Import actions
const addDomain = require('../actions/addDomain');
const claimColonyFunds = require('../actions/claimColonyFunds');
const connectNetwork = require('../actions/connectNetwork');
const createColony = require('../actions/createColony');
const createTask = require('../actions/createTask');
const createToken = require('../actions/createToken');
const getAccounts = require('../actions/getAccounts');
const getColonyClient = require('../actions/getColonyClient');
const mintTokens = require('../actions/mintTokens');
const moveFundsBetweenPots = require('../actions/moveFundsBetweenPots');
const setTokenOwner = require('../actions/setTokenOwner');

// Database
DATABASE = {
  operations: {},
};

// State
const state = {
  networkClient: [],    // networkClient (per account)
  colonyClient: [],     // colonyClient (per account)
};

// Testing colony-starter actions
describe('colony-starter [ local ]', () => {

  // Test TrufflepigLoader getAccounts()
  test('getAccounts() works', async () => {
    state.accounts = await getAccounts();
    expect(state.accounts.length).toEqual(12);
  }, 5000)

  // Test the connectNetwork() action from account[0]
  test('account[0] connectNetwork() works', async () => {
    state.networkClient[0] = await connectNetwork(
      'local',                        // network
      state.accounts[0][1],           // privateKey
    );
    expect(state.networkClient[0]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
      })
    }));
  }, 5000);

  // Test the createToken() action from account[0]
  test('account[0] createToken() works', async () => {
    state.tokenAddress = await createToken(
      state.networkClient[0],         // networkClient
      'Token',                        // name
      'TKN',                          // symbol
    );
    expect(state.tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  // Test the createColony() action from account[0]
  test('account[0] createColony() works', async () => {
    state.colony = await createColony(
      state.networkClient[0],         // networkClient
      state.tokenAddress,             // tokenAddress
    );
    expect(state.colony.address).toEqual(expect.stringContaining('0x'));
    expect(state.colony.id).toBeGreaterThan(0);
  }, 5000);

  // Test the getColonyClient() action from account[0]
  test('account[0] getColonyClient() works', async () => {
    state.colonyClient[0] = await getColonyClient(
      state.networkClient[0],         // networkClient
      state.colony.id,                // colonyId
    );
    expect(state.colonyClient[0]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the setTokenOwner() action from account[0]
  test('account[0] setTokenOwner() works', async () => {
    const tokenOwner = await setTokenOwner(
      state.colonyClient[0],          // colonyClient
      state.colony.address,           // colonyAddress
    );
    expect(tokenOwner).toEqual(state.colony.address);
  }, 5000);

  // Test the mintTokens() action from account[0]
  test('account[0] mintTokens() works', async () => {
    const tokenSupply = await mintTokens(
      state.colonyClient[0],          // colonyClient
      new BN('3000000000000000000'),  // amount
    );
    expect(tokenSupply.amount.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the claimColonyFunds() action from account[0]
  test('account[0] claimColonyFunds() works', async () => {
    const colonyPotBalance = await claimColonyFunds(
      state.colonyClient[0],          // colonyClient
      state.tokenAddress,             // tokenAddress
    );
    expect(colonyPotBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the addDomain() action from account[0]
  test('account[0] addDomain() works', async () => {
    state.domain = await addDomain(
      state.colonyClient[0],          // colonyClient
      1,                              // parentDomainId
    );
    expect(state.domain.id).toBeGreaterThan(1);
  }, 5000);

  // Test the moveFundsBetweenPots() action from account[0]
  test('account[0] moveFundsBetweenPots() works with token', async () => {
    const potBalance = await moveFundsBetweenPots(
      state.colonyClient[0],          // colonyClient
      1,                              // fromPot
      state.domain.potId,             // toPot
      new BN('3000000000000000000'),  // amount
      state.tokenAddress,             // token
    );
    expect(potBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the createTask() action from account[0]
  test('account[0] createTask() works', async () => {
    state.task = await createTask(
      state.colonyClient[0],          // colonyClient
      state.domain.id,                // domainId
      {
        title: 'New Task Title',                  // title
        description: 'New Task Description',      // description
      },
    );
    expect(state.task).toEqual(expect.objectContaining({
      domainId: state.domain.id,
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 15000);

});

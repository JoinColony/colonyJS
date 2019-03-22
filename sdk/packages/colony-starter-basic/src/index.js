// Import prerequisites
const BN = require('bn.js');
const log = require('./helpers/log');

// Import examples
const addDomain = require('./examples/addDomain');
const claimColonyFunds = require('./examples/claimColonyFunds');
const connectNetwork = require('./examples/connectNetwork');
const createColony = require('./examples/createColony');
const createTask = require('./examples/createTask');
const createToken = require('./examples/createToken');
const getAccounts = require('./examples/getAccounts');
const getColonyClient = require('./examples/getColonyClient');
const mintTokens = require('./examples/mintTokens');
const moveFundsBetweenPots = require('./examples/moveFundsBetweenPots');
const setTokenOwner = require('./examples/setTokenOwner');

// The global database object will act as a mock database where we will store
// our pending multisig operations so that we can restore the operations when
// we need to sign them from another account.
DATABASE = {
  operations: {},
};

// In order to demonstrate the complete task lifecycle, we will need to call
// some of the examples using different accounts. The state object below will
// store the accounts and the networkClient and colonyClient for each account
// as well as state that will be shared across all accounts.
const state = {
  colonyClient: [],               // colonyClient (per account)
  networkClient: [],              // networkClient (per account)
};

// A method that runs through the examples
const colonyStarterExample = async () => {

  log('account[0] getAccounts:');

  // Get the ganache test accounts and then store the returned "accounts" in
  // the state object.
  state.accounts = await getAccounts();

  log('account[0] connectNetwork:');

  // Connect to the network using the "connectNetwork" example and then store
  // the returned "networkClient" in the state object.
  state.networkClient[0] = await connectNetwork(
    'local',                        // network
    state.accounts[0][1],           // privateKey
  );

  log('account[0] createToken:');

  // Create a new ERC20 token using the "createToken" example and then store
  // the returned "tokenAddress" in the state object.
  state.tokenAddress = await createToken(
    state.networkClient[0],         // networkClient
    'Token',                        // name
    'TKN',                          // symbol
  );

  log('account[0] createColony:');

  // Create a new colony with our new token using the "createColony" example
  // and then store the returned "colony" in the state object.
  state.colony = await createColony(
    state.networkClient[0],         // networkClient
    state.tokenAddress,             // tokenAddress
  );

  log('account[0] getColonyClient:');

  // Get the client for our new colony using the "getColonyClient" example and
  // then store the returned "colonyClient" in the state object.
  state.colonyClient[0] = await getColonyClient(
    state.networkClient[0],         // networkClient
    state.colony.id,                // colonyId
  );

  log('account[0] setTokenOwner:');

  // Set our new colony as the owner of our new token using the "setTokenOwner"
  // example. This will allow our colony to mint and claim tokens.
  await setTokenOwner(
    state.colonyClient[0],          // colonyClient
    state.colony.address,           // colonyAddress
  );

  log('account[0] mintTokens:');

  // Mint tokens for our new token using the "mintTokens" example.
  await mintTokens(
    state.colonyClient[0],          // colonyClient
    new BN('3000000000000000000'),  // amount
  );

  log('account[0] claimColonyFunds:');

  // Claim tokens for our new colony using the "claimColonyFunds" example.
  await claimColonyFunds(
    state.colonyClient[0],          // colonyClient
    state.tokenAddress,             // tokenAddress
  );

  log('account[0] addDomain:');

  // Add a new domain to our new colony using the "addDomain" example and then
  // store the returned "domain" in the state object. Each colony comes with a
  // root domain. In this case, we want the root domain to be the parent of our
  // new domain, so we will use "1" for "parentDomainId".
  state.domain = await addDomain(
    state.colonyClient[0],          // colonyClient
    1,                              // parentDomainId
  );

  log('account[0] moveFundsBetweenPots:');

  // Move tokens to our domain using the "moveFundsBetweenPots" example.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    1,                              // fromPot
    state.domain.potId,             // toPot
    new BN('3000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] createTask:');

  // Create a new task within our new domain using the "createTask" example and
  // then store the returned "task" in the state object. We could also create a
  // new task within the root domain, using "1" for the "domainId", but here we
  // will use the "domainId" of our new domain, which has a value of "2".
  state.task = await createTask(
    state.colonyClient[0],          // colonyClient
    state.domain.id,                // domainId
    {
      title: 'New Task Title',                  // title
      description: 'New Task Description',      // description
    },
  );

  log('Complete!');

}

// Execute example
colonyStarterExample()
  .then(() => process.exit())
  .catch(err => console.error(err));

// Import prerequisites
const { EMPTY_ADDRESS } = require('@colony/colony-js-client');
const BN = require('bn.js');
const log = require('./helpers/log');

// Import actions
const addDomain = require('./actions/addDomain');
const addGlobalSkill = require('./actions/addGlobalSkill');
const claimColonyFunds = require('./actions/claimColonyFunds');
const claimPayout = require('./actions/claimPayout');
const createColony = require('./actions/createColony');
const createTask = require('./actions/createTask');
const createToken = require('./actions/createToken');
const finalizeTask = require('./actions/finalizeTask');
const getAccounts = require('./actions/getAccounts');
const getColonyClient = require('./actions/getColonyClient');
const getNetworkClient = require('./actions/getNetworkClient');
const makePayment = require('./actions/makePayment');
const mintTokens = require('./actions/mintTokens');
const moveFundsBetweenPots = require('./actions/moveFundsBetweenPots');
const openWallet = require('./actions/openWallet');
const removeTaskEvaluatorRole = require('./actions/removeTaskEvaluatorRole');
const revealTaskWorkRating = require('./actions/revealTaskWorkRating');
const sendEther = require('./actions/sendEther');
const setAdminRole = require('./actions/setAdminRole');
const setTaskBrief = require('./actions/setTaskBrief');
const setTaskDueDate = require('./actions/setTaskDueDate');
const setTaskEvaluatorPayout = require('./actions/setTaskEvaluatorPayout');
const setTaskEvaluatorRole = require('./actions/setTaskEvaluatorRole');
const setTaskManagerPayout = require('./actions/setTaskManagerPayout');
const setTaskSkill = require('./actions/setTaskSkill');
const setTaskWorkerPayout = require('./actions/setTaskWorkerPayout');
const setTaskWorkerRole = require('./actions/setTaskWorkerRole');
const setTokenOwner = require('./actions/setTokenOwner');
const signRemoveTaskEvaluatorRole = require('./actions/signRemoveTaskEvaluatorRole');
const signSetTaskBrief = require('./actions/signSetTaskBrief');
const signSetTaskEvaluatorPayout = require('./actions/signSetTaskEvaluatorPayout');
const signSetTaskEvaluatorRole = require('./actions/signSetTaskEvaluatorRole');
const signSetTaskManagerPayout = require('./actions/signSetTaskManagerPayout');
const signSetTaskSkill = require('./actions/signSetTaskSkill');
const signSetTaskWorkerPayout = require('./actions/signSetTaskWorkerPayout');
const signSetTaskWorkerRole = require('./actions/signSetTaskWorkerRole');
const signSetTaskDueDate = require('./actions/signSetTaskDueDate');
const submitTaskDeliverable = require('./actions/submitTaskDeliverable');
const submitTaskWorkRating = require('./actions/submitTaskWorkRating');

// The global database object will act as a mock database where we will store
// our pending multisig operations so that we can restore the operations when
// we need to sign them from another account.
DATABASE = {
  operations: {},
};

// Set contract address for OneTxPayment contract
const OneTxPayment = '0xA8DA163375713753Acc7e1D429c64F72b9412077';

// Run example
(async () => {

  // In order to demonstrate the complete task lifecycle, we will need to call
  // some of the actions using different accounts. The state object below will
  // store the wallets and the networkClient and colonyClient for each account
  // as well as state that will be shared across all accounts.
  const state = {
    colonyClient: [],               // colonyClient (per account)
    networkClient: [],              // networkClient (per account)
    wallets: [],                    // wallets (per account)
  };

  log('getAccounts:');

  // Get the test accounts using the "getAccounts" example action.
  state.accounts = await getAccounts();

  log('account[0] openWallet:');

  // Open a wallet using the "openWallet" example action.
  state.wallets[0] = await openWallet(
    state.accounts[0][1],           // privateKey
  );

  log('account[0] getNetworkClient:');

  // Get the network client using the "getNetworkClient" example action.
  state.networkClient[0] = await getNetworkClient(
    'local',                        // network
    state.wallets[0],                // wallet
  );

  log('account[0] createToken:');

  // Create a token using the "createToken" example action.
  state.tokenAddress = await createToken(
    state.networkClient[0],         // networkClient
    'TKN',                          // symbol
  );

  log('account[0] createColony:');

  // Create a colony using the "createColony" example action.
  state.colony = await createColony(
    state.networkClient[0],         // networkClient
    state.tokenAddress,             // tokenAddress
  );

  log('account[0] getColonyClient:');

  // Get the colony client using the "getColonyClient" example action.
  state.colonyClient[0] = await getColonyClient(
    state.networkClient[0],         // networkClient
    state.colony.id,                // colonyId
  );

  log('account[0] setTokenOwner:');

  // Set the token owner using the "setTokenOwner" example action.
  await setTokenOwner(
    state.colonyClient[0],          // colonyClient
    state.colony.address,           // colonyAddress
  );

  log('account[0] mintTokens:');

  // Mint tokens using the "mintTokens" example action.
  await mintTokens(
    state.colonyClient[0],          // colonyClient
    new BN('4000000000000000000'),  // amount
  );

  log('account[0] sendEther:');

  // Send ether using the "sendEther" example action.
  await sendEther(
    state.colonyClient[0],          // colonyClient
    state.colony.address,           // to
    new BN('4000000000000000000'),  // amount
  );

  log('account[0] claimColonyFunds [ token ]:');

  // Claim colony funds using the "claimColonyFunds" example action.
  await claimColonyFunds(
    state.colonyClient[0],          // colonyClient
    state.tokenAddress,             // tokenAddress
  );

  log('account[0] claimColonyFunds [ ether ]:');

  // Claim colony funds using the "claimColonyFunds" example action.
  await claimColonyFunds(
    state.colonyClient[0],          // colonyClient
    EMPTY_ADDRESS,                  // tokenAddress
  );

  log('account[0] setAdminRole:');

  // Set an admin role using the "setAdminRole" example action.
  await setAdminRole(
    state.colonyClient[0],          // colonyClient
    OneTxPayment,                   // user
  );

  log('account[0] makePayment [ token ]:');

  // Make a payment using the "makePayment" example action.
  await makePayment(
    state.colonyClient[0],          // colonyClient
    state.accounts[2][0],           // worker
    state.tokenAddress,             // token
    new BN('1000000000000000000'),  // amount
    1,                              // domainId
    1,                              // skillId
  );

  log('account[0] makePayment [ ether ]:');

  // Make a payment using the "makePayment" example action.
  await makePayment(
    state.colonyClient[0],          // colonyClient
    state.accounts[2][0],           // worker
    EMPTY_ADDRESS,                  // token
    new BN('1000000000000000000'),  // amount
    1,                              // domainId
    1,                              // skillId
  );

  log('account[0] addDomain:');

  // Add a domain using the "addDomain" example action.
  state.domain = await addDomain(
    state.colonyClient[0],          // colonyClient
    1,                              // parentDomainId
  );

  log('account[0] moveFundsBetweenPots [ token ]:');

  // Move funds between pots using the "moveFundsBetweenPots" example action.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    1,                              // fromPot
    state.domain.potId,             // toPot
    new BN('3000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] moveFundsBetweenPots [ ether ]:');

  // Move funds betweed pots using the "moveFundsBetweenPots" example action.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    1,                              // fromPot
    state.domain.potId,             // toPot
    new BN('3000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] createTask:');

  // Create a task using the "createTask" example action.
  state.task = await createTask(
    state.colonyClient[0],          // colonyClient
    state.domain.id,                // domainId
    {
      title: 'New Task Title',                  // title
      description: 'New Task Description',      // description
    },
  );

  log('account[0] moveFundsBetweenPots [ token ]:');

  // Move funds between pots using the "moveFundsBetweenPots" example action.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    state.domain.potId,             // fromPot
    state.task.potId,               // toPot
    new BN('3000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] moveFundsBetweenPots [ ether ]:');

  // Move funds between pots using the "moveFundsBetweenPots" example action.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    state.domain.potId,             // fromPot
    state.task.potId,               // toPot
    new BN('3000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] addGlobalSkill:');

  // Add a global skill using the "addGlobalSkill" example action.
  state.skill = await addGlobalSkill(
    state.networkClient[0],         // networkClient
    1,                              // parentSkillId
  );

  log('account[0] setTaskSkill:');

  // Set the task skill using the "setTaskSkill" example action.
  await setTaskSkill(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.skill.id,                 // skillId
  );

  log('account[0] signSetTaskSkill:');

  // Sign the operation using the "signSetTaskSkill" example action.
  await signSetTaskSkill(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskDueDate:');

  // Set the task due date using the "setTaskDueDate" action.
  await setTaskDueDate(
    state.colonyClient[0],              // colonyClient
    state.task.id,                      // taskId
    new Date(Date.now() + 2678400000),  // dueDate
  );

  log('account[0] signSetTaskDueDate:');

  // Sign the operation using the "signSetTaskDueDate" example action.
  await signSetTaskDueDate(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskManagerPayout [ token ]:');

  // Set the manager payout using the "setTaskManagerPayout" example action.
  await setTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskManagerPayout [ token ]:');

  // Sign the operation using the "signSetTaskManagerPayout" example action.
  await signSetTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.tokenAddress,             // token
  );

  log('account[0] setTaskManagerPayout [ ether ]:');

  // Set the manager payout using the "setTaskManagerPayout" example action.
  await setTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] signSetTaskManagerPayout [ ether ]:');

  // Sign the operation using the "signSetTaskManagerPayout" example action.
  await signSetTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] setTaskEvaluatorPayout [ token ]:');

  // Set the evaluator payout using the "setTaskEvaluatorPayout" example action.
  await setTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskEvaluatorPayout [ token ]:');

  // Sign the operation using the "signSetTaskEvaluatorPayout" example action.
  await signSetTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.tokenAddress,             // token
  );

  log('account[0] setTaskEvaluatorPayout [ ether ]:');

  // Set the evaluator payout using the "setTaskEvaluatorPayout" example action.
  await setTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] signSetTaskEvaluatorPayout [ ether ]:');

  // Sign the operation using the "signSetTaskEvaluatorPayout" example action.
  await signSetTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] setTaskWorkerPayout [ token ]:');

  // Set the worker payout using the "setTaskWorkerPayout" example action.
  await setTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskWorkerPayout [ token ]:');

  // Sign the operation using the "signSetTaskWorkerPayout" example action.
  await signSetTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.tokenAddress,             // token
  );

  log('account[0] setTaskWorkerPayout [ ether ]:');

  // Set the worker payout using the "setTaskWorkerPayout" example action.
  await setTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] signSetTaskWorkerPayout [ ether ]:');

  // Sign the operation using the "signSetTaskWorkerPayout" example action.
  await signSetTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] removeTaskEvaluatorRole:');

  // Remove the evaluator using the "removeTaskEvaluatorRole" example action.
  await removeTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] signRemoveTaskEvaluatorRole:');

  // Sign the operation using the "signRemoveTaskEvaluatorRole" example action.
  await signRemoveTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskEvaluatorRole:');

  // Set the evaluator using the "setTaskEvaluatorRole" action.
  await setTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.accounts[1][0],           // user
  );

  log('account[0] signSetTaskEvaluatorRole:');

  // Sign the operation using the "signSetTaskEvaluatorRole" example action.
  await signSetTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[1] openWallet:');

  // Open a wallet using the "openWallet" example action.
  state.wallets[1] = await openWallet(
    state.accounts[1][1],           // privateKey
  );

  log('account[1] getNetworkClient:');

  // Get the network client using the "getNetworkClient" example action.
  state.networkClient[1] = await getNetworkClient(
    'local',                        // network
    state.wallets[1],                // wallet
  );

  log('account[1] getColonyClient:');

  // Get the colony client using the "getColonyClient" example action.
  state.colonyClient[1] = await getColonyClient(
    state.networkClient[1],         // networkClient
    state.colony.id,                // colonyId
  );

  log('account[1] signSetTaskEvaluatorRole:');

  // Sign the operation using the "signSetTaskEvaluatorRole" example action.
  await signSetTaskEvaluatorRole(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskWorkerRole:');

  // Set the worker using the "setTaskWorkerRole" example action.
  await setTaskWorkerRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.accounts[2][0],           // user
  );

  log('account[0] signSetTaskWorkerRole:');

  // Sign the operation using the "signSetTaskWorkerRole" example action.
  await signSetTaskWorkerRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] openWallet:');

  // Open a wallet using the "openWallet" example action.
  state.wallets[2] = await openWallet(
    state.accounts[2][1],           // privateKey
  );

  log('account[2] getNetworkClient:');

  // Get the network client using the "getNetworkClient" example action.
  state.networkClient[2] = await getNetworkClient(
    'local',                        // network
    state.wallets[2],                // wallet
  );

  log('account[2] getColonyClient:');

  // Get the colony client using the "getColonyClient" example action.
  state.colonyClient[2] = await getColonyClient(
    state.networkClient[2],         // networkClient
    state.colony.id,                // colonyId
  );

  log('account[2] signSetTaskWorkerRole:');

  // Sign the operation using the "signSetTaskWorkerRole" example action.
  await signSetTaskWorkerRole(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskBrief:');

  // Set the task specification using the "setTaskBrief" example action.
  await setTaskBrief(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    {
      title: 'Updated Task Title',                  // title
      description: 'Updated Task Description',      // description
    },
  );

  log('account[0] signSetTaskBrief:');

  // Sign the operation using the "signSetTaskBrief" example action.
  await signSetTaskBrief(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] signSetTaskBrief:');

  // Sign the operation using the "signSetTaskBrief" example action.
  await signSetTaskBrief(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] submitTaskDeliverable:');

  // Submit the task work using the "submitTaskDeliverable" example action.
  await submitTaskDeliverable(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    {
      message: 'Work Complete',     // message
    },
  );

  log('account[1] submitTaskWorkRating:');

  // Submit a worker rating using the "submitTaskWorkRating" example action.
  await submitTaskWorkRating(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    2,                              // rating
  );

  log('account[2] submitTaskWorkRating:');

  // Submit a manager rating using the "submitTaskWorkRating" example action.
  await submitTaskWorkRating(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    2,                              // rating
  );

  log('account[1] revealTaskWorkRating:');

  // Reveal the worker rating using the "revealTaskWorkRating" example action.
  await revealTaskWorkRating(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    2,                              // rating
  );

  log('account[2] revealTaskWorkRating:');

  // Reveal the manager rating using the "revealTaskWorkRating" example action.
  await revealTaskWorkRating(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    2,                              // rating
  );

  log('account[0] finalizeTask:');

  // Finalize the task using the "finalizeTask" example action.
  await finalizeTask(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] claimPayout [ token ]:');

  // Claim the manager payout using the "claimPayout" example action.
  await claimPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    state.tokenAddress,             // token
  );

  log('account[0] claimPayout [ ether ]:');

  // Claim the manager payout using the "claimPayout" example action.
  await claimPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    EMPTY_ADDRESS,                  // token
  );

  log('account[1] claimPayout [ token ]:');

  // Claim the evaluator payout using the "claimPayout" example action.
  await claimPayout(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'EVALUATOR',                    // role
    state.tokenAddress,             // token
  );

  log('account[1] claimPayout [ ether ]:');

  // Claim the evaluator payout using the "claimPayout" example action.
  await claimPayout(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'EVALUATOR',                    // role
    EMPTY_ADDRESS,                  // token
  );

  log('account[2] claimPayout [ token ]:');

  // Claim the worker payout using the "claimPayout" example action.
  await claimPayout(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    state.tokenAddress,             // token
  );
  log('account[2] claimPayout [ ether ]:');

  // Claim the worker payout using the "claimPayout" example action.
  await claimPayout(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    EMPTY_ADDRESS,                  // token
  );

  log('Complete!');

})()
  .then(() => process.exit())
  .catch(err => console.error(err));

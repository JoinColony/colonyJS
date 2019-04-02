// Import prerequisites
const { EMPTY_ADDRESS } = require('@colony/colony-js-client');
const BN = require('bn.js');
const log = require('./helpers/log');

// Import actions
const addDomain = require('./actions/addDomain');
const addGlobalSkill = require('./actions/addGlobalSkill');
const claimColonyFunds = require('./actions/claimColonyFunds');
const claimPayout = require('./actions/claimPayout');
const connectNetwork = require('./actions/connectNetwork');
const createColony = require('./actions/createColony');
const createTask = require('./actions/createTask');
const createToken = require('./actions/createToken');
const finalizeTask = require('./actions/finalizeTask');
const getAccounts = require('./actions/getAccounts');
const getColonyClient = require('./actions/getColonyClient');
const mintTokens = require('./actions/mintTokens');
const moveFundsBetweenPots = require('./actions/moveFundsBetweenPots');
const removeTaskEvaluatorRole = require('./actions/removeTaskEvaluatorRole');
const revealTaskWorkRating = require('./actions/revealTaskWorkRating');
const sendEther = require('./actions/sendEther');
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

// In order to demonstrate the complete task lifecycle, we will need to call
// some of the actions using different accounts. The state object below will
// store the accounts and the networkClient and colonyClient for each account
// as well as state that will be shared across all accounts.
const state = {
  colonyClient: [],               // colonyClient (per account)
  networkClient: [],              // networkClient (per account)
};

// Run example
(async () => {

  log('account[0] getAccounts:');

  // Get the ganache test accounts and then store the returned "accounts" in
  // the state object.
  state.accounts = await getAccounts();

  log('account[0] connectNetwork:');

  // Connect to the network using the "connectNetwork" action and then store
  // the returned "networkClient" in the state object.
  state.networkClient[0] = await connectNetwork(
    'local',                        // network
    state.accounts[0][1],           // privateKey
  );

  log('account[0] createToken:');

  // Create a new ERC20 token using the "createToken" action and then store
  // the returned "tokenAddress" in the state object.
  state.tokenAddress = await createToken(
    state.networkClient[0],         // networkClient
    'Token',                        // name
    'TKN',                          // symbol
  );

  log('account[0] createColony:');

  // Create a new colony with our new token using the "createColony" action
  // and then store the returned "colony" in the state object.
  state.colony = await createColony(
    state.networkClient[0],         // networkClient
    state.tokenAddress,             // tokenAddress
  );

  log('account[0] getColonyClient:');

  // Get the client for our new colony using the "getColonyClient" action and
  // then store the returned "colonyClient" in the state object.
  state.colonyClient[0] = await getColonyClient(
    state.networkClient[0],         // networkClient
    state.colony.id,                // colonyId
  );

  log('account[0] setTokenOwner:');

  // Set our new colony as the owner of our new token using the "setTokenOwner"
  // action. This will allow our colony to mint and claim tokens.
  await setTokenOwner(
    state.colonyClient[0],          // colonyClient
    state.colony.address,           // colonyAddress
  );

  log('account[0] mintTokens:');

  // Mint tokens for our new token using the "mintTokens" action.
  await mintTokens(
    state.colonyClient[0],          // colonyClient
    new BN('3000000000000000000'),  // amount
  );

  log('account[0] sendEther:');

  // Send ether to the colony using the "sendEther" action.
  await sendEther(
    state.colonyClient[0],          // accountIndex
    new BN('3000000000000000000'),  // amount
  );

  log('account[0] claimColonyFunds:');

  // Claim tokens for our new colony using the "claimColonyFunds" action.
  await claimColonyFunds(
    state.colonyClient[0],          // colonyClient
    state.tokenAddress,             // tokenAddress
  );

  log('account[0] claimColonyFunds:');

  // Claim ether for our new colony using the "claimColonyFunds" action.
  await claimColonyFunds(
    state.colonyClient[0],          // colonyClient
    EMPTY_ADDRESS,                  // tokenAddress
  );

  log('account[0] addDomain:');

  // Add a new domain to our new colony using the "addDomain" action and then
  // store the returned "domain" in the state object. Each colony comes with a
  // root domain. In this case, we want the root domain to be the parent of our
  // new domain, so we will use "1" for "parentDomainId".
  state.domain = await addDomain(
    state.colonyClient[0],          // colonyClient
    1,                              // parentDomainId
  );

  log('account[0] moveFundsBetweenPots:');

  // Move tokens to our domain using the "moveFundsBetweenPots" action.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    1,                              // fromPot
    state.domain.potId,             // toPot
    new BN('3000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] moveFundsBetweenPots:');

  // Move ether to our domain using the "moveFundsBetweenPots" action.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    1,                              // fromPot
    state.domain.potId,             // toPot
    new BN('3000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] createTask:');

  // Create a new task within our new domain using the "createTask" action and
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

  log('account[0] moveFundsBetweenPots:');

  // Move tokens to our task using the "moveFundsBetweenPots" action.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    state.domain.potId,             // fromPot
    state.task.potId,               // toPot
    new BN('3000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] moveFundsBetweenPots:');

  // Move ether to our task using the "moveFundsBetweenPots" action.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    state.domain.potId,             // fromPot
    state.task.potId,               // toPot
    new BN('3000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] addGlobalSkill:');

  // Add a new global skill using the "addGlobalSkill" action and then store
  // the returned "skill" in the state object. Each Colony Network comes with
  // a root global skill. In this case, we want our new global skill to be the
  // child of the root global skill, so we will use "1" for "parentSkillId".
  state.skill = await addGlobalSkill(
    state.networkClient[0],         // networkClient
    1,                              // parentSkillId
  );

  log('account[0] setTaskSkill:');

  // Set the skill of our new task using the "setTaskSkill" action and then
  // store the updated "task" in the state object. In this case, we are going
  // to update the "skillId" of our new task using our new global skill.
  await setTaskSkill(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.skill.id,                 // skillId
  );

  log('account[0] signSetTaskSkill:');

  // Sign the operation associated with our changes to the task skill using
  // the "signSetTaskSkill" action. The requested changes were made before we
  // assigned a worker to our task, so the changes only need to be approved
  // by the manager of the task, which is the account that created the task.
  await signSetTaskSkill(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskDueDate:');

  // Set the due date of our new task using the "setTaskDueDate" action. The
  // "setTaskDueDate" action starts a multisig operation and then stores the
  // operation in our database. The operation will need to be signed by all
  // "requiredSignees" before the changes to our task will take affect.
  await setTaskDueDate(
    state.colonyClient[0],              // colonyClient
    state.task.id,                      // taskId
    new Date(Date.now() + 2678400000),  // dueDate
  );

  log('account[0] signSetTaskDueDate:');

  // Sign the operation associated with our changes to the task due date using
  // the "signSetTaskDueDate" action and then store the updated task in the state
  // object. The requested changes were made before we assigned a worker to our
  // task, so the changes only need to be approved by the manager of the task.
  await signSetTaskDueDate(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskManagerPayout:');

  // Set the amount of tokens we want to payout the manager of our task using
  // the "setTaskManagerPayout" action.
  await setTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskManagerPayout:');

  // Sign the multisig operation associated with our changes to the manager
  // payout using the "signSetTaskManagerPayout" action. The requested changes
  // were made before we assigned a manager to our task, so the changes will
  // only need to be approved by the current manager of the task.
  await signSetTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.tokenAddress,             // token
  );

  log('account[0] setTaskManagerPayout:');

  // Set the amount of ether we want to payout the manager of our task using
  // the "setTaskManagerPayout" action.
  await setTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] signSetTaskManagerPayout:');

  // Sign the multisig operation associated with our changes to the manager
  // payout using the "signSetTaskManagerPayout" action. The requested changes
  // were made before we assigned a manager to our task, so the changes will
  // only need to be approved by the current manager of the task.
  await signSetTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] setTaskEvaluatorPayout:');

  // Set the amount of tokens we want to payout the evaluator of our task using
  // the "setTaskEvaluatorPayout" action. The "setTaskEvaluatorPayout" action
  // starts a multisig operation and then stores the operation in our database.
  // The operation will need to be signed by all "requiredSignees" before the
  // changes to the payout will take affect.
  await setTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskEvaluatorPayout:');

  // Sign the multisig operation associated with our changes to the evaluator
  // payout using the "signSetTaskEvaluatorPayout" action. The requested changes
  // were made before we assigned an evaluator to our task, so the changes will
  // only need to be approved by the manager of the task.
  await signSetTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.tokenAddress,             // token
  );

  log('account[0] setTaskEvaluatorPayout:');

  // Set the amount of ether we want to payout the evaluator of our task using
  // the "setTaskEvaluatorPayout" action. The "setTaskEvaluatorPayout" action
  // starts a multisig operation and then stores the operation in our database.
  // The operation will need to be signed by all "requiredSignees" before the
  // changes to the payout will take affect.
  await setTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] signSetTaskEvaluatorPayout:');

  // Sign the multisig operation associated with our changes to the evaluator
  // payout using the "signSetTaskEvaluatorPayout" action. The requested changes
  // were made before we assigned an evaluator to our task, so the changes will
  // only need to be approved by the manager of the task.
  await signSetTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] setTaskWorkerPayout:');

  // Set the amount of tokens we want to payout the worker of our task using
  // the "setTaskWorkerPayout" action. The "setTaskWorkerPayout" action
  // starts a multisig operation and then stores the operation in our database.
  // The operation will need to be signed by all "requiredSignees" before the
  // changes to the payout will take affect.
  await setTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskWorkerPayout:');

  // Sign the multisig operation associated with our changes to the worker
  // payout using the "signSetTaskWorkerPayout" action. The requested changes
  // were made before we assigned a worker to our task, so the changes will
  // only need to be approved by the manager of the task.
  await signSetTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.tokenAddress,             // token
  );

  log('account[0] setTaskWorkerPayout:');

  // Set the amount of ether we want to payout the worker of our task using
  // the "setTaskWorkerPayout" action. The "setTaskWorkerPayout" action
  // starts a multisig operation and then stores the operation in our database.
  // The operation will need to be signed by all "requiredSignees" before the
  // changes to the payout will take affect.
  await setTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    new BN('1000000000000000000'),  // amount
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] signSetTaskWorkerPayout:');

  // Sign the multisig operation associated with our changes to the worker
  // payout using the "signSetTaskWorkerPayout" action. The requested changes
  // were made before we assigned a worker to our task, so the changes will
  // only need to be approved by the manager of the task.
  await signSetTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    EMPTY_ADDRESS,                  // token
  );

  log('account[0] removeTaskEvaluatorRole:');

  // Remove the evaluator of our task using the "removeTaskEvaluatorRole" action.
  await removeTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] signRemoveTaskEvaluatorRole:');

  await signRemoveTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskEvaluatorRole:');

  // Set the worker of our task using the "setTaskEvaluatorRole" action.
  await setTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.accounts[1][0],           // user
  );

  log('account[0] signSetTaskEvaluatorRole:');

  await signSetTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[1] connectNetwork:');

  // Connect to the network using the "connectNetwork" action and then store
  // the returned "networkClient" in the state object.
  state.networkClient[1] = await connectNetwork(
    'local',                        // network
    state.accounts[1][1],           // privateKey
  );

  log('account[1] getColonyClient:');

  // Get the client for our new colony using the "getColonyClient" action and
  // then store the returned "colonyClient" in the state object.
  state.colonyClient[1] = await getColonyClient(
    state.networkClient[1],         // networkClient
    state.colony.id,                // colonyId
  );

  log('account[1] signSetTaskEvaluatorRole:');

  await signSetTaskEvaluatorRole(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskWorkerRole:');

  // Set the worker of our task using the "setTaskWorkerRole" action.
  await setTaskWorkerRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.accounts[2][0],           // user
  );

  log('account[0] signSetTaskWorkerRole:');

  await signSetTaskWorkerRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] connectNetwork:');

  // Connect to the network using the "connectNetwork" action and then store
  // the returned "networkClient" in the state object.
  state.networkClient[2] = await connectNetwork(
    'local',                        // network
    state.accounts[2][1],           // privateKey
  );

  log('account[2] getColonyClient:');

  // Get the client for our new colony using the "getColonyClient" action and
  // then store the returned "colonyClient" in the state object.
  state.colonyClient[2] = await getColonyClient(
    state.networkClient[2],         // networkClient
    state.colony.id,                // colonyId
  );

  log('account[2] signSetTaskWorkerRole:');

  await signSetTaskWorkerRole(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskBrief:');

  // Update the specification of our task using the "setTaskBrief" action.
  // The "setTaskBrief" action starts a multisig operation and then stores
  // the operation in our database. The operation will need to be signed by
  // all "requiredSignees" before the changes will take affect.
  await setTaskBrief(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    {
      title: 'Updated Task Title',                  // title
      description: 'Updated Task Description',      // description
    },
  );

  log('account[0] signSetTaskBrief:');

  // Sign the operation associated with our changes to the task specification
  // using the "signSetTaskBrief" action. The requested changes were made after
  // we assigned a worker to our task, so the changes will need to be singed
  // by both the manager and the worker of the task.
  await signSetTaskBrief(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] signSetTaskBrief:');

  // Sign the operation associated with our changes to the task specification
  // using the "signSetTaskBrief" action. The requested changes were made after
  // we assigned a worker to our task, so the changes will need to be singed
  // by both the manager and the worker of the task.
  await signSetTaskBrief(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] submitTaskDeliverable:');

  // Submit the task deliverable for our task using the "submitTaskDeliverable"
  // action. The delivarable can only be submitted by the worker of the task.
  await submitTaskDeliverable(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    {
      message: 'Work Complete',     // message
    },
  );

  log('account[1] submitTaskWorkRating:');

  // Submit a rating for the worker of our task from the evaluator of our task
  // using the "submitTaskWorkRating" action.
  await submitTaskWorkRating(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    2,                              // rating
  );

  log('account[2] submitTaskWorkRating:');

  // Submit a rating for the manager of our task from the worker of our task
  // using the "submitTaskWorkRating" action.
  await submitTaskWorkRating(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    2,                              // rating
  );

  log('account[1] revealTaskWorkRating:');

  // Reaveal the rating for the worker of our task from the evaluator of our
  // task using the "revealTaskWorkRating" action.
  await revealTaskWorkRating(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    2,                              // rating
  );

  log('account[2] revealTaskWorkRating:');

  // Reaveal the rating for the manager of our task from the worker of our task
  // using the "revealTaskWorkRating" action.
  await revealTaskWorkRating(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    2,                              // rating
  );

  log('account[0] finalizeTask:');

  // Finalize our task using the "finalizeTask" action.
  await finalizeTask(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] claimPayout:');

  // Claim the manager token payout for the task using the "claimPayout" action.
  await claimPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    state.tokenAddress,             // token
  );

  log('account[0] claimPayout:');

  // Claim the manager ether payout for the task using the "claimPayout" action.
  await claimPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    EMPTY_ADDRESS,                  // token
  );

  log('account[1] claimPayout:');

  // Claim the evaluator token payout for the task using the "claimPayout" action.
  await claimPayout(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'EVALUATOR',                    // role
    state.tokenAddress,             // token
  );

  log('account[1] claimPayout:');

  // Claim the evaluator ether payout for the task using the "claimPayout" action.
  await claimPayout(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'EVALUATOR',                    // role
    EMPTY_ADDRESS,                  // token
  );

  log('account[2] claimPayout:');

  // Claim the worker token payout for the task using the "claimPayout" action.
  await claimPayout(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    state.tokenAddress,             // token
  );
  log('account[2] claimPayout:');

  // Claim the worker ether payout for the task using the "claimPayout" action.
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

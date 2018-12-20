// Import TrufflepigLoader
const { TrufflepigLoader } = require('@colony/colony-js-contract-loader-http');

// Import helpers
const log = require('./helpers/log');

// Import examples
const addDomain = require('./examples/addDomain');
const addGlobalSkill = require('./examples/addGlobalSkill');
const claimColonyFunds = require('./examples/claimColonyFunds');
const claimPayout = require('./examples/claimPayout');
const connectNetwork = require('./examples/connectNetwork');
const createColony = require('./examples/createColony');
const createTask = require('./examples/createTask');
const createToken = require('./examples/createToken');
const finalizeTask = require('./examples/finalizeTask');
const getColonyClient = require('./examples/getColonyClient');
const mintTokens = require('./examples/mintTokens');
const moveFundsBetweenPots = require('./examples/moveFundsBetweenPots');
const removeTaskEvaluatorRole = require('./examples/removeTaskEvaluatorRole');
const revealTaskWorkRating = require('./examples/revealTaskWorkRating');
const setTaskBrief = require('./examples/setTaskBrief');
const setTaskDueDate = require('./examples/setTaskDueDate');
const setTaskEvaluatorPayout = require('./examples/setTaskEvaluatorPayout');
const setTaskEvaluatorRole = require('./examples/setTaskEvaluatorRole');
const setTaskManagerPayout = require('./examples/setTaskManagerPayout');
const setTaskSkill = require('./examples/setTaskSkill');
const setTaskWorkerPayout = require('./examples/setTaskWorkerPayout');
const setTaskWorkerRole = require('./examples/setTaskWorkerRole');
const setTokenOwner = require('./examples/setTokenOwner');
const signRemoveTaskEvaluatorRole = require('./examples/signRemoveTaskEvaluatorRole');
const signSetTaskBrief = require('./examples/signSetTaskBrief');
const signSetTaskEvaluatorPayout = require('./examples/signSetTaskEvaluatorPayout');
const signSetTaskEvaluatorRole = require('./examples/signSetTaskEvaluatorRole');
const signSetTaskManagerPayout = require('./examples/signSetTaskManagerPayout');
const signSetTaskSkill = require('./examples/signSetTaskSkill');
const signSetTaskWorkerPayout = require('./examples/signSetTaskWorkerPayout');
const signSetTaskWorkerRole = require('./examples/signSetTaskWorkerRole');
const signSetTaskDueDate = require('./examples/signSetTaskDueDate');
const submitTaskDeliverable = require('./examples/submitTaskDeliverable');
const submitTaskWorkRating = require('./examples/submitTaskWorkRating');

// The global database object will act as a mock database where we will store
// our pending multisig operations so that we can restore the operations when
// we need to sign them from another account.
DATABASE = {
  operations: {},
};

// Colony Starter Basic example
const colonyStarterBasic = async () => {

  // Instantiate TrufflepigLoader
  const loader = new TrufflepigLoader();

  // Get ganache test accounts
  const accountsObject = await loader.getAccounts();

  // Convert accounts object into an array of public keys
  const accounts = Object.keys(accountsObject);

  // A unix timestamp representing 31 days from now
  const futureDueDate = new Date(Date.now() + 2678400000);

  // In order to demonstrate the complete task lifecycle, we will need to call
  // some of the examples using different accounts. The state object below will
  // store the networkClient and colonyClient for each account as well as state
  // that will be shared across all accounts.
  const state = {
    networkClient: [],              // networkClient (per account)
    colonyClient: [],               // colonyClient (per account)
  };

  log('account[0] connectNetwork:');

  // Connect to the network using the "connectNetwork" example and then store
  // the returned "networkClient" in the state object.
  state.networkClient[0] = await connectNetwork(
    0,                              // accountIndex
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
    30,                             // amount
  );

  log('account[0] claimColonyFunds:');

  // Claim funds for our new colony using the "claimColonyFunds" example.
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

  // Move funds to our domain using the "moveFundsBetweenPots" example.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    1,                              // fromPot
    state.domain.potId,             // toPot
    30,                             // amount
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

  log('account[0] moveFundsBetweenPots:');

  // Move funds to our task using the "moveFundsBetweenPots" example.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    state.domain.potId,             // fromPot
    state.task.potId,               // toPot
    30,                             // amount
    state.tokenAddress,             // token
  );

  log('account[0] addGlobalSkill:');

  // Add a new global skill using the "addGlobalSkill" example and then store
  // the returned "skill" in the state object. Each Colony Network comes with
  // a root global skill. In this case, we want our new global skill to be the
  // child of the root global skill, so we will use "1" for "parentSkillId".
  state.skill = await addGlobalSkill(
    state.networkClient[0],         // networkClient
    1,                              // parentSkillId
  );

  log('account[0] setTaskSkill:');

  // Set the skill of our new task using the "setTaskSkill" example and then
  // store the updated "task" in the state object. In this case, we are going
  // to update the "skillId" of our new task using our new global skill.
  await setTaskSkill(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.skill.id,                 // skillId
  );

  log('account[0] signSetTaskSkill:');

  // Sign the operation associated with our changes to the task skill using
  // the "signSetTaskSkill" example. The requested changes were made before we
  // assigned a worker to our task, so the changes only need to be approved
  // by the manager of the task, which is the account that created the task.
  await signSetTaskSkill(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskDueDate:');

  // Set the due date of our new task using the "setTaskDueDate" example. The
  // "setTaskDueDate" example starts a multisig operation and then stores the
  // operation in our database. The operation will need to be signed by all
  // "requiredSignees" before the changes to our task will take affect.
  await setTaskDueDate(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    futureDueDate,                  // dueDate
  );

  log('account[0] signSetTaskDueDate:');

  // Sign the operation associated with our changes to the task due date using
  // the "signSetTaskDueDate" example and then store the updated task in the state
  // object. The requested changes were made before we assigned a worker to our
  // task, so the changes only need to be approved by the manager of the task.
  await signSetTaskDueDate(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskManagerPayout:');

  // Set the amount of tokens we want to payout the manager of our task using
  // the "setTaskManagerPayout" example.
  await setTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    10,                             // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskManagerPayout:');

  // Sign the multisig operation associated with our changes to the manager
  // payout using the "signSetTaskManagerPayout" example. The requested changes
  // were made before we assigned a manager to our task, so the changes will
  // only need to be approved by the current manager of the task.
  await signSetTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskEvaluatorPayout:');

  // Set the amount of tokens we want to payout the evaluator of our task using
  // the "setTaskEvaluatorPayout" example. The "setTaskEvaluatorPayout" example
  // starts a multisig operation and then stores the operation in our database.
  // The operation will need to be signed by all "requiredSignees" before the
  // changes to the payout will take affect.
  await setTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    10,                             // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskEvaluatorPayout:');

  // Sign the multisig operation associated with our changes to the evaluator
  // payout using the "signSetTaskEvaluatorPayout" example. The requested changes
  // were made before we assigned an evaluator to our task, so the changes will
  // only need to be approved by the manager of the task.
  await signSetTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] setTaskWorkerPayout:');

  // Set the amount of tokens we want to payout the worker of our task using
  // the "setTaskWorkerPayout" example. The "setTaskWorkerPayout" example
  // starts a multisig operation and then stores the operation in our database.
  // The operation will need to be signed by all "requiredSignees" before the
  // changes to the payout will take affect.
  await setTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    10,                             // amount
    state.tokenAddress,             // token
  );

  log('account[0] signSetTaskWorkerPayout:');

  // Sign the multisig operation associated with our changes to the worker
  // payout using the "signSetTaskWorkerPayout" example. The requested changes
  // were made before we assigned a worker to our task, so the changes will
  // only need to be approved by the manager of the task.
  await signSetTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] removeTaskEvaluatorRole:');

  // Remove the evaluator of our task using the "removeTaskEvaluatorRole" example.
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

  // Set the worker of our task using the "setTaskEvaluatorRole" example.
  await setTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    accounts[1],                    // user
  );

  log('account[0] signSetTaskEvaluatorRole:');

  await signSetTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[1] connectNetwork:');

  // Connect to the network using the "connectNetwork" example and then store
  // the returned "networkClient" in the state object.
  state.networkClient[1] = await connectNetwork(
    1,                              // accountIndex
  );

  log('account[1] getColonyClient:');

  // Get the client for our new colony using the "getColonyClient" example and
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

  // Set the worker of our task using the "setTaskWorkerRole" example.
  await setTaskWorkerRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    accounts[2],                    // user
  );

  log('account[0] signSetTaskWorkerRole:');

  await signSetTaskWorkerRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] connectNetwork:');

  // Connect to the network using the "connectNetwork" example and then store
  // the returned "networkClient" in the state object.
  state.networkClient[2] = await connectNetwork(
    2,                              // accountIndex
  );

  log('account[2] getColonyClient:');

  // Get the client for our new colony using the "getColonyClient" example and
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

  // Update the specification of our task using the "setTaskBrief" example.
  // The "setTaskBrief" example starts a multisig operation and then stores
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
  // using the "signSetTaskBrief" example. The requested changes were made after
  // we assigned a worker to our task, so the changes will need to be singed
  // by both the manager and the worker of the task.
  await signSetTaskBrief(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] signSetTaskBrief:');

  // Sign the operation associated with our changes to the task specification
  // using the "signSetTaskBrief" example. The requested changes were made after
  // we assigned a worker to our task, so the changes will need to be singed
  // by both the manager and the worker of the task.
  await signSetTaskBrief(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[2] submitTaskDeliverable:');

  // Submit the task deliverable for our task using the "submitTaskDeliverable"
  // example. The delivarable can only be submitted by the worker of the task.
  await submitTaskDeliverable(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    {
      message: 'Work Complete',     // message
    },
  );

  log('account[1] submitTaskWorkRating:');

  // Submit a rating for the worker of our task from the evaluator of our task
  // using the "submitTaskWorkRating" example.
  await submitTaskWorkRating(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    3,                              // rating
  );

  log('account[2] submitTaskWorkRating:');

  // Submit a rating for the manager of our task from the worker of our task
  // using the "submitTaskWorkRating" example.
  await submitTaskWorkRating(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    3,                              // rating
  );

  log('account[1] revealTaskWorkRating:');

  // Reaveal the rating for the worker of our task from the evaluator of our
  // task using the "revealTaskWorkRating" example.
  await revealTaskWorkRating(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    3,                              // rating
  );

  log('account[2] revealTaskWorkRating:');

  // Reaveal the rating for the manager of our task from the worker of our task
  // using the "revealTaskWorkRating" example.
  await revealTaskWorkRating(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    3,                              // rating
  );

  log('account[0] finalizeTask:');

  // Finalize our task using the "finalizeTask" example.
  await finalizeTask(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  log('account[0] claimPayout:');

  // Claim the manager payout for the task using the "claimPayout" example.
  await claimPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    state.tokenAddress,             // token
  );

  log('account[1] claimPayout:');

  // Claim the evaluator payout for the task using the "claimPayout" example.
  await claimPayout(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'EVALUATOR',                    // role
    state.tokenAddress,             // token
  );

  log('account[2] claimPayout:');

  // Claim the worker payout for the task using the "claimPayout" example.
  await claimPayout(
    state.colonyClient[2],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    state.tokenAddress,             // token
  );

  log('Complete!');

}

// Execute example
colonyStarterBasic()
  .then(() => process.exit())
  .catch(err => console.error(err));

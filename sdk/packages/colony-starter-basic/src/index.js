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

// Test accounts
const accounts = [
  '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b'
];

// A unix timestamp representing 31 days from now
const futureDueDate = new Date(Date.now() + 2678400000);

// Colony Starter Basic example
const colonyStarterBasic = async () => {

  // In order to demonstrate the complete task lifecycle, we will need to call
  // some of the examples using different accounts. The state object below will
  // store the networkClient and colonyClient for each account as well as state
  // that will be shared across all accounts.
  const state = {
    networkClient: [],              // networkClient (per account)
    colonyClient: [],               // colonyClient (per account)
  };

  console.log('\n\x1b[32m' + 'account[0] connectNetwork:' + '\x1b[0m\n');

  // Connect to the network using the "connectNetwork" example and then store
  // the returned "networkClient" in the state object.
  state.networkClient[0] = await connectNetwork(
    0,                              // accountIndex
  );

  console.log('\n\x1b[32m' + 'account[0] createToken:' + '\x1b[0m\n');

  // Create a new ERC20 token using the "createToken" example and then store
  // the returned "tokenAddress" in the state object.
  state.tokenAddress = await createToken(
    state.networkClient[0],         // networkClient
    'Token',                        // name
    'TKN',                          // symbol
  );

  console.log('\n\x1b[32m' + 'account[0] createColony:' + '\x1b[0m\n');

  // Create a new colony with our new token using the "createColony" example
  // and then store the returned "colony" in the state object.
  state.colony = await createColony(
    state.networkClient[0],         // networkClient
    state.tokenAddress,             // tokenAddress
  );

  console.log('\n\x1b[32m' + 'account[0] getColonyClient:' + '\x1b[0m\n');

  // Get the client for our new colony using the "getColonyClient" example and
  // then store the returned "colonyClient" in the state object.
  state.colonyClient[0] = await getColonyClient(
    state.networkClient[0],         // networkClient
    state.colony.id,                // colonyId
  );

  console.log('\n\x1b[32m' + 'account[0] setTokenOwner:' + '\x1b[0m\n');

  // Set our new colony as the owner of our new token using the "setTokenOwner"
  // example. This will allow our colony to mint and claim tokens.
  await setTokenOwner(
    state.colonyClient[0],          // colonyClient
    state.colony.address,           // colonyAddress
  );

  console.log('\n\x1b[32m' + 'account[0] mintTokens:' + '\x1b[0m\n');

  // Mint tokens for our new token using the "mintTokens" example.
  await mintTokens(
    state.colonyClient[0],          // colonyClient
    30,                             // amount
  );

  console.log('\n\x1b[32m' + 'account[0] claimColonyFunds:' + '\x1b[0m\n');

  // Claim funds for our new colony using the "claimColonyFunds" example.
  await claimColonyFunds(
    state.colonyClient[0],          // colonyClient
    state.tokenAddress,             // tokenAddress
  );

  console.log('\n\x1b[32m' + 'account[0] addDomain:' + '\x1b[0m\n');

  // Add a new domain to our new colony using the "addDomain" example and then
  // store the returned "domain" in the state object. Each colony comes with a
  // root domain. In this case, we want the root domain to be the parent of our
  // new domain, so we will use "1" for "parentDomainId".
  state.domain = await addDomain(
    state.colonyClient[0],          // colonyClient
    state.networkClient[0],         // networkClient
    1,                              // parentDomainId
  );

  console.log('\n\x1b[32m' + 'account[0] moveFundsBetweenPots:' + '\x1b[0m\n');

  // Move funds to our task using the "moveFundsBetweenPots" example.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    1,                              // fromPot
    state.domain.potId,             // toPot
    30,                             // amount
    state.tokenAddress,             // token
  );

  console.log('\n\x1b[32m' + 'account[0] createTask:' + '\x1b[0m\n');

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

  console.log('\n\x1b[32m' + 'account[0] moveFundsBetweenPots:' + '\x1b[0m\n');

  // Move funds to our task using the "moveFundsBetweenPots" example.
  await moveFundsBetweenPots(
    state.colonyClient[0],          // colonyClient
    state.domain.potId,             // fromPot
    state.task.potId,               // toPot
    30,                             // amount
    state.tokenAddress,             // token
  );

  console.log('\n\x1b[32m' + 'account[0] addGlobalSkill:' + '\x1b[0m\n');

  // Add a new global skill using the "addGlobalSkill" example and then store
  // the returned "skill" in the state object. Each Colony Network comes with
  // a root global skill. In this case, we want our new global skill to be the
  // child of the root global skill, so we will use "1" for "parentSkillId".
  state.skill = await addGlobalSkill(
    state.networkClient[0],         // networkClient
    1,                              // parentSkillId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskSkill:' + '\x1b[0m\n');

  // Set the skill of our new task using the "setTaskSkill" example and then
  // store the updated "task" in the state object. In this case, we are going
  // to update the "skillId" of our new task using our new global skill.
  await setTaskSkill(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    state.skill.id,                 // skillId
  );

  console.log('\n\x1b[32m' + 'account[0] signSetTaskSkill:' + '\x1b[0m\n');

  // Sign the operation associated with our changes to the task skill using
  // the "signSetTaskSkill" example. The requested changes were made before we
  // assigned a worker to our task, so the changes only need to be approved
  // by the manager of the task, which is the account that created the task.
  await signSetTaskSkill(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskDueDate:' + '\x1b[0m\n');

  // Set the due date of our new task using the "setTaskDueDate" example. The
  // "setTaskDueDate" example starts a multisig operation and then stores the
  // operation in our database. The operation will need to be signed by all
  // "requiredSignees" before the changes to our task will take affect.
  await setTaskDueDate(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    futureDueDate,                  // dueDate
  );

  console.log('\n\x1b[32m' + 'account[0] signSetTaskDueDate:' + '\x1b[0m\n');

  // Sign the operation associated with our changes to the task due date using
  // the "signSetTaskDueDate" example and then store the updated task in the state
  // object. The requested changes were made before we assigned a worker to our
  // task, so the changes only need to be approved by the manager of the task.
  await signSetTaskDueDate(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskManagerPayout:' + '\x1b[0m\n');

  // Set the amount of tokens we want to payout the manager of our task using
  // the "setTaskManagerPayout" example.
  await setTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    10,                             // amount
    state.tokenAddress,             // token
  );

  console.log('\n\x1b[32m' + 'account[0] signSetTaskManagerPayout:' + '\x1b[0m\n');

  // Sign the multisig operation associated with our changes to the manager
  // payout using the "signSetTaskManagerPayout" example. The requested changes
  // were made before we assigned a manager to our task, so the changes will
  // only need to be approved by the current manager of the task.
  await signSetTaskManagerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskEvaluatorPayout:' + '\x1b[0m\n');

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

  console.log('\n\x1b[32m' + 'account[0] signSetTaskEvaluatorPayout:' + '\x1b[0m\n');

  // Sign the multisig operation associated with our changes to the evaluator
  // payout using the "signSetTaskEvaluatorPayout" example. The requested changes
  // were made before we assigned an evaluator to our task, so the changes will
  // only need to be approved by the manager of the task.
  await signSetTaskEvaluatorPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskWorkerPayout:' + '\x1b[0m\n');

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

  console.log('\n\x1b[32m' + 'account[0] signSetTaskWorkerPayout:' + '\x1b[0m\n');

  // Sign the multisig operation associated with our changes to the worker
  // payout using the "signSetTaskWorkerPayout" example. The requested changes
  // were made before we assigned a worker to our task, so the changes will
  // only need to be approved by the manager of the task.
  await signSetTaskWorkerPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] removeTaskEvaluatorRole:' + '\x1b[0m\n');

  // Remove the evaluator of our task using the "removeTaskEvaluatorRole" example.
  await removeTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] signRemoveTaskEvaluatorRole:' + '\x1b[0m\n');

  await signRemoveTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskEvaluatorRole:' + '\x1b[0m\n');

  // Set the worker of our task using the "setTaskEvaluatorRole" example.
  await setTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    accounts[1],                    // user
  );

  console.log('\n\x1b[32m' + 'account[0] signSetTaskEvaluatorRole:' + '\x1b[0m\n');

  await signSetTaskEvaluatorRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskWorkerRole:' + '\x1b[0m\n');

  // Set the worker of our task using the "setTaskWorkerRole" example.
  await setTaskWorkerRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    accounts[2],                    // user
  );

  console.log('\n\x1b[32m' + 'account[0] signSetTaskWorkerRole:' + '\x1b[0m\n');

  await signSetTaskWorkerRole(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[1] connectNetwork:' + '\x1b[0m\n');

  // Connect to the network using the "connectNetwork" example and then store
  // the returned "networkClient" in the state object.
  state.networkClient[1] = await connectNetwork(
    1,                              // accountIndex
  );

  console.log('\n\x1b[32m' + 'account[1] getColonyClient:' + '\x1b[0m\n');

  // Get the client for our new colony using the "getColonyClient" example and
  // then store the returned "colonyClient" in the state object.
  state.colonyClient[1] = await getColonyClient(
    state.networkClient[1],         // networkClient
    state.colony.id,                // colonyId
  );

  console.log('\n\x1b[32m' + 'account[1] signSetTaskWorkerRole:' + '\x1b[0m\n');

  await signSetTaskWorkerRole(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskBrief:' + '\x1b[0m\n');

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

  console.log('\n\x1b[32m' + 'account[0] signSetTaskBrief:' + '\x1b[0m\n');

  // Sign the operation associated with our changes to the task specification
  // using the "signSetTaskBrief" example. The requested changes were made after
  // we assigned a worker to our task, so the changes will need to be singed
  // by both the manager and the worker of the task.
  await signSetTaskBrief(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[1] signSetTaskBrief:' + '\x1b[0m\n');

  // Sign the operation associated with our changes to the task specification
  // using the "signSetTaskBrief" example. The requested changes were made after
  // we assigned a worker to our task, so the changes will need to be singed
  // by both the manager and the worker of the task.
  await signSetTaskBrief(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[1] submitTaskDeliverable:' + '\x1b[0m\n');

  // Submit the task deliverable for our task using the "submitTaskDeliverable"
  // example. The delivarable can only be submitted by the worker of the task.
  await submitTaskDeliverable(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    {
      message: 'Work Complete',     // message
    },
  );

  console.log('\n\x1b[32m' + 'account[0] submitTaskWorkRating:' + '\x1b[0m\n');

  // Submit a rating for the worker of our task from the evaluator of our task
  // using the "submitTaskWorkRating" example.
  await submitTaskWorkRating(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    3,                              // rating
  );

  console.log('\n\x1b[32m' + 'account[1] submitTaskWorkRating:' + '\x1b[0m\n');

  // Submit a rating for the manager of our task from the worker of our task
  // using the "submitTaskWorkRating" example.
  await submitTaskWorkRating(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    3,                              // rating
  );

  console.log('\n\x1b[32m' + 'account[0] revealTaskWorkRating:' + '\x1b[0m\n');

  // Reaveal the rating for the worker of our task from the evaluator of our
  // task using the "revealTaskWorkRating" example.
  await revealTaskWorkRating(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    3,                              // rating
  );

  console.log('\n\x1b[32m' + 'account[1] revealTaskWorkRating:' + '\x1b[0m\n');

  // Reaveal the rating for the manager of our task from the worker of our task
  // using the "revealTaskWorkRating" example.
  await revealTaskWorkRating(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    3,                              // rating
  );

  console.log('\n\x1b[32m' + 'account[0] finalizeTask:' + '\x1b[0m\n');

  // Finalize our task using the "finalizeTask" example.
  await finalizeTask(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] manager claimPayout:' + '\x1b[0m\n');

  // Claim the manager payout for the task using the "claimPayout" example.
  await claimPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'MANAGER',                      // role
    state.tokenAddress,             // token
  );

  console.log('\n\x1b[32m' + 'account[0] evaluator claimPayout:' + '\x1b[0m\n');

  // Claim the evaluator payout for the task using the "claimPayout" example.
  await claimPayout(
    state.colonyClient[0],          // colonyClient
    state.task.id,                  // taskId
    'EVALUATOR',                    // role
    state.tokenAddress,             // token
  );

  console.log('\n\x1b[32m' + 'account[1] worker claimPayout:' + '\x1b[0m\n');

  // Claim the worker payout for the task using the "claimPayout" example.
  await claimPayout(
    state.colonyClient[1],          // colonyClient
    state.task.id,                  // taskId
    'WORKER',                       // role
    state.tokenAddress,             // token
  );

}

// Execute example
colonyStarterBasic()
  .then(() => process.exit())
  .catch(err => console.error(err));

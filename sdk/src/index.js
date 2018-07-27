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
const revealTaskWorkRating = require('./examples/revealTaskWorkRating');
const setTaskBrief = require('./examples/setTaskBrief');
const setTaskDueDate = require('./examples/setTaskDueDate');
const setTaskEvaluatorPayout = require('./examples/setTaskEvaluatorPayout');
const setTaskManagerPayout = require('./examples/setTaskManagerPayout');
const setTaskRoleUser = require('./examples/setTaskRoleUser');
const setTaskSkill = require('./examples/setTaskSkill');
const setTaskWorkerPayout = require('./examples/setTaskWorkerPayout');
const signTaskBrief = require('./examples/signTaskBrief');
const signTaskEvaluatorPayout = require('./examples/signTaskEvaluatorPayout');
const signTaskWorkerPayout = require('./examples/signTaskWorkerPayout');
const signTaskDueDate = require('./examples/signTaskDueDate');
const submitTaskDeliverable = require('./examples/submitTaskDeliverable');
const submitTaskWorkRating = require('./examples/submitTaskWorkRating');

// The global database object will act as a mock database where we will store
// our pending multisig operations so that we can restore the operations when
// we need to sign them from another account.
DATABASE = {};

// Test accounts
const accounts = [
  '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b'
];

// A unix timestamp representing 31 days from now
const futureDueDate = new Date(Date.now() + 2678400000);

// hackathonStarter example
const hackathonStarter = async () => {

  // In order to demonstrate the complete task lifecycle, we will need to call
  // some of the examples using different accounts. You can think of each state
  // object in the array below as a separate instance of the application being
  // accessed by a separate account.
  const state = [
    {},     // account[0]
    {},     // account[1]
    {},     // account[2]
  ];

  console.log('\n\x1b[32m' + 'account[0] connectNetwork:' + '\x1b[0m\n');

  // Connect to the test network using the "connectNetwork" example and then
  // store the returned "networkClient" in the state object.
  state[0].networkClient = await connectNetwork(
    0,                            // accountIndex
  );

  console.log('\n\x1b[32m' + 'account[0] addGlobalSkill:' + '\x1b[0m\n');

  // Add a new global skill using the "addGlobalSkill" example and then store
  // the returned "skillId" in the state object. Each colonyNetwork comes with
  // a root global skill. In this case, we want the root global skill to be the
  // parent of our new global skill, so we will use "1" for "parentSkillId".
  state[0].skillId = await addGlobalSkill(
    state[0].networkClient,       // networkClient
    1,                            // parentSkillId
  );

  console.log('\n\x1b[32m' + 'account[0] createToken:' + '\x1b[0m\n');

  // Create a new ERC20 token using the "createToken" example and then store
  // the returned "tokenAddress" in the state object.
  state[0].tokenAddress = await createToken(
    state[0].networkClient,       // networkClient
    'Token',                      // name
    'TKN',                        // symbol
  );

  console.log('\n\x1b[32m' + 'account[0] createColony:' + '\x1b[0m\n');

  // Create a new colony with our new token using the "createColony" example
  // and then store the returned "colonyClient" in the state object.
  state[0].colonyClient = await createColony(
    state[0].networkClient,       // networkClient
    state[0].tokenAddress,        // tokenAddress
  );

  console.log('\n\x1b[32m' + 'account[0] mintTokens:' + '\x1b[0m\n');

  // Transfer funds to our task using the "mintTokens" example and
  // then store the updated task in the state object.
  state[0].task = await mintTokens(
    state[0].colonyClient,        // colonyClient
    30,                           // amount
  );

  console.log('\n\x1b[32m' + 'account[0] claimColonyFunds:' + '\x1b[0m\n');

  // Transfer funds to our task using the "claimColonyFunds" example and
  // then store the updated task in the state object.
  state[0].colonyPotBalance = await claimColonyFunds(
    state[0].colonyClient,        // colonyClient
    state[0].tokenAddress,        // tokenAddress
  );

  console.log('\n\x1b[32m' + 'account[0] addDomain:' + '\x1b[0m\n');

  // Add a new domain to our new colony using the "addDomain" example and then
  // store the returned "domainId" in the state object. Each colony has a root
  // domain. In this case, we want the root domain to be the parent of our new
  // domain, so we will use "1" for "parentDomainId".
  state[0].domain = await addDomain(
    state[0].colonyClient,        // colonyClient
    1,                            // parentDomainId
  );

  console.log('\n\x1b[32m' + 'account[0] moveFundsBetweenPots:' + '\x1b[0m\n');

  // Transfer funds to our task using the "moveFundsBetweenPots" example and
  // then store the updated task in the state object.
  await moveFundsBetweenPots(
    state[0].colonyClient,        // colonyClient
    1,                            // fromPot
    state[0].domain.potId,        // toPot
    30,                           // amount
    state[0].tokenAddress,        // token
  );

  console.log('\n\x1b[32m' + 'account[0] createTask:' + '\x1b[0m\n');

  // Create a new task within our new domain using the "createTask" example and
  // then store the returned "task" in the state object. We could also create a
  // new task within the root domain, using "1" for the "domainId", but here we
  // will use the "domainId" of our new domain, which has a value of "2".
  state[0].task = await createTask(
    state[0].colonyClient,        // colonyClient
    state[0].domain.id,           // domainId
    {
      title: 'New Task Title',                // title
      description: 'New Task Description',    // description
    },
  );

  console.log('\n\x1b[32m' + 'account[0] moveFundsBetweenPots:' + '\x1b[0m\n');

  // Transfer funds to our task using the "moveFundsBetweenPots" example and
  // then store the updated task in the state object.
  await moveFundsBetweenPots(
    state[0].colonyClient,        // colonyClient
    state[0].domain.potId,        // fromPot
    state[0].task.potId,          // toPot
    30,                           // amount
    state[0].tokenAddress,        // token
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskSkill:' + '\x1b[0m\n');

  // Set the skill of our new task using the "setTaskSkill" example and then
  // store the updated "task" in the state object. In this case, we are going
  // to update the "skillId" of our new task using our new global skill.
  state[0].task = await setTaskSkill(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    state[0].skillId,             // skillId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskDueDate:' + '\x1b[0m\n');

  // Set the due date of our new task using the "setTaskDueDate" example. The
  // "setTaskDueDate" example starts a multisig operation and then stores the
  // operation in our mock database. The operation will need to be signed by
  // all "requiredSignees" before the changes will take affect.
  await setTaskDueDate(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    futureDueDate,                // dueDate
  );

  console.log('\n\x1b[32m' + 'account[0] signTaskDueDate:' + '\x1b[0m\n');

  // Sign the operation associated with our changes to the task due date using
  // the "signTaskDueDate" example and then store the updated task in the state
  // object. The requested changes to the due date of the task was made before
  // we assigned a worker to our task, so the changes only need to be approved
  // by the manager of the task, which is the account that created the task.
  state[0].task = await signTaskDueDate(
    state[0].colonyClient,                // colonyClient
    state[0].task.id,                     // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskManagerPayout:' + '\x1b[0m\n');

  // Set the payout for the manager of our new task using the "setTaskManagerPayout"
  // example.
  state[0].taskManagerPayout = await setTaskManagerPayout(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    10,                           // amount
    state[0].tokenAddress,        // token
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskEvaluatorPayout:' + '\x1b[0m\n');

  // Set the payout for the evaluator of our new task using the "setTaskEvaluatorPayout"
  // example. The "setTaskEvaluatorPayout" example starts a multisig operation and then
  // stores the operation in our mock database. The operation will need to be
  // signed by all "requiredSignees" before the changes will take affect.
  state[0].taskEvaluatorPayout = await setTaskEvaluatorPayout(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    10,                           // amount
    state[0].tokenAddress,        // token
  );

  console.log('\n\x1b[32m' + 'account[0] signTaskEvaluatorPayout:' + '\x1b[0m\n');

  // Sign the operation associated with our changes to the task due date using
  // the "signTaskEvaluatorPayout" example and then store the updated task in the state
  // object. The requested changes to the due date of the task was made before
  // we assigned a worker to our task, so the changes only need to be approved
  // by the manager of the task, which is the account that created the task.
  state[0].taskEvaluatorPayout = await signTaskEvaluatorPayout(
    state[0].colonyClient,                // colonyClient
    state[0].task.id,                     // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskWorkerPayout:' + '\x1b[0m\n');

  // Set the payout for the evaluator of our new task using the "setTaskWorkerPayout"
  // example. The "setTaskWorkerPayout" example starts a multisig operation and then
  // stores the operation in our mock database. The operation will need to be
  // signed by all "requiredSignees" before the changes will take affect.
  state[0].taskWorkerPayout = await setTaskWorkerPayout(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    10,                           // amount
    state[0].tokenAddress,        // token
  );

  console.log('\n\x1b[32m' + 'account[0] signTaskWorkerPayout:' + '\x1b[0m\n');

  // Sign the operation associated with our changes to the task due date using
  // the "signTaskWorkerPayout" example and then store the updated task in the state
  // object. The requested changes to the due date of the task was made before
  // we assigned a worker to our task, so the changes only need to be approved
  // by the manager of the task, which is the account that created the task.
  state[0].taskWorkerPayout = await signTaskWorkerPayout(
    state[0].colonyClient,                // colonyClient
    state[0].task.id,                     // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskRoleUser:' + '\x1b[0m\n');

  // Set the evaluator of our task using the "setTaskRoleUser" example and then
  // store the returned "taskRoles" in the state object.
  state[0].taskRoles = await setTaskRoleUser(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'EVALUATOR',                  // role
    accounts[1],                  // user
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskRoleUser:' + '\x1b[0m\n');

  // Set the worker of our task using the "setTaskRoleUser" example and then
  // store the returned "taskRoles" in the state object.
  state[0].taskRoles = await setTaskRoleUser(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'WORKER',                     // role
    accounts[2],                  // user
  );

  console.log('\n\x1b[32m' + 'account[0] setTaskBrief:' + '\x1b[0m\n');

  // Update the specification of our task using the "setTaskBrief" example. The
  // "setTaskBrief" example starts a multisig operation and then stores the
  // operation in our mock database. The operation will need to be signed by
  // all "requiredSignees" before the changes will take affect.
  await setTaskBrief(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    {
      title: 'Updated Task Title',                // title
      description: 'Updated Task Description',    // description
    },
  );

  console.log('\n\x1b[32m' + 'account[0] signTaskBrief:' + '\x1b[0m\n');

  // Sign the operation associated with our changes to the task specification
  // using the "signTaskBrief" example and then store the updated task in the
  // state object. The requested changes to the due date of the task was made
  // after we assigned a worker to our task, so the changes will need to be
  // approved by both the manager and worker of the task. After we sign the
  // operation as the manager, we will switch to the worker account.
  state[0].task = await signTaskBrief(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
  );

  console.log('\n\x1b[32m' + 'account[2] connectNetwork:' + '\x1b[0m\n');

  // Connect to the test network using the example "connectNetwork" action and
  // then store the returned "networkClient" in the state object.
  state[2].networkClient = await connectNetwork(
    2,                            // accountIndex
  );

  console.log('\n\x1b[32m' + 'account[2] getColonyClient:' + '\x1b[0m\n');

  // Get the client for the colony that we created as "account[0]" using the
  // "getColonyClient" example and then store the returned "colonyClient" in
  // the state object.
  state[2].colonyClient = await getColonyClient(
    state[2].networkClient,                           // networkClient
    state[0].colonyClient._query.contractAddress,     // colonyAddress
  );

  console.log('\n\x1b[32m' + 'account[2] signTaskBrief:' + '\x1b[0m\n');

  // Approve the updates to the "specification" of the task using the account
  // associated with the "worker" of our task and then store the updated task
  // in the state object.
  state[0].task = await signTaskBrief(
    state[2].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
  );

  console.log('\n\x1b[32m' + 'account[2] submitTaskDeliverable:' + '\x1b[0m\n');

  // Submit the task deliverable for our task using the "submitTaskDeliverable"
  // example and then store the updated task in the state object.
  state[0].task = await submitTaskDeliverable(
    state[2].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    {
      message: 'Work Complete',   // message
    },
  );

  console.log('\n\x1b[32m' + 'account[1] connectNetwork:' + '\x1b[0m\n');

  // Connect to the test network using the example "connectNetwork" action and
  // then store the returned "networkClient" in the state object.
  state[1].networkClient = await connectNetwork(
    1,                            // accountIndex
  );

  console.log('\n\x1b[32m' + 'account[1] getColonyClient:' + '\x1b[0m\n');

  // Get the client for the colony that we created as "account[0]" using the
  // "getColonyClient" example and then store the returned "colonyClient" in
  // the state object.
  state[1].colonyClient = await getColonyClient(
    state[1].networkClient,                           // networkClient
    state[0].colonyClient._query.contractAddress,     // colonyAddress
  );

  console.log('\n\x1b[32m' + 'account[1] submitTaskWorkRating:' + '\x1b[0m\n');

  // Submit a rating for the worker of our task from the evaluator of our task
  // using the "submitTaskWorkRating" example and then store the updated task
  // work ratings in the state object.
  state[0].taskWorkRatings = await submitTaskWorkRating(
    state[1].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'WORKER',                     // role
    3,                            // rating
  );

  console.log('\n\x1b[32m' + 'account[2] submitTaskWorkRating:' + '\x1b[0m\n');

  // Submit a rating for the manager of our task from the worker of our task
  // using the "submitTaskWorkRating" example and then store the updated task
  // work ratings in the state object.
  state[0].taskWorkRatings = await submitTaskWorkRating(
    state[2].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'MANAGER',                    // role
    3,                            // rating
  );

  console.log('\n\x1b[32m' + 'account[1] revealTaskWorkRating:' + '\x1b[0m\n');

  // Reaveal the rating for the worker of our task from the evaluator of our task
  // using the "revealTaskWorkRating" example and then store the updated task
  // work ratings in the state object.
  state[0].taskWorkRatings = await revealTaskWorkRating(
    state[1].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'WORKER',                     // role
    3,                            // rating
  );

  console.log('\n\x1b[32m' + 'account[2] revealTaskWorkRating:' + '\x1b[0m\n');

  // Reaveal the rating for the manager of our task from the worker of our task
  // using the "revealTaskWorkRating" example and then store the updated task
  // work ratings in the state object.
  state[0].taskWorkRatings = await revealTaskWorkRating(
    state[2].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'MANAGER',                    // role
    3,                            // rating
  );

  console.log('\n\x1b[32m' + 'account[0] finalizeTask:' + '\x1b[0m\n');

  // Finalize our task using the "finalizeTask" example and then store the
  // updated task in the state object.
  state[0].task = await finalizeTask(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
  );

  console.log('\n\x1b[32m' + 'account[0] claimPayout:' + '\x1b[0m\n');

  // Claim the manager payout for the task using the "claimPayout" example.
  state[0].taskPayout = await claimPayout(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'MANAGER',                    // role
    state[0].tokenAddress,        // token
  );

  console.log('\n\x1b[32m' + 'account[1] claimPayout:' + '\x1b[0m\n');

  // Claim the evaluator payout for the task using the "claimPayout" example.
  state[1].taskPayout = await claimPayout(
    state[1].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'EVALUATOR',                  // role
    state[0].tokenAddress,        // token
  );

  console.log('\n\x1b[32m' + 'account[2] claimPayout:' + '\x1b[0m\n');

  // Claim the worker payout for the task using the "claimPayout" example.
  state[2].taskPayout = await claimPayout(
    state[2].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    'WORKER',                     // role
    state[0].tokenAddress,        // token
  );

}

// Execute example
hackathonStarter()
  .then(() => process.exit())
  .catch(err => console.error(err));

// Import examples
const addDomain = require('./examples/addDomain');
const addGlobalSkill = require('./examples/addGlobalSkill');
const connectNetwork = require('./examples/connectNetwork');
const createColony = require('./examples/createColony');
const createTask = require('./examples/createTask');
const createToken = require('./examples/createToken');
const getColonyClient = require('./examples/getColonyClient');
const setTaskDueDate = require('./examples/setTaskDueDate');
const setTaskRoles = require('./examples/setTaskRoles');
const setTaskSkill = require('./examples/setTaskSkill');
const setTaskBrief = require('./examples/setTaskBrief');
const signTaskBrief = require('./examples/signTaskBrief');

// The stored operations object will act as our database where we will store
// pending multisig operations serialized in JSON format so that we can restore
// the operations when we need to access them from another account.
STORED_OPERATIONS = {};

// Test accounts
const accounts = [
  '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b'
];

// A unix timestamp representing 31 days from now
const futureDate = new Date(Date.now() + 2678400000);

// hackathonStarter example
const hackathonStarter = async () => {

  // In order to demonstrate the complete task lifecycle, we will need to call
  // some of the examples using different accounts. You can think of each state
  // object in the array below as a separate instance of the application being
  // accessed by a separate account.
  const state = [
    {},     // account 1
    {},     // account 2
    {},     // account 3
  ];

  console.log('\x1b[32m\n' + 'connectNetwork:' + '\n\x1b[0m');

  // Connect to the test network using the "connectNetwork" example and then
  // store the returned "networkClient" in the state object.
  state[0].networkClient = await connectNetwork(
    0,                            // accountIndex
  );

  console.log('\x1b[32m\n' + 'createToken:' + '\n\x1b[0m');

  // Create a new ERC20 token using the "createToken" example and then store
  // the returned "tokenAddress" in the state object.
  state[0].tokenAddress = await createToken(
    state[0].networkClient,       // networkClient
    'Token',                      // name
    'TKN',                        // symbol
  );

  console.log('\x1b[32m\n' + 'createColony:' + '\n\x1b[0m');

  // Create a new colony with our new token using the "createColony" example
  // and then store the returned "colonyClient" in the state object.
  state[0].colonyClient = await createColony(
    state[0].networkClient,       // networkClient
    state[0].tokenAddress,        // tokenAddress
  );

  console.log('\x1b[32m\n' + 'addDomain:' + '\n\x1b[0m');

  // Add a new domain to our new colony using the "addDomain" example and then
  // store the returned "domainId" in the state object. Each new colony comes
  // with a root domain. In this case, we want the root domain to be the parent
  // of our new domain, so we will use "1" for "parentDomainId".
  state[0].domainId = await addDomain(
    state[0].colonyClient,        // colonyClient
    1,                            // parentDomainId
  );

  console.log('\x1b[32m\n' + 'createTask:' + '\n\x1b[0m');

  // Create a new task within our new domain using the "createTask" example and
  // then store the returned "task" in the state object. We could also create a
  // new task within the root domain, using "1" for "domainId" but here we will
  // use the "domainId" of our new domain, which has a value of "2".
  state[0].task = await createTask(
    state[0].colonyClient,        // colonyClient
    'New Task Title',             // title
    'New Task Description',       // description
    state[0].domainId,            // domainId
  );

  console.log('\x1b[32m\n' + 'addGlobalSkill:' + '\n\x1b[0m');

  // Add a new global skill using the "addGlobalSkill" example and then store
  // the returned "skillId" in the state object. Each colonyNetwork comes with
  // a root global skill. In this case, we want the root global skill to be the
  // parent of our new global skill, so we will use "1" for "parentSkillId".
  state[0].skillId = await addGlobalSkill(
    state[0].networkClient,       // networkClient
    1,                            // parentSkillId
  );

  console.log('\x1b[32m\n' + 'setTaskSkill:' + '\n\x1b[0m');

  // Set the skill of our new task using the "setTaskSkill" example and then
  // store the updated "task" in the state object. In this case, we are going
  // to update the "skillId" of our new task using the global skill we created
  // in the previous step.
  state[0].task = await setTaskSkill(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    state[0].skillId,             // skillId
  );

  console.log('\x1b[32m\n' + 'setTaskDueDate:' + '\n\x1b[0m');

  // Set the due date of our new task using the "setTaskDueDate" example and
  // then store the updated "task" in the state object.
  state[0].task = await setTaskDueDate(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    futureDate,                   // dueDate
  );

  console.log('\x1b[32m\n' + 'setTaskRoles:' + '\n\x1b[0m');

  // Set the user roles of our task using the "setTaskRoles" example and then
  // store the updated "task" in the state object. The "setTaskRoles" example
  // only updates the properties we provide to the "roles" parameter. In this
  // case, we are going to update the "evaluator" and "worker" of our task.
  state[0].taskRoles = await setTaskRoles(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    {
      evaluator: accounts[1],         // evaluator
      worker: accounts[2],            // worker
    },
  );

  console.log('\x1b[32m\n' + 'setTaskBrief:' + '\n\x1b[0m');

  // Update the specification of our task using the "setTaskBrief"
  // example and then store the updated "task" in the state object.
  state[0].task = await setTaskBrief(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    {
      title: 'Updated Task Title',                  // title
      description: 'Updated Task Description',      // description
    },
  );

  // If the task we want to update already has an assigned "worker", changing
  // the "specification" will need approval from the assigned manager and the
  // assigned worker. We set up the example "setTaskBrief" action to
  // automatically approve the updates as the manager when updating the task,
  // so now we will need to approve the updates as the worker. We can do this
  // by connecting to the test network using the account associated with the
  // worker and then signing the task to approve the update.

  console.log('\x1b[32m\n' + 'connectNetwork:' + '\n\x1b[0m');

  // Connect to the test network using the example "connectNetwork" action and
  // then store the returned "networkClient" in the state object.
  state[2].networkClient = await connectNetwork(
    2,                            // accountIndex
  );

  console.log('\x1b[32m\n' + 'getColonyClient:' + '\n\x1b[0m');

  // Get the client for the colony that we created as "account[0]" using the
  // "getColonyClient" example and then store the returned "colonyClient" in
  // the state object.
  state[2].colonyClient = await getColonyClient(
    state[2].networkClient,                           // networkClient
    state[0].colonyClient._query.contractAddress,     // colonyAddress
  );

  console.log('\x1b[32m\n' + 'signTaskBrief:' + '\n\x1b[0m');

  // Approve the updates to the "specification" of the task using the account
  // associated with the "worker" of our task and then store the updated task
  // in the state object.
  state[2].task = await signTaskBrief(
    state[2].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
  );

}

// Execute example
hackathonStarter()
  .then(() => process.exit())
  .catch(err => console.error(err));

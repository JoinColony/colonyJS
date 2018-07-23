// Import hackathonStarter example actions. These example actions use colonyJS
// to interact with the colonyNetwork contracts deployed on our test network.
const connectNetwork = require('./actions/connectNetwork');
const createColony = require('./actions/createColony');
const createDomain = require('./actions/createDomain');
const createSkill = require('./actions/createSkill');
const createTask = require('./actions/createTask');
const createToken = require('./actions/createToken');
const getColonyClient = require('./actions/getColonyClient');
const signTaskDueDate = require('./actions/signTaskDueDate');
const signTaskSpecification = require('./actions/signTaskSpecification');
const updateTask = require('./actions/updateTask');

// Set stored operations object. This object will act as our database where we
// will store pending operations as JSON objects so that we can restore the
// operations when we need to access them again from another account.
STORED_OPERATIONS = {}

// Define accounts. Public keys of accounts associated with the test network.
const accounts = [
  '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b'
]

// Define validDueDate. A unix timestamp that represents 31 days from now.
const validDueDate = new Date(Date.now() + 2678400000);

// Define hackathonStarter example
const hackathonStarterExample = async () => {

  // Set state per account. In order to demonstrte the complete task lifecycle,
  // we will need to call some of the example actions from different accounts,
  // so we are setting the intitial state for each account that will be using
  // the example actions within this example.
  const state = [
    {},     // account 1
    {},     // account 2
    {},     // account 3
  ];

  // Connect to the test network using the example "connectNetwork" action and
  // then store the returned "networkClient" in the state object.
  state[0].networkClient = await connectNetwork(
    0,                            // accountIndex
  );

  // Create a new ERC20 token using the example "createToken" action and then
  // store the returned "tokenAddress" in the state object.
  state[0].tokenAddress = await createToken(
    state[0].networkClient,       // networkClient
    'New Token',                  // name
    'NTKN',                       // symbol
  );

  // Create a new colony with our new token using the example "createColony"
  // action and then store the returned "colonyClient" in the state object.
  state[0].colonyClient = await createColony(
    state[0].networkClient,       // networkClient
    state[0].tokenAddress,        // tokenAddress
  );

  // Create a new domain for our new colony using the example "createDomain"
  // action and then store the returned "domainId" in the state object. When
  // we created a new colony, a root domain was created for our colony. The
  // root domain represents the colony as a domain, which we want to be the
  // parent of our new domain, so we will use "1" for "parentDomainId".
  state[0].domainId = await createDomain(
    state[0].colonyClient,        // colonyClient
    1,                            // parentDomainId
  );

  // Create a new task for our new colony within our new domain using the
  // example "createTask" action and then store the returned "task" in the
  // state object. We could also create a new task within the root domain,
  // using "1" for "domainId" but here we will use the "domainId" returned
  // from the previous step, which has a value of "2".
  state[0].task = await createTask(
    state[0].colonyClient,        // colonyClient
    'New Task Title',             // title
    'New Task Description',       // description
    state[0].domainId,            // domainId
  );

  // Create a new global skill using the example "createSkill" action and then
  // store the returned "skillId" in the state object. There is only one global
  // skill so far because we are using our own test deployment of colonyNetwork,
  // so we will use "1" for "parentSkillId", which is the root global skill id.
  state[0].skillId = await createSkill(
    state[0].networkClient,       // networkClient
    1,                            // parentSkillId
  );

  // Update the skill of our new task using the example "updateTask" action and
  // then store the updated "task" in the state object. The example "updateTask"
  // action only updates the properties we provide to the "task" parameter. In
  // this case, we are going to update the "skillId" of our task with the new
  // global skill we created in the previous step.
  state[0].task = await updateTask(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    {
      skillId: state[0].skillId,        // skillId
    },
  );

  // Update the due date of our task using the example "updateTask" action and
  // then store the updated "task" in the state object. The example "updateTask"
  // action only updates the properties we provide to the "task" parameter. In
  // this case, we are going to update the "dueDate" of our task.
  state[0].task = await updateTask(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    {
      dueDate: validDueDate,            // dueDate
    },
  );

  // Update the user roles of our task using the example "updateTask" action and
  // then store the updated "task" in the state object. The example "updateTask"
  // action only updates the properties we provide to the "task" parameter and
  // the user roles we provide to the "roles" property. In this case, we are
  // going to update the "evaluator" and "worker" of our task.
  state[0].task = await updateTask(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    {
      roles: {
        evaluator: accounts[1],         // evaluator
        worker: accounts[2],            // worker
      },
    },
  );

  // Update the title and description of our task using the example "updateTask"
  // action and then store the updated "task" in the state object. The example
  // "updateTask" action only updates the properties we provide to the "task"
  // parameter. In this case, we are going to update the "specification" of
  // our task, which includes the "title" and "description" of our task.
  state[0].task = await updateTask(
    state[0].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
    {
      specification: {
        title: 'Updated Task Title',                  // title
        description: 'Updated Task Description',      // description
      },
    },
  );

  // If the task we want to update already has an assigned "worker", changing
  // the "dueDate" or "specification" will need approval from both the manager
  // and the worker. We set up the example "updateTaskSpecification" action to
  // automatically approve the updates as the manager when updating the task,
  // so now we will need to approve the updates as the worker. We can do this
  // by connecting to the test network using the account associated with the
  // worker and then signing the task to approve the update.

  // Connect to the test network using the example "connectNetwork" action and
  // then store the returned "networkClient" in the state object.
  state[2].networkClient = await connectNetwork(
    2,                            // accountIndex
  );

  // Get the "colonyClient" for the colony that we created as "account[0]" and
  // then store the returned "colonyClient" in the state object.
  state[2].colonyClient = await getColonyClient(
    state[2].networkClient,                           // networkClient
    state[0].colonyClient._query.contractAddress,     // colonyAddress
  );

  // Approce the updates to the "specification" of the task using the account
  // associated with the "worker" of our task and then store the updated task
  // in the state object.
  state[2].task = await signTaskSpecification(
    state[2].colonyClient,        // colonyClient
    state[0].task.id,             // taskId
  );

}

// Execute example
hackathonStarterExample()
  .then(() => process.exit())
  .catch(err => console.error(err));

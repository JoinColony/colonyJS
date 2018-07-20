// Import actions
const connectNetwork = require('./actions/connectNetwork');
const createColony = require('./actions/createColony');
const createTask = require('./actions/createTask');
const createToken = require('./actions/createToken');

// Define hackathonStarter example
const hackathonStarter = async () => {

  // Initial state
  const state = {}

  // Connect to the test network using the example "connectNetwork" action and
  // then store the returned "networkClient" in the state object.
  state.networkClient = await connectNetwork();

  // Create a new ERC20 token using the example "createToken" action and then
  // store the returned "tokenAddress" in the state object.
  state.tokenAddress = await createToken(
    state.networkClient,          // networkClient
    'Cool Colony Token',          // name
    'COLNY',                      // symbol
  );

  // Create a new colony with our new token using the example "createColony"
  // action and then store the returned "colonyClient" in the state object.
  state.colonyClient = await createColony(
    state.networkClient,          // networkClient
    state.tokenAddress,           // tokenAddress
  );

  // Create a task for our new colony using the example "createTask" action
  // and then store the returned "task" in the state object.
  state.task = await createTask(
    state.colonyClient,           // colonyClient
    'Cool task',                  // title
    'Create this cool thing.',    // description
    1,                            // domainId
  );

}

// Execute example
hackathonStarter()
  .then(() => process.exit())
  .catch(err => console.error(err));

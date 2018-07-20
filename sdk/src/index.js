// Import example actions
const connectNetwork = require('./actions/connectNetwork');
const createColony = require('./actions/createColony');
const createDomain = require('./actions/createDomain');
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

  // Create a new domain for our new colony using the example "createDomain"
  // action and then store the returned "domainId" in the state object. When
  // we created a new colony, a root domain was created for our colony. The
  // root domain represents the colony as a domain, which we want to be the
  // parent of our new domain, so we will use "1" for "parentDomainId".
  state.domainId = await createDomain(
    state.colonyClient,           // colonyClient
    1,                            // parentDomainId
  );

  // Create a new task for our new colony within our new domain using the
  // example "createTask" action and then store the returned "task" in the
  // state object. We could also create a new task within the root domain,
  // using "1" for "domainId" but here we will use the "domainId" returned
  // from the previous step, which has a value of "2".
  state.task = await createTask(
    state.colonyClient,           // colonyClient
    'Cool task',                  // title
    'Create this cool thing.',    // description
    state.domainId,               // domainId
  );

  // Create a new skill for our new colony within our new domain using the
  // example "createTask" action and then store the returned "task" in the
  // state object. We could also create a new task within the root domain,
  // using "1" for "domainId" but here we will use the "domainId" returned
  // from the previous step, which has a value of "2".
  state.task = await createTask(
    state.colonyClient,           // colonyClient
    'Cool task',                  // title
    'Create this cool thing.',    // description
    state.domainId,               // domainId
  );

}

// Execute example
hackathonStarter()
  .then(() => process.exit())
  .catch(err => console.error(err));

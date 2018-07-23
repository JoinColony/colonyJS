// Import hackathonStarter example actions
const connectNetwork = require('../actions/connectNetwork');
const createColony = require('../actions/createColony');
const createDomain = require('../actions/createDomain');
const createSkill = require('../actions/createSkill');
const createTask = require('../actions/createTask');
const createToken = require('../actions/createToken');
const getColonyClient = require('../actions/getColonyClient');
const signTaskDueDate = require('../actions/signTaskDueDate');
const signTaskSpecification = require('../actions/signTaskSpecification');
const updateTask = require('../actions/updateTask');

// Set stored operations
STORED_OPERATIONS = {}

// Define accounts
const accounts = [
  '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b'
]

// Define validDueDate
const validDueDate = new Date(Date.now() + 2678400000);

describe('hackathonStarter', () => {

  // Set state per account
  const state = [
    {},     // account 1
    {},     // account 2
    {},     // account 3
  ];

  test('connectNetwork() works', async () => {
    state[0].networkClient = await connectNetwork(0);
    expect(state[0].networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x')
      })
    }));
  }, 5000);

  test('createToken() works', async () => {
    state[0].tokenAddress = await createToken(
      state[0].networkClient,         // networkClient
      'token',                        // name
      'TKN',                          // symbol
    );
    expect(state[0].tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  test('createColony() works', async () => {
    state[0].colonyClient = await createColony(
      state[0].networkClient,         // networkClient
      state[0].tokenAddress,          // tokenAddress
    );
    expect(state[0].colonyClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x')
      })
    }));
  }, 5000);

  test('createDomain() works', async () => {
    state[0].domainId = await createDomain(
      state[0].colonyClient,          // colonyClient
      1,                              // parentDomainId
    );
    expect(state[0].domainId).toBeGreaterThan(1);
  }, 5000);

  test('createTask() works', async () => {
    state[0].task = await createTask(
      state[0].colonyClient,          // colonyClient
      'title',                        // title
      'description',                  // description
      state[0].domainId,              // domainId
    );
    expect(state[0].task).toEqual(expect.objectContaining({
      id: 1,
      domainId: state[0].domainId,
      specificationHash: 'QmbVbBGzBFgwjaRVoHJiP7JA5au8Dj7Kur99aK3mpRjtXb',
    }));
  }, 10000);

  test('createSkill() works', async () => {
    state[0].skillId = await createSkill(
      state[0].networkClient,         // networkClient
      1,                              // parentSkillId
    );
    expect(state[0].skillId).toBeGreaterThan(1);
  }, 5000);

  test('updateTaskDomain() works', async () => {
    state[0].task = await updateTask(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      {
        domainId: 1,                  // domainId
      },
    );
    expect(state[0].task.domainId).toEqual(1);
  }, 5000);

  test('updateTaskSkill() works', async () => {
    state[0].task = await updateTask(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      {
        skillId: state[0].skillId,    // skillId
      },
    );
    expect(state[0].task.skillId).toEqual(state[0].skillId);
  }, 5000);

  test('updateTaskDueDate() works', async () => {
    let dueDate = Date.now();
    state[0].task = await updateTask(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      {
        dueDate: validDueDate,        // domainId
      },
    );
    expect(state[0].task.dueDate).toEqual(validDueDate);
  }, 5000);

  test('updateTaskRoles() works', async () => {
    state[0].task = await updateTask(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      {
        roles: {
          evaluator: accounts[1],     // evaluator
          worker: accounts[2]         // worker
        }
      },
    );
    expect(state[0].task.roles).toEqual(expect.objectContaining({
      manager: expect.objectContaining({
        address: expect.stringMatching(accounts[0])
      }),
      evaluator: expect.objectContaining({
        address: expect.stringMatching(accounts[1])
      }),
      worker: expect.objectContaining({
        address: expect.stringMatching(accounts[2])
      }),
    }));
  }, 5000);

});

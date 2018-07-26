// Import examples
const addDomain = require('../examples/addDomain');
const addGlobalSkill = require('../examples/addGlobalSkill');
const connectNetwork = require('../examples/connectNetwork');
const createColony = require('../examples/createColony');
const createTask = require('../examples/createTask');
const createToken = require('../examples/createToken');
const getColonyClient = require('../examples/getColonyClient');
const setTaskDueDate = require('../examples/setTaskDueDate');
const setTaskRoleUser = require('../examples/setTaskRoleUser');
const setTaskSkill = require('../examples/setTaskSkill');
const setTaskBrief = require('../examples/setTaskBrief');
const signTaskBrief = require('../examples/signTaskBrief');
const signTaskDueDate = require('../examples/signTaskDueDate');

// Mock database
DATABASE = {};

// Test accounts
const accounts = [
  '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b'
];

// A unix timestamp representing 31 days from now
const futureDueDate = new Date(Date.now() + 2678400000);

// State per account
const state = [
  {},     // account 1
  {},     // account 2
  {},     // account 3
];

// Testing hackathonStarter examples
describe('hackathonStarter', () => {

  // Test the connectNetwork() example
  test('connectNetwork() works', async () => {
    state[0].networkClient = await connectNetwork(0);
    expect(state[0].networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x')
      })
    }));
  }, 5000);

  // Test the createToken() example
  test('createToken() works', async () => {
    state[0].tokenAddress = await createToken(
      state[0].networkClient,         // networkClient
      'token',                        // name
      'TKN',                          // symbol
    );
    expect(state[0].tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  // Test the createColony() example
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

  // Test the addDomain() example
  test('addDomain() works', async () => {
    state[0].domainId = await addDomain(
      state[0].colonyClient,          // colonyClient
      1,                              // parentDomainId
    );
    expect(state[0].domainId).toBeGreaterThan(1);
  }, 5000);

  // Test the createTask() example
  test('createTask() works', async () => {
    state[0].task = await createTask(
      state[0].colonyClient,          // colonyClient
      'New Task Title',               // title
      'New Task Description',         // description
      state[0].domainId,              // domainId
    );
    expect(state[0].task).toEqual(expect.objectContaining({
      domainId: state[0].domainId,
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 15000);

  // Test the addGlobalSkill() example
  test('addGlobalSkill() works', async () => {
    state[0].skillId = await addGlobalSkill(
      state[0].networkClient,         // networkClient
      1,                              // parentSkillId
    );
    expect(state[0].skillId).toBeGreaterThan(1);
  }, 5000);

  // Test the setTaskSkill() example
  test('setTaskSkill() works', async () => {
    state[0].task = await setTaskSkill(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      state[0].skillId,               // skillId
    );
    expect(state[0].task.skillId).toEqual(state[0].skillId);
  }, 5000);

  // Test the setTaskDueDate() example
  test('setTaskDueDate() works', async () => {
    await setTaskDueDate(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      futureDueDate,                  // domainId
    );
    let operation = JSON.parse(DATABASE.setTaskDueDateOperationJSON);
    expect(operation).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state[0].task.id,
          dueDate: futureDueDate.toISOString(),
        }),
      }),
    }));
  }, 5000);

  // Test the signTaskDueDate() example
  test('signTaskDueDate() works', async () => {
    state[0].task = await signTaskDueDate(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
    );
    expect(state[0].task.dueDate).toEqual(futureDueDate);
  }, 5000);

  // Test the setTaskRoleUser() example
  test('setTaskRoleUser() works', async () => {
    state[0].taskRoles = await setTaskRoleUser(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'EVALUATOR',                    // role
      accounts[1],                    // user
    );
    expect(state[0].taskRoles).toEqual(expect.objectContaining({
      evaluator: expect.objectContaining({
        address: expect.stringMatching(accounts[1])
      }),
    }));
  }, 5000);

  // Test the setTaskRoleUser() example
  test('setTaskRoleUser() works', async () => {
    state[0].taskRoles = await setTaskRoleUser(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'WORKER',                       // role
      accounts[2],                    // user
    );
    expect(state[0].taskRoles).toEqual(expect.objectContaining({
      worker: expect.objectContaining({
        address: expect.stringMatching(accounts[2])
      }),
    }));
  }, 5000);

  // Test the setTaskBrief() example
  test('setTaskBrief() works', async () => {
    await setTaskBrief(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'Updated Task Title',           // title
      'Updated Task Description',     // description
    );
    let operation = JSON.parse(DATABASE.setTaskBriefOperationJSON);
    expect(operation).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state[0].task.id,
          specificationHash: 'QmTS7jaoGwtxftSaXRDJn4A27pQ5YtCkWKHuf98CsuJ1qH',
        }),
      }),
    }));
  }, 5000);

  // Test the signTaskBrief() example
  test('signTaskBrief() works', async () => {
    state[0].task = await signTaskBrief(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
    );
    expect(state[0].task).toEqual(expect.objectContaining({
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 5000);

  // Test the connectNetwork() example
  test('connectNetwork() works', async () => {
    state[1].networkClient = await connectNetwork(1);
    expect(state[1].networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x')
      })
    }));
  }, 5000);

  // Test the getColonyClient() example
  test('getColonyClient() works', async () => {
    state[1].colonyClient = await getColonyClient(
      state[1].networkClient,                           // networkClient
      state[0].colonyClient._query.contractAddress,     // colonyAddress
    );
    expect(state[1].colonyClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x')
      })
    }));
  }, 5000);

  // Test the signTaskBrief() example
  test('signTaskBrief() works', async () => {
    state[1].task = await signTaskBrief(
      state[1].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
    );
    expect(state[1].task).toEqual(expect.objectContaining({
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 5000);

});

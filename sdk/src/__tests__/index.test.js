// Import examples
const addDomain = require('../examples/addDomain');
const addGlobalSkill = require('../examples/addGlobalSkill');
const claimPayout = require('../examples/claimPayout');
const connectNetwork = require('../examples/connectNetwork');
const createColony = require('../examples/createColony');
const createTask = require('../examples/createTask');
const createToken = require('../examples/createToken');
const finalizeTask = require('../examples/finalizeTask');
const getColonyClient = require('../examples/getColonyClient');
const revealTaskWorkRating = require('../examples/revealTaskWorkRating');
const setTaskDueDate = require('../examples/setTaskDueDate');
const setTaskRoleUser = require('../examples/setTaskRoleUser');
const setTaskSkill = require('../examples/setTaskSkill');
const setTaskBrief = require('../examples/setTaskBrief');
const signTaskBrief = require('../examples/signTaskBrief');
const signTaskDueDate = require('../examples/signTaskDueDate');
const submitTaskDeliverable = require('../examples/submitTaskDeliverable');
const submitTaskWorkRating = require('../examples/submitTaskWorkRating');

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
  {},     // account[0]
  {},     // account[1]
  {},     // account[2]
];

// Testing hackathonStarter examples
describe('hackathonStarter', () => {

  // Test the connectNetwork() example from account[0]
  test('account[0] connectNetwork() works', async () => {
    state[0].networkClient = await connectNetwork(0);
    expect(state[0].networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the createToken() example from account[0]
  test('account[0] createToken() works', async () => {
    state[0].tokenAddress = await createToken(
      state[0].networkClient,         // networkClient
      'token',                        // name
      'TKN',                          // symbol
    );
    expect(state[0].tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  // Test the createColony() example from account[0]
  test('account[0] createColony() works', async () => {
    state[0].colonyClient = await createColony(
      state[0].networkClient,         // networkClient
      state[0].tokenAddress,          // tokenAddress
    );
    expect(state[0].colonyClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the addDomain() example from account[0]
  test('account[0] addDomain() works', async () => {
    state[0].domainId = await addDomain(
      state[0].colonyClient,          // colonyClient
      1,                              // parentDomainId
    );
    expect(state[0].domainId).toBeGreaterThan(1);
  }, 5000);

  // Test the createTask() example from account[0]
  test('account[0] createTask() works', async () => {
    state[0].task = await createTask(
      state[0].colonyClient,          // colonyClient
      state[0].domainId,              // domainId
      {
        title: 'New Task Title',                  // title
        description: 'New Task Description',      // description
      },
    );
    expect(state[0].task).toEqual(expect.objectContaining({
      domainId: state[0].domainId,
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 15000);

  // Test the addGlobalSkill() example from account[0]
  test('account[0] addGlobalSkill() works', async () => {
    state[0].skillId = await addGlobalSkill(
      state[0].networkClient,         // networkClient
      1,                              // parentSkillId
    );
    expect(state[0].skillId).toBeGreaterThan(1);
  }, 5000);

  // Test the setTaskSkill() example from account[0]
  test('account[0] setTaskSkill() works', async () => {
    state[0].task = await setTaskSkill(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      state[0].skillId,               // skillId
    );
    expect(state[0].task.skillId).toEqual(state[0].skillId);
  }, 5000);

  // Test the setTaskDueDate() example from account[0]
  test('account[0] setTaskDueDate() works', async () => {
    await setTaskDueDate(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      futureDueDate,                  // domainId
    );
    expect(JSON.parse(DATABASE.setTaskDueDateOperationJSON)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state[0].task.id,
          dueDate: futureDueDate.toISOString(),
        }),
      }),
    }));
  }, 5000);

  // Test the signTaskDueDate() example from account[0]
  test('account[0] signTaskDueDate() works', async () => {
    state[0].task = await signTaskDueDate(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
    );
    expect(state[0].task.dueDate).toEqual(futureDueDate);
  }, 5000);

  // Test the setTaskRoleUser() example from account[0]
  test('account[0] setTaskRoleUser() works with evaluator', async () => {
    state[0].taskRoles = await setTaskRoleUser(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'EVALUATOR',                    // role
      accounts[1],                    // user
    );
    expect(state[0].taskRoles).toEqual(expect.objectContaining({
      evaluator: expect.objectContaining({
        address: expect.stringMatching(accounts[1]),
      }),
    }));
  }, 5000);

  // Test the setTaskRoleUser() example from account[0]
  test('account[0] setTaskRoleUser() works with worker', async () => {
    state[0].taskRoles = await setTaskRoleUser(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'WORKER',                       // role
      accounts[2],                    // user
    );
    expect(state[0].taskRoles).toEqual(expect.objectContaining({
      worker: expect.objectContaining({
        address: expect.stringMatching(accounts[2]),
      }),
    }));
  }, 5000);

  // Test the setTaskBrief() example from account[0]
  test('account[0] setTaskBrief() works', async () => {
    await setTaskBrief(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      {
        title: 'Updated Task Title',                  // title
        description: 'Updated Task Description',      // description
      },
    );
    expect(JSON.parse(DATABASE.setTaskBriefOperationJSON)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state[0].task.id,
          specificationHash: 'QmTS7jaoGwtxftSaXRDJn4A27pQ5YtCkWKHuf98CsuJ1qH',
        }),
      }),
    }));
  }, 5000);

  // Test the signTaskBrief() example from account[0]
  test('account[0] signTaskBrief() works', async () => {
    state[0].task = await signTaskBrief(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
    );
    expect(state[0].task).toEqual(expect.objectContaining({
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 5000);

  // Test the connectNetwork() example from account[2]
  test('account[2] connectNetwork() works', async () => {
    state[2].networkClient = await connectNetwork(2);
    expect(state[2].networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the getColonyClient() example from account[2]
  test('account[2] getColonyClient() works', async () => {
    state[2].colonyClient = await getColonyClient(
      state[2].networkClient,                           // networkClient
      state[0].colonyClient._query.contractAddress,     // colonyAddress
    );
    expect(state[2].colonyClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the signTaskBrief() example from account[2]
  test('account[2] signTaskBrief() works', async () => {
    state[2].task = await signTaskBrief(
      state[2].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
    );
    expect(state[2].task).toEqual(expect.objectContaining({
      specificationHash: 'QmTS7jaoGwtxftSaXRDJn4A27pQ5YtCkWKHuf98CsuJ1qH',
    }));
  }, 5000);

  // Test the submitTaskDeliverable() example from account[2]
  test('account[2] submitTaskDeliverable() works', async () => {
    state[2].task = await submitTaskDeliverable(
      state[2].colonyClient,          // colonyClient
      state[2].task.id,               // taskId
      {
        message: 'Work Complete',     // message
      },
    );
    expect(state[2].task).toEqual(expect.objectContaining({
      deliverableHash: 'QmWzXkBNJ1aKB2PRNrFu7ih9LPb34H5SQ76jEUdniS4JdJ',
    }));
  }, 5000);

  // Test the submitTaskWorkRating() example from account[2]
  test('account[2] submitTaskWorkRating() works', async () => {
    state[2].taskWorkRatings = await submitTaskWorkRating(
      state[2].colonyClient,          // colonyClient
      state[2].task.id,               // taskId
      'MANAGER',                      // role
      3,                              // rating
    );
    expect(state[2].taskWorkRatings.count).toEqual(1);
  }, 5000);

  // Test the connectNetwork() example from account[1]
  test('account[1] connectNetwork() works', async () => {
    state[1].networkClient = await connectNetwork(1);
    expect(state[1].networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the getColonyClient() example from account[1]
  test('account[1] getColonyClient() works', async () => {
    state[1].colonyClient = await getColonyClient(
      state[1].networkClient,                           // networkClient
      state[0].colonyClient._query.contractAddress,     // colonyAddress
    );
    expect(state[1].colonyClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the submitTaskWorkRating() example from account[1]
  test('account[1] submitTaskWorkRating() works', async () => {
    state[1].taskWorkRatings = await submitTaskWorkRating(
      state[1].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'WORKER',                       // role
      3,                              // rating
    );
    expect(state[1].taskWorkRatings.count).toEqual(2);
  }, 5000);

  // Test the revealTaskWorkRating() example from account[1]
  test('account[1] revealTaskWorkRating() works', async () => {
    state[1].taskWorkRatings = await revealTaskWorkRating(
      state[1].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'WORKER',                       // role
      3,                              // rating
    );
    expect(state[1].taskWorkRatings.count).toEqual(2);
  }, 5000);

  // Test the revealTaskWorkRating() example from account[2]
  test('account[2] revealTaskWorkRating() works', async () => {
    state[2].taskWorkRatings = await revealTaskWorkRating(
      state[2].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'MANAGER',                      // role
      3,                              // rating
    );
    expect(state[1].taskWorkRatings.count).toEqual(2);
  }, 5000);

  // Test the finalizeTask() example from account[0]
  test('account[0] finalizeTask() works', async () => {
    state[0].task = await finalizeTask(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
    );
    expect(state[0].task.finalized).toEqual(true);
  }, 5000);

  // Test the claimPayout() example from account[0]
  test('account[0] claimPayout() works', async () => {
    state[0].taskPayout = await claimPayout(
      state[0].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'MANAGER',                      // role
      state[0].tokenAddress,          // token
    );
    expect(state[0].taskPayout.amount.toNumber()).toEqual(0);
  }, 5000);

  // Test the claimPayout() example from account[1]
  test('account[1] claimPayout() works', async () => {
    state[1].taskPayout = await claimPayout(
      state[1].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'EVALUATOR',                    // role
      state[0].tokenAddress,          // token
    );
    expect(state[1].taskPayout.amount.toNumber()).toEqual(0);
  }, 5000);

  // Test the claimPayout() example from account[2]
  test('account[2] claimPayout() works', async () => {
    state[2].taskPayout = await claimPayout(
      state[2].colonyClient,          // colonyClient
      state[0].task.id,               // taskId
      'WORKER',                       // role
      state[0].tokenAddress,          // token
    );
    expect(state[2].taskPayout.amount.toNumber()).toEqual(0);
  }, 5000);

});

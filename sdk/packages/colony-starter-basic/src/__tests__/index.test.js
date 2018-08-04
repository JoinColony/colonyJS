// Import big number library
const BN = require('bn.js');

// Import examples
const addDomain = require('../examples/addDomain');
const addGlobalSkill = require('../examples/addGlobalSkill');
const claimColonyFunds = require('../examples/claimColonyFunds');
const claimPayout = require('../examples/claimPayout');
const connectNetwork = require('../examples/connectNetwork');
const createColony = require('../examples/createColony');
const createTask = require('../examples/createTask');
const createToken = require('../examples/createToken');
const finalizeTask = require('../examples/finalizeTask');
const getColonyClient = require('../examples/getColonyClient');
const mintTokens = require('../examples/mintTokens');
const moveFundsBetweenPots = require('../examples/moveFundsBetweenPots');
const revealTaskWorkRating = require('../examples/revealTaskWorkRating');
const setTaskBrief = require('../examples/setTaskBrief');
const setTaskDueDate = require('../examples/setTaskDueDate');
const setTaskEvaluatorPayout = require('../examples/setTaskEvaluatorPayout');
const setTaskManagerPayout = require('../examples/setTaskManagerPayout');
const setTaskRoleUser = require('../examples/setTaskRoleUser');
const setTaskSkill = require('../examples/setTaskSkill');
const setTaskWorkerPayout = require('../examples/setTaskWorkerPayout');
const setTokenOwner = require('../examples/setTokenOwner');
const signTaskBrief = require('../examples/signTaskBrief');
const signTaskEvaluatorPayout = require('../examples/signTaskEvaluatorPayout');
const signTaskWorkerPayout = require('../examples/signTaskWorkerPayout');
const signTaskDueDate = require('../examples/signTaskDueDate');
const submitTaskDeliverable = require('../examples/submitTaskDeliverable');
const submitTaskWorkRating = require('../examples/submitTaskWorkRating');

// Database
DATABASE = {};

// Accounts
const accounts = [
  '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b'
];

// A unix timestamp representing 31 days from now
const futureDueDate = new Date(Date.now() + 2678400000);

// State
const state = {
  networkClient: [],    // networkClient (per account)
  colonyClient: [],     // colonyClient (per account)
};

// Testing Colony Starter Basic examples
describe('Colony Starter Basic', () => {

  // Test the connectNetwork() example from account[0]
  test('account[0] connectNetwork() works', async () => {
    state.networkClient[0] = await connectNetwork(0);
    expect(state.networkClient[0]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the createToken() example from account[0]
  test('account[0] createToken() works', async () => {
    state.tokenAddress = await createToken(
      state.networkClient[0],         // networkClient
      'Token',                        // name
      'TKN',                          // symbol
    );
    expect(state.tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  // Test the createColony() example from account[0]
  test('account[0] createColony() works', async () => {
    state.colony = await createColony(
      state.networkClient[0],         // networkClient
      state.tokenAddress,             // tokenAddress
    );
    expect(state.colony.address).toEqual(expect.stringContaining('0x'));
    expect(state.colony.id).toBeGreaterThan(0);
  }, 5000);

  // Test the getColonyClient() example from account[0]
  test('account[0] getColonyClient() works', async () => {
    state.colonyClient[0] = await getColonyClient(
      state.networkClient[0],         // networkClient
      state.colony.id,                // colonyId
    );
    expect(state.colonyClient[0]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the setTokenOwner() example from account[0]
  test('account[0] setTokenOwner() works', async () => {
    let tokenOwner = await setTokenOwner(
      state.colonyClient[0],          // colonyClient
      state.colony.address,           // colonyAddress
    );
    expect(tokenOwner).toEqual(state.colony.address);
  }, 5000);

  // Test the mintTokens() example from account[0]
  test('account[0] mintTokens() works', async () => {
    let tokenSupply = await mintTokens(
      state.colonyClient[0],          // colonyClient
      30,                             // amount
    );
    expect(tokenSupply.amount.toNumber()).toEqual(30);
  }, 5000);

  // Test the claimColonyFunds() example from account[0]
  test('account[0] claimColonyFunds() works', async () => {
    let colonyPotBalance = await claimColonyFunds(
      state.colonyClient[0],          // colonyClient
      state.tokenAddress,             // tokenAddress
    );
    expect(colonyPotBalance.balance.toNumber()).toEqual(30);
  }, 5000);

  // Test the addDomain() example from account[0]
  test('account[0] addDomain() works', async () => {
    state.domain = await addDomain(
      state.colonyClient[0],          // colonyClient
      1,                              // parentDomainId
    );
    expect(state.domain.id).toBeGreaterThan(1);
  }, 5000);

  // Test the moveFundsBetweenPots() example from account[0]
  test('account[0] moveFundsBetweenPots() works', async () => {
    let potBalance = await moveFundsBetweenPots(
      state.colonyClient[0],          // colonyClient
      1,                              // fromPot
      state.domain.potId,             // toPot
      30,                             // amount
      state.tokenAddress,             // token
    );
    expect(potBalance.balance.toNumber()).toEqual(30);
  }, 5000);

  // Test the createTask() example from account[0]
  test('account[0] createTask() works', async () => {
    state.task = await createTask(
      state.colonyClient[0],          // colonyClient
      state.domain.id,                // domainId
      {
        title: 'New Task Title',                  // title
        description: 'New Task Description',      // description
      },
    );
    expect(state.task).toEqual(expect.objectContaining({
      domainId: state.domain.id,
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 15000);

  // Test the moveFundsBetweenPots() example from account[0]
  test('account[0] moveFundsBetweenPots() works', async () => {
    let potBalance = await moveFundsBetweenPots(
      state.colonyClient[0],          // colonyClient
      state.domain.potId,             // fromPot
      state.task.potId,               // toPot
      30,                             // amount
      state.tokenAddress,             // token
    );
    expect(potBalance.balance.toNumber()).toEqual(30);
  }, 5000);

  // Test the addGlobalSkill() example from account[0]
  test('account[0] addGlobalSkill() works', async () => {
    state.skill = await addGlobalSkill(
      state.networkClient[0],         // networkClient
      1,                              // parentSkillId
    );
    expect(state.skill.id).toBeGreaterThan(1);
  }, 5000);

  // Test the setTaskSkill() example from account[0]
  test('account[0] setTaskSkill() works', async () => {
    state.task = await setTaskSkill(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.skill.id,                 // skillId
    );
    expect(state.task.skillId).toEqual(state.skill.id);
  }, 5000);

  // Test the setTaskDueDate() example from account[0]
  test('account[0] setTaskDueDate() works', async () => {
    await setTaskDueDate(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      futureDueDate,                  // domainId
    );
    expect(JSON.parse(DATABASE.setTaskDueDateOperationJSON)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          dueDate: futureDueDate.toISOString(),
        }),
      }),
    }));
  }, 5000);

  // Test the signTaskDueDate() example from account[0]
  test('account[0] signTaskDueDate() works', async () => {
    state.task = await signTaskDueDate(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task.dueDate).toEqual(futureDueDate);
  }, 5000);

  // Test the setTaskManagerPayout() example from account[0]
  test('account[0] setTaskManagerPayout() works', async () => {
    let taskManagerPayout = await setTaskManagerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      10,                             // amount
      state.tokenAddress,             // token
    );
    expect(taskManagerPayout.amount.toNumber()).toEqual(10);
  }, 5000);

  // Test the setTaskEvaluatorPayout() example from account[0]
  test('account[0] setTaskEvaluatorPayout() works', async () => {
    let taskEvaluatorPayout = await setTaskEvaluatorPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      10,                             // amount
      state.tokenAddress,             // token
    );
    expect(JSON.parse(DATABASE.setTaskEvaluatorPayoutOperationJSON)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          amount: (new BN(10)).toJSON(),
        }),
      }),
    }));
  }, 5000);

  // Test the signTaskEvaluatorPayout() example from account[0]
  test('account[0] signTaskEvaluatorPayout() works', async () => {
    let taskEvaluatorPayout = await signTaskEvaluatorPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(taskEvaluatorPayout.amount.toNumber()).toEqual(10);
  }, 5000);

  // Test the setTaskWorkerPayout() example from account[0]
  test('account[0] setTaskWorkerPayout() works', async () => {
    await setTaskWorkerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      10,                             // amount
      state.tokenAddress,             // token
    );
    expect(JSON.parse(DATABASE.setTaskWorkerPayoutOperationJSON)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          amount: (new BN(10)).toJSON(),
        }),
      }),
    }));
  }, 5000);

  // Test the signTaskWorkerPayout() example from account[0]
  test('account[0] signTaskWorkerPayout() works', async () => {
    let taskWorkerPayout = await signTaskWorkerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(taskWorkerPayout.amount.toNumber()).toEqual(10);
  }, 5000);

  // Test the setTaskRoleUser() example from account[0]
  test('account[0] setTaskRoleUser() works with evaluator', async () => {
    let taskRoles = await setTaskRoleUser(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      'EVALUATOR',                    // role
      accounts[1],                    // user
    );
    expect(taskRoles).toEqual(expect.objectContaining({
      evaluator: expect.objectContaining({
        address: expect.stringMatching(accounts[1]),
      }),
    }));
  }, 5000);

  // Test the setTaskRoleUser() example from account[0]
  test('account[0] setTaskRoleUser() works with worker', async () => {
    let taskRoles = await setTaskRoleUser(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      accounts[2],                    // user
    );
    expect(taskRoles).toEqual(expect.objectContaining({
      worker: expect.objectContaining({
        address: expect.stringMatching(accounts[2]),
      }),
    }));
  }, 5000);

  // Test the setTaskBrief() example from account[0]
  test('account[0] setTaskBrief() works', async () => {
    await setTaskBrief(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      {
        title: 'Updated Task Title',                  // title
        description: 'Updated Task Description',      // description
      },
    );
    expect(JSON.parse(DATABASE.setTaskBriefOperationJSON)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          specificationHash: 'QmTS7jaoGwtxftSaXRDJn4A27pQ5YtCkWKHuf98CsuJ1qH',
        }),
      }),
    }));
  }, 5000);

  // Test the signTaskBrief() example from account[0]
  test('account[0] signTaskBrief() works', async () => {
    state.task = await signTaskBrief(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task).toEqual(expect.objectContaining({
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 5000);

  // Test the connectNetwork() example from account[2]
  test('account[2] connectNetwork() works', async () => {
    state.networkClient[2] = await connectNetwork(2);
    expect(state.networkClient[2]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the getColonyClient() example from account[2]
  test('account[2] getColonyClient() works', async () => {
    state.colonyClient[2] = await getColonyClient(
      state.networkClient[2],         // networkClient
      state.colony.id,                // colonyId
    );
    expect(state.colonyClient[2]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the signTaskBrief() example from account[2]
  test('account[2] signTaskBrief() works', async () => {
    state.task = await signTaskBrief(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task).toEqual(expect.objectContaining({
      specificationHash: 'QmTS7jaoGwtxftSaXRDJn4A27pQ5YtCkWKHuf98CsuJ1qH',
    }));
  }, 5000);

  // Test the submitTaskDeliverable() example from account[2]
  test('account[2] submitTaskDeliverable() works', async () => {
    state.task = await submitTaskDeliverable(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      {
        message: 'Work Complete',         // message
      },
    );
    expect(state.task).toEqual(expect.objectContaining({
      deliverableHash: 'QmWzXkBNJ1aKB2PRNrFu7ih9LPb34H5SQ76jEUdniS4JdJ',
    }));
  }, 5000);

  // Test the connectNetwork() example from account[1]
  test('account[1] connectNetwork() works', async () => {
    state.networkClient[1] = await connectNetwork(1);
    expect(state.networkClient[1]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the getColonyClient() example from account[1]
  test('account[1] getColonyClient() works', async () => {
    state.colonyClient[1] = await getColonyClient(
      state.networkClient[1],         // networkClient
      state.colony.id,                // colonyId
    );
    expect(state.colonyClient[1]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the submitTaskWorkRating() example from account[1]
  test('account[1] submitTaskWorkRating() works', async () => {
    let taskWorkRatings = await submitTaskWorkRating(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      3,                              // rating
    );
    expect(taskWorkRatings.count).toEqual(1);
  }, 5000);

  // Test the submitTaskWorkRating() example from account[2]
  test('account[2] submitTaskWorkRating() works', async () => {
    let taskWorkRatings = await submitTaskWorkRating(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      3,                              // rating
    );
    expect(taskWorkRatings.count).toEqual(2);
  }, 5000);

  // Test the revealTaskWorkRating() example from account[1]
  test('account[1] revealTaskWorkRating() works', async () => {
    let taskWorkRatings = await revealTaskWorkRating(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      3,                              // rating
    );
    expect(taskWorkRatings.count).toEqual(2);
  }, 5000);

  // Test the revealTaskWorkRating() example from account[2]
  test('account[2] revealTaskWorkRating() works', async () => {
    let taskWorkRatings = await revealTaskWorkRating(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      3,                              // rating
    );
    expect(taskWorkRatings.count).toEqual(2);
  }, 5000);

  // Test the finalizeTask() example from account[0]
  test('account[0] finalizeTask() works', async () => {
    state.task = await finalizeTask(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task.finalized).toEqual(true);
  }, 5000);

  // Test the claimPayout() example from account[0]
  test('account[0] claimPayout() works', async () => {
    let taskPayout = await claimPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toNumber()).toEqual(0);
  }, 5000);

  // Test the claimPayout() example from account[1]
  test('account[1] claimPayout() works', async () => {
    let taskPayout = await claimPayout(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'EVALUATOR',                    // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toNumber()).toEqual(0);
  }, 5000);

  // Test the claimPayout() example from account[2]
  test('account[2] claimPayout() works', async () => {
    let taskPayout = await claimPayout(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toNumber()).toEqual(0);
  }, 5000);

});

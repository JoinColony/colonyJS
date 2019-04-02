// Import prerequisites
const { EMPTY_ADDRESS } = require('@colony/colony-js-client');
const BN = require('bn.js');

// Import actions
const addDomain = require('../actions/addDomain');
const addGlobalSkill = require('../actions/addGlobalSkill');
const claimColonyFunds = require('../actions/claimColonyFunds');
const claimPayout = require('../actions/claimPayout');
const connectNetwork = require('../actions/connectNetwork');
const createColony = require('../actions/createColony');
const createTask = require('../actions/createTask');
const createToken = require('../actions/createToken');
const finalizeTask = require('../actions/finalizeTask');
const getAccounts = require('../actions/getAccounts');
const getColonyClient = require('../actions/getColonyClient');
const mintTokens = require('../actions/mintTokens');
const moveFundsBetweenPots = require('../actions/moveFundsBetweenPots');
const removeTaskEvaluatorRole = require('../actions/removeTaskEvaluatorRole');
const revealTaskWorkRating = require('../actions/revealTaskWorkRating');
const sendEther = require('../actions/sendEther');
const setTaskBrief = require('../actions/setTaskBrief');
const setTaskDueDate = require('../actions/setTaskDueDate');
const setTaskEvaluatorPayout = require('../actions/setTaskEvaluatorPayout');
const setTaskEvaluatorRole = require('../actions/setTaskEvaluatorRole');
const setTaskManagerPayout = require('../actions/setTaskManagerPayout');
const setTaskSkill = require('../actions/setTaskSkill');
const setTaskWorkerPayout = require('../actions/setTaskWorkerPayout');
const setTaskWorkerRole = require('../actions/setTaskWorkerRole');
const setTokenOwner = require('../actions/setTokenOwner');
const signRemoveTaskEvaluatorRole = require('../actions/signRemoveTaskEvaluatorRole');
const signSetTaskBrief = require('../actions/signSetTaskBrief');
const signSetTaskEvaluatorPayout = require('../actions/signSetTaskEvaluatorPayout');
const signSetTaskEvaluatorRole = require('../actions/signSetTaskEvaluatorRole');
const signSetTaskManagerPayout = require('../actions/signSetTaskManagerPayout');
const signSetTaskSkill = require('../actions/signSetTaskSkill');
const signSetTaskWorkerPayout = require('../actions/signSetTaskWorkerPayout');
const signSetTaskWorkerRole = require('../actions/signSetTaskWorkerRole');
const signSetTaskDueDate = require('../actions/signSetTaskDueDate');
const submitTaskDeliverable = require('../actions/submitTaskDeliverable');
const submitTaskWorkRating = require('../actions/submitTaskWorkRating');

// Database
DATABASE = {
  operations: {},
};

// State
const state = {
  networkClient: [],    // networkClient (per account)
  colonyClient: [],     // colonyClient (per account)
};

// Testing colony-example actions
describe('colony-example [ local ]', () => {

  // Test TrufflepigLoader getAccounts()
  test('getAccounts() works', async () => {
    state.accounts = await getAccounts();
    expect(state.accounts.length).toEqual(12);
  }, 5000)

  // Test the connectNetwork() action from account[0]
  test('account[0] connectNetwork() works', async () => {
    state.networkClient[0] = await connectNetwork(
      'local',                        // network
      state.accounts[0][1],           // privateKey
    );
    expect(state.networkClient[0]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
      })
    }));
  }, 5000);

  // Test the createToken() action from account[0]
  test('account[0] createToken() works', async () => {
    state.tokenAddress = await createToken(
      state.networkClient[0],         // networkClient
      'Token',                        // name
      'TKN',                          // symbol
    );
    expect(state.tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  // Test the createColony() action from account[0]
  test('account[0] createColony() works', async () => {
    state.colony = await createColony(
      state.networkClient[0],         // networkClient
      state.tokenAddress,             // tokenAddress
    );
    expect(state.colony.address).toEqual(expect.stringContaining('0x'));
    expect(state.colony.id).toBeGreaterThan(0);
  }, 5000);

  // Test the getColonyClient() action from account[0]
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

  // Test the setTokenOwner() action from account[0]
  test('account[0] setTokenOwner() works', async () => {
    const tokenOwner = await setTokenOwner(
      state.colonyClient[0],          // colonyClient
      state.colony.address,           // colonyAddress
    );
    expect(tokenOwner).toEqual(state.colony.address);
  }, 5000);

  // Test the mintTokens() action from account[0]
  test('account[0] mintTokens() works', async () => {
    const tokenSupply = await mintTokens(
      state.colonyClient[0],          // colonyClient
      new BN('3000000000000000000'),  // amount
    );
    expect(tokenSupply.amount.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the sendEther() action from account[0]
  test('account[0] sendEther() works', async () => {
    const balanceAfter = await sendEther(
      state.colonyClient[0],          // accountIndex
      new BN('3000000000000000000'),  // amount
    );
    expect(balanceAfter).toEqual('3000000000000000000');
  }, 5000);

  // Test the claimColonyFunds() action from account[0]
  test('account[0] claimColonyFunds() works with token', async () => {
    const colonyPotBalance = await claimColonyFunds(
      state.colonyClient[0],          // colonyClient
      state.tokenAddress,             // tokenAddress
    );
    expect(colonyPotBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the claimColonyFunds() action from account[0]
  test('account[0] claimColonyFunds() works with ether', async () => {
    const colonyPotBalance = await claimColonyFunds(
      state.colonyClient[0],          // colonyClient
      EMPTY_ADDRESS,                  // tokenAddress
    );
    expect(colonyPotBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the addDomain() action from account[0]
  test('account[0] addDomain() works', async () => {
    state.domain = await addDomain(
      state.colonyClient[0],          // colonyClient
      1,                              // parentDomainId
    );
    expect(state.domain.id).toBeGreaterThan(1);
  }, 5000);

  // Test the moveFundsBetweenPots() action from account[0]
  test('account[0] moveFundsBetweenPots() works with token', async () => {
    const potBalance = await moveFundsBetweenPots(
      state.colonyClient[0],          // colonyClient
      1,                              // fromPot
      state.domain.potId,             // toPot
      new BN('3000000000000000000'),  // amount
      state.tokenAddress,             // token
    );
    expect(potBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the moveFundsBetweenPots() action from account[0]
  test('account[0] moveFundsBetweenPots() works with ether', async () => {
    const potBalance = await moveFundsBetweenPots(
      state.colonyClient[0],          // colonyClient
      1,                              // fromPot
      state.domain.potId,             // toPot
      new BN('3000000000000000000'),  // amount
      EMPTY_ADDRESS,                  // token
    );
    expect(potBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the createTask() action from account[0]
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

  // Test the moveFundsBetweenPots() action from account[0]
  test('account[0] moveFundsBetweenPots() works with tokens', async () => {
    const potBalance = await moveFundsBetweenPots(
      state.colonyClient[0],          // colonyClient
      state.domain.potId,             // fromPot
      state.task.potId,               // toPot
      new BN('3000000000000000000'),  // amount
      state.tokenAddress,             // token
    );
    expect(potBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the moveFundsBetweenPots() action from account[0]
  test('account[0] moveFundsBetweenPots() works with ether', async () => {
    const potBalance = await moveFundsBetweenPots(
      state.colonyClient[0],          // colonyClient
      state.domain.potId,             // fromPot
      state.task.potId,               // toPot
      new BN('3000000000000000000'),  // amount
      EMPTY_ADDRESS,                  // token
    );
    expect(potBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the addGlobalSkill() action from account[0]
  test('account[0] addGlobalSkill() works', async () => {
    state.skill = await addGlobalSkill(
      state.networkClient[0],         // networkClient
      1,                              // parentSkillId
    );
    expect(state.skill.id).toBeGreaterThan(1);
  }, 5000);

  // Test the setTaskSkill() action from account[0]
  test('account[0] setTaskSkill() works', async () => {
    await setTaskSkill(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.skill.id,                 // skillId
    );
    expect(JSON.parse(DATABASE.operations.setTaskSkill)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          skillId: state.skill.id,
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskSkill() action from account[0]
  test('account[0] signSetTaskSkill() works', async () => {
    state.task = await signSetTaskSkill(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task.skillId).toEqual(state.skill.id);
  }, 5000);

  // Test the setTaskDueDate() action from account[0]
  test('account[0] setTaskDueDate() works', async () => {
    await setTaskDueDate(
      state.colonyClient[0],                  // colonyClient
      state.task.id,                          // taskId
      new Date('2020-01-01T00:00:00.000Z'),   // dueDate
    );
    expect(JSON.parse(DATABASE.operations.setTaskDueDate)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          dueDate: '2020-01-01T00:00:00.000Z',
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskDueDate() action from account[0]
  test('account[0] signSetTaskDueDate() works', async () => {
    state.task = await signSetTaskDueDate(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task.dueDate).toEqual(new Date('2020-01-01T00:00:00.000Z'));
  }, 5000);

  // Test the setTaskManagerPayout() action from account[0]
  test('account[0] setTaskManagerPayout() works with tokens', async () => {
    await setTaskManagerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      new BN('1000000000000000000'),  // amount
      state.tokenAddress,             // token
    );
    expect(JSON.parse(DATABASE.operations.setTaskManagerPayout)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          amount: (new BN('1000000000000000000')).toJSON(),
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskManagerPayout() action from account[0]
  test('account[0] signSetTaskManagerPayout() works with tokens', async () => {
    const taskManagerPayout = await signSetTaskManagerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.tokenAddress,             // token
    );
    expect(taskManagerPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setTaskManagerPayout() action from account[0]
  test('account[0] setTaskManagerPayout() works with ether', async () => {
    await setTaskManagerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      new BN('1000000000000000000'),  // amount
      EMPTY_ADDRESS,                  // token
    );
    expect(JSON.parse(DATABASE.operations.setTaskManagerPayout)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          amount: (new BN('1000000000000000000')).toJSON(),
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskManagerPayout() action from account[0]
  test('account[0] signSetTaskManagerPayout() works with ether', async () => {
    const taskManagerPayout = await signSetTaskManagerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      EMPTY_ADDRESS,                  // token
    );
    expect(taskManagerPayout.amount._bn).toEqual(new BN('1000000000000000000'));
  }, 5000);

  // Test the setTaskEvaluatorPayout() action from account[0]
  test('account[0] setTaskEvaluatorPayout() works with tokens', async () => {
    await setTaskEvaluatorPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      new BN('1000000000000000000'),  // amount
      state.tokenAddress,             // token
    );
    expect(JSON.parse(DATABASE.operations.setTaskEvaluatorPayout)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          amount: (new BN('1000000000000000000')).toJSON(),
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskEvaluatorPayout() action from account[0]
  test('account[0] signSetTaskEvaluatorPayout() works with tokens', async () => {
    const taskEvaluatorPayout = await signSetTaskEvaluatorPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.tokenAddress,             // token
    );
    expect(taskEvaluatorPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setTaskEvaluatorPayout() action from account[0]
  test('account[0] setTaskEvaluatorPayout() works with ether', async () => {
    await setTaskEvaluatorPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      new BN('1000000000000000000'),  // amount
      EMPTY_ADDRESS,                  // token
    );
    expect(JSON.parse(DATABASE.operations.setTaskEvaluatorPayout)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          amount: (new BN('1000000000000000000')).toJSON(),
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskEvaluatorPayout() action from account[0]
  test('account[0] signSetTaskEvaluatorPayout() works with ether', async () => {
    const taskEvaluatorPayout = await signSetTaskEvaluatorPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      EMPTY_ADDRESS,                  // token
    );
    expect(taskEvaluatorPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setTaskWorkerPayout() action from account[0]
  test('account[0] setTaskWorkerPayout() works with tokens', async () => {
    await setTaskWorkerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      new BN('1000000000000000000'),  // amount
      state.tokenAddress,             // token
    );
    expect(JSON.parse(DATABASE.operations.setTaskWorkerPayout)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          amount: (new BN('1000000000000000000')).toJSON(),
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskWorkerPayout() action from account[0]
  test('account[0] signSetTaskWorkerPayout() works with tokens', async () => {
    const taskWorkerPayout = await signSetTaskWorkerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.tokenAddress,             // token
    );
    expect(taskWorkerPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setTaskWorkerPayout() action from account[0]
  test('account[0] setTaskWorkerPayout() works with ether', async () => {
    await setTaskWorkerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      new BN('1000000000000000000'),  // amount
      EMPTY_ADDRESS,                  // token
    );
    expect(JSON.parse(DATABASE.operations.setTaskWorkerPayout)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          amount: (new BN('1000000000000000000')).toJSON(),
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskWorkerPayout() action from account[0]
  test('account[0] signSetTaskWorkerPayout() works with ether', async () => {
    const taskWorkerPayout = await signSetTaskWorkerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      EMPTY_ADDRESS,                  // token
    );
    expect(taskWorkerPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the removeTaskEvaluatorRole() action from account[0]
  test('account[0] removeTaskEvaluatorRole() works', async () => {
    await removeTaskEvaluatorRole(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(JSON.parse(DATABASE.operations.removeTaskEvaluatorRole)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
        }),
        inputValues: expect.not.objectContaining({
          user: expect.not.stringContaining('0x'),
        }),
      }),
    }));
  }, 5000);

  // Test the signRemoveTaskEvaluatorRole() action from account[0]
  test('account[0] signRemoveTaskEvaluatorRole() works', async () => {
    const taskRole = await signRemoveTaskEvaluatorRole(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(taskRole).toEqual(expect.objectContaining({
      address: null,
    }));
  }, 5000);

  // Test the setTaskEvaluatorRole() action from account[0]
  test('account[0] setTaskEvaluatorRole() works', async () => {
    await setTaskEvaluatorRole(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.accounts[1][0],           // user
    );
    expect(JSON.parse(DATABASE.operations.setTaskEvaluatorRole)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          user: state.accounts[1][0],
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskEvaluatorRole() action from account[0]
  test('account[0] signSetTaskEvaluatorRole() works', async () => {
    const taskRole = await signSetTaskEvaluatorRole(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(taskRole).toEqual(expect.objectContaining({
      address: null,
    }));
  }, 5000);

  // Test the connectNetwork() action from account[1]
  test('account[1] connectNetwork() works', async () => {
    state.networkClient[1] = await connectNetwork(
      'local',                        // network
      state.accounts[1][1],           // privateKey
    );
    expect(state.networkClient[1]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the getColonyClient() action from account[1]
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

  // Test the signSetTaskEvaluatorRole() action from account[1]
  test('account[1] signSetTaskEvaluatorRole() works', async () => {
    const taskRole = await signSetTaskEvaluatorRole(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
    );
    taskRole.address = taskRole.address.toLowerCase();
    expect(taskRole).toEqual(expect.objectContaining({
      address: expect.stringMatching(state.accounts[1][0]),
    }));
  }, 5000);

  // Test the setTaskWorkerRole() action from account[0]
  test('account[0] setTaskWorkerRole() works', async () => {
    await setTaskWorkerRole(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.accounts[2][0],           // user
    );
    expect(JSON.parse(DATABASE.operations.setTaskWorkerRole)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          user: state.accounts[2][0],
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskWorkerRole() action from account[0]
  test('account[0] signSetTaskWorkerRole() works', async () => {
    const taskRole = await signSetTaskWorkerRole(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(taskRole).toEqual(expect.objectContaining({
      address: null,
    }));
  }, 5000);

  // Test the connectNetwork() action from account[2]
  test('account[2] connectNetwork() works', async () => {
    state.networkClient[2] = await connectNetwork(
      'local',                        // network
      state.accounts[2][1],           // privateKey
    );
    expect(state.networkClient[2]).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
      })
    }));
  }, 5000);

  // Test the getColonyClient() action from account[2]
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

  // Test the signSetTaskWorkerRole() action from account[2]
  test('account[2] signSetTaskWorkerRole() works', async () => {
    const taskRole = await signSetTaskWorkerRole(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
    );
    taskRole.address = taskRole.address.toLowerCase();
    expect(taskRole).toEqual(expect.objectContaining({
      address: expect.stringMatching(state.accounts[2][0]),
    }));
  }, 5000);

  // Test the setTaskBrief() action from account[0]
  test('account[0] setTaskBrief() works', async () => {
    await setTaskBrief(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      {
        title: 'Updated Task Title',                  // title
        description: 'Updated Task Description',      // description
      },
    );
    expect(JSON.parse(DATABASE.operations.setTaskBrief)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          specificationHash: 'QmTS7jaoGwtxftSaXRDJn4A27pQ5YtCkWKHuf98CsuJ1qH',
        }),
      }),
    }));
  }, 5000);

  // Test the signSetTaskBrief() action from account[0]
  test('account[0] signSetTaskBrief() works', async () => {
    state.task = await signSetTaskBrief(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task).toEqual(expect.objectContaining({
      specificationHash: 'QmWvM3isCmEY8bsixThuFeUJmE5MN2he1UxaPzMngLZ7Wq',
    }));
  }, 5000);

  // Test the signSetTaskBrief() action from account[2]
  test('account[2] signSetTaskBrief() works', async () => {
    state.task = await signSetTaskBrief(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task).toEqual(expect.objectContaining({
      specificationHash: 'QmTS7jaoGwtxftSaXRDJn4A27pQ5YtCkWKHuf98CsuJ1qH',
    }));
  }, 5000);

  // Test the submitTaskDeliverable() action from account[2]
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

  // Test the submitTaskWorkRating() action from account[1]
  test('account[1] submitTaskWorkRating() works', async () => {
    const taskWorkRatings = await submitTaskWorkRating(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      3,                              // rating
    );
    expect(taskWorkRatings.count).toEqual(1);
  }, 5000);

  // Test the submitTaskWorkRating() action from account[2]
  test('account[2] submitTaskWorkRating() works', async () => {
    const taskWorkRatings = await submitTaskWorkRating(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      3,                              // rating
    );
    expect(taskWorkRatings.count).toEqual(2);
  }, 5000);

  // Test the revealTaskWorkRating() action from account[1]
  test('account[1] revealTaskWorkRating() works', async () => {
    const taskRole = await revealTaskWorkRating(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      3,                              // rating
    );
    expect(taskRole.rating).toEqual(3);
  }, 5000);

  // Test the revealTaskWorkRating() action from account[2]
  test('account[2] revealTaskWorkRating() works', async () => {
    const taskRole = await revealTaskWorkRating(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      3,                              // rating
    );
    expect(taskRole.rating).toEqual(3);
  }, 5000);

  // Test the finalizeTask() action from account[0]
  test('account[0] finalizeTask() works', async () => {
    state.task = await finalizeTask(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
    );
    expect(state.task).toEqual(expect.objectContaining({
      status: 'FINALIZED',
    }));
  }, 5000);

  // Test the claimPayout() action from account[0]
  test('account[0] claimPayout() works with tokens', async () => {
    const taskPayout = await claimPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimPayout() action from account[0]
  test('account[0] claimPayout() works with ether', async () => {
    const taskPayout = await claimPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      EMPTY_ADDRESS,                  // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimPayout() action from account[1]
  test('account[1] claimPayout() works with tokens', async () => {
    const taskPayout = await claimPayout(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'EVALUATOR',                    // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimPayout() action from account[1]
  test('account[1] claimPayout() works with ether', async () => {
    const taskPayout = await claimPayout(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'EVALUATOR',                    // role
      EMPTY_ADDRESS,                  // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimPayout() action from account[2]
  test('account[2] claimPayout() works with tokens', async () => {
    const taskPayout = await claimPayout(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimPayout() action from account[2]
  test('account[2] claimPayout() works with ether', async () => {
    const taskPayout = await claimPayout(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      EMPTY_ADDRESS,                  // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

});

// Import prerequisites
const { EMPTY_ADDRESS } = require('@colony/colony-js-client');
const { BN } = require('web3-utils');

// Import actions
const addDomain = require('../actions/addDomain');
const addGlobalSkill = require('../actions/addGlobalSkill');
const claimColonyFunds = require('../actions/claimColonyFunds');
const claimTaskPayout = require('../actions/claimTaskPayout');
const createColony = require('../actions/createColony');
const addTask = require('../actions/addTask');
const createToken = require('../actions/createToken');
const finalizeTask = require('../actions/finalizeTask');
const getAccounts = require('../actions/getAccounts');
const getColonyClient = require('../actions/getColonyClient');
const getNetworkClient = require('../actions/getNetworkClient');
const mintTokens = require('../actions/mintTokens');
const moveFundsBetweenPots = require('../actions/moveFundsBetweenPots');
const openWallet = require('../actions/openWallet');
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

// Testing colony-example actions
describe('colony-example [ local ]', () => {

  // State
  const state = {
    colonyClient: [],               // colonyClient (per account)
    networkClient: [],              // networkClient (per account)
    wallets: [],                    // wallets (per account)
  };

  // Test TrufflepigLoader getAccounts()
  test('getAccounts() works', async () => {
    state.accounts = await getAccounts();
    expect(state.accounts.length).toEqual(12);
  }, 5000)

  // Test the openWallet() example action
  test('account[0] openWallet() works', async () => {
    state.wallets[0] = await openWallet(
      state.accounts[0][1],                 // privateKey
    );
    expect(state.wallets[0].address.toLowerCase()).toEqual(state.accounts[0][0]);
  }, 5000)

  // Test the getNetworkClient() example action
  test('account[0] getNetworkClient() works', async () => {
    state.networkClient[0] = await getNetworkClient(
      'local',                        // network
      state.wallets[0],                // wallet
    );
    expect(state.networkClient[0]).toEqual(expect.objectContaining({
      contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
      })
    }));
  }, 5000);

  // Test the createToken() example action
  test('account[0] createToken() works', async () => {
    state.tokenAddress = await createToken(
      state.networkClient[0],         // networkClient
      'Token',                        // name
      'TKN',                          // symbol
      18,                             // decimals
    );
    expect(state.tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  // Test the createColony() example action
  test('account[0] createColony() works', async () => {
    state.colony = await createColony(
      state.networkClient[0],         // networkClient
      state.tokenAddress,             // tokenAddress
    );
    expect(state.colony.address).toEqual(expect.stringContaining('0x'));
    expect(state.colony.id).toBeGreaterThan(0);
  }, 5000);

  // Test the getColonyClient() example action
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

  // Test the setTokenOwner() example action
  test('account[0] setTokenOwner() works', async () => {
    const tokenOwner = await setTokenOwner(
      state.colonyClient[0],          // colonyClient
      state.colony.address,           // colonyAddress
    );
    expect(tokenOwner).toEqual(state.colony.address);
  }, 5000);

  // Test the mintTokens() example action
  test('account[0] mintTokens() works', async () => {
    const tokenSupply = await mintTokens(
      state.colonyClient[0],          // colonyClient
      new BN('4000000000000000000'),  // amount
    );
    expect(tokenSupply.amount.toString()).toEqual('4000000000000000000');
  }, 5000);

  // Test the sendEther() action from account[0]
  test('account[0] sendEther() works', async () => {
    const balanceAfter = await sendEther(
      state.colonyClient[0],          // wallet
      state.colony.address,           // to
      new BN('4000000000000000000'),  // amount
    );
    expect(balanceAfter).toEqual('4000000000000000000');
  }, 5000);

  // Test the claimColonyFunds() example action
  test('account[0] claimColonyFunds() works [ token ]', async () => {
    const colonyPotBalance = await claimColonyFunds(
      state.colonyClient[0],          // colonyClient
      state.tokenAddress,             // tokenAddress
    );
    expect(colonyPotBalance.balance.toString()).toEqual('4000000000000000000');
  }, 5000);

  // Test the claimColonyFunds() action from account[0]
  test('account[0] claimColonyFunds() works [ ether ]', async () => {
    const colonyPotBalance = await claimColonyFunds(
      state.colonyClient[0],          // colonyClient
      EMPTY_ADDRESS,                  // tokenAddress
    );
    expect(colonyPotBalance.balance.toString()).toEqual('4000000000000000000');
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
  test('account[0] moveFundsBetweenPots() works [ ether ]', async () => {
    const potBalance = await moveFundsBetweenPots(
      state.colonyClient[0],          // colonyClient
      1,                              // fromPot
      state.domain.potId,             // toPot
      new BN('3000000000000000000'),  // amount
      EMPTY_ADDRESS,                  // token
    );
    expect(potBalance.balance.toString()).toEqual('3000000000000000000');
  }, 5000);

  // Test the addTask() action from account[0]
  test('account[0] addTask() works', async () => {
    state.task = await addTask(
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
  test('account[0] moveFundsBetweenPots() works [ token ]', async () => {
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
  test('account[0] moveFundsBetweenPots() works [ ether ]', async () => {
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
  test('account[0] setTaskManagerPayout() works [ token ]', async () => {
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
  test('account[0] signSetTaskManagerPayout() works [ token ]', async () => {
    const taskManagerPayout = await signSetTaskManagerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.tokenAddress,             // token
    );
    expect(taskManagerPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setTaskManagerPayout() action from account[0]
  test('account[0] setTaskManagerPayout() works [ ether ]', async () => {
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
  test('account[0] signSetTaskManagerPayout() works [ ether ]', async () => {
    const taskManagerPayout = await signSetTaskManagerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      EMPTY_ADDRESS,                  // token
    );
    expect(taskManagerPayout.amount._bn).toEqual(new BN('1000000000000000000'));
  }, 5000);

  // Test the setTaskEvaluatorPayout() action from account[0]
  test('account[0] setTaskEvaluatorPayout() works [ token ]', async () => {
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
  test('account[0] signSetTaskEvaluatorPayout() works [ token ]', async () => {
    const taskEvaluatorPayout = await signSetTaskEvaluatorPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.tokenAddress,             // token
    );
    expect(taskEvaluatorPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setTaskEvaluatorPayout() action from account[0]
  test('account[0] setTaskEvaluatorPayout() works [ ether ]', async () => {
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
  test('account[0] signSetTaskEvaluatorPayout() works [ ether ]', async () => {
    const taskEvaluatorPayout = await signSetTaskEvaluatorPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      EMPTY_ADDRESS,                  // token
    );
    expect(taskEvaluatorPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setTaskWorkerPayout() action from account[0]
  test('account[0] setTaskWorkerPayout() works [ token ]', async () => {
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
  test('account[0] signSetTaskWorkerPayout() works [ token ]', async () => {
    const taskWorkerPayout = await signSetTaskWorkerPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      state.tokenAddress,             // token
    );
    expect(taskWorkerPayout.amount.toString()).toEqual('1000000000000000000');
  }, 5000);

  // Test the setTaskWorkerPayout() action from account[0]
  test('account[0] setTaskWorkerPayout() works [ ether ]', async () => {
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
  test('account[0] signSetTaskWorkerPayout() works [ ether ]', async () => {
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
      state.accounts[1][0],           // address
    );
    expect(JSON.parse(DATABASE.operations.setTaskEvaluatorRole)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          address: state.accounts[1][0],
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

  // Test the openWallet() example action
  test('account[1] openWallet() works', async () => {
    state.wallets[1] = await openWallet(
      state.accounts[1][1],                 // privateKey
    );
    expect(state.wallets[1].address.toLowerCase()).toEqual(state.accounts[1][0]);
  }, 5000)

  // Test the getNetworkClient() example action
  test('account[1] getNetworkClient() works', async () => {
    state.networkClient[1] = await getNetworkClient(
      'local',                        // network
      state.wallets[1],                // wallet
    );
    expect(state.networkClient[1]).toEqual(expect.objectContaining({
      contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
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
      state.accounts[2][0],           // address
    );
    expect(JSON.parse(DATABASE.operations.setTaskWorkerRole)).toEqual(expect.objectContaining({
      payload: expect.objectContaining({
        inputValues: expect.objectContaining({
          taskId: state.task.id,
          address: state.accounts[2][0],
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

  // Test the openWallet() example action
  test('account[2] openWallet() works', async () => {
    state.wallets[2] = await openWallet(
      state.accounts[2][1],                 // privateKey
    );
    expect(state.wallets[2].address.toLowerCase()).toEqual(state.accounts[2][0]);
  }, 5000)

  // Test the getNetworkClient() example action
  test('account[2] getNetworkClient() works', async () => {
    state.networkClient[2] = await getNetworkClient(
      'local',                        // network
      state.wallets[2],                // wallet
    );
    expect(state.networkClient[2]).toEqual(expect.objectContaining({
      contract: expect.objectContaining({
        address: expect.stringContaining('0x'),
        signer: expect.objectContaining({
          address: expect.stringContaining('0x'),
        }),
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

  // Test the claimTaskPayout() action from account[0]
  test('account[0] claimTaskPayout() works [ token ]', async () => {
    const taskPayout = await claimTaskPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimTaskPayout() action from account[0]
  test('account[0] claimTaskPayout() works [ ether ]', async () => {
    const taskPayout = await claimTaskPayout(
      state.colonyClient[0],          // colonyClient
      state.task.id,                  // taskId
      'MANAGER',                      // role
      EMPTY_ADDRESS,                  // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimTaskPayout() action from account[1]
  test('account[1] claimTaskPayout() works [ token ]', async () => {
    const taskPayout = await claimTaskPayout(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'EVALUATOR',                    // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimTaskPayout() action from account[1]
  test('account[1] claimTaskPayout() works [ ether ]', async () => {
    const taskPayout = await claimTaskPayout(
      state.colonyClient[1],          // colonyClient
      state.task.id,                  // taskId
      'EVALUATOR',                    // role
      EMPTY_ADDRESS,                  // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimTaskPayout() action from account[2]
  test('account[2] claimTaskPayout() works [ token ]', async () => {
    const taskPayout = await claimTaskPayout(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      state.tokenAddress,             // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

  // Test the claimTaskPayout() action from account[2]
  test('account[2] claimTaskPayout() works [ ether ]', async () => {
    const taskPayout = await claimTaskPayout(
      state.colonyClient[2],          // colonyClient
      state.task.id,                  // taskId
      'WORKER',                       // role
      EMPTY_ADDRESS,                  // token
    );
    expect(taskPayout.amount.toString()).toEqual('0');
  }, 5000);

});

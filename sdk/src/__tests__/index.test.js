const connectNetwork = require('../actions/connectNetwork');
const createColony = require('../actions/createColony');
const createDomain = require('../actions/createDomain');
const createSkill = require('../actions/createSkill');
const createTask = require('../actions/createTask');
const createToken = require('../actions/createToken');
const updateTask = require('../actions/updateTask');
const updateTaskRoles = require('../actions/updateTaskRoles');

// Define accounts
const accounts = [
  '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
  '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0',
  '0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b'
]

describe('hackathonStarter', () => {

  let networkClient,
      tokenAddress,
      colonyClient,
      domainId,
      task,
      skillId

  test('connectNetwork() works', async () => {
    networkClient = await connectNetwork();
    expect(networkClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x')
      })
    }));
  }, 5000);

  test('createToken() works', async () => {
    tokenAddress = await createToken(
      networkClient,        // networkClient
      'token',              // name
      'TKN',                // symbol
    );
    expect(tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  test('createColony() works', async () => {
    colonyClient = await createColony(
      networkClient,        // networkClient
      tokenAddress,         // tokenAddress
    );
    expect(colonyClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x')
      })
    }));
  }, 5000);

  test('createDomain() works', async () => {
    domainId = await createDomain(
      colonyClient,         // colonyClient
      1,                    // parentDomainId
    );
    expect(domainId).toBeGreaterThan(1);
  }, 5000);

  test('createTask() works', async () => {
    task = await createTask(
      colonyClient,         // colonyClient
      'title',              // title
      'description',        // description
      domainId,             // domainId
    );
    expect(task).toHaveProperty('specificationHash');
    expect(task).toHaveProperty('deliverableHash');
    expect(task).toHaveProperty('finalized');
    expect(task).toHaveProperty('cancelled');
    expect(task).toHaveProperty('dueDate');
    expect(task).toHaveProperty('payoutsWeCannotMake');
    expect(task).toHaveProperty('potId');
    expect(task).toHaveProperty('deliverableDate');
    expect(task).toHaveProperty('domainId');
    expect(task).toHaveProperty('id');
    expect(task).toHaveProperty('skillId');
  }, 10000);

  test('createSkill() works', async () => {
    skillId = await createSkill(
      networkClient,        // networkClient
      1,                    // parentSkillId
    );
    expect(skillId).toBeGreaterThan(1);
  }, 5000);

  test('updateTask() works when updating the domainId', async () => {
    const taskId = task.id;
    task = await updateTask(
      colonyClient,         // colonyClient
      taskId,               // taskId
      {
        domainId: 1,        // domainId
      },
    );
    expect(task.domainId).toEqual(1);
  }, 5000);

  test('updateTask() works when updating the skillId', async () => {
    const taskId = task.id;
    task = await updateTask(
      colonyClient,         // colonyClient
      taskId,               // taskId
      {
        skillId,            // skillId
      },
    );
    expect(task.skillId).toEqual(skillId);
  }, 5000);

  test('updateTaskRoles() works', async () => {
    const taskId = task.id;
    task.roles = await updateTaskRoles(
      colonyClient,         // colonyClient
      taskId,               // taskId
      {
        evaluator: accounts[1],   // evaluator
        worker: accounts[2]       // worker
      },
    );
    expect(task.roles).toEqual(expect.objectContaining({
      evaluator: expect.objectContaining({
        address: expect.stringMatching(accounts[1])
      }),
      manager: expect.objectContaining({
        address: expect.stringMatching(accounts[0])
      }),
      worker: expect.objectContaining({
        address: expect.stringMatching(accounts[2])
      }),
    }));
  }, 5000);

});

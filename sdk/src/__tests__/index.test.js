const connectNetwork = require('../actions/connectNetwork');
const createColony = require('../actions/createColony');
const createDomain = require('../actions/createDomain');
const createTask = require('../actions/createTask');
const createToken = require('../actions/createToken');

describe('hackathonStarter', () => {

  let networkClient,
      tokenAddress,
      colonyClient,
      domainId,
      task

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
      networkClient,      // networkClient
      'token',            // name
      'TKN',              // symbol
    );
    expect(tokenAddress).toEqual(expect.stringContaining('0x'));
  }, 5000);

  test('createColony() works', async () => {
    colonyClient = await createColony(
      networkClient,      // networkClient
      tokenAddress,       // tokenAddress
    );
    expect(colonyClient).toEqual(expect.objectContaining({
      _contract: expect.objectContaining({
        address: expect.stringContaining('0x')
      })
    }));
  }, 5000);

  test('createDomain() works', async () => {
    domainId = await createDomain(
      colonyClient,       // colonyClient
      1,                  // parentDomainId
    );
    expect(domainId).toBeGreaterThan(1);
  }, 5000);


  test('createTask() works', async () => {
    task = await createTask(
      colonyClient,       // colonyClient
      'title',            // title
      'description',      // description
      domainId,           // domainId
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
  }, 5000);

});

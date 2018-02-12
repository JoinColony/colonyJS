/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
import createSandbox from 'jest-sandbox';

import ColonyClient from '../ColonyClient';
import ColonyNetworkClient from '../ColonyNetworkClient';

describe('ColonyClient', () => {
  const sandbox = createSandbox();

  const transaction = {
    hash: '0x123',
  };
  const event = {
    event: 'EventName',
    transactionHash: '0x123',
    args: {
      myValue: 123,
    },
  };

  const callFns = {
    getFeeInverse: sandbox.fn(async () => Promise.resolve([123])),
    getNonRewardPotsTotal: sandbox.fn(async () => Promise.resolve([123])),
    getPotBalance: sandbox.fn(async () => Promise.resolve([123])),
    getRewardInverse: sandbox.fn(async () => Promise.resolve([123])),
    getTask: sandbox.fn(async () =>
      Promise.resolve(['abc', 'def', 'ghi', 'jkl', 123, 234, 345, 567, 678]),
    ),
    getTaskCount: sandbox.fn(async () => Promise.resolve([123])),
    getTaskPayout: sandbox.fn(async () => Promise.resolve([123])),
    getTaskRole: sandbox.fn(async () => Promise.resolve(['abc', true, 123])),
    getTaskWorkRatings: sandbox.fn(async () => Promise.resolve([123, 234])),
    getTaskWorkRatingSecret: sandbox.fn(async () => Promise.resolve(['abc'])),
    getToken: sandbox.fn(async () => Promise.resolve(['abc'])),
    getTransactionCount: sandbox.fn(async () => Promise.resolve([123])),
    owner: sandbox.fn(async () => Promise.resolve(['abc'])),
  };

  const sendFns = {
    addSkill: sandbox.fn(async () => Promise.resolve(transaction)),
    approveTaskChange: sandbox.fn(async () => Promise.resolve(transaction)),
    assignWorkRating: sandbox.fn(async () => Promise.resolve(transaction)),
    authority: sandbox.fn(async () => Promise.resolve(transaction)),
    cancelTask: sandbox.fn(async () => Promise.resolve(transaction)),
    claimColonyFunds: sandbox.fn(async () => Promise.resolve(transaction)),
    claimPayout: sandbox.fn(async () => Promise.resolve(transaction)),
    confirmTransaction: sandbox.fn(async () => Promise.resolve(transaction)),
    finalizeTask: sandbox.fn(async () => Promise.resolve(transaction)),
    generateSecret: sandbox.fn(async () => Promise.resolve(transaction)),
    initialiseColony: sandbox.fn(async () => Promise.resolve(transaction)),
    makeTask: sandbox.fn(async () => Promise.resolve(transaction)),
    mintTokens: sandbox.fn(async () => Promise.resolve(transaction)),
    moveFundsBetweenPots: sandbox.fn(async () => Promise.resolve(transaction)),
    proposeTaskChange: sandbox.fn(async () => Promise.resolve(transaction)),
    revealTaskWorkRating: sandbox.fn(async () => Promise.resolve(transaction)),
    setFunctionReviewers: sandbox.fn(async () => Promise.resolve(transaction)),
    setTaskBrief: sandbox.fn(async () => Promise.resolve(transaction)),
    setTaskDueDate: sandbox.fn(async () => Promise.resolve(transaction)),
    setTaskPayout: sandbox.fn(async () => Promise.resolve(transaction)),
    setTaskRoleUser: sandbox.fn(async () => Promise.resolve(transaction)),
    setTaskSkill: sandbox.fn(async () => Promise.resolve(transaction)),
    setToken: sandbox.fn(async () => Promise.resolve(transaction)),
    submitTaskDeliverable: sandbox.fn(async () => Promise.resolve(transaction)),
    submitTaskWorkRating: sandbox.fn(async () => Promise.resolve(transaction)),
    submitTransaction: sandbox.fn(async () => Promise.resolve(transaction)),
  };

  const contract = {
    ...callFns,
    ...sendFns,
  };

  const adapter = {
    getContract: sandbox.fn(async () => Promise.resolve(contract)),
    getEventPromises: sandbox.fn(() => [Promise.resolve(event)]),
    waitForTransaction: sandbox.fn(() => Promise.resolve(transaction)),
  };

  const networkClient = {};

  test('ColonyClient creation', async () => {
    sandbox.spyOn(ColonyClient, 'create');
    // TODO test without supplied networkClient
    const client = await ColonyClient.createSelf(adapter, networkClient);
    expect(client).toBeInstanceOf(ColonyClient);
    expect(ColonyClient.create).toHaveBeenCalledWith(
      { name: 'Colony' },
      adapter,
      networkClient,
    );
  });
});

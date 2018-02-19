/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
import createSandbox from 'jest-sandbox';

import ColonyNetworkClient from '../client/ColonyNetworkClient';
// import type { Transaction } from '@colony/colony-js-adapter';

describe('ColonyNetworkClient', () => {
  const sandbox = createSandbox();
  beforeEach(() => sandbox.clear());

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
    getChildSkillId: sandbox.fn(async () => Promise.resolve(['abc'])),
    getColony: sandbox.fn(async () => Promise.resolve(['abc'])),
    getColonyAt: sandbox.fn(async () => Promise.resolve(['abc'])),
    getColonyCount: sandbox.fn(async () => Promise.resolve([123])),
    getColonyVersionResolver: sandbox.fn(async () => Promise.resolve(['abc'])),
    getCurrentColonyVersion: sandbox.fn(async () => Promise.resolve([123])),
    getParentSkillId: sandbox.fn(async () => Promise.resolve([123])),
    getReputationUpdateLogEntry: sandbox.fn(async () =>
      Promise.resolve(['abc', 123, 'def', 234, 345]),
    ),
    getReputationUpdateLogLength: sandbox.fn(async () =>
      Promise.resolve([123]),
    ),
    getSkill: sandbox.fn(async () => Promise.resolve([123, 234])),
    getSkillCount: sandbox.fn(async () => Promise.resolve([123])),
  };

  const sendFns = {
    addColonyVersion: sandbox.fn(async () => Promise.resolve(transaction)),
    addSkill: sandbox.fn(async () => Promise.resolve(transaction)),
    appendReputationUpdateLog: sandbox.fn(async () =>
      Promise.resolve(transaction),
    ),
    createColony: sandbox.fn(async () => Promise.resolve(transaction)),
    upgradeColony: sandbox.fn(async () => Promise.resolve(transaction)),
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

  test('ColonyNetworkClient creation', async () => {
    sandbox.spyOn(ColonyNetworkClient, 'create');
    const client = await ColonyNetworkClient.createSelf(adapter);
    expect(ColonyNetworkClient.create).toHaveBeenCalledWith(
      { name: 'ColonyNetwork' },
      adapter,
    );
    expect(client).toBeInstanceOf(ColonyNetworkClient);
  });

  test('getSkillCount', async () => {
    const client = await ColonyNetworkClient.createSelf(adapter);
    client.call = sandbox.fn(() => [123]);
    await client.getSkillCount({});
    expect(client.call).toHaveBeenCalledWith(contract.getSkillCount, {});
  });

  // FIXME this test is timing out
  test('createColony', async () => {
    const client = await ColonyNetworkClient.createSelf(adapter);
    sandbox.spyOn(client, 'send');
    client.contract.createColony = sandbox.fn(() => Promise.resolve('0x123'));

    const sendOptions = {
      exampleSendOption: 123,
    };
    const events = ['ColonyAdded'];
    await client.createColony('Coolony', sendOptions);
    expect(client.send).toHaveBeenCalledWith(
      client.contract.createColony,
      {
        events,
        ...sendOptions,
      },
      '0x436f6f6c6f6e79',
    );
    expect(client.contract.createColony).toHaveBeenCalledWith(
      '0x436f6f6c6f6e79',
      sendOptions,
    );
    expect(adapter.getEventPromises).toHaveBeenCalledWith(
      expect.objectContaining({
        contract,
        events,
      }),
    );
  });
});

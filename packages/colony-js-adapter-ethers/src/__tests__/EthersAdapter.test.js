/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

// eslint-disable-next-line
import ethers from 'ethers';

import createSandbox from 'jest-sandbox';

import TestContractAbi from '../__mocks__/TestContract.json';

import EthersAdapter from '../EthersAdapter';
import EthersContract from '../EthersContract';

describe('EthersAdapter', () => {
  const sandbox = createSandbox();
  const address = '0x123';
  const abi = TestContractAbi;

  jest.mock(
    'ethers',
    () => ({
      Contract: jest.fn(() => ({
        address: '0x123',
      })),
      Interface: jest.fn(),
    }),
    { virtual: true },
  );

  // const provider = ethers.providers.getDefaultProvider();
  const event = {
    event: 'TestEvent',
    transactionHash: '0x1337',
    args: {
      myValue: 123,
    },
  };

  beforeEach(() => sandbox.clear());

  const mockLoader = {
    load: jest.fn().mockReturnValue(Promise.resolve({ address, abi })),
  };
  const mockProvider = {
    on: jest.fn(),
    resolveName: jest.fn(),
  };

  const adapter = new EthersAdapter({
    loader: mockLoader,
    provider: mockProvider,
  });

  test('Adapter has a provider', () => {
    expect(adapter._provider).toBe(mockProvider);
  });

  test('Adapter calls Contract with correct arguments', async () => {
    sandbox.spyOn(adapter._loader, 'load');
    const contract = await adapter.getContract({ name: 'myContractName' });
    expect(adapter._loader.load).toHaveBeenCalledTimes(1);
    expect(contract).toBeInstanceOf(EthersContract);
    expect(contract).toMatchObject({
      address,
      interface: { abi },
      provider: adapter._provider,
    });
  });

  // FIXME this test is timing out
  // test('Event is dispatched for its transaction and is cleared', async () => {
  //   sandbox.spyOn(EthersContract.prototype, 'addListener');
  //   sandbox.spyOn(EthersContract.prototype, 'removeListener');
  //
  //   const contract = new EthersContract(address, abi, mockProvider);
  //
  //   const promises = adapter.getEventPromises({
  //     contract,
  //     events: ['TestEvent'],
  //     transactionHash: '0x1337',
  //     timeoutMs: 30000,
  //   });
  //   expect(contract.addListener).toHaveBeenCalledTimes(1);
  //   expect(contract.removeListener).toHaveBeenCalledTimes(0);
  //   contract.addListener.mockClear();
  //   contract.removeListener.mockClear();
  //   expect(contract._listeners.get('TestEvent-0x1337')).toEqual(
  //     expect.any(Function),
  //   );
  //   expect(promises.length).toBe(1);
  //
  //   contract.events.TestEvent(event);
  //   const result = await promises[0];
  //   expect(result).toMatchObject(event);
  //   expect(contract.addListener).toHaveBeenCalledTimes(0);
  //   expect(contract.removeListener).toHaveBeenCalledTimes(1);
  //   contract.addListener.mockClear();
  //   contract.removeListener.mockClear();
  //   expect(contract._listeners.get('TestEvent-0x1337')).not.toEqual(
  //     expect.any(Function),
  //   );
  // });

  // FIXME this test is timing out
  // test('Event for another transaction times out and is cleared', async () => {
  //   // sandbox.spyOn(EthersContract.prototype, 'addListener');
  //   // sandbox.spyOn(EthersContract.prototype, 'removeListener');
  //
  //   const contract = new EthersContract(address, abi, mockProvider);
  //
  //   const promises = adapter.getEventPromises({
  //     contract,
  //     events: ['TestEvent'],
  //     transactionHash: '0x420', // different tx hash
  //     timeoutMs: 1000,
  //   });
  //   // expect(contract.addListener).toHaveBeenCalledTimes(1);
  //   // expect(contract.removeListener).toHaveBeenCalledTimes(0);
  //   // contract.addListener.mockClear();
  //   // contract.removeListener.mockClear();
  //   // expect(promises.length).toBe(1);
  //   // expect(contract._listeners.get('TestEvent-0x420')).toEqual(
  //   //   expect.any(Function),
  //   // );
  //
  //   contract.events.TestEvent(event);
  //   // TODO jest is still awaiting a callback somehow... maybe lagging Promise.race callbacks?
  //   // await expect(promises[0]).rejects.toMatch({
  //   //   message: 'Timeout after 1000 ms',
  //   // });
  //   // expect(contract.addListener).toHaveBeenCalledTimes(0);
  //   // expect(contract.removeListener).toHaveBeenCalledTimes(1);
  //   // expect(contract._listeners.get('TestEvent-0x420')).toBeUndefined();
  // });

  // TODO: getTransactionReceipt
  // TODO: waitForTransaction
});

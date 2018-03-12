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
  const transactionHash = '0x1337';
  const abi = TestContractAbi;

  beforeEach(() => sandbox.clear());

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

  const mockLoader = {
    load: jest.fn().mockReturnValue(Promise.resolve({ address, abi })),
  };
  const mockProvider = {
    on: jest.fn(),
    resolveName: jest.fn(),
    getTransactionReceipt: jest.fn().mockImplementation(txHash => ({
      transactionHash: txHash,
      dummyReceipt: true,
    })),
    waitForTransaction: jest.fn().mockImplementation(txHash => ({
      transactionHash: txHash,
      dummyTransaction: true,
    })),
  };

  const mockWallet = {
    on: jest.fn(),
    resolveName: jest.fn(),
  };

  const adapter = new EthersAdapter({
    loader: mockLoader,
    provider: mockProvider,
    wallet: mockWallet,
  });

  test('Adapter has a provider', () => {
    expect(adapter._provider).toBe(mockProvider);
  });

  test('Adapter calls Contract with correct arguments', async () => {
    sandbox.spyOn(adapter._loader, 'load');
    const contract = await adapter.getContract({ name: 'myContractName' });
    // expect(adapter._loader.load).toHaveBeenCalledTimes(1);
    expect(contract).toBeInstanceOf(EthersContract);
    expect(JSON.stringify(contract.provider)).toBe(
      JSON.stringify(adapter._provider),
    );
    expect(contract).toMatchObject({
      address,
      interface: { abi },
    });
  });

  const successEventOne = {
    event: 'MySuccessEventOne',
    transactionHash,
    args: { one: 1 },
  };
  const successEventTwo = {
    event: 'MySuccessEventTwo',
    transactionHash,
    args: { two: 2 },
  };
  const errorEvent = {
    event: 'MyErrorEvent',
    transactionHash,
    args: { errorOne: 'Value from MyErrorEvent' },
  };

  const createEvents = (contract1, contract2) => ({
    success: {
      MySuccessEventOne: {
        contract: contract1,
        handler: sandbox
          .fn()
          .mockImplementation(({ one }) => ({ one: one + 100 })),
      },
      MySuccessEventTwo: {
        contract: contract2,
        handler: sandbox
          .fn()
          .mockImplementation(({ two }) => ({ two: two + 200 })),
      },
    },
    error: {
      MyErrorEvent: {
        contract: contract1,
        handler: sandbox.fn().mockImplementation(() => {
          throw new Error('MyErrorEvent');
        }),
      },
    },
  });

  test('Event listeners are added and removed', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });

    sandbox.spyOn(contract, 'addListener');
    sandbox.spyOn(contract, 'removeListener');
    sandbox.spyOn(adapter.constructor, 'getEventPromises');

    const eventDataPromise = adapter.getEventData({
      events: createEvents(contract, contract),
      transactionHash,
      timeoutMs: 1000,
    });

    // getEventPromises should be called for error and success events
    expect(adapter.constructor.getEventPromises).toHaveBeenCalledTimes(2);

    expect(contract.removeListener).toHaveBeenCalledTimes(0);

    // Events should have been added and removed for each of the events
    expect(contract.addListener).toHaveBeenCalledTimes(3);

    contract.dispatchEvent(successEventOne);
    contract.dispatchEvent(successEventTwo);

    // removeListener should be fired on each event callback
    expect(contract.removeListener).toHaveBeenCalledTimes(2);

    contract.removeListener.mockReset();
    contract.addListener.mockReset();

    await eventDataPromise;

    expect(contract.addListener).toHaveBeenCalledTimes(0);
    expect(contract.removeListener).toHaveBeenCalledTimes(3);
  });

  test('Event data is collected properly', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });
    const eventDataPromise = adapter.getEventData({
      events: createEvents(contract, contract),
      transactionHash,
      timeoutMs: 1000,
    });

    contract.dispatchEvent(successEventOne);
    contract.dispatchEvent(successEventTwo);

    const eventData = await eventDataPromise;

    expect(eventData).toMatchObject({ one: 101, two: 202 });
  });

  test('Event data is collected properly across multiple contracts', async () => {
    const contract1 = await adapter.getContract({ name: 'myContractName' });
    const contract2 = await adapter.getContract({
      name: 'myOtherContractName',
    });

    const eventDataPromise = adapter.getEventData({
      events: createEvents(contract1, contract2),
      transactionHash,
      timeoutMs: 1000,
    });

    contract1.dispatchEvent(successEventOne);
    contract2.dispatchEvent(successEventTwo);

    const eventData = await eventDataPromise;

    expect(eventData).toMatchObject({ one: 101, two: 202 });
  });

  test('Error events remove event listeners', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });
    sandbox.spyOn(contract, 'removeListener');

    const eventDataPromise = adapter.getEventData({
      events: createEvents(contract, contract),
      transactionHash,
      timeoutMs: 1000,
    });

    // Ordinarily, dispatchEvent would not be called from the top-level
    // such as this example, so we need to use a try/catch for it
    try {
      contract.dispatchEvent(successEventOne);
      contract.dispatchEvent(errorEvent); // will throw here
    } catch (error) {
      expect(error.message).toMatch('MyErrorEvent');
    }
    contract.dispatchEvent(successEventTwo);

    // removeListener should be called on each event callback
    expect(contract.removeListener).toHaveBeenCalledTimes(3);

    contract.removeListener.mockReset();

    await eventDataPromise;

    expect(contract.removeListener).toHaveBeenCalledTimes(3);
  });

  test('Timeouts remove event listeners', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });
    sandbox.spyOn(contract, 'dispatchEvent');
    sandbox.spyOn(contract, 'removeListener');

    try {
      await adapter.getEventData({
        events: createEvents(contract, contract),
        transactionHash,
        timeoutMs: 1,
      });
    } catch (error) {
      expect(error.message).toMatch('Timeout after 1 ms');
    }

    // no events dispatched
    expect(contract.dispatchEvent).toHaveBeenCalledTimes(0);

    // those removed by iterating through the listeners + each individually on timeout
    expect(contract.removeListener).toHaveBeenCalledTimes(6);
  });

  test('getTransactionReceipt', async () => {
    const receipt = await adapter.getTransactionReceipt(transactionHash);
    expect(receipt).toMatchObject({ transactionHash, dummyReceipt: true });
    expect(mockProvider.getTransactionReceipt).toHaveBeenCalledTimes(1);
    expect(mockProvider.getTransactionReceipt).toHaveBeenCalledWith(
      transactionHash,
    );
  });

  test('waitForTransaction', async () => {
    const transaction = await adapter.waitForTransaction(transactionHash, 1000);
    expect(transaction).toMatchObject({
      transactionHash,
      dummyTransaction: true,
    });
    expect(mockProvider.waitForTransaction).toHaveBeenCalledTimes(1);
    expect(mockProvider.waitForTransaction).toHaveBeenCalledWith(
      transactionHash,
      1000,
    );
  });
});

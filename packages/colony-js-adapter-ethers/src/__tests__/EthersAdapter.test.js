/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import ethers from 'ethers';

import createSandbox from 'jest-sandbox';

import TestContractAbi from '../__mocks__/TestContract.json';

import EthersAdapter from '../EthersAdapter';
import EthersContract from '../EthersContract';

// XXX It seems to be necessary to define this mock (inline) in this
// file, since we are making `expect` calls based on its mock functions.
jest.mock('ethers', () => {
  class MockContract {
    constructor(address, abi, wallet) {
      Object.assign(this, {
        address,
        events: {},
        interface: { abi },
        provider: {},
        wallet,
      });
    }
  }
  MockContract.getDeployTransaction = jest
    .fn()
    .mockReturnValue({ data: '0x123' });
  return {
    Contract: MockContract,
    Interface: jest.fn(),
  };
});

describe('EthersAdapter', () => {
  const sandbox = createSandbox();
  const address = '0x123';
  const transactionHash = '0x1337';
  const abi = TestContractAbi;
  // eslint-disable-next-line
  const bytecode = '0x6060604052341561000f57600080fd5b60405160208061018983398101604052808051906020019091905050806000806101000a81548160ff021916908360ff16021790555050610134806100556000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e52d60614610051578063d827d5f814610080575b600080fd5b341561005c57600080fd5b6100646100a6565b604051808260ff1660ff16815260200191505060405180910390f35b341561008b57600080fd5b6100a4600480803560ff169060200190919050506100b8565b005b6000809054906101000a900460ff1681565b7f45ddcca376bc018846f8e9607c6c8fa2e2329327c47e486649b66d6e7b05c27c6000809054906101000a900460ff168201604051808260ff1660ff16815260200191505060405180910390a1505600a165627a7a7230582001436bd672cf6498a294218f793011502174ad58cf6987cd2ed9a8a9a54c85740029';
  const contractArgs = [3];

  beforeEach(() => sandbox.clear());

  const mockLoader = {
    load: jest
      .fn()
      .mockReturnValue(Promise.resolve({ address, abi, bytecode })),
  };
  const mockProvider = {
    on: jest.fn(),
    resolveName: jest.fn(),
    getTransactionReceipt: jest.fn().mockImplementation(txHash => ({
      transactionHash: txHash,
      dummyReceipt: true,
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
    expect(adapter.provider).toBe(mockProvider);
  });

  test('Adapter calls Contract with correct arguments', async () => {
    sandbox.spyOn(adapter.loader, 'load');
    const contract = await adapter.getContract({ name: 'myContractName' });
    expect(adapter.loader.load).toHaveBeenCalledTimes(1);
    expect(contract).toBeInstanceOf(EthersContract);
    expect(JSON.stringify(contract.provider)).toBe(
      JSON.stringify(adapter.provider),
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

    contract._dispatchEvent(successEventOne);
    contract._dispatchEvent(successEventTwo);

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

    contract._dispatchEvent(successEventOne);
    contract._dispatchEvent(successEventTwo);

    const eventData = await eventDataPromise;

    expect(eventData).toMatchObject({ one: 101, two: 202 });
  });

  test('Event data is collected properly with multiple contracts', async () => {
    const contract1 = await adapter.getContract({ name: 'myContractName' });
    const contract2 = await adapter.getContract({
      name: 'myOtherContractName',
    });

    const eventDataPromise = adapter.getEventData({
      events: createEvents(contract1, contract2),
      transactionHash,
      timeoutMs: 1000,
    });

    contract1._dispatchEvent(successEventOne);
    contract2._dispatchEvent(successEventTwo);

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

    // Ordinarily, _dispatchEvent would not be called from the top-level
    // such as this example, so we need to use a try/catch for it
    try {
      contract._dispatchEvent(successEventOne);
      contract._dispatchEvent(errorEvent); // will throw here
    } catch (error) {
      expect(error.message).toMatch('MyErrorEvent');
    }
    contract._dispatchEvent(successEventTwo);

    // removeListener should be called on each event callback
    expect(contract.removeListener).toHaveBeenCalledTimes(3);

    contract.removeListener.mockReset();

    await eventDataPromise;

    expect(contract.removeListener).toHaveBeenCalledTimes(3);
  });

  test('Timeouts remove event listeners', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });
    sandbox.spyOn(contract, '_dispatchEvent');
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
    expect(contract._dispatchEvent).toHaveBeenCalledTimes(0);

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

  test('getContractDeployTransaction', async () => {
    sandbox.spyOn(adapter.loader, 'load');

    const query = {
      contractName: 'TestContract',
    };
    const transaction = await adapter.getContractDeployTransaction(
      query,
      contractArgs,
    );

    // The contract data should contain the contract args at the end
    expect(transaction.data.slice(-1)).toBe(`${contractArgs[0]}`);

    expect(adapter.loader.load).toHaveBeenCalledTimes(1);
    expect(adapter.loader.load).toHaveBeenCalledWith(query);
    expect(ethers.Contract.getDeployTransaction).toHaveBeenCalledTimes(1);
    expect(ethers.Contract.getDeployTransaction).toHaveBeenCalledWith(
      bytecode,
      abi,
      ...contractArgs,
    );
  });
});

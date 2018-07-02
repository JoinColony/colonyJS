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
    utils: {
      arrayify: jest.fn().mockReturnValue('bytes'),
      splitSignature: jest.fn().mockReturnValue({ r: 'r', s: 's', v: 'v' }),
    },
    Contract: MockContract,
    Interface: jest.fn(),
    SigningKey: {
      recover: jest.fn().mockReturnValue('recovered address'),
    },
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

  jest.useFakeTimers();

  const mockLoader = {
    load: sandbox.fn().mockResolvedValue({ address, abi, bytecode }),
  };
  const mockProvider = {
    on: sandbox.fn(),
    resolveName: sandbox.fn(),
    getTransactionReceipt: sandbox.fn(),
    waitForTransaction: sandbox.fn(),
  };

  const mockWallet = {
    on: sandbox.fn(),
    resolveName: sandbox.fn(),
    signMessage: sandbox.fn(),
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
    const query = {
      contractName: 'MyContract',
    };
    const defaults = {
      abi: true,
      address: true,
      bytecode: false,
    };

    // If the address is missing
    adapter.loader.load.mockResolvedValueOnce({
      address: null,
      abi,
      bytecode,
    });
    try {
      await adapter.getContract(query);
      expect(false).toBe(true); // Should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch('Unable to parse contract address');
      expect(adapter.loader.load).toHaveBeenCalledWith(query, defaults);
    }
    adapter.loader.load.mockReset();

    // If the address is found
    adapter.loader.load.mockResolvedValue({
      address,
      abi,
      bytecode,
    });
    const contract = await adapter.getContract(query);
    expect(adapter.loader.load).toHaveBeenCalledTimes(1);
    expect(adapter.loader.load).toHaveBeenCalledWith(query, defaults);
    expect(contract).toBeInstanceOf(EthersContract);
    expect(JSON.stringify(contract.provider)).toBe(
      JSON.stringify(adapter.provider),
    );
    expect(contract).toMatchObject({
      address,
      interface: { abi },
    });
  });

  const eventOne = {
    event: 'MyEventOne',
    transactionHash,
    args: { one: 1 },
  };
  const eventTwo = {
    event: 'MyEventTwo',
    transactionHash,
    args: { two: 2 },
  };

  const createEvents = (contract1, contract2) => ({
    MyEventOne: {
      contract: contract1,
      handler: sandbox
        .fn()
        .mockImplementation(({ one }) => ({ one: one + 100 })),
    },
    MyEventTwo: {
      contract: contract2,
      handler: sandbox
        .fn()
        .mockImplementation(({ two }) => ({ two: two + 200 })),
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

    // getEventPromises should be called for events
    expect(adapter.constructor.getEventPromises).toHaveBeenCalledTimes(1);

    expect(contract.removeListener).toHaveBeenCalledTimes(0);

    // Events should have been added and removed for each of the events
    expect(contract.addListener).toHaveBeenCalledTimes(2);

    contract._dispatchEvent(eventOne);
    contract._dispatchEvent(eventTwo);

    // removeListener should be fired on each event callback
    expect(contract.removeListener).toHaveBeenCalledTimes(2);

    contract.removeListener.mockReset();
    contract.addListener.mockReset();

    await eventDataPromise;

    expect(contract.addListener).toHaveBeenCalledTimes(0);
    expect(contract.removeListener).toHaveBeenCalledTimes(2);
  });

  test('Event data is collected properly', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });
    const eventDataPromise = adapter.getEventData({
      events: createEvents(contract, contract),
      transactionHash,
      timeoutMs: 1000,
    });

    contract._dispatchEvent(eventOne);
    contract._dispatchEvent(eventTwo);

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

    contract1._dispatchEvent(eventOne);
    contract2._dispatchEvent(eventTwo);

    const eventData = await eventDataPromise;

    expect(eventData).toMatchObject({ one: 101, two: 202 });
  });

  test('Timeouts remove event listeners', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });
    sandbox.spyOn(contract, '_dispatchEvent');
    sandbox.spyOn(contract, 'removeListener');

    try {
      const promise = adapter.getEventData({
        events: createEvents(contract, contract),
        transactionHash,
        timeoutMs: 1000,
      });
      jest.runAllTimers();
      await promise;
    } catch (error) {
      expect(error.message).toMatch('Timeout after 1000 ms');
    }

    // no events dispatched
    expect(contract._dispatchEvent).toHaveBeenCalledTimes(0);

    // those removed by iterating through the listeners + each individually on timeout
    expect(contract.removeListener).toHaveBeenCalledTimes(4);
  });

  test('Getting a transaction receipt', async () => {
    const receipt = { hash: transactionHash };

    try {
      mockProvider.getTransactionReceipt.mockResolvedValueOnce(null);
      await adapter.getTransactionReceipt(transactionHash);
      expect(false).toBe(true); // Should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch('Transaction receipt not found');
      expect(mockProvider.getTransactionReceipt).toHaveBeenCalledWith(
        transactionHash,
      );
      mockProvider.getTransactionReceipt.mockReset();
    }

    mockProvider.getTransactionReceipt.mockResolvedValueOnce(receipt);
    const receivedValue = await adapter.getTransactionReceipt(transactionHash);
    expect(receivedValue).toEqual(receipt);
    expect(mockProvider.getTransactionReceipt).toHaveBeenCalledWith(
      transactionHash,
    );
  });

  test('Getting a contract deployment transaction', async () => {
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
    expect(adapter.loader.load).toHaveBeenCalledWith(query, {
      abi: true,
      address: false,
      bytecode: true,
    });
    expect(ethers.Contract.getDeployTransaction).toHaveBeenCalledTimes(1);
    expect(ethers.Contract.getDeployTransaction).toHaveBeenCalledWith(
      bytecode,
      abi,
      ...contractArgs,
    );
  });

  test('Waiting for a transaction receipt', async () => {
    const transaction = { hash: transactionHash };
    const receipt = { hash: transactionHash };

    // For this test, simulate that we couldn't get the receipt on the first
    // try (i.e. it has not yet been mined).
    mockProvider.getTransactionReceipt
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(receipt);

    mockProvider.waitForTransaction.mockResolvedValue(transaction);

    const receivedValue = await adapter.waitForTransactionReceipt(
      transactionHash,
    );

    expect(mockProvider.getTransactionReceipt).toHaveBeenCalledTimes(2);
    expect(mockProvider.getTransactionReceipt).toHaveBeenCalledWith(
      transactionHash,
    );
    expect(mockProvider.waitForTransaction).toHaveBeenCalledWith(
      transactionHash,
    );
    expect(receivedValue).toEqual(receipt);

    // For this try, let's make getTransactionReceipt fail in a cool
    // and interesting way
    sandbox
      .spyOn(adapter, 'getTransactionReceipt')
      .mockImplementationOnce(async () => {
        throw new Error('Kaboom!');
      });
    try {
      await adapter.waitForTransactionReceipt(transactionHash);
      expect(false).toBe(true); // Should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch('Kaboom!');
    }
    sandbox.restore(adapter, 'getTransactionReceipt');
  });

  test('Signing a message', async () => {
    const signature = 'signature';
    const messageHash = '0x123';

    adapter.wallet.signMessage.mockResolvedValue(signature);
    const splitSignature = await adapter.signMessage(messageHash);

    expect(splitSignature).toEqual({ sigR: 'r', sigS: 's', sigV: 'v' });
    expect(ethers.utils.arrayify).toHaveBeenCalledWith(messageHash);
    expect(ethers.utils.splitSignature).toHaveBeenCalledWith(signature);
    expect(adapter.wallet.signMessage).toHaveBeenCalledWith('bytes');
  });

  test('Recovering an address from a digest/signature', () => {
    const digest = [0, 1, 2, 3];
    const signature = { sigR: 'r', sigS: 's', sigV: 28 };
    const recoveredAddress = adapter.ecRecover(digest, signature);
    expect(recoveredAddress).toBe('recovered address');
    expect(ethers.SigningKey.recover).toHaveBeenCalledWith(digest, 'r', 's', 1);
  });
});

/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import createSandbox from 'jest-sandbox';
import TestContractAbi from '../__mocks__/TestContract.json';
import EthersAdapter from '../EthersAdapter';

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

describe('EthersContract', () => {
  const sandbox = createSandbox();
  const address = '0x123';
  const transactionHashOne = '0x1337';
  const transactionHashTwo = '0x1338';
  const abi = TestContractAbi;
  // eslint-disable-next-line
  const bytecode = '0x6060604052341561000f57600080fd5b60405160208061018983398101604052808051906020019091905050806000806101000a81548160ff021916908360ff16021790555050610134806100556000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e52d60614610051578063d827d5f814610080575b600080fd5b341561005c57600080fd5b6100646100a6565b604051808260ff1660ff16815260200191505060405180910390f35b341561008b57600080fd5b6100a4600480803560ff169060200190919050506100b8565b005b6000809054906101000a900460ff1681565b7f45ddcca376bc018846f8e9607c6c8fa2e2329327c47e486649b66d6e7b05c27c6000809054906101000a900460ff168201604051808260ff1660ff16815260200191505060405180910390a1505600a165627a7a7230582001436bd672cf6498a294218f793011502174ad58cf6987cd2ed9a8a9a54c85740029';

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

  const eventOne = {
    event: 'MyEventOne',
    transactionHash: transactionHashOne,
    args: { one: 1 },
  };

  const eventTwo = {
    event: 'MyEventOne',
    transactionHash: transactionHashTwo,
    args: { one: 2 },
  };

  const eventThree = {
    event: 'MyEventTwo',
    transactionHash: transactionHashTwo,
    args: { one: 2 },
  };

  test('Contract does add and remove event listeners', async () => {
    const contract = await adapter.getContract({ name: 'myContractName' });

    // Call on every 'MyEventOne' without tx hash
    const eventHandlerOne = sandbox.fn();

    // Call on every 'MyEventOne' _with_ tx hash
    const eventHandlerTwo = sandbox.fn();

    // Call on every 'MyEventOne' without tx hash (again)
    const eventHandlerThree = sandbox.fn();

    // Call on every 'MyEventTwo' without tx hash
    const eventHandlerFour = sandbox.fn();

    contract.addListener('MyEventOne', eventHandlerOne);
    contract.addListener('MyEventOne', eventHandlerTwo, transactionHashOne);
    contract.addListener('MyEventOne', eventHandlerThree);
    contract.addListener('MyEventTwo', eventHandlerFour);

    contract._dispatchEvent(eventOne);
    contract._dispatchEvent(eventTwo);
    contract._dispatchEvent(eventThree);

    contract.removeListener('MyEventOne', eventHandlerOne);
    contract.removeListener('MyEventOne', eventHandlerTwo, transactionHashOne);
    contract.removeListener('MyEventOne', eventHandlerThree);
    contract.removeListener('MyEventTwo', eventHandlerFour);

    contract._dispatchEvent(eventOne);
    contract._dispatchEvent(eventTwo);
    contract._dispatchEvent(eventThree);

    expect(eventHandlerOne).toHaveBeenCalledTimes(2);
    expect(eventHandlerTwo).toHaveBeenCalledTimes(1);
    expect(eventHandlerThree).toHaveBeenCalledTimes(2);
    expect(eventHandlerFour).toHaveBeenCalledTimes(1);
  });

  // test('Contract does dispatch to multiple event listeners', () => {});
});

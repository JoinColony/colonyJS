/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
import ethers from 'ethers';
import createSandbox from 'jest-sandbox';

import TestContractAbi from '../__mocks__/TestContract.json';

import EthersContract from '../EthersContract';

describe('EthersContract', () => {
  const sandbox = createSandbox();
  const address = '0x123';
  const abi = TestContractAbi;
  const provider = ethers.providers.getDefaultProvider();
  const event = {
    transactionHash: '0x1337',
    // TODO other info
  };

  beforeEach(() => sandbox.clear());

  // FIXME all of these tests are outdated...
  test('Initialises events', () => {
    sandbox.spyOn(EthersContract.prototype, '_initialiseEvents');
    const contract = new EthersContract(address, abi, provider);
    expect(contract._initialiseEvents).toHaveBeenCalled();
    expect(contract._listeners.has('TestEvent')).toBe(true);
  });

  test('Dispatches events', () => {
    sandbox.spyOn(EthersContract.prototype, '_dispatchEvent');
    const contract = new EthersContract(address, abi, provider);

    contract.events.TestEvent(event);
    expect(contract._dispatchEvent).toHaveBeenCalledWith('TestEvent', event);
  });

  test('Listeners triggered', () => {
    const contract = new EthersContract(address, abi, provider);
    const listener1 = sandbox.fn();
    const listener2 = sandbox.fn();
    const listener3 = sandbox.fn();

    contract.addListener('TestEvent', listener1);
    contract.addListener('TestEvent', listener2);
    contract.addListener('NonExistentEvent', listener3);

    contract.events.TestEvent(event);
    expect(listener1).toHaveBeenCalledWith(event);
    expect(listener2).toHaveBeenCalledWith(event);
    expect(listener3).toHaveBeenCalledTimes(0);
  });

  test('Event listener lifecycle', () => {
    sandbox.spyOn(EthersContract.prototype, 'removeListener');
    const contract = new EthersContract(address, abi, provider);
    const listener1 = sandbox.fn();
    const listener2 = sandbox.fn();

    contract.addListener('TestEvent', listener1);
    contract.addListener('TestEvent', listener2);

    expect(contract._listeners.get('TestEvent').has(listener1)).toBe(true);
    expect(contract._listeners.get('TestEvent').has(listener2)).toBe(true);

    contract.removeListener('TestEvent', listener1);

    expect(contract._listeners.get('TestEvent').has(listener1)).toBe(false);
    expect(contract._listeners.get('TestEvent').has(listener2)).toBe(true);

    contract.events.TestEvent(event);
    expect(listener1).toHaveBeenCalledTimes(0);
    expect(listener2).toHaveBeenCalledWith(event);
    listener1.mockReset();
    listener2.mockReset();

    contract.events.TestEvent(event);
    expect(listener1).toHaveBeenCalledTimes(0);
    expect(listener2).toHaveBeenCalledTimes(0);
  });
});

/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
import createSandbox from 'jest-sandbox';

import Colony from '../Colony';
import { ColonyContract, ColonyNetworkContract } from '../ContractTypes';

describe.skip('Colony', () => {
  const sandbox = createSandbox();
  const adapter = {
    getContract() {
      return {
        address: '0xdeadbeef',
        functions: {
          createColony: sandbox.fn(() => Promise.resolve()),
          getColony: sandbox.fn(() => Promise.resolve('0xaddress')),
          upgradeColony: sandbox.fn(() => Promise.resolve()),
        },
        estimate: {
          createColony: sandbox.fn(() => Promise.resolve()),
          getColony: sandbox.fn(() => Promise.resolve()),
          upgradeColony: sandbox.fn(() => Promise.resolve()),
        },
      };
    },
  };

  const loadContractMock = function loadContractMock() {
    const contract = adapter.getContract();
    this.functions = contract.functions;
    this.estimate = contract.estimate;
  };

  sandbox.spyOn(ColonyNetworkContract.prototype, 'loadContract').mockImplementation(loadContractMock.bind(ColonyNetworkContract.prototype));
  sandbox.spyOn(ColonyContract.prototype, 'loadContract').mockImplementation(loadContractMock.bind(ColonyContract.prototype));

  beforeEach(() => sandbox.clear());

  test('Initialization', () => {
    const colony = new Colony('coolony', adapter);
    expect(colony.name).toBe('coolony');
    expect(colony._colonyContract).toBeInstanceOf(ColonyContract);
    expect(colony._networkContract).toBeInstanceOf(ColonyNetworkContract);
  });

  test('Ready', () => {
    const colony = new Colony('coolony', adapter);
    sandbox.spyOn(colony._colonyContract, 'ready').mockImplementation(() => true);
    sandbox.spyOn(colony._networkContract, 'ready').mockImplementation(() => true);
    expect(colony.ready()).toBeTruthy();
  });

  test('Self creation', () => {
    const colony = new Colony('coolony', adapter);
    sandbox.spyOn(colony, 'ready').mockImplementation(() => false);
    return colony.createSelf().then(() => {
      expect(colony._networkContract.functions.createColony).toHaveBeenCalledWith('0x636f6f6c6f6e79', {
        gasLimit: 4300000,
      });
      expect(colony._networkContract.functions.getColony).toHaveBeenCalledWith('0x636f6f6c6f6e79');
      expect(colony._colonyContract.loadContract).toHaveBeenCalledWith(undefined, '0xaddress');
      expect(colony.version).toBeUndefined();
      expect(colony.address).toEqual('0xaddress');
    });
  });

  test('Self loading', () => {
    const colony = new Colony('coolony2', adapter);
    sandbox.spyOn(colony, 'ready').mockImplementation(() => false);
    return colony.loadSelf().then(() => {
      expect(colony._networkContract.loadContract).toHaveBeenCalled();
      expect(colony._networkContract.functions.getColony).toHaveBeenCalledWith('0x636f6f6c6f6e7932');
      expect(colony._colonyContract.loadContract).toHaveBeenCalledWith(0, '0xaddress');
      expect(colony.version).toEqual(0);
      expect(colony.address).toEqual('0xaddress');
    });
  });

  test('Convenient creation', () =>
    Colony.create('coolony3', adapter, 1).then(colony => {
      expect(colony).toBeInstanceOf(Colony);
      expect(colony.name).toEqual('coolony3');
      expect(colony.version).toEqual(1);
      expect(colony.address).toEqual('0xaddress');
    }));

  test('Convenient loading', () =>
    Colony.fromName('coolony4', adapter).then(colony => {
      expect(colony).toBeInstanceOf(Colony);
      expect(colony.name).toEqual('coolony4');
      expect(colony.version).toEqual(0);
      expect(colony.address).toEqual('0xaddress');
    }));

  test('Doesnt create if ready', () => {
    const colony = new Colony('coolony5', adapter);
    sandbox.spyOn(colony, 'ready').mockImplementation(() => true);
    return colony.createSelf().then(() => {
      expect(colony._networkContract.loadContract).not.toHaveBeenCalled();
    });
  });

  test('Doesnt load if ready', () => {
    const colony = new Colony('coolony5', adapter);
    sandbox.spyOn(colony, 'ready').mockImplementation(() => true);
    return colony.loadSelf().then(() => {
      expect(colony._networkContract.loadContract).not.toHaveBeenCalled();
    });
  });
});

/* eslint-env jest */

import ColonyContract from '../ColonyContract';

describe('ColonyContract', () => {
  const adapter = {
    getContract() {
      return {
        address: '0xdeadbeef',
        functions: {
          createColony() {},
          upgradeColony() {},
        },
        estimate: {
          createColony() {},
          upgradeColony() {},
        },
      };
    },
  };

  test('Initialization', () => {
    const colonyContract = new ColonyContract('TestContract', adapter);
    expect(colonyContract._adapter).toBe(adapter);
  });

  test('Contract loading', () => {
    const colonyContract = new ColonyContract('TestContract', adapter);
    return colonyContract.loadContract().then(() => {
      expect(colonyContract.ready).toBeTruthy();
      expect(typeof colonyContract.functions.createColony).toBe('function');
      expect(typeof colonyContract.functions.upgradeColony).toBe('function');
      expect(typeof colonyContract.estimate.createColony).toBe('function');
      expect(typeof colonyContract.estimate.upgradeColony).toBe('function');
    });
  });

  test('Contract loading for versioned contract', () => {
    const colonyContract = new ColonyContract('TestContract', adapter);
    return colonyContract.loadContract(1).then(() => {
      expect(colonyContract.ready).toBeTruthy();
      expect(typeof colonyContract.functions.createColony).toBe('function');
      expect(typeof colonyContract.functions.upgradeColony).toBe('function');
      expect(typeof colonyContract.estimate.createColony).toBe('function');
      expect(typeof colonyContract.estimate.upgradeColony).toBe('function');
    });
  });
});

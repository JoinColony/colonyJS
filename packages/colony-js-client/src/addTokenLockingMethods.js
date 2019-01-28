/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

/*
 * Add methods from `ITokenLocking.sol` to a given `ContractClient`.
 */
const addTokenLockingMethods = (client: ContractClient) => {
  // Callers
  client.addCaller('getTotalLockCount', {
    output: [['count', 'number']],
  });
  this.addCaller('getUserLock', {
    input: [['user', 'address']],
    output: [['count', 'number']],
  });
};

export default addTokenLockingMethods;

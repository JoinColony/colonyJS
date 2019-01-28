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
  client.addCaller('getUserLock', {
    input: [['user', 'address']],
    output: [['count', 'number']],
  });

  // Senders
  client.addSender('incrementLockCounterTo', {
    input: [['token', 'tokenAddress'], ['lockId', 'number']],
  });
};

export default addTokenLockingMethods;

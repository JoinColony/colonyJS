/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

/*
 * Add methods from `IRecovery.sol` to a given `ContractClient`.
 */
const addRecoveryMethods = (client: ContractClient) => {
  // Callers
  client.addCaller('getRecoveryRolesCount', {
    functionName: 'numRecoveryRoles',
    output: [['count', 'number']],
  });
  client.addCaller('isInRecoveryMode', {
    output: [['inRecoveryMode', 'boolean']],
  });

  // Senders
  client.addSender('approveExitRecovery', {});
  client.addSender('enterRecoveryMode', {});
  client.addSender('exitRecoveryMode', {});
  client.addSender('removeRecoveryRole', {
    input: [['address', 'address']],
  });
  client.addSender('setRecoveryRole', {
    input: [['address', 'address']],
  });
  client.addSender('setStorageSlotRecovery', {
    input: [['slot', 'number'], ['value', 'hexString']],
  });
};

export default addRecoveryMethods;

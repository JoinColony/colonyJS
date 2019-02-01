/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

/*
 * Add methods from `IMetColony.sol` to a given `ContractClient`.
 */
const addRecoveryMethods = (client: ContractClient) => {
  // Senders
  client.addSender('addGlobalSkill', {
    input: [['parentSkillId', 'number']],
  });
  client.addSender('mintTokensForColonyNetwork', {
    input: [['amount', 'bigNumber']],
  });
  client.addSender('setNetworkFeeInverse', {
    input: [['feeInverse', 'number']],
  });
};

export default addRecoveryMethods;

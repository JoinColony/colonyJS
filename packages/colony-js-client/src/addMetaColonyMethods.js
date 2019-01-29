/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

/*
 * Add methods from `IMetaColony.sol` to a given `ContractClient`.
 */
const addMetaColonyMethods = (client: ContractClient) => {
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

export default addMetaColonyMethods;

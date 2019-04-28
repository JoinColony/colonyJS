/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type Address = string;

type InputValues = {
  address: Address,
  setTo: boolean,
};

export default class SetAdminRole extends ContractClient.Sender<
  InputValues,
  *,
  ColonyClient,
  *,
> {
  async _sendTransaction(args: *, options: *) {
    const factoryContract = await this.client.adapter.getContract({
      contractName: 'OldRolesFactory',
    });
    const contractAddress = await factoryContract.callConstant(
      'deployedExtensions',
      [this.client.contract.address],
    );
    const contract = await this.client.adapter.getContract({
      contractAddress,
      contractName: 'OldRoles',
    });
    return contract.callTransaction('setAdminRole', args, options);
  }
}

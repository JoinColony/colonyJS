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
  async estimate(inputValues: *) {
    const args = this.getValidatedArgs(inputValues);
    const contract = await this._getContract();
    return contract.callEstimate('setAdminRole', args);
  }

  async _sendTransaction(args: *, options: *) {
    const contract = await this._getContract();
    return contract.callTransaction('setAdminRole', args, options);
  }

  async _getContract() {
    const factoryContract = await this.client.adapter.getContract({
      contractName: 'OldRolesFactory',
    });
    const contractAddress = await factoryContract.callConstant(
      'deployedExtensions',
      [this.client.contract.address],
    );
    if (!contractAddress)
      throw new Error('OldRoles not deployed for this Colony');
    const contract = await this.client.adapter.getContract({
      contractAddress,
      contractName: 'OldRoles',
    });
    return contract;
  }
}

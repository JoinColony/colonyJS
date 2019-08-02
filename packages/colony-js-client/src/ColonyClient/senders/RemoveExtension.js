/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type InputValues = {
  contractName: string,
};

export default class RemoveExtension extends ContractClient.Sender<
  InputValues,
  *,
  ColonyClient,
  *,
> {
  async estimate(inputValues: *) {
    const args = this.getValidatedArgs(inputValues);
    const factoryContract = await this._getContract(args);
    return factoryContract.callEstimate('removeExtension', [
      this.client.contract.address,
    ]);
  }

  async _sendTransaction(args: *, options: *) {
    const factoryContract = await this._getContract(args);
    return factoryContract.sendTransaction(
      'removeExtension',
      [this.client.contract.address],
      options,
    );
  }

  async _getContract(args: *) {
    const factoryContract = await this.client.adapter.getContract({
      contractName: `${args[0]}Factory`,
    });
    if (!factoryContract) throw new Error('No such extension');
    return factoryContract;
  }
}

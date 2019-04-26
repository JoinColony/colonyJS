/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type InputValues = {
  contractName: string,
};

export default class RemveExtension extends ContractClient.Sender<
  InputValues,
  *,
  ColonyClient,
  *,
> {
  async _sendTransaction(args: *, options: *) {
    const factoryContract = await this.client.adapter.getContract({
      contractName: `${args[0]}Factory`,
    });
    return factoryContract.callTransaction(
      'removeExtension',
      [this.client.contract.address],
      options,
    );
  }
}

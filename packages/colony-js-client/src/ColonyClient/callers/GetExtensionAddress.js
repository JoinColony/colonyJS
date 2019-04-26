/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type InputValues = {
  contractName: string,
};

export default class GetExtensionAddress extends ContractClient.Caller<
  InputValues,
  *,
  ColonyClient,
  *,
> {
  async call(args: *) {
    const factoryContract = await this.client.adapter.getContract({
      contractName: `${args.contractName}Factory`,
    });
    return factoryContract.callConstant('deployedExtensions', [
      this.client.contract.address,
    ]);
  }
}

/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type InputValues = {
  contractName: string,
};

// When adding an extension contract to a colony, a new extension contract will
// be deployed that is unique to the colony. In order for the colony to use the
// extension contract, the extension contract will need to be assigned a colony
// role (which role depends on the extension contract and contract methods). In
// order to assign the extension contract a colony role, the extension contract
// address will need to be accessible.

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
    const address = await factoryContract.callConstant('deployedExtensions', [
      this.client.contract.address,
    ]);
    return { address };
  }
}

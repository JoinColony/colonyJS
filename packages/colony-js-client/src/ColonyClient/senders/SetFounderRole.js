/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type ColonyClient from '../index';

type Address = string;

type InputValues = {
  user: Address,
};

type OutputValues = {};

export default class OneTxPayment extends ContractClient.Sender<
  InputValues,
  OutputValues,
  ColonyClient,
  *,
> {
  async _sendTransaction(args: *, options: *) {
    const oldRolesContract = await this.client.adapter.getContract({
      // There should only ever be one `OldRoles` contract
      contractName: 'OldRoles',
    });
    return oldRolesContract.callTransaction(
      'setFounderRole',
      // The first argument must be the colony address
      [this.client.contract.address, ...args],
      options,
    );
  }
}

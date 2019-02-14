/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

import type BigNumber from 'bn.js';
import type ColonyClient from '../index';

type Address = string;
type TokenAddress = string;

type InputValues = {
  worker: Address,
  token: TokenAddress,
  amount: BigNumber,
  domainId: number,
  skillId: number,
};

type OutputValues = {
  id: number,
};

export default class MakePayment extends ContractClient.Sender<
  InputValues,
  OutputValues,
  ColonyClient,
  *,
> {
  async _sendTransaction(args: *, options: *) {
    const colony = this.client.contract.address;
    const contract = await this._getContract(args);
    args.unshift(colony);
    return contract.callTransaction('makePayment', args, options);
  }

  async _getContract(args: *) {
    return this.client.adapter.getContract(
      { contractName: 'OneTxPayment' },
      args,
    );
  }
}

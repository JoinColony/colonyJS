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
    const oneTxContract = await this.client.adapter.getContract({
      // There should only ever be one `OneTxPayment` contract
      contractName: 'OneTxPayment',
    });
    return oneTxContract.callTransaction(
      'makePayment',
      // The first argument must be the colony address
      [this.client.contract.address, ...args],
      options,
    );
  }
}

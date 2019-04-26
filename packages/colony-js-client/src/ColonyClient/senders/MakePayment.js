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

export default class OneTxPayment extends ContractClient.Sender<
  InputValues,
  *,
  ColonyClient,
  *,
> {
  async _sendTransaction(args: *, options: *) {
    const factoryContract = await this.client.adapter.getContract({
      contractName: 'OneTxPaymentFactory',
    });
    const contractAddress = await factoryContract.callConstant(
      'deployedExtensions',
      [this.client.contract.address],
    );
    const contract = await this.client.adapter.getContract({
      contractAddress,
      contractName: 'OneTxPayment',
    });
    return contract.callTransaction('makePayment', args, options);
  }
}

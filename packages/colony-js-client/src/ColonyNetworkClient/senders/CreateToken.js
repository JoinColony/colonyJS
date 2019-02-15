/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

export default class CreateToken<
  InputValues: *,
  OutputValues: *,
  Client: *,
  ContractData: *,
> extends ContractClient.Sender<
  InputValues,
  OutputValues,
  Client,
  ContractData,
> {
  constructor({
    name = 'createToken',
    input = [['symbol', 'bytes32String']],
    ...props
  }: *) {
    super({ name, input, ...props });
  }

  async estimate(inputValues: *) {
    const args = this.getValidatedArgs(inputValues);
    const transaction = await this._getContractDeployTransaction(args);
    return this.client.adapter.provider.estimateGas(transaction);
  }

  async _sendTransaction(args: *, options: *) {
    const transaction = await this._getContractDeployTransaction(args);
    return this.client.adapter.wallet.sendTransaction(transaction, options);
  }

  async _getContractDeployTransaction(args: *) {
    return this.client.adapter.getContractDeployTransaction(
      { contractName: 'DSToken' },
      args,
    );
  }
}

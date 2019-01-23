/* @flow */

import ContractClient from '@colony/colony-js-contract-client';

export default class CreateToken<
  InputValues: *,
  OutputValues: *,
  Client: *,
  NetworkData: *,
> extends ContractClient.Sender<
  InputValues,
  OutputValues,
  Client,
  NetworkData,
> {
  constructor({
    name = 'createToken',
    defaultValues = { decimals: 18 },
    input = [['name', 'string'], ['symbol', 'string'], ['decimals', 'number']],
    ...props
  }: *) {
    super({ name, defaultValues, input, ...props });
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
      { contractName: 'Token' },
      args,
    );
  }
}

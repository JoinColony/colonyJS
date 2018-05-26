/* @flow */

import assert from 'browser-assert';
import { isBigNumber, isValidAddress } from '@colony/colony-js-utils';
import type { TransactionOptions } from '@colony/colony-js-adapter';

import ContractClient from './ContractClient';
import ContractMethodSender from './ContractMethodSender';
import MultisigOperation from './MultisigOperation';

import type {
  ContractMethodMultisigSenderArgs,
  GetRequiredSignees,
  SendOptions,
} from '../flowtypes';

export default class ContractMethodMultisigSender<
  InputValues: { [outputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
> extends ContractMethodSender<InputValues, OutputValues, IContractClient> {
  nonceFunctionName: string;
  multisigFunctionName: string;
  _getRequiredSignees: GetRequiredSignees;

  /**
   * {string} functionName - The contract function name to use for
   * creating the transaction data
   * nonceFunctionName - The contract function name to use for
   * getting the transaction nonce value
   * getRequiredSignees - Async function that returns the addresses of
   * the signers (needed to send the transaction)
   * multisigFunctionName - The contract function name to use for
   * sending the finalized transaction (with multisig support)
   */
  constructor({
    client,
    eventHandlers,
    functionName,
    input,
    getRequiredSignees,
    multisigFunctionName,
    nonceFunctionName,
    output,
  }: ContractMethodMultisigSenderArgs<IContractClient>) {
    super({ client, output, input, eventHandlers, functionName });
    this._getRequiredSignees = getRequiredSignees;
    this.multisigFunctionName = multisigFunctionName;
    this.nonceFunctionName = nonceFunctionName;
  }

  async getRequiredSignees(inputValues: InputValues): Promise<Array<string>> {
    const signees = await this._getRequiredSignees(inputValues);
    assert(
      Array.isArray(signees) && signees.every(isValidAddress),
      'Expected an array of signee addresses',
    );
    return signees;
  }

  // XXX After https://github.com/JoinColony/colonyNetwork/issues/192 is
  // fixed, the inputValues should be accepted by this method.
  async getNonce(): Promise<number> {
    const response = await this.client.call(this.nonceFunctionName, []);

    const nonce = isBigNumber(response) ? response.toNumber() : response;
    assert(
      Number(nonce) === nonce && Number.isInteger(nonce),
      'Nonce must be an integer',
    );

    return nonce;
  }
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  async send(inputValues: InputValues, options: SendOptions) {
    throw new Error(
      'This Sender uses multi-signature transactions; call ' +
        '`.startOperation()` to start a new `MultisigOperation`',
    );
  }

  /**
   * Given arguments and options for a multisig function, send a transaction.
   */
  async sendMultisig(args: Array<any>, options: SendOptions) {
    return this._send(args, options);
  }

  /**
   * Given input values for the target contract method, create transaction data,
   * pass the payload into a new MultisigOperation.
   */
  async startOperation(inputValues: InputValues) {
    const args = this.getValidatedArgs(inputValues);
    const data = this.client.createTransactionData(this.functionName, args);

    return new MultisigOperation(this, {
      data,
      inputValues,
      destinationAddress: this.client.contract.address,
      sourceAddress: this.client.contract.address,
      value: 0,
    });
  }

  /**
   * Given the state of an operation as JSON, restore a MultisigOperation.
   */
  restoreOperation(json: string) {
    let parsed = {};
    try {
      parsed = JSON.parse(json);
    } catch (error) {
      throw new Error('Unable to restore operation: could not parse JSON');
    }
    // This will throw an error if the state is deemed invalid.
    return new MultisigOperation(this, parsed.payload, parsed.signers);
  }

  /**
   * Override the method from the parent class; use `multisigFunctionName`.
   */
  async _sendTransaction(
    callArgs: Array<any>,
    transactionOptions: TransactionOptions,
  ) {
    return this.client.send(
      this.multisigFunctionName,
      callArgs,
      transactionOptions,
    );
  }
}

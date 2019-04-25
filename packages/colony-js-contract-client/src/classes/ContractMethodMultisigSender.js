/* @flow */

import assert from 'assert';
import { isBigNumber, isValidAddress } from '@colony/colony-js-utils';
import type { TransactionOptions } from '@colony/colony-js-adapter';

import ContractClient from './ContractClient';
import ContractMethodSender from './ContractMethodSender';
import MultisigOperation from './MultisigOperation';

import type {
  ContractMethodMultisigSenderArgs,
  GetRequiredSignees,
  MultisigOperationConstructorArgs,
  Params,
  SendOptions,
} from '../flowtypes';

export default class ContractMethodMultisigSender<
  InputValues: { [outputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
  ContractData: { [dataValueName: string]: any },
> extends ContractMethodSender<
  InputValues,
  OutputValues,
  IContractClient,
  ContractData,
> {
  nonceFunctionName: string;
  nonceInput: Params;
  multisigFunctionName: string;
  _getRequiredSignees: GetRequiredSignees;

  /**
   * {string} functionName - The contract function name to use for
   * creating the transaction data
   * nonceFunctionName - The contract function name to use for
   * getting the transaction nonce value
   * required in order to send the transaction
   * getRequiredSignees - Async function that returns the addresses of
   * the signers which will be required in order to send the transaction
   * multisigFunctionName - The contract function name to use for
   * sending the finalized transaction (with multisig support)
   */
  constructor({
    client,
    functionName,
    input,
    name,
    getRequiredSignees,
    multisigFunctionName,
    nonceFunctionName,
    nonceInput,
    output,
  }: ContractMethodMultisigSenderArgs<IContractClient>) {
    super({ client, name, output, input, functionName });
    this._getRequiredSignees = getRequiredSignees;
    this.multisigFunctionName = multisigFunctionName;
    this.nonceFunctionName = nonceFunctionName;
    this.nonceInput = nonceInput;
  }

  /**
   * Given a payload and optional signers, start a new MultisigOperation and
   * refresh it (in order to set the required signees/nonce/etc).
   */
  async _startOperation(args: MultisigOperationConstructorArgs<InputValues>) {
    // Will throw an error if the payload, signers or nonce are deemed invalid.
    const op = new MultisigOperation(this, args);

    await op.refresh();
    return op;
  }

  async getRequiredSignees(inputValues: InputValues): Promise<Array<string>> {
    const signees = await this._getRequiredSignees(inputValues);
    assert(
      Array.isArray(signees) && signees.every(isValidAddress),
      'Expected an array of signee addresses',
    );
    return signees;
  }

  async getNonce(inputValues: InputValues): Promise<number> {
    const args = this.getValidatedArgs(inputValues, this.nonceInput);
    const response = await this.client.call(this.nonceFunctionName, args);

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
   * and pass the payload into a new MultisigOperation.
   */
  async startOperation(inputValues: InputValues) {
    const args = this.getValidatedArgs(inputValues);
    const data = this.client.createTransactionData(this.functionName, args);

    return this._startOperation({
      payload: {
        data,
        inputValues,
        destinationAddress: this.client.contract.address,
        sourceAddress: this.client.contract.address,
        value: 0,
      },
    });
  }

  /**
   * Given the state of an operation as JSON, restore a MultisigOperation.
   */
  async restoreOperation(json: string) {
    let parsed = {};
    try {
      parsed = JSON.parse(json);
    } catch (error) {
      throw new Error('Unable to restore operation: could not parse JSON');
    }
    return this._startOperation(parsed);
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

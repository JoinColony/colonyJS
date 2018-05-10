/* @flow */

import assert from 'browser-assert';
import { isValidAddress, isBigNumber } from '@colony/colony-js-utils';
import type { TransactionOptions } from '@colony/colony-js-adapter';

import ContractClient from './ContractClient';
import ContractMethodSender from './ContractMethodSender';
import MultisigOperation from './MultisigOperation';

import type {
  CombinedSignatures,
  ContractMethodMultisigSenderArgs,
  GetRequiredSigners,
  MultisigOperationState,
  Signers,
  SendOptions,
} from '../flowtypes';

export default class ContractMethodMultisigSender<
  InputValues: { [outputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
> extends ContractMethodSender<InputValues, OutputValues, IContractClient> {
  nonceFunctionName: string;
  multisigFunctionName: string;
  _getRequiredSigners: GetRequiredSigners;

  static getMultisigArgs({
    signers,
    payload: { data, value },
  }: MultisigOperationState<InputValues>) {
    const { sigV, sigR, sigS } = this.combineSignatures(signers);
    return [sigV, sigR, sigS, value, data];
  }

  /**
   * Given multiple signers, combine each part of the signatures together.
   */
  static combineSignatures(signers: Signers): CombinedSignatures {
    const combined = { sigV: [], sigR: [], sigS: [] };
    signers.forEach(({ sigV, sigR, sigS }) => {
      combined.sigV.push(sigV);
      combined.sigR.push(sigR);
      combined.sigS.push(sigS);
    });
    return combined;
  }

  /**
   * Ensure that there are no missing signers.
   */
  static validateRequiredSigners(
    requiredSigners: Array<string>,
    signers: Signers,
  ) {
    const missingSigners = requiredSigners.filter(
      address => !signers.has(address),
    );

    assert(
      missingSigners.length === 0,
      `Missing signatures (from addresses ${missingSigners.join(', ')})`,
    );
    return true;
  }

  /**
   * {string} functionName - The contract function name to use for
   * creating the transaction data
   * nonceFunctionName - The contract function name to use for
   * getting the transaction nonce value
   * getRequiredSigners - Async function that returns the addresses of
   * the signers (needed to send the transaction)
   * multisigFunctionName - The contract function name to use for
   * sending the finalized transaction (with multisig support)
   */
  constructor({
    client,
    eventHandlers,
    functionName,
    input,
    getRequiredSigners,
    multisigFunctionName,
    nonceFunctionName,
    output,
  }: ContractMethodMultisigSenderArgs<IContractClient>) {
    super({ client, output, input, eventHandlers, functionName });
    this._getRequiredSigners = getRequiredSigners;
    this.multisigFunctionName = multisigFunctionName;
    this.nonceFunctionName = nonceFunctionName;
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

  async getRequiredSigners(inputValues: InputValues): Promise<Array<string>> {
    const signers = await this._getRequiredSigners(inputValues);

    assert(
      Array.isArray(signers) && signers.every(isValidAddress),
      'Expected an array of signer addresses',
    );

    return signers;
  }

  async validateSigners(inputValues: InputValues, signers: Signers) {
    const requiredSigners = await this.getRequiredSigners(inputValues);
    return this.constructor.validateRequiredSigners(requiredSigners, signers);
  }

  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  async send(inputValues: InputValues, options: SendOptions) {
    throw new Error(
      'This Sender uses multi-signature transactions; call ' +
        '`.startOperation()` to start a new `MultisigOperation`',
    );
  }

  /**
   * Given the state of a MultisigOperation, validate the input values and
   * signers, then send a transaction with the correct arguments.
   */
  async sendMultisig(
    multisigOperationState: MultisigOperationState<InputValues>,
    options: SendOptions,
  ) {
    const {
      signers,
      payload: { inputValues },
    } = multisigOperationState;

    this.validate(inputValues);
    await this.validateSigners(inputValues, signers);

    return this._send(
      this.constructor.getMultisigArgs(multisigOperationState),
      options,
    );
  }

  /**
   * Given input values for the target contract method, create transaction data,
   * pass the data into a new MultisigOperation.
   */
  async startOperation(inputValues: InputValues) {
    this.validate(inputValues);
    const args = this.getMethodArgs(inputValues);
    const data = this.client.createTransactionData(this.functionName, args);

    // XXX After https://github.com/JoinColony/colonyNetwork/issues/192 is
    // fixed, the inputValues should be passed to the `getNonce` method.
    const nonce = await this.getNonce();

    const operationState = {
      payload: {
        data,
        inputValues,
        nonce,
        destinationAddress: this.client.contract.address,
        sourceAddress: this.client.contract.address,
        value: 0,
      },
      signers: new Map(),
    };
    return new MultisigOperation(this, operationState);
  }

  /**
   * Given an in-progress operation state, restore a MultisigOperation.
   */
  restoreOperation(operationState: MultisigOperationState<InputValues>) {
    // TODO should this method parse a JSON string?
    // This will throw an error if the state is deemed invalid.
    return new MultisigOperation(this, operationState);
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

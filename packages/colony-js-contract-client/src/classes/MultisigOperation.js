/* @flow */

import assert from 'browser-assert';
import { soliditySha3, toDecimal, padLeft } from 'web3-utils';
import isPlainObject from 'lodash.isplainobject';

import ContractMethodMultisigSender from './ContractMethodMultisigSender';
import ContractClient from './ContractClient';
import validateSigners from '../modules/validateSigners';
import validatePayload from '../modules/validatePayload';

import type { MultisigOperationState, SendOptions } from '../flowtypes';

export default class MultisigOperation<
  InputValues: { [inputValueName: string]: any },
  OutputValues: { [outputValueName: string]: any },
  IContractClient: ContractClient,
  Sender: ContractMethodMultisigSender<
    InputValues,
    OutputValues,
    IContractClient,
  >,
> {
  messageHash: string;
  sender: Sender;
  state: MultisigOperationState<InputValues>;

  _validateSigners = validateSigners;
  _validatePayload = validatePayload;

  static splitSignature(signature: string) {
    const hash = signature.slice(2); // Remove '0x'
    return {
      sigR: `0x${hash.slice(0, 64)}`,
      sigS: `0x${hash.slice(64, 128)}`,
      sigV: toDecimal(`0x${hash.slice(128, 130)}`), // Should be 27 or 28
    };
  }

  constructor(sender: Sender, state: MultisigOperationState<InputValues>) {
    // Will throw validation errors for an invalid state
    this.validateState(state);

    this.sender = sender;
    this.state = state;
    this.messageHash = this.getERC191MessageHash();
  }

  /**
   * Given input that should be a state object, validate it and return true.
   */
  validateState(state: any): boolean {
    assert(isPlainObject(state), 'Invalid state: State must be an object');
    const { signers, payload } = state;
    return this._validatePayload(payload) && this._validateSigners(signers);
  }

  async getSignature() {
    // TODO this isn't working as desired at the moment, because signMessage
    // is using the 'Ethereum Signed Message' prefix.
    // Needs further investigation.
    // TODO should we create a mock transaction, sign it, then
    // extract R/S/V from the signed transaction?
    const response = await this.sender.client.adapter.wallet.signMessage(
      this.messageHash,
    );

    return this.constructor.splitSignature(response);
  }

  /**
   * Given the current state, sign the message data with the current wallet
   * and add the signature to the signers state.
   */
  async sign() {
    const { address } = this.sender.client.adapter.wallet;
    const signature = await this.getSignature();

    if (this.state.signers.has(address))
      throw new Error(
        `A signature has already been added for address ${address}`,
      );

    return this.state.signers.set(address, signature);
  }

  async send(options: SendOptions) {
    return this.sender.sendMultisig(this.state, options);
  }

  /**
   * Given the current payload, use this input to create an ERC191-compatible
   * message hash
   */
  getERC191MessageHash() {
    const {
      data,
      destinationAddress,
      nonce,
      sourceAddress,
      value,
    } = this.state.payload;

    // Follows ERC191 signature scheme: https://github.com/ethereum/EIPs/issues/191
    const parts: Array<string> = [
      '0x19',
      '00',
      sourceAddress.slice(2),
      destinationAddress.slice(2),
      padLeft(value.toString(16), 64, '0'),
      data.slice(2),
      padLeft(nonce.toString(16), 64, '0'),
    ];
    return soliditySha3(parts.join(''));
  }
}

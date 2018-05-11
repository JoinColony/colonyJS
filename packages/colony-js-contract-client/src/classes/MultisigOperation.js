/* @flow */

import assert from 'browser-assert';
import { padLeft } from 'web3-utils';
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

  /**
   * Given the current state, sign the message data with the current wallet
   * and add the signature to the signers state.
   */
  async sign() {
    const { adapter } = this.sender.client;
    const {
      wallet: { address },
    } = adapter;
    const signature = await adapter.signMessage(this.messageHash);

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
    return parts.join('');
  }
}

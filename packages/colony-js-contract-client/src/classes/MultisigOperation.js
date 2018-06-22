/* @flow */
/* eslint-disable no-underscore-dangle */

import { padLeft, soliditySha3, isHexStrict, hexToBytes } from 'web3-utils';
import defaultAssert from 'assert';
import { isValidAddress, makeAssert } from '@colony/colony-js-utils';
import isPlainObject from 'lodash.isplainobject';
import isEqual from 'lodash.isequal';

import ContractMethodMultisigSender from './ContractMethodMultisigSender';
import ContractClient from './ContractClient';

import type {
  CombinedSignatures,
  MultisigOperationConstructorArgs,
  MultisigOperationPayload,
  SendOptions,
  Signature,
  Signers,
  SigningMode,
} from '../flowtypes';

import { SIGNING_MODES } from '../constants';

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
  sender: Sender;
  payload: MultisigOperationPayload<InputValues>; // Immutable
  _messageHash: string;
  _nonce: number;
  _onReset: ?Function;
  _requiredSignees: Array<string>;
  _signers: Signers;

  static _validatePayload(payload: any) {
    const assert = makeAssert('Invalid payload');

    assert(isPlainObject(payload), 'Payload must be an object');

    const { data, destinationAddress, sourceAddress, value } = payload || {};

    assert(isHexStrict(data), 'data must be a hex string');

    assert(
      isValidAddress(destinationAddress),
      'destinationAddress must be a valid address',
    );

    assert(
      isValidAddress(sourceAddress),
      'sourceAddress must be a valid address',
    );

    return assert(
      Number(value) === value && value >= 0,
      'value must be a positive number',
    );
  }

  static _validateSignature(signature: any, assert: Function = defaultAssert) {
    assert(isPlainObject(signature), 'Signature must be an object');

    const { sigV, sigR, sigS, mode } = signature;

    return (
      assert([27, 28].includes(sigV), 'v must be 27 or 28') &&
      assert(isHexStrict(sigR), 'r must be a hex string') &&
      assert(isHexStrict(sigS), 's must be a hex string') &&
      assert(
        Object.values(SIGNING_MODES).includes(mode),
        'mode must be a valid signing mode',
      )
    );
  }

  static _validateSigners(signers: any) {
    const assert = makeAssert('Invalid _signers');

    assert(isPlainObject(signers), 'Signers must be an object');

    return Object.entries(signers || {}).every(
      ([address, signature]) =>
        assert(
          isValidAddress(address),
          `"${address}" is not a valid address`,
        ) && this._validateSignature(signature, assert),
    );
  }

  constructor(
    sender: Sender,
    args: MultisigOperationConstructorArgs<InputValues>,
  ) {
    const { payload, signers = {}, nonce, onReset } = args;
    this.constructor._validatePayload(payload);
    this.constructor._validateSigners(signers);
    defaultAssert(
      nonce == null || Number.isInteger(nonce),
      'The optional `nonce` parameter should be an integer',
    );

    this.sender = sender;
    this.payload = Object.freeze(Object.assign({}, payload));
    this._signers = signers;
    if (onReset) this._onReset = onReset;
    if (nonce !== undefined && Number(nonce) === nonce) this._nonce = nonce;
  }

  toJSON() {
    const { _nonce: nonce, payload, _signers: signers } = this;
    return JSON.stringify({ nonce, payload, signers });
  }

  /**
   * Given the state of an operation as JSON, validate the parsed state and
   * add in the signers.
   */
  addSignersFromJSON(json: string) {
    let parsed = {};
    try {
      parsed = JSON.parse(json);
    } catch (error) {
      throw new Error('Unable to add signers: could not parse JSON');
    }
    const { payload, signers } = parsed;

    defaultAssert(
      isEqual(this.payload, payload),
      'Unable to add state; incompatible payloads',
    );
    this.constructor._validateSigners(signers);
    this._signers = Object.assign({}, this._signers, signers);
    return this;
  }

  get requiredSignees(): Array<string> {
    defaultAssert(
      Array.isArray(this._requiredSignees),
      'Required signees not defined; call `.refresh` to refresh signees',
    );

    return this._requiredSignees;
  }

  get missingSignees(): Array<string> {
    return this.requiredSignees.filter(address => !this._signers[address]);
  }

  get _signedMessageDigest() {
    return hexToBytes(
      soliditySha3('\x19Ethereum Signed Message:\n32', this._messageHash),
    );
  }

  get _signedTrezorMessageDigest() {
    return hexToBytes(
      soliditySha3('\x19Ethereum Signed Message:\n\x20', this._messageHash),
    );
  }

  _getMessageDigest(mode: SigningMode) {
    return mode === SIGNING_MODES.TREZOR
      ? this._signedTrezorMessageDigest
      : this._signedMessageDigest;
  }

  /**
   * Given a signature and a wallet address, determine the signing mode by
   * trying different digests with `ecRecover` until the wallet address matches
   * the recovered address.
   */
  _findSignatureMode(signature: Signature, address: string): SigningMode {
    let foundMode;
    const { adapter } = this.sender.client;

    Object.values(SIGNING_MODES).forEach(mode => {
      const digest = this._getMessageDigest(mode);
      const recovered = adapter.ecRecover(digest, signature);
      if (address.toLowerCase() === recovered.toLowerCase()) foundMode = mode;
    });

    if (foundMode !== undefined) return foundMode;

    throw new Error(`Unable to confirm signature mode for address ${address}`);
  }

  /**
   * Given multiple signers, combine each part of the signatures together.
   */
  _combineSignatures(): CombinedSignatures {
    const combined = { sigV: [], sigR: [], sigS: [], mode: [] };

    // Sort by address so that the order is always the same
    Object.keys(this._signers)
      .sort()
      .forEach(address => {
        const { sigV, sigR, sigS, mode } = this._signers[address];
        combined.sigV.push(sigV);
        combined.sigR.push(sigR);
        combined.sigS.push(sigS);
        combined.mode.push(mode);
      });

    return combined;
  }

  /**
   * Given the payload and signatures for this operation, combine the signatures
   * and return the arguments in the order the contract expects.
   */
  _getArgs() {
    const {
      payload: { value, data },
    } = this;
    const { sigV, sigR, sigS, mode } = this._combineSignatures();
    return [sigV, sigR, sigS, mode, value, data];
  }

  /**
   * Ensure that there are no missing signees (based on the input values for
   * this operation).
   */
  _validateRequiredSignees() {
    defaultAssert(
      this.missingSignees.length === 0,
      `Missing signatures (from addresses ${this.missingSignees.join(', ')})`,
    );
    return true;
  }

  /**
   * Given send options, ensure that the necessary signees have signed the
   * operation, then get the arguments and send the transaction.
   */
  async send(options: SendOptions) {
    await this.refresh();
    this._validateRequiredSignees();
    return this.sender.sendMultisig(this._getArgs(), options);
  }

  /**
   * Given a signature and an address, find the signature mode and
   * add the address/signature to the signers.
   */
  _addSignature(signature: Signature, address: string) {
    const mode = this._findSignatureMode(signature, address);

    this._signers = Object.assign({}, this._signers, {
      [address]: {
        mode,
        ...signature,
      },
    });
    return this;
  }

  /**
   * Sign the message hash with the current wallet and add the signature.
   */
  async sign() {
    await this.refresh();
    const { adapter } = this.sender.client;
    const signature = await adapter.signMessage(this._messageHash);
    const address = await adapter.wallet.getAddress();
    this._addSignature(signature, address);
    return this;
  }

  /**
   * Refresh the required signees, nonce value and message hash.
   * If the nonce value has changed, `_signers` will be reset.
   */
  async refresh() {
    await this._refreshNonce();
    await this._refreshRequiredSignees();
    this._refreshMessageHash();
    return this;
  }

  async _refreshNonce() {
    // If the nonce has not yet been set, simply set it; Don't reset signers,
    // because we don't have a way of knowing whether they're valid or nor;
    // assume they are still valid.
    if (!Object.hasOwnProperty.call(this, '_nonce')) {
      this._nonce = await this.sender.getNonce(this.payload.inputValues);
      return;
    }

    const oldNonce = Number(this._nonce);
    const newNonce = await this.sender.getNonce(this.payload.inputValues);
    if (oldNonce !== newNonce) {
      this._nonce = newNonce;
      // If the nonce changed, the signers are no longer valid
      this._signers = {};
      // We will also trigger onReset, if it exists
      if (this._onReset) this._onReset();
    }
  }

  async _refreshRequiredSignees() {
    this._requiredSignees = await this.sender.getRequiredSignees(
      this.payload.inputValues,
    );
  }

  /**
   * Given the payload and nonce, use this input to create an ERC191-compatible
   * message hash
   */
  _refreshMessageHash() {
    const {
      payload: { data, destinationAddress, sourceAddress, value },
      _nonce,
    } = this;

    // Follows ERC191 signature scheme: https://github.com/ethereum/EIPs/issues/191
    const addresses = `${sourceAddress.slice(2)}${destinationAddress.slice(2)}`;
    const paddedValue = padLeft(value.toString(16), 64, '0');
    const paddedNonce = padLeft(_nonce.toString(16), 64, '0');
    this._messageHash = soliditySha3(
      `0x${addresses}${paddedValue}${data.slice(2)}${paddedNonce}`,
    );
  }
}

/* @flow */

import { padLeft, soliditySha3, isHexStrict, hexToBytes } from 'web3-utils';
import defaultAssert from 'browser-assert';
import { isValidAddress, makeAssert } from '../../../colonyJS-utils';
import isPlainObject from 'lodash.isplainobject';
import isEqual from 'lodash.isequal';

import ContractMethodMultisigSender from './ContractMethodMultisigSender';
import ContractClient from './ContractClient';

import type {
  CombinedSignatures,
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
  signers: Signers;
  payload: MultisigOperationPayload<InputValues>; // Immutable
  _messageHash: ?string;

  static validatePayload(payload: any) {
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

  static validateSignature(signature: any, assert: Function = defaultAssert) {
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

  static validateSigners(signers: any) {
    const assert = makeAssert('Invalid signers');

    assert(isPlainObject(signers), 'Signers must be an object');

    return Object.entries(signers || {}).every(
      ([address, signature]) =>
        assert(
          isValidAddress(address),
          `"${address}" is not a valid address`,
        ) && this.validateSignature(signature, assert),
    );
  }

  constructor(
    sender: Sender,
    payload: MultisigOperationPayload<InputValues>,
    signers?: Signers = {},
  ) {
    this.constructor.validatePayload(payload);
    this.constructor.validateSigners(signers);

    this.sender = sender;
    this.payload = Object.freeze(Object.assign({}, payload));
    this.signers = signers;
  }

  toJSON() {
    const { payload, signers } = this;
    return JSON.stringify({ payload, signers });
  }

  /**
   * Given the state of an operation as JSON, validate the parsed state and
   * add in the signers.
   */
  addSignersFromJSON(json: string): void {
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
    this.constructor.validateSigners(signers);
    this.signers = Object.assign({}, this.signers, signers);
  }

  /**
   * Given the current payload, use this input to create an ERC191-compatible
   * message hash
   */
  get messageHash() {
    if (this._messageHash) return this._messageHash;

    const {
      data,
      destinationAddress,
      nonce,
      sourceAddress,
      value,
    } = this.payload;

    // Follows ERC191 signature scheme: https://github.com/ethereum/EIPs/issues/191
    const addresses = `${sourceAddress.slice(2)}${destinationAddress.slice(2)}`;
    const paddedValue = padLeft(value.toString(16), 64, '0');
    const paddedNonce = padLeft(nonce.toString(16), 64, '0');
    this._messageHash = soliditySha3(
      `0x${addresses}${paddedValue}${data.slice(2)}${paddedNonce}`,
    );

    return this._messageHash;
  }

  get signedMessageDigest() {
    return hexToBytes(
      soliditySha3('\x19Ethereum Signed Message:\n32', this.messageHash),
    );
  }

  get signedTrezorMessageDigest() {
    return hexToBytes(
      soliditySha3('\x19Ethereum Signed Message:\n\x20', this.messageHash),
    );
  }

  getMessageDigest(mode: SigningMode) {
    return mode === SIGNING_MODES.TREZOR
      ? this.signedTrezorMessageDigest
      : this.signedMessageDigest;
  }

  /**
   * Given a signature and the address of the current wallet, determine the
   * signing mode by trying different digests with `ecRecover` until the
   * wallet address matches the recovered address.
   */
  findSignatureMode(signature: Signature): SigningMode {
    let foundMode;
    const { adapter } = this.sender.client;
    const { address } = adapter.wallet;

    Object.values(SIGNING_MODES).forEach(mode => {
      const digest = this.getMessageDigest(mode);
      const recovered = adapter.ecRecover(digest, signature);
      if (address.toLowerCase() === recovered.toLowerCase()) foundMode = mode;
    });

    if (foundMode !== undefined) return foundMode;

    throw new Error(`Unable to confirm signature mode for address ${address}`);
  }

  /**
   * Given multiple signers, combine each part of the signatures together.
   */
  combineSignatures(): CombinedSignatures {
    const combined = { sigV: [], sigR: [], sigS: [], mode: [] };

    // Sort by address so that the order is always the same
    Object.keys(this.signers)
      .sort()
      .forEach(address => {
        const { sigV, sigR, sigS, mode } = this.signers[address];
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
  getArgs() {
    const {
      payload: { value, data },
    } = this;
    const { sigV, sigR, sigS, mode } = this.combineSignatures();
    return [sigV, sigR, sigS, mode, value, data];
  }

  /**
   * Ensure that there are no missing signees (based on the input values for
   * this operation).
   */
  async validateRequiredSignees() {
    const requiredSignees = await this.sender.getRequiredSignees(
      this.payload.inputValues,
    );

    const missingSigners = requiredSignees.filter(
      address => !this.signers[address],
    );

    defaultAssert(
      missingSigners.length === 0,
      `Missing signatures (from addresses ${missingSigners.join(', ')})`,
    );
    return true;
  }

  /**
   * Given send options, ensure that the necessary signees have signed the
   * operation, then get the arguments and send the transaction.
   */
  async send(options: SendOptions) {
    await this.validateRequiredSignees();
    return this.sender.sendMultisig(this.getArgs(), options);
  }

  /**
   * Given a signature and an address, find the signature mode and
   * add the address/signature to the signers.
   */
  addSignature(signature: Signature, address: string) {
    const mode = this.findSignatureMode(signature);

    this.signers = Object.assign({}, this.signers, {
      [address]: {
        mode,
        ...signature,
      },
    });
    return this.signers[address];
  }

  /**
   * Sign the message hash with the current wallet and add the signature.
   */
  async sign() {
    const { adapter } = this.sender.client;
    const signature = await adapter.signMessage(this.messageHash);
    return this.addSignature(signature, adapter.wallet.address);
  }
}

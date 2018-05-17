/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';
import assert from 'browser-assert';
import {
  hexToBytes,
  isAddress,
  isHex,
  isHexStrict,
  padLeft,
  soliditySha3,
} from 'web3-utils';
import isPlainObject from 'lodash.isplainobject';

import MultisigOperation from '../classes/MultisigOperation';

jest.mock('browser-assert', () => jest.fn().mockReturnValue(true));

jest.mock('lodash.isplainobject', () => jest.fn().mockReturnValue(true));

jest.mock('web3-utils', () => ({
  soliditySha3: jest.fn().mockImplementation(input => input),
  padLeft: jest.fn().mockImplementation(input => input),
  hexToBytes: jest.fn(),
  isHexStrict: jest.fn().mockReturnValue(true),
  isAddress: jest.fn().mockReturnValue(true),
  isHex: jest.fn().mockReturnValue(true),
}));

describe('MultisigOperation', () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    sandbox.clear();
    assert.mockClear();
    soliditySha3.mockClear();
    isHexStrict.mockClear();
    hexToBytes.mockClear();
    isAddress.mockClear();
    isHex.mockClear();
    padLeft.mockClear();
    isPlainObject.mockClear();
  });

  const signature = {
    sigR: '0x3810976581519370936455002930541734832270292486195672859026812854',
    sigS: '0x2717400036569076491467357688191371198012187172992592815125647808',
    sigV: 28,
    mode: 0,
  };

  const signers = {
    '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B': signature,
    '0x281055afc982d96fab65b3a49cac8b878184cb16': {
      sigR:
        '0x09ebb6ca057a0535d6186462bc0b465b561c94a295bdb0621fc19208ab149a9c',
      sigS:
        '0x440ffd775ce91a833ab410777204d5341a6f9fa91216a6f3ee2c051fea6a0428',
      sigV: 27,
      mode: 1,
    },
    '0x6f46cf5569aefa1acc1009290c8e043747172d89': {
      sigR:
        '0x3810976581519370936455002930541734832270292486195672859026812854',
      sigS:
        '0x2717400036569076491467357688191371198012187172992592815125647808',
      sigV: 28,
      mode: 0,
    },
  };

  const address = Object.keys(signers)[0];

  const payload = {
    data: '0xdata',
    destinationAddress: '0xdestination',
    inputValues: { id: 1 },
    sourceAddress: '0xsource',
    value: 1,
    nonce: 5,
  };

  const firstNonce = 5;
  const secondNonce = 6;
  const sender = {
    sendMultisig: sandbox.fn(),
    getRequiredSignees: sandbox
      .fn()
      .mockReturnValue(Promise.resolve(Object.keys(signers))),
    getNonce: sandbox
      .fn()
      .mockReturnValueOnce(Promise.resolve(firstNonce))
      .mockReturnValueOnce(Promise.resolve(secondNonce)),
    client: {
      adapter: {
        signMessage: sandbox.fn().mockReturnValue(Promise.resolve(signature)),
        wallet: {
          address,
        },
        ecRecover: sandbox.fn().mockReturnValue(address),
      },
    },
  };

  test('Validating payload: Input type is validated', () => {
    MultisigOperation.validatePayload(payload);
    expect(isPlainObject).toHaveBeenCalledWith(payload);
    expect(assert).toHaveBeenCalledWith(
      true,
      expect.stringContaining('Payload must be an object'),
    );
  });

  test('Validating payload: Input contents are validated', () => {
    expect(MultisigOperation.validatePayload(payload)).toBe(true);

    expect(isHexStrict).toHaveBeenCalledWith(payload.data);
    expect(assert).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining('data must be a hex string'),
    );

    expect(isAddress).toHaveBeenCalledWith(payload.destinationAddress);
    expect(assert).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining('destinationAddress must be a valid address'),
    );

    expect(isAddress).toHaveBeenCalledWith(payload.sourceAddress);
    expect(assert).toHaveBeenCalledWith(
      expect.anything(),
      expect.stringContaining('sourceAddress must be a valid address'),
    );

    expect(assert).toHaveBeenCalledWith(
      true,
      expect.stringContaining('value must be a positive number'),
    );

    MultisigOperation.validatePayload(
      Object.assign({}, payload, {
        value: -1,
      }),
    );
    expect(assert).toHaveBeenLastCalledWith(
      false,
      expect.stringContaining('value must be a positive number'),
    );
  });

  test('Combining signatures', () => {
    const op = new MultisigOperation(sender, payload, signers);

    // Test helper to get a certain prop from the signatures in order
    const sortedSigs = Object.keys(op.signers).sort();
    const getSigValues = propName =>
      sortedSigs.map(addr => op.signers[addr][propName]);

    const combined = op.combineSignatures();
    expect(combined).toEqual({
      sigR: getSigValues('sigR'),
      sigS: getSigValues('sigS'),
      sigV: getSigValues('sigV'),
      mode: getSigValues('mode'),
    });
  });

  test('Getting Multisig arguments', () => {
    const op = new MultisigOperation(sender, payload, signers);
    const combined = {
      sigV: 'sigV',
      sigR: 'sigR',
      sigS: 'sigS',
      mode: 'mode',
    };
    sandbox.spyOn(op, 'combineSignatures').mockReturnValue(combined);

    const args = op.getArgs();

    expect(op.combineSignatures).toHaveBeenCalled();
    expect(args).toEqual([
      combined.sigV,
      combined.sigR,
      combined.sigS,
      combined.mode,
      payload.value,
      payload.data,
    ]);
  });

  test('Validating required signees (all signees present)', async () => {
    const op = new MultisigOperation(sender, payload, signers);

    const valid = await op.validateRequiredSignees();

    expect(op.sender.getRequiredSignees).toHaveBeenCalledWith(
      op.payload.inputValues,
    );

    expect(assert).toHaveBeenCalledWith(
      true,
      expect.stringContaining('Missing signatures (from addresses'),
    );

    expect(valid).toBe(true);
  });

  test('Validating required signees (missing a required signee)', async () => {
    const [addressOne, addressTwo, addressThree] = Object.keys(signers);
    const twoSigners = {
      [addressOne]: signers[addressOne],
      [addressTwo]: signers[addressTwo],
    };

    const op = new MultisigOperation(sender, payload, twoSigners);

    await op.validateRequiredSignees();

    expect(assert).toHaveBeenCalledWith(
      false,
      `Missing signatures (from addresses ${addressThree})`,
    );
  });

  test('Constructor validates payload/signers', () => {
    sandbox.spyOn(MultisigOperation, 'validatePayload').mockReturnValue(true);
    sandbox.spyOn(MultisigOperation, 'validateSigners').mockReturnValue(true);

    const op = new MultisigOperation(sender, payload, signers);

    expect(op).toBeInstanceOf(MultisigOperation);
    expect(op.sender).toBe(sender);
    expect(op.payload).toEqual(payload);
    expect(op.constructor.validatePayload).toHaveBeenCalledWith(payload);
    expect(op.constructor.validateSigners).toHaveBeenCalledWith(signers);
  });

  test('Payload is immutable', () => {
    const op = new MultisigOperation(sender, payload);

    expect(() => {
      op.payload.data = 'some new value';
    }).toThrowError('Cannot assign to read only property');
  });

  test('JSON contains payload and signers', () => {
    const op = new MultisigOperation(sender, payload, signers);
    const json = op.toJSON();
    expect(typeof json).toBe('string');
    expect(JSON.parse(json)).toEqual({
      payload,
      signers,
    });
  });

  test('Adding state as JSON', () => {
    const [addressOne, addressTwo, addressThree] = Object.keys(signers);
    const initialSigners = {
      [addressOne]: signers[addressOne],
    };
    const addedSigners = {
      [addressTwo]: signers[addressTwo],
      [addressThree]: signers[addressThree],
    };

    const op = new MultisigOperation(sender, payload, initialSigners);

    const json = JSON.stringify({ payload, signers: addedSigners });

    sandbox.spyOn(JSON, 'stringify');
    sandbox.spyOn(op.constructor, 'validateSigners');
    op.addSignersFromJSON(json);

    // The payload should be validated by JSON-equality for each property of
    // both payloads
    expect(JSON.stringify).toHaveBeenCalledTimes(12);
    expect(assert).toHaveBeenCalledWith(
      true,
      'Unable to add state; incompatible payloads',
    );

    expect(op.constructor.validateSigners).toHaveBeenCalledWith(addedSigners);

    // The signers should have been added together
    expect(op.signers).toEqual(Object.assign({}, initialSigners, addedSigners));
  });

  test('ERC191 Message hash is created properly', async () => {
    const op = new MultisigOperation(sender, payload);

    // It should be undefined until the getter is called
    expect(op._messageHash).toBeUndefined();

    // The string to be hashed should contain:
    // Initial `0x`
    // source address (with initial 0x removed - `source`)
    // destination address (with initial 0x removed - `destination`)
    // transaction value (1 - `value`)
    // transaction data (with initial 0x removed - `data`)
    // nonce (5 - `nonce`)
    const expectedHash = '0xsourcedestination1data5';

    const hash = op.messageHash;
    expect(hash).toBe(expectedHash);
    expect(padLeft).toHaveBeenCalledTimes(2);
    expect(soliditySha3).toHaveBeenCalledWith(expectedHash);
    expect(op._messageHash).toBe(expectedHash);
  });

  test('Signed message digests', () => {
    const hashSpy = sandbox.spyOn(
      MultisigOperation.prototype,
      'messageHash',
      'get',
    );
    const op = new MultisigOperation(sender, payload);

    // Initialise the hash
    op.messageHash; // eslint-disable-line no-unused-expressions
    hashSpy.mockClear();

    // Default signed message digest
    op.signedMessageDigest; // eslint-disable-line no-unused-expressions
    expect(hashSpy).toHaveBeenCalledTimes(1);
    expect(soliditySha3).toHaveBeenCalledWith(
      '\x19Ethereum Signed Message:\n32',
      op._messageHash,
    );
    expect(hexToBytes).toHaveBeenCalledTimes(1);

    hashSpy.mockClear();
    hexToBytes.mockClear();
    soliditySha3.mockClear();

    // Trezor signed message digest
    op.signedTrezorMessageDigest; // eslint-disable-line no-unused-expressions
    expect(soliditySha3).toHaveBeenCalledWith(
      '\x19Ethereum Signed Message:\n\x20',
      op._messageHash,
    );
    expect(hashSpy).toHaveBeenCalledTimes(1);
    expect(hexToBytes).toHaveBeenCalledTimes(1);
  });

  test('Getting the message digest for different signing modes', () => {
    const digestSpy = sandbox.spyOn(
      MultisigOperation.prototype,
      'signedMessageDigest',
      'get',
    );
    const trezorDigestSpy = sandbox.spyOn(
      MultisigOperation.prototype,
      'signedTrezorMessageDigest',
      'get',
    );

    const op = new MultisigOperation(sender, payload);

    op.getMessageDigest(0);
    expect(digestSpy).toHaveBeenCalled();
    expect(trezorDigestSpy).not.toHaveBeenCalled();

    digestSpy.mockClear();
    trezorDigestSpy.mockClear();

    op.getMessageDigest(1);
    expect(digestSpy).not.toHaveBeenCalled();
    expect(trezorDigestSpy).toHaveBeenCalled();
  });

  test('Finding the signature mode', () => {
    const digest = 'digest';
    const trezorDigest = 'trezor digest';
    sandbox
      .spyOn(MultisigOperation.prototype, 'signedMessageDigest', 'get')
      .mockReturnValue(digest);
    sandbox
      .spyOn(MultisigOperation.prototype, 'signedTrezorMessageDigest', 'get')
      .mockReturnValue(trezorDigest);

    const op = new MultisigOperation(sender, payload);

    sandbox.spyOn(op, 'getMessageDigest');
    op.sender.client.adapter.ecRecover
      .mockReturnValueOnce(address)
      .mockReturnValueOnce('not the right address');

    const mode = op.findSignatureMode(signature);

    expect(mode).toBe(0); // A match was found for the first mode
    expect(op.getMessageDigest).toHaveBeenCalledWith(0);
    expect(op.getMessageDigest).toHaveBeenCalledWith(1);
    expect(op.sender.client.adapter.ecRecover).toHaveBeenCalledWith(
      digest,
      signature,
    );
    expect(op.sender.client.adapter.ecRecover).toHaveBeenCalledWith(
      trezorDigest,
      signature,
    );

    // It should fail when the address does not match in either case
    op.sender.client.adapter.ecRecover.mockReturnValue('not the right address');
    expect(() => {
      op.findSignatureMode(signature);
    }).toThrowError('Unable to confirm signature mode');
  });

  test('Adding signatures', () => {
    const op = new MultisigOperation(sender, payload);
    const mode = 1;

    sandbox.spyOn(op, 'findSignatureMode').mockReturnValue(mode);

    const addedSig = op.addSignature(signature, address);

    expect(addedSig).toEqual(Object.assign({}, { mode }, signature));
    expect(op.findSignatureMode).toHaveBeenCalled();
    expect(op.signers).toEqual({
      [address]: addedSig,
    });
  });

  test('Signing', async () => {
    const messageHash = 'messageHash';

    const hashSpy = sandbox
      .spyOn(MultisigOperation.prototype, 'messageHash', 'get')
      .mockReturnValue(messageHash);
    sandbox
      .spyOn(MultisigOperation.prototype, 'addSignature')
      .mockReturnValue(signature);

    const op = new MultisigOperation(sender, payload);

    const addedSig = await op.sign();

    expect(hashSpy).toHaveBeenCalled();
    expect(op.sender.client.adapter.signMessage).toHaveBeenCalledWith(
      messageHash,
    );
    expect(addedSig).toEqual(signature);
  });

  test('Operation can be sent with Sender', async () => {
    const args = [123, 'abc'];
    const op = new MultisigOperation(sender, payload, signers);
    sandbox.spyOn(op, 'validateRequiredSignees').mockImplementation(() => true);
    sandbox.spyOn(op, 'getArgs').mockReturnValue(args);

    const options = { gasPrice: 1 };
    await op.send(options);

    expect(op.validateRequiredSignees).toHaveBeenCalled();
    expect(op.getArgs).toHaveBeenCalled();
    expect(op.sender.sendMultisig).toHaveBeenCalledWith(args, options);
  });
});

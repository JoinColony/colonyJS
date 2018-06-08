/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';
import assert from 'assert';
import {
  hexToBytes,
  isAddress,
  isHex,
  isHexStrict,
  padLeft,
  soliditySha3,
} from 'web3-utils';
import isPlainObject from 'lodash.isplainobject';
import isEqual from 'lodash.isequal';

import MultisigOperation from '../classes/MultisigOperation';

jest.mock('assert', () => jest.fn().mockReturnValue(true));

jest.mock('lodash.isplainobject', () => jest.fn().mockReturnValue(true));

jest.mock('lodash.isequal', () => jest.fn().mockReturnValue(true));

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
    isEqual.mockClear();
  });

  const nonce = 5;

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
  };

  const sender = {
    sendMultisig: sandbox.fn(),
    getRequiredSignees: sandbox.fn().mockImplementation(async () => 2),
    getAcceptedSignees: sandbox
      .fn()
      .mockImplementation(async () => Object.keys(signers)),
    getNonce: sandbox.fn(),
    client: {
      adapter: {
        signMessage: sandbox.fn().mockImplementation(async () => signature),
        wallet: {
          address,
        },
        ecRecover: sandbox.fn().mockImplementation(() => address),
      },
    },
  };

  test('Validating payload: Input type is validated', () => {
    MultisigOperation._validatePayload(payload);
    expect(isPlainObject).toHaveBeenCalledWith(payload);
    expect(assert).toHaveBeenCalledWith(
      true,
      expect.stringContaining('Payload must be an object'),
    );
  });

  test('Validating payload: Input contents are validated', () => {
    expect(MultisigOperation._validatePayload(payload)).toBe(true);

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

    MultisigOperation._validatePayload(
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
    const op = new MultisigOperation(sender, { payload, signers });

    // Test helper to get a certain prop from the signatures in order
    const sortedSigs = Object.keys(op._signers).sort();
    const getSigValues = propName =>
      sortedSigs.map(addr => op._signers[addr][propName]);

    const combined = op._combineSignatures();
    expect(combined).toEqual({
      sigR: getSigValues('sigR'),
      sigS: getSigValues('sigS'),
      sigV: getSigValues('sigV'),
      mode: getSigValues('mode'),
    });
  });

  test('Getting Multisig arguments', () => {
    const op = new MultisigOperation(sender, { payload, signers });
    const combined = {
      sigV: 'sigV',
      sigR: 'sigR',
      sigS: 'sigS',
      mode: 'mode',
    };
    sandbox.spyOn(op, '_combineSignatures').mockReturnValue(combined);

    const args = op._getArgs();

    expect(op._combineSignatures).toHaveBeenCalled();
    expect(args).toEqual([
      combined.sigV,
      combined.sigR,
      combined.sigS,
      combined.mode,
      payload.value,
      payload.data,
    ]);
  });

  test('Validating required signees (all signees present)', () => {
    const op = new MultisigOperation(sender, { payload, signers });
    op._acceptedSignees = Object.keys(signers);
    op._requiredSignees = 2;

    const valid = op._validateRequiredSignees();

    expect(assert).toHaveBeenCalledWith(
      true,
      expect.stringContaining('Missing signatures (from addresses'),
    );

    expect(valid).toBe(true);
  });

  test('Validating required signees (missing a required signee)', () => {
    const [addressOne, addressTwo, addressThree] = Object.keys(signers);
    const twoSigners = {
      [addressOne]: signers[addressOne],
      [addressTwo]: signers[addressTwo],
    };

    const op = new MultisigOperation(sender, { payload, signers: twoSigners });
    op._acceptedSignees = [addressOne, addressTwo, addressThree];
    op._requiredSignees = 3;

    expect(op._validateRequiredSignees()).toBe(true);

    expect(assert).toHaveBeenCalledWith(
      false,
      `Missing signatures (from addresses ${addressThree})`,
    );
  });

  test('Constructor validates payload/signers', () => {
    sandbox.spyOn(MultisigOperation, '_validatePayload').mockReturnValue(true);
    sandbox.spyOn(MultisigOperation, '_validateSigners').mockReturnValue(true);

    const op = new MultisigOperation(sender, { payload, signers, nonce });

    expect(op).toBeInstanceOf(MultisigOperation);
    expect(assert).toHaveBeenCalledWith(true, expect.stringMatching('nonce'));
    expect(op.constructor._validatePayload).toHaveBeenCalledWith(payload);
    expect(op.constructor._validateSigners).toHaveBeenCalledWith(signers);
    expect(op.sender).toBe(sender);
    expect(op.payload).toEqual(payload);
    expect(op._signers).toBe(signers);
    expect(op._nonce).toBe(nonce);
  });

  test('Payload is immutable', () => {
    const op = new MultisigOperation(sender, { payload });

    expect(() => {
      op.payload.data = 'some new value';
    }).toThrowError('Cannot assign to read only property');
  });

  test('JSON contains payload and signers', () => {
    const op = new MultisigOperation(sender, { payload, signers });
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

    const op = new MultisigOperation(sender, {
      payload,
      signers: initialSigners,
    });

    const json = JSON.stringify({ payload, signers: addedSigners });

    sandbox.spyOn(JSON, 'stringify');
    sandbox.spyOn(op.constructor, '_validateSigners');
    op.addSignersFromJSON(json);

    // The payload should be validated by JSON-equality for each property of
    // both payloads
    expect(isEqual).toHaveBeenCalledWith(op.payload, payload);
    expect(assert).toHaveBeenCalledWith(
      true,
      'Unable to add state; incompatible payloads',
    );

    expect(op.constructor._validateSigners).toHaveBeenCalledWith(addedSigners);

    // The _signers should have been added together
    expect(op._signers).toEqual(
      Object.assign({}, initialSigners, addedSigners),
    );
  });

  test('Adding state as JSON (invalid json)', () => {
    const op = new MultisigOperation(sender, { payload });

    expect(() => {
      op.addSignersFromJSON('aksjdhkjasdhkj');
    }).toThrowError('Unable to add signers: could not parse JSON');
  });

  test('ERC191 Message hash is created properly', async () => {
    const op = new MultisigOperation(sender, { payload });
    op._nonce = 5;

    // It should be undefined until operation is refreshed
    expect(op._messageHash).toBeUndefined();

    // The string to be hashed should contain:
    // Initial `0x`
    // source address (with initial 0x removed - `source`)
    // destination address (with initial 0x removed - `destination`)
    // transaction value (1 - `value`)
    // transaction data (with initial 0x removed - `data`)
    // nonce (5 - `nonce`)
    const expectedHash = '0xsourcedestination1data5';

    op._refreshMessageHash();
    const hash = op._messageHash;
    expect(hash).toBe(expectedHash);
    expect(padLeft).toHaveBeenCalledTimes(2);
    expect(soliditySha3).toHaveBeenCalledWith(expectedHash);
    expect(op._messageHash).toBe(expectedHash);
  });

  test('Signed message digests', () => {
    const op = new MultisigOperation(sender, { payload });
    op._nonce = 5;

    // Initialise the hash
    op._refreshMessageHash();

    // Default signed message digest
    op._signedMessageDigest; // eslint-disable-line no-unused-expressions
    expect(soliditySha3).toHaveBeenCalledWith(
      '\x19Ethereum Signed Message:\n32',
      op._messageHash,
    );
    expect(hexToBytes).toHaveBeenCalledTimes(1);

    hexToBytes.mockClear();
    soliditySha3.mockClear();

    // Trezor signed message digest
    op._signedTrezorMessageDigest; // eslint-disable-line no-unused-expressions
    expect(soliditySha3).toHaveBeenCalledWith(
      '\x19Ethereum Signed Message:\n\x20',
      op._messageHash,
    );
    expect(hexToBytes).toHaveBeenCalledTimes(1);
  });

  test('Getting the message digest for different signing modes', () => {
    const digestSpy = sandbox.spyOn(
      MultisigOperation.prototype,
      '_signedMessageDigest',
      'get',
    );
    const trezorDigestSpy = sandbox.spyOn(
      MultisigOperation.prototype,
      '_signedTrezorMessageDigest',
      'get',
    );

    const op = new MultisigOperation(sender, { payload });

    op._getMessageDigest(0);
    expect(digestSpy).toHaveBeenCalled();
    expect(trezorDigestSpy).not.toHaveBeenCalled();

    digestSpy.mockClear();
    trezorDigestSpy.mockClear();

    op._getMessageDigest(1);
    expect(digestSpy).not.toHaveBeenCalled();
    expect(trezorDigestSpy).toHaveBeenCalled();
  });

  test('Finding the signature mode', () => {
    const digest = 'digest';
    const trezorDigest = 'trezor digest';
    sandbox
      .spyOn(MultisigOperation.prototype, '_signedMessageDigest', 'get')
      .mockReturnValue(digest);
    sandbox
      .spyOn(MultisigOperation.prototype, '_signedTrezorMessageDigest', 'get')
      .mockReturnValue(trezorDigest);

    const op = new MultisigOperation(sender, { payload });

    sandbox.spyOn(op, '_getMessageDigest');
    op.sender.client.adapter.ecRecover
      .mockReturnValueOnce(address)
      .mockReturnValueOnce('not the right address');

    const mode = op._findSignatureMode(signature);

    expect(mode).toBe(0); // A match was found for the first mode
    expect(op._getMessageDigest).toHaveBeenCalledWith(0);
    expect(op._getMessageDigest).toHaveBeenCalledWith(1);
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
      op._findSignatureMode(signature);
    }).toThrowError('Unable to confirm signature mode');
  });

  test('Adding signatures', () => {
    const op = new MultisigOperation(sender, { payload });
    const mode = 1;

    sandbox.spyOn(op, '_findSignatureMode').mockReturnValue(mode);

    op._addSignature(signature, address);

    expect(op._signers).toEqual({ [address]: { ...signature, ...mode } });
    expect(op._findSignatureMode).toHaveBeenCalled();
  });

  test('Signing', async () => {
    const messageHash = 'messageHash';

    const op = new MultisigOperation(sender, { payload });
    op._messageHash = messageHash;

    sandbox.spyOn(op, '_addSignature').mockReturnValue(signature);
    sandbox.spyOn(op, 'refresh').mockImplementation(async () => {});

    await op.sign();

    // Ideally, we would assert that this function was called before the others,
    // but it's not well-supported in jest (or other modules like jest-extended)
    expect(op.refresh).toHaveBeenCalled();

    expect(op.sender.client.adapter.signMessage).toHaveBeenCalledWith(
      messageHash,
    );
    expect(op._addSignature).toHaveBeenCalledWith(signature, address);
  });

  test('Operation can be sent with Sender', async () => {
    const args = [123, 'abc'];
    const op = new MultisigOperation(sender, { payload, signers });
    sandbox
      .spyOn(op, '_validateRequiredSignees')
      .mockImplementation(() => true);
    sandbox.spyOn(op, '_getArgs').mockReturnValue(args);
    op.sender.getNonce.mockReturnValue(Promise.resolve(5));

    const options = { gasPrice: 1 };
    await op.send(options);

    expect(op._validateRequiredSignees).toHaveBeenCalled();
    expect(op._getArgs).toHaveBeenCalled();
    expect(op.sender.sendMultisig).toHaveBeenCalledWith(args, options);
  });

  test('Refreshing', async () => {
    const op = new MultisigOperation(sender, { payload, signers });

    sandbox.spyOn(op, '_refreshNonce').mockImplementation(async () => {});
    sandbox
      .spyOn(op, '_refreshRequiredSignees')
      .mockImplementation(async () => {});
    sandbox.spyOn(op, '_refreshMessageHash').mockImplementation(() => {});

    await op.refresh();

    // Ideally, jest would support asserting that _refreshNonce is called
    // before _refreshRequiredSignees, because if a new nonce value was set,
    // the signers are reset.
    expect(op._refreshNonce).toHaveBeenCalled();
    expect(op._refreshRequiredSignees).toHaveBeenCalled();
    expect(op._refreshMessageHash).toHaveBeenCalled();
  });

  test('Refreshing the nonce', async () => {
    const onReset = sandbox.fn();
    const op = new MultisigOperation(sender, { payload, signers, onReset });

    const oldNonce = 20;
    const newNonce = 21;
    op._nonce = oldNonce;

    // Refresh with the old nonce
    op.sender.getNonce.mockImplementation(async () => oldNonce);
    await op._refreshNonce();
    expect(op.sender.getNonce).toHaveBeenCalled();
    expect(op._nonce).toBe(oldNonce);
    expect(op._signers).toEqual(signers);
    expect(onReset).not.toHaveBeenCalled();

    // Refresh with the new nonce
    op.sender.getNonce.mockImplementation(async () => newNonce);
    await op._refreshNonce();
    expect(op.sender.getNonce).toHaveBeenCalled();
    expect(op._nonce).toBe(newNonce);
    expect(op._signers).toEqual({});
    expect(onReset).toHaveBeenCalled();
  });

  test('Refreshing required signees', async () => {
    const op = new MultisigOperation(sender, { payload, signers });

    const newSigners = ['signer one', 'signer two'];
    op.sender.getRequiredSignees.mockImplementationOnce(async () => 2);
    op.sender.getAcceptedSignees.mockImplementationOnce(async () => newSigners);

    await op._refreshRequiredSignees();
    expect(op.sender.getAcceptedSignees).toHaveBeenCalledWith(
      op.payload.inputValues,
    );
    expect(op._acceptedSignees).toEqual(newSigners);
    expect(op._requiredSignees).toEqual(2);
  });

  test('Getting missing signees', async () => {
    const signer1 = 'signer1';
    const signer2 = 'signer2';
    const signer3 = 'signer3';
    const acceptedSignees = [signer1, signer2, signer3];
    const requiredSignees = 3;
    const op = new MultisigOperation(sender, {
      payload,
      signers: {
        signer1,
        signer2,
      },
    });
    op._acceptedSignees = acceptedSignees;
    op._requiredSignees = requiredSignees;

    expect(op.acceptedSignees).toEqual(acceptedSignees);
    expect(op.requiredSignees).toEqual(requiredSignees);
    expect(op.missingSignees).toEqual([signer3]);

    // with refreshing
    sandbox
      .spyOn(op.sender, 'getRequiredSignees')
      .mockImplementation(async () => 2); // one fewer
    sandbox
      .spyOn(op.sender, 'getAcceptedSignees')
      .mockImplementation(async () => acceptedSignees);
    await op._refreshRequiredSignees();

    expect(op.requiredSignees).toEqual(2);
    expect(op.acceptedSignees).toEqual(acceptedSignees);
    expect(op.missingSignees).toEqual([]); // all should be satisfied
  });

  test('Validating nonce', () => {
    sandbox
      .spyOn(MultisigOperation, '_validatePayload')
      .mockImplementation(() => true);
    sandbox
      .spyOn(MultisigOperation, '_validateSigners')
      .mockImplementation(() => true);

    // Invalid nonce supplied
    ['1', 0.1].forEach(input => {
      // eslint-disable-next-line no-new
      new MultisigOperation(sender, { payload, nonce: input });
      expect(assert).toHaveBeenCalledWith(
        false,
        expect.stringMatching('nonce'),
      );
    });

    // No nonce supplied, or valid nonce supplied
    [undefined, null, 0, 1, 5].forEach(input => {
      const op = new MultisigOperation(sender, { payload, nonce: input });
      expect(op).toBeInstanceOf(MultisigOperation);
    });
  });
});

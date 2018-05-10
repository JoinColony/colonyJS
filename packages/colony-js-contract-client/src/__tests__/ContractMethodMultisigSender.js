/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';

import ContractClient from '../classes/ContractClient';
import MultisigSender from '../classes/ContractMethodMultisigSender';
import MultisigOperation from '../classes/MultisigOperation';
import Sender from '../classes/ContractMethodSender';

jest.mock('../classes/MultisigOperation');

describe('ContractMethodMultisigSender', () => {
  const sandbox = createSandbox();
  const addresses = [
    '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B',
    '0x281055afc982d96fab65b3a49cac8b878184cb16',
    '0x6f46cf5569aefa1acc1009290c8e043747172d89',
  ];
  const contract = {
    address: '0xMyContractAddress',
  };
  const functionName = 'myFunction';
  const multisigFunctionName = 'myMultisigFunction';
  const nonceFunctionName = 'myNonceFunction';
  const callArgs = [1];
  const input = [['id', 'number']];
  const inputValues = { id: 1 };
  const sig1 = { sigR: '0x123', sigS: '0x234', sigV: 123 };
  const sig2 = {
    sigR: '0x3810976581519370936455002930541734832270292486195672859026812854',
    sigS: '0x2717400036569076491467357688191371198012187172992592815125647808',
    sigV: 28,
  };
  const sig3 = {
    sigR: '0x09ebb6ca057a0535d6186462bc0b465b561c94a295bdb0621fc19208ab149a9c',
    sigS: '0x440ffd775ce91a833ab410777204d5341a6f9fa91216a6f3ee2c051fea6a0428',
    sigV: 25,
  };
  const options = {
    timeoutMs: 5000,
    miningTimeoutMs: 10000,
    gasLimit: 1000,
    gasPrice: 2000,
    nonce: 0,
    value: 0,
    waitForMining: true,
  };
  const transaction = { hash: '0x123' };
  const receipt = {
    hash: '0x123',
    blockHash: '0x234',
    status: 1,
  };
  const contractResponse = {
    meta: {
      receipt,
      transaction,
    },
  };
  const adapter = {
    getTransactionReceipt: sandbox.fn(() => receipt),
  };
  const client = new ContractClient({ contract, adapter });

  beforeEach(() => {
    sandbox.clear();
    // Mock the super class's send method in all tests
    sandbox.spyOn(Sender.prototype, 'send').mockReturnValue(contractResponse);
  });

  test('Combining signatures', () => {
    const signers = new Map([[addresses[0], sig1], [addresses[1], sig2]]);
    const combined = MultisigSender.combineSignatures(signers);
    expect(combined).toEqual({
      sigR: [sig1.sigR, sig2.sigR],
      sigS: [sig1.sigS, sig2.sigS],
      sigV: [sig1.sigV, sig2.sigV],
    });
  });

  test('Getting Multisig arguments', () => {
    const sigR = ['0x123', '0x234'];
    const sigS = ['0x345', '0x456'];
    const sigV = [123, 234];
    const state = {
      signers: 'signers',
      payload: {
        data: '0x999',
        value: 5,
      },
    };

    sandbox
      .spyOn(MultisigSender, 'combineSignatures')
      .mockReturnValue({ sigV, sigR, sigS });

    const args = MultisigSender.getMultisigArgs(state);

    expect(MultisigSender.combineSignatures).toHaveBeenCalledWith(
      state.signers,
    );
    expect(args).toEqual([
      sigV,
      sigR,
      sigS,
      state.payload.value,
      state.payload.data,
    ]);
  });

  test('Validating required signatures (valid)', () => {
    const signers = new Map([
      [addresses[0], sig1],
      [addresses[1], sig2],
      [addresses[2], sig3],
    ]);
    const valid = MultisigSender.validateRequiredSigners(addresses, signers);
    expect(valid).toBe(true);
  });

  test('Validating required signatures (invalid)', () => {
    [
      // no signatures
      new Map(),
      // one signature
      new Map([[addresses[0], sig1]]),
      // two signatures
      new Map([[addresses[0], sig1], [addresses[1], sig2]]),
      // three signatures, one of which is wrong
      new Map([
        [addresses[0], sig1],
        [addresses[1], sig2],
        ['the wrong address', sig2],
      ]),
    ].forEach(signers => {
      // We need three matching signatures
      expect(() => {
        MultisigSender.validateRequiredSigners(addresses, signers);
      }).toThrowError('Missing signatures');
    });
  });

  test('Getting nonce value (valid response)', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      input,
      nonceFunctionName,
    });

    method.client.call = sandbox
      .fn()
      .mockReturnValueOnce(Promise.resolve(1))
      .mockReturnValueOnce(Promise.resolve(2));

    const firstNonce = await method.getNonce();
    const secondNonce = await method.getNonce();

    expect(method.client.call).toHaveBeenCalledTimes(2);
    expect(method.client.call).toHaveBeenCalledWith(
      method.nonceFunctionName,
      [],
    );
    expect(firstNonce).toEqual(1);
    expect(secondNonce).toEqual(2);
  });

  test('Getting nonce value (invalid response)', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      input,
      nonceFunctionName,
    });

    method.client.call = sandbox
      .fn()
      .mockReturnValueOnce(Promise.resolve(1))
      .mockReturnValueOnce(Promise.resolve({ nonce: 1.5 }));

    try {
      await method.getNonce();
    } catch (error) {
      expect(error.toString()).toMatch('Expected a "nonce" property');
    }

    try {
      await method.getNonce();
    } catch (error) {
      expect(error.toString()).toMatch('Nonce must be an integer');
    }
  });

  test('Sending without multisig', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      input,
    });

    try {
      await method.send(inputValues, options);
    } catch (error) {
      expect(error.toString()).toContain(
        'This Sender uses multi-signature transactions',
      );
    }
  });

  // TODO move this test to MultisigOperation
  test.skip('Sending without multisig (signatures needed)', async () => {
    const getRequiredSigners = sandbox
      .fn()
      .mockReturnValueOnce(Promise.resolve(addresses))
      .mockReturnValueOnce(Promise.resolve(addresses[0]));

    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSigners,
      input,
    });

    sandbox.spyOn(method, 'validate').mockReturnValue(true);

    try {
      await method.send(inputValues, options);
    } catch (error) {
      expect(error.toString()).toMatch('Missing signatures');
    }

    try {
      await method.send(inputValues, options);
    } catch (error) {
      expect(error.toString()).toMatch('Expected an array of signer addresses');
    }
  });

  test('Sending with multisig', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      input,
    });

    sandbox.spyOn(method, 'validate').mockReturnValue(true);
    sandbox.spyOn(method, 'validateSigners').mockReturnValue(true);
    sandbox.spyOn(method, '_send').mockReturnValue(contractResponse);
    sandbox.spyOn(method.constructor, 'getMultisigArgs').mockReturnValue([]);

    const state = {
      signers: new Map(),
      payload: {
        inputValues,
        data: '0x999',
        value: 5,
      },
    };

    const response = await method.sendMultisig(state, options);

    expect(method.constructor.getMultisigArgs).toHaveBeenCalledWith(state);
    expect(method.validate).toHaveBeenCalledWith(inputValues);
    expect(method.validateSigners).toHaveBeenCalledWith(
      inputValues,
      state.signers,
    );
    expect(response).toBe(contractResponse);
  });

  test('Starting a MultisigOperation', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSigners: sandbox.fn(),
      input,
      multisigFunctionName,
      nonceFunctionName,
    });

    const nonce = 5;
    sandbox.spyOn(method, 'validate').mockReturnValue(true);
    sandbox.spyOn(method, 'getMethodArgs').mockReturnValue(callArgs);
    sandbox.spyOn(method, 'getNonce').mockReturnValue(Promise.resolve(nonce));

    const txData = '0xtxDataGoesHere';
    sandbox
      .spyOn(method.client, 'createTransactionData')
      .mockReturnValue(txData);

    const op = await method.startOperation(inputValues);

    expect(method.validate).toHaveBeenCalledWith(inputValues);
    expect(method.getMethodArgs).toHaveBeenCalledWith(inputValues);
    expect(method.client.createTransactionData).toHaveBeenCalledWith(
      method.functionName,
      callArgs,
    );
    expect(op).toBeInstanceOf(MultisigOperation);
    expect(MultisigOperation).toHaveBeenCalledWith(
      method,
      expect.objectContaining({
        payload: {
          data: txData,
          destinationAddress: method.client.contract.address,
          inputValues,
          sourceAddress: method.client.contract.address,
          value: 0,
          nonce,
        },
        signers: new Map(),
      }),
    );
  });

  test('Restoring a MultisigOperation', () => {
    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSigners: sandbox.fn(),
      input,
      multisigFunctionName,
      nonceFunctionName,
    });

    const state = {
      payload: {
        data: '0x123',
        destinationAddress: method.client.contract.address,
        inputValues,
        sourceAddress: method.client.contract.address,
        value: 0,
      },
      signatures: {
        '0x176253765182736581': {
          sigR: '0x234',
          sigS: '0x345',
          sigV: 123,
        },
      },
    };

    const op = method.restoreOperation(state);
    expect(MultisigOperation).toHaveBeenCalledWith(method, state);
    expect(op).toBeInstanceOf(MultisigOperation);
  });
});

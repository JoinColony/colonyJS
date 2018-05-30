/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';

import ContractClient from '../classes/ContractClient';
import MultisigSender from '../classes/ContractMethodMultisigSender';
import MultisigOperation from '../classes/MultisigOperation';
import Sender from '../classes/ContractMethodSender';

jest.mock('../classes/MultisigOperation');

MultisigOperation.prototype.refresh.mockImplementation(
  async () => new MultisigOperation(),
);

describe('ContractMethodMultisigSender', () => {
  const sandbox = createSandbox();
  const contract = {
    address: '0xMyContractAddress',
  };
  const functionName = 'myFunction';
  const multisigFunctionName = 'myMultisigFunction';
  const nonceFunctionName = 'myNonceFunction';
  const callArgs = [1];
  const input = [['id', 'number']];
  const inputValues = { id: 1 };
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
    getContract: sandbox.fn().mockReturnValue(contract),
    get contract() {
      return contract;
    },
  };
  const client = new ContractClient({ contract, adapter });

  beforeEach(() => {
    sandbox.clear();
    // Mock the super class's send method in all tests
    sandbox.spyOn(Sender.prototype, 'send').mockReturnValue(contractResponse);
  });

  test('Getting nonce value (valid response)', async () => {
    await client.init();
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

  test('Starting a new MultisigOperation with payload/signers', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSignees: sandbox.fn(),
      input,
      multisigFunctionName,
      nonceFunctionName,
    });

    const payload = {
      data: '0x123',
      destinationAddress: method.client.contract.address,
      inputValues,
      sourceAddress: method.client.contract.address,
      value: 0,
    };
    const signers = {
      '0x176253765182736581': {
        sigR: '0x234',
        sigS: '0x345',
        sigV: 123,
      },
    };

    const op = await method._startOperation({ payload, signers });

    expect(op).toBeInstanceOf(MultisigOperation);
    expect(MultisigOperation).toHaveBeenCalledWith(
      method,
      expect.objectContaining({ payload, signers }),
    );
    expect(op.refresh).toHaveBeenCalled();
  });

  test('Starting a MultisigOperation from input values', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSignees: sandbox.fn(),
      input,
      multisigFunctionName,
      nonceFunctionName,
    });

    sandbox.spyOn(method, 'validate').mockReturnValue(true);
    sandbox.spyOn(method, '_getMethodArgs').mockReturnValue(callArgs);

    const txData = '0xtxDataGoesHere';
    sandbox
      .spyOn(method, '_startOperation')
      .mockImplementation(async () => new MultisigOperation());
    sandbox
      .spyOn(method.client, 'createTransactionData')
      .mockReturnValue(txData);

    const op = await method.startOperation(inputValues);

    expect(method.validate).toHaveBeenCalledWith(inputValues);
    expect(method._getMethodArgs).toHaveBeenCalledWith(inputValues);
    expect(method.client.createTransactionData).toHaveBeenCalledWith(
      method.functionName,
      callArgs,
    );
    expect(op).toBeInstanceOf(MultisigOperation);
    expect(method._startOperation).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: {
          data: txData,
          destinationAddress: method.client.contract.address,
          inputValues,
          sourceAddress: method.client.contract.address,
          value: 0,
        },
      }),
    );
  });

  test('Restoring a MultisigOperation', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSignees: sandbox.fn(),
      input,
      multisigFunctionName,
      nonceFunctionName,
    });

    const state = {
      nonce: 5,
      payload: {
        data: '0x123',
        destinationAddress: method.client.contract.address,
        inputValues,
        sourceAddress: method.client.contract.address,
        value: 0,
      },
      signers: {
        '0x176253765182736581': {
          sigR: '0x234',
          sigS: '0x345',
          sigV: 123,
        },
      },
    };

    const json = JSON.stringify(state);

    sandbox
      .spyOn(method, '_startOperation')
      .mockImplementation(async () => new MultisigOperation());

    const op = await method.restoreOperation(json);

    expect(op).toBeInstanceOf(MultisigOperation);
    expect(method._startOperation).toHaveBeenCalledWith(
      expect.objectContaining(state),
    );
  });
});

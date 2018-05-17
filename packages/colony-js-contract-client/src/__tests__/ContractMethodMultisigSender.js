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
    }
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

  // TODO move this test to MultisigOperation
  test.skip('Sending without multisig (signatures needed)', async () => {
    const getRequiredSignees = sandbox
      .fn()
      .mockReturnValueOnce(Promise.resolve(addresses))
      .mockReturnValueOnce(Promise.resolve(addresses[0]));

    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSignees,
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

  test('Starting a MultisigOperation', async () => {
    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSignees: sandbox.fn(),
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
        data: txData,
        destinationAddress: method.client.contract.address,
        inputValues,
        sourceAddress: method.client.contract.address,
        value: 0,
        nonce,
      }),
    );
  });

  test('Restoring a MultisigOperation', () => {
    const method = new MultisigSender({
      client,
      functionName,
      getRequiredSignees: sandbox.fn(),
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
      signers: {
        '0x176253765182736581': {
          sigR: '0x234',
          sigS: '0x345',
          sigV: 123,
        },
      },
    };

    const json = JSON.stringify(state);

    const op = method.restoreOperation(json);
    expect(MultisigOperation).toHaveBeenCalledWith(
      method,
      state.payload,
      state.signers,
    );
    expect(op).toBeInstanceOf(MultisigOperation);
  });
});

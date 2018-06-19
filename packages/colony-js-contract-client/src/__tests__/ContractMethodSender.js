/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';

import ContractClient from '../classes/ContractClient';
import ContractMethodSender from '../classes/ContractMethodSender';

describe('ContractMethodSender', () => {
  const sandbox = createSandbox();
  const contract = {};
  const eventHandlers = {
    myEventOne: {
      handler({ eventOneResult }) {
        return eventOneResult;
      },
      contract,
    },
    myEventTwo: {
      handler({ eventTwoResult }) {
        return eventTwoResult;
      },
      contract,
    },
  };
  const functionName = 'myFunction';
  const callArgs = [1];
  const input = [['id', 'number']];
  const inputValues = { id: 1 };
  const options = {
    timeoutMs: 5000,
    gasLimit: 1000,
    gasPrice: 2000,
    nonce: 1,
    value: 0,
    waitForMining: true,
  };
  const transaction = { hash: '0x123' };
  const eventData = {
    myEventOne: 1,
    myEventTwo: 2,
  };
  const receipt = {
    hash: '0x123',
    blockHash: '0x234',
    status: 1,
  };
  const contractResponse = {
    eventData,
    successful: true,
    meta: {
      receipt,
      transaction,
    },
  };
  const adapter = {
    getTransactionReceipt: sandbox.fn(),
    waitForTransaction: sandbox.fn(),
    provider: {
      name: 'mainnet',
    },
  };
  const client = new ContractClient({ contract, adapter });
  sandbox
    .spyOn(client, 'getEventData')
    .mockImplementation(async () => Promise.resolve(eventData));

  beforeEach(() => sandbox.clear());

  test('Gas cost can be estimated', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
    });

    const gasEstimate = new BigNumber(1000);

    sandbox.spyOn(method, 'validate').mockImplementation(() => true);
    sandbox.spyOn(method, '_getMethodArgs').mockImplementation(() => callArgs);
    sandbox
      .spyOn(client, 'estimate')
      .mockImplementation(async () => gasEstimate);

    expect(await method.estimate(inputValues, options)).toBe(gasEstimate);
    expect(method.validate).toHaveBeenCalledWith(inputValues, method.input);
    expect(method._getMethodArgs).toHaveBeenCalledWith(
      inputValues,
      method.input,
    );
    expect(method.client.estimate).toHaveBeenCalledWith(
      method.functionName,
      callArgs,
    );
  });

  test('Transactions can be sent', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
      eventHandlers,
    });

    sandbox.spyOn(method, 'validate').mockImplementation(() => true);
    sandbox.spyOn(method, '_getMethodArgs').mockImplementation(() => callArgs);
    sandbox.spyOn(client, 'send').mockImplementation(async () => transaction);
    method._send = sandbox.fn(() => contractResponse);

    expect(await method.send(inputValues, options)).toEqual(contractResponse);
    expect(method.validate).toHaveBeenCalledWith(inputValues, method.input);
    expect(method._getMethodArgs).toHaveBeenCalledWith(
      inputValues,
      method.input,
    );
    expect(method._send).toHaveBeenCalledWith(callArgs, options);
  });

  test('Sending transactions', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
      eventHandlers,
    });

    sandbox.spyOn(method, '_sendTransaction').mockReturnValue(transaction);
    sandbox.spyOn(method, '_sendWithWaitingForMining');
    sandbox.spyOn(method, '_sendWithoutWaitingForMining');
    sandbox.spyOn(method, '_getDefaultSendOptions');

    await method._send(callArgs, options);

    expect(method._sendTransaction).toHaveBeenCalledWith(callArgs, {
      gasPrice: options.gasPrice,
      gasLimit: options.gasLimit,
      nonce: options.nonce,
      value: options.value,
    });

    expect(method._getDefaultSendOptions).toHaveBeenCalledWith(options);
    expect(method._sendWithWaitingForMining).toHaveBeenCalled();
    expect(method._sendWithoutWaitingForMining).not.toHaveBeenCalled();

    expect(
      method._send(
        callArgs,
        Object.assign({}, options, { waitForMining: false }),
      ),
    ).toBeInstanceOf(Promise);
    expect(method._sendWithWaitingForMining).toHaveBeenCalled();
  });

  test('Sending transactions (waiting for mining)', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
      eventHandlers,
    });
    sandbox
      .spyOn(method, '_waitForTransactionReceipt')
      .mockResolvedValue(receipt);

    const response = await method._sendWithWaitingForMining(
      transaction,
      options.timeoutMs,
    );

    expect(response).toEqual({
      eventData,
      successful: true,
      meta: {
        receipt,
        transaction,
      },
    });

    // Event data, transaction receipts and success are collected
    expect(method.client.getEventData).toHaveBeenCalledWith({
      events: method.eventHandlers,
      timeoutMs: options.timeoutMs,
      transactionHash: transaction.hash,
    });

    expect(method.client.getEventData).toHaveBeenCalledWith({
      events: eventHandlers,
      timeoutMs: options.timeoutMs,
      transactionHash: transaction.hash,
    });
    expect(method._waitForTransactionReceipt).toHaveBeenCalledWith(
      transaction.hash,
    );
  });

  test('Sending transactions (without waiting for mining)', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
      eventHandlers,
    });
    sandbox
      .spyOn(method, '_waitForTransactionReceipt')
      .mockImplementation(async () => receipt);

    const response = method._sendWithoutWaitingForMining(
      transaction,
      options.timeoutMs,
    );

    // The response should contain promises and the sent transaction
    expect(response.eventDataPromise).toBeInstanceOf(Promise);
    expect(response.successfulPromise).toBeInstanceOf(Promise);
    expect(response.meta.receiptPromise).toBeInstanceOf(Promise);
    expect(response.meta.transaction).toEqual(transaction);

    // Event data, transaction receipts and success are collected
    expect(await response.eventDataPromise).toEqual(eventData);
    expect(await response.successfulPromise).toBe(true);
    expect(await response.meta.receiptPromise).toEqual(receipt);

    expect(method.client.getEventData).toHaveBeenCalledWith({
      events: eventHandlers,
      timeoutMs: options.timeoutMs,
      transactionHash: transaction.hash,
    });
    expect(method._waitForTransactionReceipt).toHaveBeenCalledWith(
      transaction.hash,
    );
  });

  test('Waiting for transaction receipt', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
      eventHandlers,
    });
    const hash = 'the tx hash';

    // For this test, simulate that we couldn't get the receipt on the first
    // try (i.e. it has not yet been mined).
    method.client.adapter.getTransactionReceipt
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(receipt);

    method.client.adapter.waitForTransaction.mockResolvedValue(transaction);

    const txReceipt = await method._waitForTransactionReceipt(hash);

    expect(method.client.adapter.getTransactionReceipt).toHaveBeenCalledTimes(
      2,
    );
    expect(method.client.adapter.getTransactionReceipt).toHaveBeenCalledWith(
      hash,
    );
    expect(method.client.adapter.waitForTransaction).toHaveBeenCalledWith(hash);
    expect(txReceipt).toEqual(receipt);
  });

  test('Default send options', () => {
    const A = 1;
    const B = 100000;

    const methodWithoutDefault = new ContractMethodSender({
      client,
      input,
      functionName,
    });

    const methodWithDefault = new ContractMethodSender({
      client,
      input,
      functionName,
      defaultGasLimit: B,
    });

    expect(methodWithoutDefault._getDefaultSendOptions()).not.toHaveProperty(
      'gasLimit',
    );
    expect(
      methodWithoutDefault._getDefaultSendOptions({ gasLimit: A }).gasLimit,
    ).toEqual(A);

    expect(methodWithDefault._getDefaultSendOptions().gasLimit).toEqual(B);
    expect(
      methodWithDefault._getDefaultSendOptions({ gasLimit: A }).gasLimit,
    ).toEqual(A);

    const mainnetMethod = new ContractMethodSender({
      client,
      input,
      functionName,
    });
    // Should have a 1 hour timeout
    expect(mainnetMethod._getDefaultSendOptions().timeoutMs).toEqual(3600000);

    const testnetMethod = new ContractMethodSender({
      client,
      input,
      functionName,
    });
    testnetMethod.client.adapter.provider = { name: 'testnet' };
    // Should have a 5 minute timeout
    expect(testnetMethod._getDefaultSendOptions().timeoutMs).toEqual(300000);
  });
});

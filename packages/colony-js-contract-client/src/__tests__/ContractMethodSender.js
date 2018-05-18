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
    success: {
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
    status: 'SUCCESS',
    meta: {
      receipt,
      transaction,
    },
  };
  const adapter = {
    getTransactionReceipt: sandbox.fn(async () => Promise.resolve(receipt)),
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

    method.validate = sandbox.fn(() => true);
    method.getMethodArgs = sandbox.fn(() => callArgs);
    method.client.estimate = sandbox.fn(() => gasEstimate);

    expect(await method.estimate(inputValues, options)).toBe(gasEstimate);
    expect(method.validate).toHaveBeenCalledWith(inputValues);
    expect(method.getMethodArgs).toHaveBeenCalledWith(inputValues);
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

    method.validate = sandbox.fn(() => true);
    method.getMethodArgs = sandbox.fn(() => callArgs);
    method.client.send = sandbox.fn(() => transaction);
    method._send = sandbox.fn(() => contractResponse);

    expect(await method.send(inputValues, options)).toEqual(contractResponse);
    expect(method.validate).toHaveBeenCalledWith(inputValues);
    expect(method.getMethodArgs).toHaveBeenCalledWith(inputValues);
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

    await method._send(callArgs, options);

    expect(method._sendTransaction).toHaveBeenCalledWith(callArgs, {
      gasPrice: options.gasPrice,
      gasLimit: options.gasLimit,
      nonce: options.nonce,
      value: options.value,
    });

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

    sandbox.spyOn(method.constructor, 'getTransactionStatus');

    const response = await method._sendWithWaitingForMining(
      transaction,
      options.timeoutMs,
    );

    expect(response).toEqual({
      eventData,
      status: 'SUCCESS',
      meta: {
        receipt,
        transaction,
      },
    });

    // Event data, transaction receipts and status are collected
    expect(method.client.adapter.getTransactionReceipt).toHaveBeenCalledWith(
      transaction.hash,
    );
    expect(method.client.getEventData).toHaveBeenCalledWith({
      events: method.eventHandlers,
      timeoutMs: options.timeoutMs,
      transactionHash: transaction.hash,
    });
    expect(method.constructor.getTransactionStatus).toHaveBeenCalledWith(
      receipt.status,
    );

    expect(method.client.getEventData).toHaveBeenCalledWith({
      events: eventHandlers,
      timeoutMs: options.timeoutMs,
      transactionHash: transaction.hash,
    });
    expect(method.client.adapter.getTransactionReceipt).toHaveBeenCalledWith(
      transaction.hash,
    );
    expect(method.constructor.getTransactionStatus).toHaveBeenCalledWith(
      receipt.status,
    );
  });

  test('Sending transactions (without waiting for mining)', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
      eventHandlers,
    });

    sandbox.spyOn(method.constructor, 'getTransactionStatus');

    const response = method._sendWithoutWaitingForMining(
      transaction,
      options.timeoutMs,
    );

    // The response should contain promises and the sent transaction
    expect(response.eventDataPromise).toBeInstanceOf(Promise);
    expect(response.statusPromise).toBeInstanceOf(Promise);
    expect(response.meta.receiptPromise).toBeInstanceOf(Promise);
    expect(response.meta.transaction).toEqual(transaction);

    // Event data, transaction receipts and status are collected
    expect(await response.eventDataPromise).toEqual(eventData);
    expect(await response.statusPromise).toBe('SUCCESS');
    expect(await response.meta.receiptPromise).toEqual(receipt);

    expect(method.client.getEventData).toHaveBeenCalledWith({
      events: eventHandlers,
      timeoutMs: options.timeoutMs,
      transactionHash: transaction.hash,
    });
    expect(method.client.adapter.getTransactionReceipt).toHaveBeenCalledWith(
      transaction.hash,
    );
    expect(method.constructor.getTransactionStatus).toHaveBeenCalledWith(
      receipt.status,
    );
  });

  test('Getting transaction status', () => {
    expect(ContractMethodSender.getTransactionStatus(0)).toBe('FAILURE');
    expect(ContractMethodSender.getTransactionStatus(1)).toBe('SUCCESS');
  });
});

/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';

import ContractClient from '../classes/ContractClient';
import ContractMethodSender from '../classes/ContractMethodSender';

describe('ContractMethodSender', () => {
  const sandbox = createSandbox();
  const contract = {
    interface: {
      events: {
        TaskAdded: {
          anonymous: false,
          name: 'TaskAdded',
          signature: 'TaskAdded(uint256)',
          type: 'event',
          topics: [
            '0x2f304925f4f66741b976d6f4f9a127315b8ef823c6e2a3b08895e5b11579bc78', // eslint-disable-line max-len
          ],
          inputs: {
            names: ['id'],
            types: ['uint256'],
          },
          parse: sandbox.fn().mockReturnValue({ id: 1, '0': 1, length: 1 }),
        },
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
  const transaction = {
    hash: '0x435abc55cdc19c822f1f8488af616adb0357f3ad5f82c5da0a4de10e53f6a0cd',
  };
  const eventData = {
    taskId: 1,
    TaskAdded: { taskId: 1 },
  };
  const receipt = {
    hash: '0x435abc55cdc19c822f1f8488af616adb0357f3ad5f82c5da0a4de10e53f6a0cd',
    blockHash:
      '0xcb2ddd4c53efbc50dbb62292b38f3f315a89118d81233c6c016ca8a8ebd9baba',
    status: 1,
    logs: [
      {
        transactionIndex: 0,
        blockNumber: 104,
        transactionHash:
          '0x435abc55cdc19c822f1f8488af616adb0357f3ad5f82c5da0a4de10e53f6a0cd',
        address: '0x95e5029E064DD6c0E22B4D172893026e72428cE9',
        topics: [
          '0x2f304925f4f66741b976d6f4f9a127315b8ef823c6e2a3b08895e5b11579bc78',
          '0x0000000000000000000000000000000000000000000000000000000000000001',
        ],
        data: '0x00',
        logIndex: 0,
        blockHash:
          '0xcb2ddd4c53efbc50dbb62292b38f3f315a89118d81233c6c016ca8a8ebd9baba',
        transactionLogIndex: 0,
      },
    ],
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
    provider: {
      name: 'mainnet',
    },
  };
  const client = new ContractClient({ contract, adapter });
  client._contract = contract;
  client.addEvent('TaskAdded', [['taskId', 'number']]);

  beforeEach(() => sandbox.clear());

  test('Gas cost can be estimated', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
    });

    const gasEstimate = new BigNumber(1000);

    sandbox
      .spyOn(method, 'getValidatedArgs')
      .mockImplementation(() => callArgs);
    sandbox
      .spyOn(client, 'estimate')
      .mockImplementation(async () => gasEstimate);

    expect(await method.estimate(inputValues, options)).toBe(gasEstimate);
    expect(method.getValidatedArgs).toHaveBeenCalledWith(inputValues);
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
    });

    sandbox
      .spyOn(method, 'getValidatedArgs')
      .mockImplementation(() => callArgs);
    sandbox.spyOn(client, 'send').mockImplementation(async () => transaction);
    method._send = sandbox.fn(() => contractResponse);

    expect(await method.send(inputValues, options)).toEqual(contractResponse);
    expect(method.getValidatedArgs).toHaveBeenCalledWith(inputValues);
    expect(method._send).toHaveBeenCalledWith(callArgs, options);
  });

  test('Sending transactions', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
    });

    sandbox
      .spyOn(method.client.adapter, 'getTransactionReceipt')
      .mockResolvedValue(receipt);

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
    });
    sandbox.spyOn(method.client, 'getReceiptEventData');
    sandbox
      .spyOn(method.client.adapter, 'getTransactionReceipt')
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
    expect(method.client.getReceiptEventData).toHaveBeenCalledWith(receipt);

    expect(method.client.adapter.getTransactionReceipt).toHaveBeenCalledWith(
      transaction.hash,
    );
  });

  test('Sending transactions (without waiting for mining)', async () => {
    const method = new ContractMethodSender({
      client,
      input,
      functionName,
    });
    sandbox.spyOn(method.client, 'getReceiptEventData');
    sandbox
      .spyOn(method.client.adapter, 'getTransactionReceipt')
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

    expect(method.client.getReceiptEventData).toHaveBeenCalledWith(receipt);
    expect(method.client.adapter.getTransactionReceipt).toHaveBeenCalledWith(
      transaction.hash,
    );
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

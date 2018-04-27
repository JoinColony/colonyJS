/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';

import ContractClient from '../classes/ContractClient';
import ContractClientMethodCaller from '../classes/ContractMethodCaller';
import ContractClientMethodSender from '../classes/ContractMethodSender';

describe('ContractClient', () => {
  const sandbox = createSandbox();
  const transaction = {
    from: '0x123',
    to: '0x987',
    data: 'my transaction data',
  };
  const txData = "0x123 oh look at me, I'm some data";
  const constantData = { constantValue: 123 };
  const gasEstimate = new BigNumber(123);
  const eventData = { myEvent: { myEventValue: 123 } };
  const contract = {
    address: '0x123',
    events: {},
    callConstant: sandbox.fn(async () => constantData),
    callEstimate: sandbox.fn(async () => gasEstimate),
    callTransaction: sandbox.fn(async () => transaction),
    createTransactionData: sandbox.fn(async () => txData),
  };
  const query = { contractName: 'MyContract' };
  const adapter = {
    getContract: sandbox.fn(() => contract),
    getEventData: sandbox.fn(async () => eventData),
  };
  const options = {
    myOption: 123,
  };
  const methodOneDef = {
    input: [['id', 'number']],
  };
  const methodTwoDef = {
    input: [['address', 'address']],
  };

  beforeEach(() => sandbox.clear());

  test('Static methods', async () => {
    // Creating methods
    expect(new ContractClient.Caller({})).toBeInstanceOf(
      ContractClientMethodCaller,
    );
    expect(new ContractClient.Sender({})).toBeInstanceOf(
      ContractClientMethodSender,
    );

    // `create` method
    const client = await ContractClient.create(adapter, query);
    expect(client).toBeInstanceOf(ContractClient);
    expect(client.contract).toBe(contract);
    expect(client.adapter).toBe(adapter);
    expect(adapter.getContract).toHaveBeenCalledTimes(1);
    expect(adapter.getContract).toHaveBeenCalledWith(query);
  });

  test('Constructor', () => {
    sandbox.spyOn(ContractClient.prototype, 'initializeContractMethods');

    const client = new ContractClient({ adapter, contract, options });
    expect(client).toBeInstanceOf(ContractClient);
    expect(client.contract).toBe(contract);
    expect(client.adapter).toBe(adapter);
    expect(client.initializeContractMethods).toHaveBeenCalledTimes(1);
    expect(client.initializeContractMethods).toHaveBeenCalledWith(options);
  });

  test('createMethod', () => {
    const client = new ContractClient({ adapter, contract, options });
    const input = [['id', 'number']];
    const functionName = 'myMethodOne';

    const Caller = jest.fn((...args) => new client.constructor.Caller(...args));

    // Define a method on the client
    client.createMethod(Caller, functionName, { input });

    // The method should exist on the client
    expect(client.myMethodOne).toBeInstanceOf(client.constructor.Caller);

    // The method should have been created with the client and functionName
    expect(Caller).toHaveBeenCalledWith({
      client,
      functionName,
      input,
    });

    // It should also be possible to override the functionName
    Caller.mockClear();
    client.createMethod(Caller, 'innocentlyClaimFunds', {
      input,
      functionName: 'stealAllTheTokens',
    });
    expect(Caller).toHaveBeenCalledWith({
      client,
      functionName: 'stealAllTheTokens',
      input,
    });

    // Attempting to redefine the same method name should not work
    expect(() => {
      client.createMethod(Caller, functionName, { input });
    }).toThrowError('A ContractMethod named "myMethodOne" already exists');

    // However, the method should not have been redefined
    expect(client.myMethodOne).toBeInstanceOf(client.constructor.Caller);
  });

  test('createCaller/createSender', () => {
    const client = new ContractClient({ adapter, contract, options });
    sandbox.spyOn(client, 'createMethod');

    client.createCaller('myMethodOne', methodOneDef);
    expect(client.createMethod).toHaveBeenCalledTimes(1);
    expect(client.createMethod).toHaveBeenCalledWith(
      ContractClient.Caller,
      'myMethodOne',
      methodOneDef,
    );

    client.createSender('myMethodTwo', methodTwoDef);

    expect(client.createMethod).toHaveBeenCalledTimes(2);
    expect(client.createMethod).toHaveBeenCalledWith(
      ContractClient.Sender,
      'myMethodTwo',
      methodTwoDef,
    );
  });

  test('call', async () => {
    const client = new ContractClient({ adapter, contract, options });
    const fnName = 'myFunctionName';
    const args = [1, 2, 3];
    const result = await client.call(fnName, args);

    expect(result).toEqual(constantData);
    expect(client.contract.callConstant).toHaveBeenCalledTimes(1);
    expect(client.contract.callConstant).toHaveBeenCalledWith(fnName, args);
  });

  test('estimate', async () => {
    const client = new ContractClient({ adapter, contract, options });
    const fnName = 'myFunctionName';
    const args = [1, 2, 3];
    const result = await client.estimate(fnName, args);

    expect(result).toEqual(gasEstimate);
    expect(client.contract.callEstimate).toHaveBeenCalledTimes(1);
    expect(client.contract.callEstimate).toHaveBeenCalledWith(fnName, args);
  });

  test('send', async () => {
    const client = new ContractClient({ adapter, contract, options });
    const fnName = 'myFunctionName';
    const args = [1, 2, 3];
    const txOpts = { gasPrice: new BigNumber(1000) };
    const result = await client.send(fnName, args, txOpts);

    expect(result).toEqual(transaction);
    expect(client.contract.callTransaction).toHaveBeenCalledTimes(1);
    expect(client.contract.callTransaction).toHaveBeenCalledWith(
      fnName,
      args,
      txOpts,
    );
  });

  test('createTransactionData', async () => {
    const client = new ContractClient({ adapter, contract, options });
    const fnName = 'myFunctionName';
    const args = [1, 2, 3];
    const result = await client.createTransactionData(fnName, args);

    expect(result).toEqual(txData);
    expect(client.contract.createTransactionData).toHaveBeenCalledTimes(1);
    expect(client.contract.createTransactionData).toHaveBeenCalledWith(
      fnName,
      args,
    );
  });

  test('getEventData', async () => {
    const client = new ContractClient({ adapter, contract, options });

    const params = {
      events: {
        success: {
          myEvent({ myEventValue }) {
            return { myEventValue };
          },
        },
      },
    };
    const result = await client.getEventData(params);

    expect(result).toEqual(eventData);
    expect(client.adapter.getEventData).toHaveBeenCalledTimes(1);
    expect(client.adapter.getEventData).toHaveBeenCalledWith(params);
  });
});

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

  beforeEach(() => {
    sandbox.clear();
    sandbox.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterAll(() => {
    sandbox.clear();
  });

  test('Static methods', async () => {
    // Creating methods
    expect(new ContractClient.Caller({})).toBeInstanceOf(
      ContractClientMethodCaller,
    );
    expect(new ContractClient.Sender({})).toBeInstanceOf(
      ContractClientMethodSender,
    );
  });

  test('Constructor', () => {
    const defaultQuerySpy = sandbox.spyOn(
      ContractClient,
      'defaultQuery',
      'get',
    );

    const client = new ContractClient({ adapter, query });

    expect(defaultQuerySpy).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled(); // eslint-disable-line no-console
    expect(client.adapter).toBe(adapter);
    expect(client._query).toEqual(query);
    expect(client._contract).toBeUndefined();
    expect(client).toBeInstanceOf(ContractClient);
  });

  test('Initialization', async () => {
    const client = new ContractClient({ adapter, query });
    sandbox.spyOn(client, 'initializeContractMethods');

    // It should throw an error if the contract is accessed before the client
    // is initialized
    expect(() => {
      client.contract; // eslint-disable-line no-unused-expressions
    }).toThrowError('Contract not loaded');

    await client.init();

    expect(client.contract).toBe(contract);
    expect(adapter.getContract).toHaveBeenCalledWith(query);
    expect(client.initializeContractMethods).toHaveBeenCalled();
  });

  test('Methods can be defined', () => {
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

  test('Caller/Sender methods can be defined', () => {
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

  test('Contract functions can be called directly', async () => {
    const client = new ContractClient({ adapter, contract, options });
    await client.init();
    const fnName = 'myFunctionName';
    const args = [1, 2, 3];
    const result = await client.call(fnName, args);

    expect(result).toEqual(constantData);
    expect(client.contract.callConstant).toHaveBeenCalledTimes(1);
    expect(client.contract.callConstant).toHaveBeenCalledWith(fnName, args);
  });

  test('Gas cost can be estimated', async () => {
    const client = new ContractClient({ adapter, contract, options });
    await client.init();
    const fnName = 'myFunctionName';
    const args = [1, 2, 3];
    const result = await client.estimate(fnName, args);

    expect(result).toEqual(gasEstimate);
    expect(client.contract.callEstimate).toHaveBeenCalledTimes(1);
    expect(client.contract.callEstimate).toHaveBeenCalledWith(fnName, args);
  });

  test('Transactions can be sent', async () => {
    const client = new ContractClient({ adapter, contract, options });
    await client.init();
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

  test('Transaction data can be created', async () => {
    const client = new ContractClient({ adapter, contract, options });
    await client.init();
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

  test('Contract event data is parsed correctly', async () => {
    const client = new ContractClient({ adapter, contract, options });
    await client.init();

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

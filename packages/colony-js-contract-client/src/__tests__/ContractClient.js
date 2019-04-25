/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';

import ContractClient from '../classes/ContractClient';
import ContractClientMethodCaller from '../classes/ContractMethodCaller';
import ContractClientMethodSender from '../classes/ContractMethodSender';
import ContractEvent from '../classes/ContractEvent';
import MockEmittingContract from '../mocks/MockEmittingContract';

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
  const contract = new class extends MockEmittingContract {
    address = '0x123';
    events = {};
    callConstant = sandbox.fn(async () => constantData);
    callEstimate = sandbox.fn(async () => gasEstimate);
    callTransaction = sandbox.fn(async () => transaction);
    createTransactionData = sandbox.fn(async () => txData);
    interface = {
      events: {
        myEvent: {
          topics: ['0xabc'],
        },
      },
    };
  }();
  const query = { contractName: 'MyContract' };
  const adapter = {
    getContract: sandbox.fn(() => contract),
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
    const name = 'myMethodOne';

    const Caller = jest.fn((...args) => new client.constructor.Caller(...args));

    // Define a method on the client
    client.addMethod(Caller, name, { input, name });

    // The method should exist on the client
    expect(client.myMethodOne).toBeInstanceOf(client.constructor.Caller);

    // The method should have been created with the client and functionName
    expect(Caller).toHaveBeenCalledWith({
      client,
      name,
      functionName: name,
      input,
    });

    // It should also be possible to override the functionName
    Caller.mockClear();
    client.addMethod(Caller, 'innocentlyClaimFunds', {
      input,
      functionName: 'stealAllTheTokens',
    });
    expect(Caller).toHaveBeenCalledWith({
      client,
      name: 'innocentlyClaimFunds',
      functionName: 'stealAllTheTokens',
      input,
    });

    // Attempting to redefine the same method name should not work
    expect(() => {
      client.addMethod(Caller, name, { input, name });
    }).toThrowError('A ContractMethod named "myMethodOne" already exists');

    // However, the method should not have been redefined
    expect(client.myMethodOne).toBeInstanceOf(client.constructor.Caller);
  });

  test('Caller/Sender methods can be defined', () => {
    const client = new ContractClient({ adapter, contract, options });
    sandbox.spyOn(client, 'addMethod');

    client.addCaller('myMethodOne', methodOneDef);
    expect(client.addMethod).toHaveBeenCalledTimes(1);
    expect(client.addMethod).toHaveBeenCalledWith(
      ContractClient.Caller,
      'myMethodOne',
      methodOneDef,
    );

    client.addSender('myMethodTwo', methodTwoDef);

    expect(client.addMethod).toHaveBeenCalledTimes(2);
    expect(client.addMethod).toHaveBeenCalledWith(
      ContractClient.Sender,
      'myMethodTwo',
      methodTwoDef,
    );
  });

  test('Events can be defined', async () => {
    const client = new ContractClient({ adapter, contract, options });
    await client.init();

    // Define an event on the client
    client.addEvent('myEvent', [['myEventValue', 'number']]);

    // The method should exist on the client
    expect(client.events.myEvent).toBeInstanceOf(ContractEvent);
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

  test('Contract event callbacks can be (un)subscribed', async () => {
    const client = new ContractClient({ adapter, contract, options });
    await client.init();

    const eventArgs = [0, 1, 2].map(myEventValue => ({ myEventValue }));

    const callbackA = jest.fn();
    const callbackB = jest.fn();

    // Define an event on the client
    client.addEvent('myEvent', [['myEventValue', 'number']]);

    // Subscribe to the event with our callback
    client.events.myEvent.addListener(callbackA);
    client.events.myEvent.addListener(callbackB);

    // Emit an event
    contract._dispatchEvent('myEvent', eventArgs[0]);
    expect(callbackA).toHaveBeenCalledWith(eventArgs[0]);
    expect(callbackB).toHaveBeenCalledWith(eventArgs[0]);

    // Unsubscribe callback A from the event
    client.events.myEvent.removeListener(callbackA);

    // Emit the event again, with different parameters
    contract._dispatchEvent('myEvent', eventArgs[1]);
    expect(callbackB).toHaveBeenCalledWith(eventArgs[1]);

    // Unsubscribe callback B from the event
    client.events.myEvent.removeListener(callbackB);

    // Emit the event again, with different parameters
    contract._dispatchEvent('myEvent', eventArgs[2]);

    expect(callbackA).toHaveBeenCalledTimes(1);
    expect(callbackB).toHaveBeenCalledTimes(2);
  });
});

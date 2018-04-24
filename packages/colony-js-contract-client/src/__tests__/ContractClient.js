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

  class MyContractClient extends ContractClient {
    initializeContractMethods() {
      this._makeCaller('myCallerOne');
      this._makeCaller('myCallerTwo');
    }
  }

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

  test('initializeContractMethods', () => {
    const myClient = new MyContractClient({ adapter, contract, options });

    // Two methods were defined
    expect(myClient._methods.size).toBe(2);

    // The methods are accessible
    expect(myClient.myCallerOne).toBeInstanceOf(MyContractClient.Caller);
    expect(myClient.myCallerTwo).toBeInstanceOf(MyContractClient.Caller);

    // Non-existent properties are undefined
    expect(myClient.doesNotExist).toBeUndefined();
  });

  test('_makeMethod', () => {
    const client = new ContractClient({ adapter, contract, options });

    // No methods should be defined yet
    expect(client._methods.size).toBe(0);

    // Define a method on the client
    client._makeMethod(ContractClient.Caller, 'myMethodOne', {
      input: [['id', 'number']],
    });
    expect(client._methods.size).toBe(1);

    // Accessing the method directly should return a function that will
    // generate the method
    expect(typeof client._methods.get('myMethodOne')).toBe('function');

    // Attempting to redefine the same method name should not work
    expect(() => {
      client._makeMethod(ContractClient.Caller, 'myMethodOne', {
        input: [['address', 'address']],
      });
    }).toThrowError('A ContractMethod named "myMethodOne" already exists');

    // Initializing the method generator directly should yield a method
    expect(client._methods.get('myMethodOne')()).toBeInstanceOf(
      ContractClient.Caller,
    );

    // TODO test that it adds client/functionNAme

    // However, the method should not have been redefined
    expect(typeof client._methods.get('myMethodOne')).toBe('function');
  });

  test('_makeCaller/_makeSender', () => {
    const client = new ContractClient({ adapter, contract, options });
    sandbox.spyOn(client, '_makeMethod');

    client._makeCaller('myMethodOne', methodOneDef);
    expect(client._makeMethod).toHaveBeenCalledTimes(1);
    expect(client._makeMethod).toHaveBeenCalledWith(
      ContractClient.Caller,
      'myMethodOne',
      methodOneDef,
    );

    client._makeSender('myMethodTwo', methodTwoDef);

    expect(client._makeMethod).toHaveBeenCalledTimes(2);
    expect(client._makeMethod).toHaveBeenCalledWith(
      ContractClient.Sender,
      'myMethodTwo',
      methodTwoDef,
    );

    expect(client._methods.size).toBe(2);
  });

  test('_memoizeMethod', () => {
    const myClient = new MyContractClient({ adapter, contract, options });
    sandbox.spyOn(myClient, '_memoizeMethod');

    expect(myClient._memoizeMethod).toHaveBeenCalledTimes(0);

    // Making a call to a property that doesn't exist should attempt to find a
    // memoized method of that name
    expect(myClient.doesNotExist).toBeUndefined();
    expect(myClient._memoizeMethod).toHaveBeenCalledTimes(1);
    expect(myClient._memoizeMethod).toHaveBeenCalledWith('doesNotExist');

    // Add a method
    myClient._makeCaller('myMethodOne', methodOneDef);

    // The stored method should be the generator function
    expect(typeof myClient._methods.get('myMethodOne')).toBe('function');

    // Getting the property should return a method and memoize it
    expect(myClient.myMethodOne).toBeInstanceOf(MyContractClient.Caller);
    expect(myClient._memoizeMethod).toHaveBeenCalledTimes(2);
    expect(myClient._memoizeMethod).toHaveBeenCalledWith('myMethodOne');

    // The stored method is now a method, rather than the generator
    expect(myClient._methods.get('myMethodOne')).toBeInstanceOf(
      MyContractClient.Caller,
    );

    // Add another method
    myClient._makeSender('myMethodTwo', methodTwoDef);

    // The stored method should be the generator function
    expect(typeof myClient._methods.get('myMethodTwo')).toBe('function');

    // Let's override it so we can spy on it
    const mockMethodGenerator = sandbox.fn().mockReturnValue('Just testing');
    myClient._methods.set('myMethodTwo', mockMethodGenerator);

    // Getting it should return the mocked value
    expect(myClient.myMethodTwo).toBe('Just testing');
    expect(mockMethodGenerator).toHaveBeenCalledTimes(1);

    // Getting it again should not re-run the generator (i.e. it is memoized)
    expect(myClient.myMethodTwo).toBe('Just testing');
    expect(myClient.myMethodTwo).toBe('Just testing');
    expect(mockMethodGenerator).toHaveBeenCalledTimes(1);
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

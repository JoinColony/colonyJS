/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';

import ContractClient from '../classes/ContractClient';
import ContractMethod from '../classes/ContractMethod';

describe('ContractMethod', () => {
  const sandbox = createSandbox();
  const client = new ContractClient({});
  client.createTransactionData = sandbox.fn(() => 'the tx data');

  beforeEach(() => sandbox.clear());

  test('validate', () => {
    const input = [['id', 'number']];
    const inputValues = { id: 1 };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
    });
    method._validate = sandbox.fn();

    method.validate(inputValues);

    expect(method._validate).toHaveBeenCalledWith(inputValues, input);
  });

  test('getMethodArgs', () => {
    const input = [['id', 'number']];
    const inputValues = { id: 1 };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
    });
    method._getMethodArgs = sandbox.fn();

    method.getMethodArgs(inputValues);

    expect(method._getMethodArgs).toHaveBeenCalledWith(inputValues, input);
  });

  test('getOutputValues', () => {
    const input = [['id', 'number']];
    const output = [['name', 'string']];
    const callResult = 'Vitalik';

    const method = new ContractMethod({
      client,
      input,
      output,
      functionName: 'myFunction',
    });
    method._getMethodReturnValue = sandbox.fn();

    method.getOutputValues(callResult);

    expect(method._getMethodReturnValue).toHaveBeenCalledWith(
      callResult,
      output,
    );
  });

  test('createTransactionData', () => {
    const input = [['id', 'number']];
    const callArgs = [1];

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
    });

    expect(method.createTransactionData(callArgs)).toBe('the tx data');

    expect(method.client.createTransactionData).toHaveBeenCalledWith(
      method.functionName,
      callArgs,
    );
  });
});

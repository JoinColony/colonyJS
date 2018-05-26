/* eslint-env jest */
/* eslint-disable no-underscore-dangle,no-console */

import createSandbox from 'jest-sandbox';

import ContractClient from '../classes/ContractClient';
import ContractMethod from '../classes/ContractMethod';

import {
  validateValue,
  convertInputValue,
  convertOutputValue,
} from '../modules/paramTypes';

jest.mock('../modules/paramTypes', () => ({
  validateValue: jest.fn().mockReturnValue(true),
  convertOutputValue: jest
    .fn()
    .mockImplementation(value => `converted output: ${value}`),
  convertInputValue: jest
    .fn()
    .mockImplementation(value => `converted input: ${value}`),
}));

describe('ContractMethod', () => {
  const sandbox = createSandbox();
  const client = new ContractClient({});
  sandbox
    .spyOn(client, 'createTransactionData')
    .mockImplementation(() => 'the tx data');

  beforeEach(() => {
    sandbox.clear();
    convertInputValue.mockClear();
    convertOutputValue.mockClear();
    validateValue.mockClear();
  });

  test('Method with no input params validates correctly', () => {
    const method = new ContractMethod({ client, functionName: 'myFunction' });
    expect(method.validate()).toBe(true);
  });

  test('Method with input params validates correctly', () => {
    const input = [['id', 'number']];
    const inputValues = { id: 1 };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
    });

    expect(method.validate(inputValues)).toBe(true);
    expect(validateValue).toHaveBeenCalledWith(1, 'number');

    // Missing parameters/wrong type
    [undefined, null, [], 'a', 1].forEach(wrongType => {
      expect(() => {
        method.validate(wrongType);
      }).toThrowError('Expected parameters as an object');
    });

    // Extra parameter
    expect(() => {
      method.validate({ id: 1, somethingElse: 2 });
    }).toThrowError('Mismatching parameters/method parameters sizes');

    // Wrong type
    validateValue.mockReturnValueOnce(false);
    expect(() => {
      method.validate({ id: 'one' });
    }).toThrowError('Parameter "id" expected a value of type "number"');
  });

  test('Method arguments are processed from input parameters', () => {
    const input = [['id', 'number']];
    const inputValues = { id: 1 };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
    });
    sandbox.spyOn(method, '_parseInputValues').mockImplementation(() => [1]);

    expect(method._getMethodArgs(inputValues)).toEqual([1]);

    expect(method._parseInputValues).toHaveBeenCalledWith(inputValues);
  });

  test('Method without input defined gets empty arguments', () => {
    const method = new ContractMethod({
      client,
      functionName: 'myFunction',
    });

    sandbox.spyOn(console, 'warn').mockImplementation(() => {});

    expect(method._getMethodArgs()).toEqual([]);

    // There should be a warning if input values are supplied
    expect(method._getMethodArgs({ id: 1 })).toEqual([]);
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(
      // eslint-disable-next-line max-len
      'Warning: _getMethodArgs called with parameters for a method that does not accept parameters',
    );
  });

  test('Getting validated arguments', () => {
    const input = [['id', 'number']];
    const inputValues = { id: 1 };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
    });
    sandbox.spyOn(method, 'validate');
    sandbox.spyOn(method, '_getMethodArgs');

    expect(method.getValidatedArgs(inputValues)).toEqual([
      'converted input: 1',
    ]);
    expect(method.validate).toHaveBeenCalledWith(inputValues);
    expect(method._getMethodArgs).toHaveBeenCalledWith(inputValues);
  });

  // TODO test getValidatedArgs
  // TODO test _parseInputValues

  test('Contract return values are mapped to expected output', () => {
    const input = [['id', 'number']];
    const output = [['name', 'string'], ['address', 'address']];
    const callResult = ['Vitalik', '0xVITALIK'];

    const method = new ContractMethod({
      client,
      input,
      output,
      functionName: 'myFunction',
    });

    const returnValues = method._getOutputValues(callResult);

    expect(convertOutputValue).toHaveBeenCalledWith(callResult[0], 'string');
    expect(convertOutputValue).toHaveBeenCalledWith(callResult[1], 'address');

    expect(returnValues).toEqual({
      name: 'converted output: Vitalik',
      address: 'converted output: 0xVITALIK',
    });
  });

  test('Transaction data can be created from input parameters', () => {
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

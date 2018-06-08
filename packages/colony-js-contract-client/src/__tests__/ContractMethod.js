/* eslint-env jest */
/* eslint-disable no-underscore-dangle,no-console */

import createSandbox from 'jest-sandbox';

import ContractClient from '../classes/ContractClient';
import ContractMethod from '../classes/ContractMethod';

import { convertInputValue, convertOutputValue } from '../modules/paramTypes';

jest.mock('../modules/paramTypes', () => ({
  convertOutputValue: jest
    .fn()
    .mockImplementation(value => `converted output: ${value}`),
  convertInputValue: jest
    .fn()
    .mockImplementation(value => `converted input: ${value}`),
  validateValueType: jest.fn().mockImplementation(() => true),
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

  test('Input values fall back to default values if not provided', () => {
    convertInputValue.mockImplementation(value => value);

    const specificationHash = 'QmcNbGg6EVfFn2Z1QxWauR9XY9KhnEcyb5DUXCXHi8pwMJ';
    const domainId = 1;
    const input = [
      ['specificationHash', 'ipfsHash'],
      ['domainId', 'number', domainId],
    ];
    const inputValues = { specificationHash };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
    });

    expect(method._parseInputValues(inputValues)).toEqual([
      specificationHash,
      domainId,
    ]);
    expect(convertInputValue).toHaveBeenCalledWith(
      specificationHash,
      'ipfsHash',
    );
    expect(convertInputValue).toHaveBeenCalledWith(domainId, 'number');
  });
});

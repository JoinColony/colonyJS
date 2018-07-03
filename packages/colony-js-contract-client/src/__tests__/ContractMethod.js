/* eslint-env jest */
/* eslint-disable no-underscore-dangle,no-console */

import createSandbox from 'jest-sandbox';

import ContractClient from '../classes/ContractClient';
import ContractMethod from '../classes/ContractMethod';
import * as types from '../modules/paramTypes';

describe('ContractMethod', () => {
  const sandbox = createSandbox();
  const client = new ContractClient({});

  sandbox
    .spyOn(client, 'createTransactionData')
    .mockImplementation(() => 'the tx data');

  beforeEach(() => {
    sandbox.clear();

    sandbox
      .spyOn(types, 'convertInputValue')
      .mockImplementation(value => `converted input: ${value}`);
    sandbox
      .spyOn(types, 'convertOutputValue')
      .mockImplementation(value => `converted output: ${value}`);
    sandbox.spyOn(types, 'validateValueType').mockImplementation(() => true);
  });

  test('Method arguments are processed from input parameters', () => {
    const input = [['id', 'number']];
    const inputValues = { id: 1 };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
    });

    sandbox.spyOn(method, 'convertInputValues').mockImplementation(() => [1]);

    expect(method._getMethodArgs(inputValues, method.input)).toEqual([1]);
    expect(method.convertInputValues).toHaveBeenCalledWith(
      inputValues,
      method.input,
    );
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

    sandbox.spyOn(method, '_validate');
    sandbox.spyOn(method, '_getMethodArgs');

    expect(method.getValidatedArgs(inputValues)).toEqual([
      'converted input: 1',
    ]);
    expect(method._validate).toHaveBeenCalledWith(inputValues, method.input);
    expect(method._getMethodArgs).toHaveBeenCalledWith(
      inputValues,
      method.input,
    );
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

    const returnValues = method.convertOutputValues(callResult);

    expect(types.convertOutputValue).toHaveBeenCalledWith(
      callResult[0],
      'string',
    );
    expect(types.convertOutputValue).toHaveBeenCalledWith(
      callResult[1],
      'address',
    );

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
    types.convertInputValue.mockImplementation(value => value);

    const specificationHash = 'QmcNbGg6EVfFn2Z1QxWauR9XY9KhnEcyb5DUXCXHi8pwMJ';
    const domainId = 1;
    const input = [['specificationHash', 'ipfsHash'], ['domainId', 'number']];
    const defaultValues = { domainId };
    const inputValues = { specificationHash };
    const withDefaults = { specificationHash, domainId };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
      defaultValues,
    });

    sandbox.spyOn(method.constructor, '_getDefaultValues');
    sandbox.spyOn(method, '_validate');
    sandbox.spyOn(method, '_getMethodArgs');

    const args = method.getValidatedArgs(inputValues);

    expect(args).toEqual([specificationHash, domainId]);
    expect(method.constructor._getDefaultValues).toHaveBeenCalledWith(
      inputValues,
      input,
      defaultValues,
    );
    expect(method._validate).toHaveBeenCalledWith(
      expect.objectContaining(withDefaults),
      input,
    );
    expect(method._getMethodArgs).toHaveBeenCalledWith(
      expect.objectContaining(withDefaults),
      input,
    );
  });
});

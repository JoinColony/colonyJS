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
  validateValue: jest.fn().mockImplementation(() => true),
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
    const input = [
      ['taskId', 'number'],
      ['potId', 'number'],
      ['domainId', 'number', 1],
    ];
    const inputValues = { taskId: 6, potId: 420 };

    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
      name: 'myMethodName',
    });
    sandbox.spyOn(method, '_validateValue');

    expect(method.validate(inputValues)).toBe(true);
    expect(method._validateValue).toHaveBeenCalledWith(
      6,
      input[0],
    );
    expect(method.constructor._validateValue).toHaveBeenCalledWith(
      420,
      input[1],
    );

    // Missing parameters/wrong type
    [undefined, null, [], 'a', 6].forEach(wrongType => {
      expect(() => {
        method.validate(wrongType);
      }).toThrowError('Expected parameters as an object');
    });

    // No parameters
    expect(() => {
      method.validate({});
    }).toThrowError('Missing parameters');

    // Missing parameter
    expect(() => {
      method.validate({ taskId: 6 });
    }).toThrowError('Missing parameters: "potId"');

    // Wine parameters
    expect(() => {
      method.validate({
        caskId: 6,
        côteId: 420,
        domaineId: 'Domaine de la Romanee-Conti',
      });
    }).toThrowError('Unexpected parameters');

    // Extra parameter
    expect(() => {
      method.validate({
        taskId: 6,
        domainId: 1,
        potId: 420,
        somethingElse: 2,
      });
    }).toThrowError('Unexpected parameters: "somethingElse"');

    // Extra parameter, without the parameter that has a default value
    expect(() => {
      method.validate({ taskId: 6, potId: 420, somethingElse: 1 });
    }).toThrowError('Unexpected parameters: "somethingElse"');

    // Wrong type
    validateValue.mockImplementationOnce(() => false);
    expect(() => {
      method.validate({ taskId: 'six', potId: 420 });
    }).toThrowError('Parameter "taskId" expected a value of type "number"');
  });

  test('Valid values are reported as valid', () => {
    const input = [['id', 'number']];
    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
      name: 'myMethodName',
    });
    validateValue.mockImplementationOnce(() => true);
    expect(method._validateValue(1, 'number', 'id')).toBe(true);
    expect(validateValue).toHaveBeenCalledWith(1, 'number');
  });

  test('Invalid values are reported as invalid, with reasons', () => {
    const input = [['id', 'number']];
    const method = new ContractMethod({
      client,
      input,
      functionName: 'myFunction',
      name: 'myMethodName',
    });

    // Invalid value
    validateValue.mockImplementationOnce(() => false);
    expect(() => {
      expect(method._validateValue('abc', 'number', 'id'));
    }).toThrowError('Parameter "id" expected a value of type "number"');
    expect(validateValue).toHaveBeenCalledWith('abc', 'number');

    // Invalid value with reasons (caught validation errors)
    validateValue.mockImplementationOnce(() => {
      throw new Error('The reason this validation failed');
    });
    expect(() => {
      expect(method._validateValue('abc', 'number', 'id'));
    }).toThrowError(
      'Parameter "id" expected a value of type ' +
        '"number" (The reason this validation failed)',
    );

    // Validation error messages contain the method name
    validateValue.mockImplementationOnce(() => false);
    expect(() => {
      expect(method._validateValue('abc', 'number', 'id'));
    }).toThrowError('Validation failed for myMethod');
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

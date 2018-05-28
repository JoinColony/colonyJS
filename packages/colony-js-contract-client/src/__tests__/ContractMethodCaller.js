/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import createSandbox from 'jest-sandbox';

import ContractClient from '../classes/ContractClient';
import ContractMethodCaller from '../classes/ContractMethodCaller';

describe('ContractMethodCaller', () => {
  const sandbox = createSandbox();
  const client = new ContractClient({});
  const input = [['id', 'number']];
  const inputValues = { id: 1 };
  const functionName = 'myFunction';

  beforeEach(() => sandbox.clear());

  test('Null values in results are identified correctly', () => {
    const noneNull = {
      role: 'WORKER',
      user: '0x123',
      taskId: 1,
    };
    const someNull = {
      role: 'WORKER',
      user: null,
      taskId: 1,
    };
    const allNull = {
      role: null,
      user: null,
      taskId: null,
    };

    expect(ContractMethodCaller.containsNullValues()).toBe(false);
    expect(ContractMethodCaller.containsNullValues(noneNull)).toBe(false);
    expect(ContractMethodCaller.containsNullValues(someNull)).toBe(true);
    expect(ContractMethodCaller.containsNullValues(allNull)).toBe(true);
  });

  test('Constant functions can be called', async () => {
    const method = new ContractMethodCaller({
      client,
      input,
      functionName,
    });

    const callArgs = [1];
    const result = 'hello';
    const returnValue = { message: result };

    sandbox
      .spyOn(method.constructor, 'containsNullValues')
      .mockImplementation(() => false);
    sandbox.spyOn(client, 'call').mockImplementation(() => result);
    sandbox
      .spyOn(method, 'getValidatedArgs')
      .mockImplementation(() => callArgs);
    sandbox
      .spyOn(method, '_getOutputValues')
      .mockImplementation(() => returnValue);

    expect(await method.call(inputValues)).toBe(returnValue);
    expect(method.getValidatedArgs).toHaveBeenCalledWith(inputValues);
    expect(method.client.call).toHaveBeenCalledWith(
      method.functionName,
      callArgs,
    );
    expect(method.constructor.containsNullValues).toHaveBeenCalledWith(
      returnValue,
    );
    expect(method._getOutputValues).toHaveBeenCalledWith(result, inputValues);
  });

  test('Empty results are checked', async () => {
    const method = new ContractMethodCaller({
      client,
      input,
      functionName,
    });

    const returnValue = { someNullValue: null };

    sandbox
      .spyOn(method.constructor, 'containsNullValues')
      .mockImplementation(() => true);
    sandbox.spyOn(method, 'validateEmpty').mockImplementation(async () => true);
    sandbox.spyOn(method, 'getValidatedArgs').mockImplementation(() => {});
    sandbox.spyOn(client, 'call').mockImplementation(() => {});
    sandbox
      .spyOn(method, '_getOutputValues')
      .mockImplementation(() => returnValue);

    expect(await method.call(inputValues)).toEqual(returnValue);
    expect(method.constructor.containsNullValues).toHaveBeenCalledWith(
      returnValue,
    );
    expect(method.validateEmpty).toHaveBeenCalledWith(inputValues, returnValue);
  });

  test('Empty results are validated with _validateEmpty', async () => {
    const methodWithoutValidateEmpty = new ContractMethodCaller({
      client,
      input,
      functionName,
    });

    const validateEmpty = sandbox.fn().mockImplementation(async () => true);
    const methodWithValidateEmpty = new ContractMethodCaller({
      client,
      input,
      functionName,
      validateEmpty,
    });
    expect(methodWithValidateEmpty._validateEmpty).toBe(validateEmpty);

    const returnValue = { someNullValue: null };

    expect(
      await methodWithoutValidateEmpty.validateEmpty(inputValues, returnValue),
    ).toBe(true);
    expect(validateEmpty).not.toHaveBeenCalled();

    expect(
      await methodWithValidateEmpty.validateEmpty(inputValues, returnValue),
    ).toBe(true);
    expect(validateEmpty).toHaveBeenCalledWith(inputValues, returnValue);

    // Without a reason
    validateEmpty.mockClear().mockImplementationOnce(async () => false);
    try {
      await methodWithValidateEmpty.validateEmpty(inputValues, returnValue);
      expect(false).toBe(true); // unreachable
    } catch (error) {
      expect(error.toString()).toBe('Error: Empty response');
      expect(validateEmpty).toHaveBeenCalledWith(inputValues, returnValue);
    }

    // With a reason
    validateEmpty.mockClear().mockImplementationOnce(async () => {
      throw new Error('Could not find task ID 4');
    });
    try {
      await methodWithValidateEmpty.validateEmpty(inputValues, returnValue);
      expect(false).toBe(true); // unreachable
    } catch (error) {
      expect(error.toString()).toBe(
        'Error: Empty response (Could not find task ID 4)',
      );
      expect(validateEmpty).toHaveBeenCalledWith(inputValues, returnValue);
    }
  });
});

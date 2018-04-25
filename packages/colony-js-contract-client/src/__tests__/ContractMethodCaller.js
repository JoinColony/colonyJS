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

  test('call', async () => {
    const method = new ContractMethodCaller({
      client,
      input,
      functionName,
    });
    sandbox.spyOn(method, '_call');

    const callArgs = [1];
    const result = 'hello';
    const returnValue = { message: result };

    method.client.call = sandbox.fn(() => result);
    method.getMethodArgs = sandbox.fn(() => callArgs);
    method.getOutputValues = sandbox.fn(() => returnValue);

    expect(await method.call(inputValues)).toBe(returnValue);
    expect(method.client.call).toHaveBeenCalledWith(
      method.functionName,
      callArgs,
    );
    expect(method.getMethodArgs).toHaveBeenCalledWith(inputValues);
    expect(method._call).toHaveBeenCalledWith(callArgs, { timeoutMs: 60000 });
    expect(method.getOutputValues).toHaveBeenCalledWith(result, inputValues);
  });
});

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

  test('Constant functions can be called', async () => {
    const method = new ContractMethodCaller({
      client,
      input,
      functionName,
    });

    const callArgs = [1];
    const result = 'hello';
    const returnValue = { message: result };

    method.client.call = sandbox.fn(() => result);
    method.validate = sandbox.fn(() => true);
    method.getMethodArgs = sandbox.fn(() => callArgs);
    method.getOutputValues = sandbox.fn(() => returnValue);

    expect(await method.call(inputValues)).toBe(returnValue);
    expect(method.validate).toHaveBeenCalledWith(inputValues);
    expect(method.getMethodArgs).toHaveBeenCalledWith(inputValues);
    expect(method.client.call).toHaveBeenCalledWith(
      method.functionName,
      callArgs,
    );
    expect(method.getOutputValues).toHaveBeenCalledWith(result, inputValues);
  });
});

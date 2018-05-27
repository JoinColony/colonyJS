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
    expect(method._getOutputValues).toHaveBeenCalledWith(result, inputValues);
  });
});

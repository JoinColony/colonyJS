/* eslint-env jest */

import assert from 'assert';
import createSandbox from 'jest-sandbox';
import ContractLoader from '../ContractLoader';
import { DEFAULT_REQUIRED_CONTRACT_PROPS } from '../defaults';

jest.mock('assert');

describe('ContractLoader', () => {
  const sandbox = createSandbox();

  beforeEach(() => {
    sandbox.clear();
    assert.mockReset();
  });

  test('Default transform', async () => {
    expect(ContractLoader.defaultTransform()('input')).toBe('input');
  });

  test('Validate contract definition', async () => {
    const contractDef = {
      address: 'contract address',
      abi: 'contract abi',
      bytecode: 'contract bytecode',
    };
    const requiredProps = {
      address: true,
      bytecode: true,
      abi: true,
    };

    expect(
      ContractLoader.validateContractDefinition(contractDef, requiredProps),
    ).toBe(true);
    expect(assert).toHaveBeenCalledTimes(4);

    // again but without any required props
    expect(ContractLoader.validateContractDefinition(contractDef, {})).toBe(
      true,
    );
  });

  test('Constructor should throw for invalid transform function', async () => {
    assert.mockImplementation(() => {
      throw new Error();
    });
    expect(() => {
      // eslint-disable-next-line no-new
      new ContractLoader({ transform: 'not a function' });
    }).toThrow();
    expect(assert).toHaveBeenCalledWith(false, expect.any(String));
  });

  test('Placeholder _load should throw', async () => {
    const loader = new ContractLoader();
    // eslint-disable-next-line no-underscore-dangle
    expect(loader._load()).rejects.toThrow();
  });

  test('Load should throw if required query params not provided', async () => {
    const loader = new ContractLoader();

    await expect(loader.load()).rejects.toThrow(TypeError);
  });

  test('Load should throw if _load returns null', async () => {
    const loader = new ContractLoader();

    const query = {
      contractName: 'contract name',
    };

    const loadSpy = sandbox
      .spyOn(loader, '_load')
      .mockImplementation(() => null);

    await expect(loader.load(query)).rejects.toThrow(Error);
    expect(loadSpy).toBeCalledWith(query, DEFAULT_REQUIRED_CONTRACT_PROPS);
  });

  test('Load with contract address', async () => {
    const loader = new ContractLoader();

    const query = {
      contractAddress: 'contract address',
    };

    const loadSpy = sandbox
      .spyOn(loader, '_load')
      .mockImplementation(() => ({}));

    const validateContractDefinitionSpy = sandbox
      .spyOn(ContractLoader, 'validateContractDefinition')
      .mockImplementation(() => null);

    await expect(loader.load(query)).resolves.toEqual({
      address: query.contractAddress,
    });
    expect(loadSpy).toBeCalledWith(query, DEFAULT_REQUIRED_CONTRACT_PROPS);
    expect(validateContractDefinitionSpy).toBeCalled();
  });

  test('Load with router address', async () => {
    const loader = new ContractLoader();

    const query = {
      contractName: 'contract name',
      routerAddress: 'router address',
    };

    const loadSpy = sandbox
      .spyOn(loader, '_load')
      .mockImplementation(() => ({}));

    const validateContractDefinitionSpy = sandbox
      .spyOn(ContractLoader, 'validateContractDefinition')
      .mockImplementation(() => null);

    await expect(loader.load(query)).resolves.toEqual({
      address: query.routerAddress,
    });
    expect(loadSpy).toBeCalledWith(
      { contractName: query.contractName },
      DEFAULT_REQUIRED_CONTRACT_PROPS,
    );
    expect(validateContractDefinitionSpy).toBeCalled();
  });

  test('Load with router name', async () => {
    const loader = new ContractLoader();

    const query = {
      contractName: 'contract name',
      routerName: 'router name',
    };

    const loadSpy = sandbox
      .spyOn(loader, '_load')
      .mockImplementationOnce(() => ({}))
      .mockImplementationOnce(() => ({ address: 'router address' }));

    const validateContractDefinitionSpy = sandbox
      .spyOn(ContractLoader, 'validateContractDefinition')
      .mockImplementation(() => null);

    await expect(loader.load(query)).resolves.toEqual({
      address: 'router address',
    });
    expect(loadSpy).toBeCalledWith(
      { contractName: query.contractName },
      DEFAULT_REQUIRED_CONTRACT_PROPS,
    );
    expect(validateContractDefinitionSpy).toBeCalled();
  });
});

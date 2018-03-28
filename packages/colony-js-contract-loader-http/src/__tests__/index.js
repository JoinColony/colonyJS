/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import createSandbox from 'jest-sandbox';
import ContractHttpLoader from '../index';
import MetaCoin from '../__mocks__/MetaCoin.json';

describe('ContractHttpLoader', () => {
  const sandbox = createSandbox();
  const metaCoinJson = JSON.stringify(MetaCoin);
  const setupLoader = ({
    endpoint = '//endpoint?name=%%NAME%%&version=%%VERSION%%',
    parser = 'truffle',
  } = {}) => new ContractHttpLoader({ endpoint, parser });

  beforeEach(() => {
    fetch.resetMocks();
    sandbox.clear();
  });

  test('Custom parsers', async () => {
    const parser = sandbox.fn(jsonObj => ({
      address: jsonObj.address,
      abi: jsonObj.abi,
      contractName: jsonObj.contractName,
    }));
    const loader = setupLoader({ parser });
    expect(loader._parser).toEqual(parser);

    const contractResponse = {
      contractName: 'MyContract',
      address: '0x123',
      abi: [{ myData: 123 }],
    };
    fetch.mockResponse(JSON.stringify(contractResponse));

    const contract = await loader.load('MyContract');
    expect(contract).toEqual(contractResponse);

    expect(() => setupLoader({ parser: 'does not exist' })).toThrowError(
      /was not found/,
    );
    expect(() => setupLoader({ parser: 123 })).toThrowError(/Invalid parser/);
  });

  test('Truffle parser', async () => {
    const loader = setupLoader();
    fetch.mockResponse(metaCoinJson);
    const contract = await loader.load('MetaCoin', { version: 1 });

    const {
      abi,
      bytecode,
      networks: { '1492719647054': { address } },
    } = MetaCoin;
    expect(contract).toEqual({ address, abi, bytecode });
  });

  test('Making requests', async () => {
    const loader = setupLoader({ parser: 'truffle' });
    fetch.mockResponse(metaCoinJson);
    sandbox.spyOn(loader, '_load');
    sandbox.spyOn(loader, 'resolveEndpointResource');

    await loader.load('MetaCoin', { version: 1 });

    expect(loader._load).toHaveBeenCalledTimes(1);
    expect(loader.resolveEndpointResource).toHaveBeenCalledTimes(1);
    expect(loader.resolveEndpointResource).toHaveBeenCalledWith('MetaCoin', {
      version: 1,
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`//endpoint?name=MetaCoin&version=1`);
  });

  test('Resolving the endpoint resource', () => {
    const loader = setupLoader({ parser: 'truffle' });
    const resource = loader.resolveEndpointResource('MetaCoin', { version: 1 });
    expect(resource).toBe(`//endpoint?name=MetaCoin&version=1`);
  });
});

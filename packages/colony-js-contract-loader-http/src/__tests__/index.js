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
    const parser = jest.fn(jsonObj => ({
      address: jsonObj.address,
      abi: jsonObj.abi,
    }));
    const loader = setupLoader({ parser });
    expect(loader._parser).toEqual(parser);

    const contractResponse = { address: '0x123', abi: { myData: 123 } };
    fetch.mockResponse(JSON.stringify(contractResponse));

    const contract = await loader.load({});
    expect(contract).toEqual(contractResponse);

    expect(() => setupLoader({ parser: 'does not exist' })).toThrowError(
      /was not found/,
    );
    expect(() => setupLoader({ parser: 123 })).toThrowError(/Invalid parser/);
  });

  test('Truffle parser', async () => {
    const loader = setupLoader();
    fetch.mockResponse(metaCoinJson);
    const contract = await loader.load({ name: 'MetaCoin', version: 1 });

    const { abi, networks: { '1492719647054': { address } } } = MetaCoin;
    expect(contract).toEqual({ address, abi });
  });

  test('Making requests', async () => {
    const loader = setupLoader({ parser: jest.fn() });
    sandbox.spyOn(loader, '_load');
    sandbox.spyOn(loader, 'resolveEndpointResource');
    fetch.mockResponse('{}');

    await loader.load({ name: 'MyContract', version: 1 });

    expect(loader._load).toHaveBeenCalledTimes(1);
    expect(loader.resolveEndpointResource).toHaveBeenCalledTimes(1);
    expect(loader.resolveEndpointResource).toBeCalledWith({
      name: 'MyContract',
      version: 1,
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toBeCalledWith(`//endpoint?name=MyContract&version=1`);
  });
});

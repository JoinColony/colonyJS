/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import createSandbox from 'jest-sandbox';
import ContractHttpLoader from '../loaders/ContractHttpLoader';
import TrufflepigLoader from '../loaders/TrufflepigLoader';
import EtherscanLoader from '../loaders/EtherscanLoader';
import MetaCoin from '../__mocks__/MetaCoin.json';

describe('ContractHttpLoader', () => {
  const sandbox = createSandbox();
  const metaCoinJson = JSON.stringify(MetaCoin);
  const setupLoader = ({
    // eslint-disable-next-line max-len
    endpoint = '//endpoint?name=%%NAME%%&version=%%VERSION%%&address=%%ADDRESS%%',
  } = {}) => new ContractHttpLoader({ endpoint });

  const abi = [{ myData: 123 }];
  const bytecode = '0x1234567890';
  const contractAddress = '0x123';
  const contractName = 'MetaCoin';
  const networkId = '123456';
  const routerAbi = [{ myRouterData: 987 }];
  const routerAddress = '0x987';
  const routerBytecode = '0x0987654321';
  const routerName = 'EtherRouter';
  const version = 1;

  beforeEach(() => {
    fetch.resetMocks();
    sandbox.clear();
  });

  test('Default implementation', async () => {
    const loader = setupLoader();
    sandbox.spyOn(loader, '_parse');

    const query = { contractName };
    const contractResponse = {
      contractName,
      address: contractAddress,
      bytecode,
      abi,
    };
    fetch.once(JSON.stringify(contractResponse));

    const contract = await loader.load(query);
    expect(contract).toEqual(contractResponse);
    expect(loader._parse).toHaveBeenCalledWith(contractResponse, query);
  });

  test('TrufflepigLoader', async () => {
    const loader = new TrufflepigLoader();
    fetch.once(metaCoinJson);
    const contract = await loader.load({
      contractName,
      version,
    });

    /* eslint-disable no-shadow */
    const {
      abi,
      bytecode,
      networks: {
        '1492719647054': { address },
      },
    } = MetaCoin;
    expect(contract).toEqual({ address, abi, bytecode });
    /* eslint-enable no-shadow */
  });

  test('EtherscanLoader', async () => {
    const loader = new EtherscanLoader();
    sandbox.spyOn(loader, '_parse');

    const query = { contractAddress };
    const successfulResponse = {
      status: '1',
      result: abi,
    };
    const malformedResponse = 'abc';
    const erroneousResponse = {
      status: '0',
      result: 'Something went wrong',
    };
    fetch
      .once(JSON.stringify(successfulResponse))
      .once(JSON.stringify(malformedResponse))
      .once(JSON.stringify(erroneousResponse));

    // Successful response
    const contract = await loader.load(query);
    expect(contract).toEqual({ address: contractAddress, abi });
    expect(() => contract.bytecode).toThrowError(
      'Etherscan does not currently provide contract bytecode',
    );
    expect(loader._parse).toHaveBeenCalledWith(successfulResponse, query);

    // Malformed response
    try {
      await loader.load(query);
    } catch (error) {
      expect(error.toString()).toContain('Malformed response from Etherscan');
      expect(loader._parse).toHaveBeenCalledWith(malformedResponse, query);
    }

    // Bad response
    try {
      await loader.load(query);
    } catch (error) {
      expect(error.toString()).toContain(
        `Erroneous response from Etherscan (status: ${
          erroneousResponse.status
        })`,
      );
      expect(loader._parse).toHaveBeenCalledWith(erroneousResponse, query);
    }
  });

  test('Making requests', async () => {
    const loader = setupLoader();
    fetch.once(metaCoinJson);
    sandbox.spyOn(loader, '_load');
    sandbox.spyOn(loader, 'resolveEndpointResource');

    const query = { contractName, version };
    await loader.load(query);

    expect(loader._load).toHaveBeenCalledTimes(1);
    expect(loader.resolveEndpointResource).toHaveBeenCalledTimes(1);
    expect(loader.resolveEndpointResource).toHaveBeenCalledWith(query);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `//endpoint?name=MetaCoin&version=1&address=`,
    );
  });

  test('Loading with a router contract (by name)', async () => {
    const loader = setupLoader();

    loader._load = sandbox
      .fn()
      // The first response, for looking up the contract ABI by name
      .mockReturnValueOnce({
        abi,
        address: contractAddress,
        bytecode,
      })
      // The second response, for looking up the router address by routerName
      .mockReturnValueOnce({
        abi: routerAbi,
        address: routerAddress,
        bytecode: routerBytecode,
      });

    const contractDef = await loader.load({
      contractName,
      routerName,
      version,
      networkId,
    });

    expect(loader._load).toHaveBeenCalledTimes(2);
    expect(loader._load).toHaveBeenCalledWith({
      contractName,
      networkId,
      version,
    });
    expect(loader._load).toHaveBeenCalledWith({
      contractName: routerName,
      networkId,
      version,
    });

    // The contract definition should have the router contract's address, but
    // with the main contract's ABI/bytecode.
    expect(contractDef).toMatchObject({
      abi,
      address: routerAddress,
      bytecode,
    });
  });

  test('Loading with a router contract (by address)', async () => {
    const loader = setupLoader();

    loader._load = sandbox.fn().mockReturnValueOnce({
      abi,
      address: contractAddress,
      bytecode,
    });

    const contractDef = await loader.load({
      contractName,
      routerAddress,
      version,
      networkId,
    });

    expect(loader._load).toHaveBeenCalledTimes(1);
    expect(loader._load).toHaveBeenCalledWith({
      contractName,
      networkId,
      version,
    });

    // The contract definition should have the router contract's address, but
    // with the main contract's ABI/bytecode.
    expect(contractDef).toMatchObject({
      abi,
      address: routerAddress,
      bytecode,
    });
  });

  test('Resolving the endpoint resource', () => {
    const loader = setupLoader();
    const resource = loader.resolveEndpointResource({
      contractAddress,
      contractName,
      version,
    });
    expect(resource).toBe(
      `//endpoint?name=${contractName}&version=${version}&address=${contractAddress}`, // eslint-disable-line max-len
    );
  });

  test('Error handling for `load`', async () => {
    const loader = setupLoader();

    fetch.mockRejectOnce('some fetch error');
    try {
      await loader.load({ contractName, version });
    } catch (error) {
      expect(error.toString()).toContain(
        'Unable to fetch resource for contract MetaCoin: some fetch error',
      );
    }

    fetch.once('not a json response');
    try {
      await loader.load({ contractName, version });
    } catch (error) {
      expect(error.toString()).toContain(
        'Unable to get JSON for contract MetaCoin',
      );
    }

    // Missing `bytecode`
    fetch.once(JSON.stringify({ address: contractAddress, abi }));
    try {
      await loader.load({ contractName, version });
    } catch (error) {
      expect(error.toString()).toContain(
        // eslint-disable-next-line max-len
        'Unable to parse contract definition for contract MetaCoin: Invalid contract definition: bytecode is missing or invalid',
      );
    }

    // Bad parameters
    try {
      await loader.load({});
    } catch (error) {
      expect(error.toString()).toContain(
        'The field `contractName` or `contractAddress` must be supplied',
      );
    }
  });
});

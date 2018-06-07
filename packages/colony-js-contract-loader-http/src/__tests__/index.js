/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */

import createSandbox from 'jest-sandbox';
import ContractHttpLoader from '../loaders/HttpLoader';
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
  const requiredProps = {
    address: true,
    abi: true,
    bytecode: false,
    myCustomRequiredProp: true,
  };
  const requiredPropsWithByteCode = Object.assign({}, requiredProps, {
    bytecode: true,
  });

  beforeEach(() => {
    fetch.resetMocks();
    sandbox.clear();
  });

  test('Default implementation', async () => {
    const loader = setupLoader();
    sandbox.spyOn(loader, '_transform');

    const query = { contractName };
    const contractResponse = {
      contractName,
      address: contractAddress,
      bytecode,
      abi,
    };
    fetch.once(JSON.stringify(contractResponse));

    const contract = await loader.load(query, requiredProps);
    expect(contract).toEqual(contractResponse);
    expect(loader._transform).toHaveBeenCalledWith(
      contractResponse,
      query,
      requiredProps,
    );
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

  test('Getting accounts with TrufflepigLoader', async () => {
    const loader = new TrufflepigLoader();

    const accounts = {
      'address 0': 'private key 0',
      'address 1': 'private key 1',
    };
    fetch.mockResponse(JSON.stringify(accounts));

    expect(await loader.getAccount(0)).toEqual({
      address: 'address 0',
      privateKey: accounts['address 0'],
    });

    expect(await loader.getAccount(1)).toEqual({
      address: 'address 1',
      privateKey: accounts['address 1'],
    });

    try {
      await loader.getAccount(2);
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch('Account for index 2 not found');
    }
  });

  test('EtherscanLoader', async () => {
    const loader = new EtherscanLoader();
    sandbox.spyOn(loader, '_transform');

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
    const contract = await loader.load(query, requiredProps);
    expect(contract).toEqual({ address: contractAddress, abi });
    expect(() => contract.bytecode).toThrowError(
      'Etherscan does not currently provide contract bytecode',
    );
    expect(loader._transform).toHaveBeenCalledWith(
      successfulResponse,
      query,
      requiredProps,
    );

    // Malformed response
    try {
      await loader.load(query, requiredProps);
    } catch (error) {
      expect(error.toString()).toContain('Malformed response from Etherscan');
      expect(loader._transform).toHaveBeenCalledWith(
        malformedResponse,
        query,
        requiredProps,
      );
    }

    // Bad response
    try {
      await loader.load(query, requiredProps);
    } catch (error) {
      expect(error.toString()).toContain(
        `Erroneous response from Etherscan (status: ${
          erroneousResponse.status
        })`,
      );
      expect(loader._transform).toHaveBeenCalledWith(
        erroneousResponse,
        query,
        requiredProps,
      );
    }
  });

  test('Making requests', async () => {
    const loader = setupLoader();
    fetch.once(metaCoinJson);
    sandbox.spyOn(loader, '_load');
    sandbox.spyOn(loader, 'resolveEndpointResource');

    const query = { contractName, version };
    await loader.load(query, { abi: true, address: false, bytecode: false });

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

    const contractDef = await loader.load(
      {
        contractName,
        routerName,
        version,
        networkId,
      },
      requiredProps,
    );

    expect(loader._load).toHaveBeenCalledTimes(2);
    expect(loader._load).toHaveBeenCalledWith(
      {
        contractName,
        networkId,
        version,
      },
      requiredProps,
    );
    expect(loader._load).toHaveBeenCalledWith(
      {
        contractName: routerName,
        networkId,
        version,
      },
      requiredProps,
    );

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

    const contractDef = await loader.load(
      {
        contractName,
        routerAddress,
        version,
        networkId,
      },
      requiredPropsWithByteCode,
    );

    expect(loader._load).toHaveBeenCalledTimes(1);
    expect(loader._load).toHaveBeenCalledWith(
      {
        contractName,
        networkId,
        version,
      },
      requiredPropsWithByteCode,
    );

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
      await loader.load({ contractName, version }, requiredProps);
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
      await loader.load({ contractName, version }, requiredPropsWithByteCode);
    } catch (error) {
      expect(error.toString()).toContain(
        'Invalid contract definition: bytecode is missing or invalid',
      );
    }

    // Bad parameters
    try {
      await loader.load({}, requiredProps);
    } catch (error) {
      expect(error.toString()).toContain(
        'The field `contractName` or `contractAddress` must be supplied',
      );
    }
  });
});

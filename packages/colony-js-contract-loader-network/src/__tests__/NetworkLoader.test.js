/* eslint-env jest */
/* eslint-disable max-len */

import NetworkLoader from '../NetworkLoader';
import EtherRouter from '../../contracts/versioned/v1/EtherRouter.json';

describe('colony-contract-loader-network - NetworkLoader', () => {
  test('It should load the oldest versioned contract that is defined on goerli', async () => {
    const loader = new NetworkLoader({ network: 'goerli' });
    const contractAddress = EtherRouter.networks.goerli.address;
    const contract = await loader.load({
      contractName: 'IColony',
      contractAddress,
      version: 1,
    });
    expect(contract).toHaveProperty('abi', expect.any(Array));
    expect(contract).toHaveProperty('address', contractAddress);
  });

  test('It should load the oldest versioned contract that is defined on mainnet', async () => {
    const loader = new NetworkLoader({ network: 'mainnet' });
    const contractAddress = EtherRouter.networks.mainnet.address;
    const contract = await loader.load({
      contractName: 'IColony',
      contractAddress,
      version: 1,
    });
    expect(contract).toHaveProperty('abi', expect.any(Array));
    expect(contract).toHaveProperty('address', contractAddress);
  });

  test('It should load the latest versioned contract that is defined on goerli', async () => {
    const loader = new NetworkLoader({ network: 'goerli' });
    const contractAddress = EtherRouter.networks.goerli.address;
    const contract = await loader.load({
      contractName: 'IColony',
      contractAddress,
      version: 2,
    });
    expect(contract).toHaveProperty('abi', expect.any(Array));
    expect(contract).toHaveProperty('address', contractAddress);
  });

  test('It should load the latest versioned contract that is defined on mainnet', async () => {
    const loader = new NetworkLoader({ network: 'mainnet' });
    const contractAddress = EtherRouter.networks.mainnet.address;
    const contract = await loader.load({
      contractName: 'IColony',
      contractAddress,
      version: 2,
    });
    expect(contract).toHaveProperty('abi', expect.any(Array));
    expect(contract).toHaveProperty('address', contractAddress);
  });

  test('It should load a versioned router contract that is defined on goerli, without an address or version', async () => {
    const loader = new NetworkLoader({ network: 'goerli' });
    const contractAddress = EtherRouter.networks.goerli.address;
    const contract = await loader.load({
      contractName: 'IColonyNetwork',
      routerName: 'EtherRouter',
    });
    expect(contract).toHaveProperty('abi', expect.any(Array));
    expect(contract).toHaveProperty('address', contractAddress);
  });

  test('It should load a versioned router contract that is defined on mainnet, without an address or version', async () => {
    const loader = new NetworkLoader({ network: 'mainnet' });
    const contractAddress = EtherRouter.networks.mainnet.address;
    const contract = await loader.load({
      contractName: 'IColonyNetwork',
      routerName: 'EtherRouter',
    });
    expect(contract).toHaveProperty('abi', expect.any(Array));
    expect(contract).toHaveProperty('address', contractAddress);
  });

  test('It should fail to load a contract that does not exist on goerli', async () => {
    const loader = new NetworkLoader({ network: 'goerli' });
    const contractAddress = EtherRouter.networks.goerli.address;
    try {
      await loader.load({
        contractName: 'CryptoKitty',
        contractAddress,
        version: 2,
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'Contract CryptoKitty with version 2 not found on goerli',
      );
    }
  });

  test('It should fail to load a contract that does not exist on mainnet', async () => {
    const loader = new NetworkLoader({ network: 'mainnet' });
    const contractAddress = EtherRouter.networks.mainnet.address;
    try {
      await loader.load({
        contractName: 'CryptoKitty',
        contractAddress,
        version: 2,
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'Contract CryptoKitty with version 2 not found on main',
      );
    }
  });

  test('It should fail to load a contract for a version that does not exist on goerli', async () => {
    const loader = new NetworkLoader({ network: 'goerli' });
    const contractAddress = EtherRouter.networks.goerli.address;
    try {
      await loader.load({
        contractName: 'IColony',
        contractAddress,
        version: 420,
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'Contract IColony with version 420 not found on goerli',
      );
    }
  });

  test('It should fail to load a contract for a version that does not exist on mainnet', async () => {
    const loader = new NetworkLoader({ network: 'mainnet' });
    const contractAddress = EtherRouter.networks.mainnet.address;
    try {
      await loader.load({
        contractName: 'IColony',
        contractAddress,
        version: 420,
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'Contract IColony with version 420 not found on main',
      );
    }
  });

  test('It should not load a versioned router contract that does not exist on goerli', async () => {
    const loader = new NetworkLoader({ network: 'goerli' });
    try {
      await loader.load({
        contractName: 'IColonyNetwork',
        routerName: 'EtherRouter',
        version: 420,
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'Contract IColonyNetwork with version 420 not found on goerli',
      );
    }
  });

  test('It should not load a versioned router contract that does not exist on mainnet', async () => {
    const loader = new NetworkLoader({ network: 'mainnet' });
    try {
      await loader.load({
        contractName: 'IColonyNetwork',
        routerName: 'EtherRouter',
        version: 420,
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'Contract IColonyNetwork with version 420 not found on main',
      );
    }
  });

  test('It should fail to load a contract without a contractName on goerli', async () => {
    const loader = new NetworkLoader({ network: 'goerli' });
    const contractAddress = EtherRouter.networks.goerli.address;
    try {
      await loader.load({ contractAddress, version: 1 });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'A `contractName` option must be provided',
      );
    }
  });

  test('It should fail to load a contract without a contractName on mainnet', async () => {
    const loader = new NetworkLoader({ network: 'mainnet' });
    const contractAddress = EtherRouter.networks.mainnet.address;
    try {
      await loader.load({ contractAddress, version: 1 });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'A `contractName` option must be provided',
      );
    }
  });

  test('It should fail to load a contract without a version on goerli', async () => {
    const loader = new NetworkLoader({ network: 'goerli' });
    const contractAddress = EtherRouter.networks.goerli.address;
    try {
      await loader.load({
        contractName: 'IColony',
        contractAddress,
        version: null,
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'A valid `version` option must be provided',
      );
    }
  });

  test('It should fail to load a contract without a version on mainnet', async () => {
    const loader = new NetworkLoader({ network: 'mainnet' });
    const contractAddress = EtherRouter.networks.mainnet.address;
    try {
      await loader.load({
        contractName: 'IColony',
        contractAddress,
        version: null,
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'A valid `version` option must be provided',
      );
    }
  });

  test('It should fail to load a router contract for a network that does not exist', async () => {
    const loader = new NetworkLoader({ network: 'ropsten' });
    try {
      await loader.load({
        contractName: 'IColonyNetwork',
        routerName: 'EtherRouter',
      });
      expect(false).toBe(true); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        'Error: Network ID ropsten not found in contract',
      );
    }
  });
});

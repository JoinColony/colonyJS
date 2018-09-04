/* eslint-env jest */

import { utf8ToHex } from 'web3-utils';
import createSandbox from 'jest-sandbox';
import ColonyNetworkClient from '../ColonyNetworkClient';
import ColonyClient from '../ColonyClient';
import TokenClient from '../TokenClient';
import AuthorityClient from '../AuthorityClient';

jest.mock('web3-utils', () => ({
  isHex: jest.fn().mockReturnValue(true),
  utf8ToHex: jest.fn().mockImplementation(input => input),
  isAddress: jest.fn().mockReturnValue(true),
}));

jest.mock('../TokenClient');
jest.mock('../AuthorityClient');

describe('ColonyNetworkClient', () => {
  const sandbox = createSandbox();

  const colonyAddress = '0x123 Colony Lane';
  const contract = {};
  const deployTransaction = {
    hash: 'the deploy transaction hash',
  };
  const transaction = {
    hash: 'the transaction hash',
  };
  const receipt = {
    contractAddress: 'the contract receipt',
  };
  const wallet = {
    sendTransaction: sandbox.fn().mockImplementation(async () => transaction),
  };
  const adapter = {
    getContract: sandbox.fn().mockImplementation(async () => contract),
    getContractDeployTransaction: sandbox
      .fn()
      .mockImplementation(async () => deployTransaction),
    getTransactionReceipt: sandbox.fn().mockImplementation(async () => receipt),
    wallet,
  };

  beforeEach(() => {
    sandbox.clear();
    utf8ToHex.mockClear();
  });

  test('Creating a token', async () => {
    const networkClient = new ColonyNetworkClient({ adapter });
    await networkClient.init();

    const name = 'TestCoin';
    const symbol = 'TST';
    const decimals = 20;

    const tokenAddress = await networkClient.createToken({
      name,
      symbol,
      decimals,
    });

    expect(tokenAddress).toBe(receipt.contractAddress);
    expect(utf8ToHex).toHaveBeenCalledWith(name);
    expect(utf8ToHex).toHaveBeenCalledWith(symbol);
    expect(adapter.getContractDeployTransaction).toHaveBeenCalledWith(
      expect.objectContaining({ contractName: 'Token' }),
      [name, symbol, decimals],
    );
    expect(wallet.sendTransaction).toHaveBeenCalledWith(deployTransaction);
    expect(adapter.getTransactionReceipt).toHaveBeenCalledWith(
      transaction.hash,
    );
  });

  test('Creating a Colony', async () => {
    const networkClient = new ColonyNetworkClient({ adapter });
    await networkClient.init();

    // The createColony Sender should be configured correctly
    expect(networkClient.createColony).toBeInstanceOf(
      networkClient.constructor.Sender,
    );
    expect(networkClient.createColony).toHaveProperty('_defaultGasLimit');
    expect(networkClient.createColony.input).toEqual([
      ['tokenAddress', 'address'],
    ]);

    const response = {
      eventData: {
        colonyId: 23,
        colonyAddress: 'colony address',
      },
    };
    sandbox
      .spyOn(networkClient.createColony, '_send')
      .mockImplementation(async () => response);

    const tokenAddress = '0xa2dd9cec9eab6c2bb5aef2f758cff78bffd8e958';

    // Send should work as per usual
    const {
      eventData: { colonyId, colonyAddress: address },
    } = await networkClient.createColony.send({ tokenAddress });
    expect(colonyId).toBe(response.eventData.colonyId);
    expect(address).toBe(response.eventData.colonyAddress);
  });

  test('Getting a ColonyClient', async () => {
    const networkClient = new ColonyNetworkClient({ adapter });
    await networkClient.init();

    const colonyClient = {
      contract: {
        address: colonyAddress,
      },
    };
    sandbox
      .spyOn(networkClient, 'getColonyAddress')
      .mockImplementation(async () => colonyAddress);
    sandbox
      .spyOn(networkClient, 'getColonyClientByAddress')
      .mockImplementation(async () => colonyClient);

    // Ensure that the input is validated
    try {
      await networkClient.getColonyClient();
    } catch (error) {
      expect(error.toString()).toMatch('An ID parameter must be provided');
    }

    const id = 23;
    expect(await networkClient.getColonyClient(id)).toEqual(colonyClient);
    expect(networkClient.getColonyAddress).toHaveBeenCalledWith(id);
    expect(networkClient.getColonyClientByAddress).toHaveBeenCalledWith(
      colonyAddress,
    );
  });

  test('Getting a ColonyClient by address', async () => {
    const networkClient = new ColonyNetworkClient({ adapter });
    await networkClient.init();

    let client;
    const MockColonyClient = sandbox.fn((...args) => {
      client = new ColonyClient(...args);
      return client;
    });
    const colonyClientSpy = sandbox
      .spyOn(ColonyNetworkClient, 'ColonyClient', 'get')
      .mockReturnValue(MockColonyClient);
    sandbox.spyOn(ColonyClient.prototype, 'init');
    sandbox
      .spyOn(ColonyClient.prototype, 'initializeContractMethods')
      .mockImplementation(() => {
        client.getToken = {
          call: sandbox.fn().mockImplementation(async () => ({
            address: 'token address',
          })),
        };
        client.getAuthority = {
          call: sandbox.fn().mockImplementation(async () => ({
            address: 'authority address',
          })),
        };
      });

    const colonyClient = await networkClient.getColonyClientByAddress(
      colonyAddress,
    );

    expect(colonyClientSpy).toHaveBeenCalled();
    expect(colonyClient).toBeInstanceOf(ColonyClient);
    expect(MockColonyClient).toHaveBeenCalledWith({
      adapter: networkClient.adapter,
      networkClient,
      query: {
        contractAddress: colonyAddress,
      },
    });
    expect(colonyClient.init).toHaveBeenCalled();
    expect(colonyClient.getToken.call).toHaveBeenCalled();
    expect(colonyClient.getAuthority.call).toHaveBeenCalled();
    expect(colonyClient).toHaveProperty('token', expect.any(TokenClient));
    expect(colonyClient).toHaveProperty(
      'authority',
      expect.any(AuthorityClient),
    );
    expect(colonyClient.token.init).toHaveBeenCalled();
    expect(colonyClient.authority.init).toHaveBeenCalled();
    expect(TokenClient).toHaveBeenCalledWith(
      expect.objectContaining({
        adapter: colonyClient.adapter,
        query: { contractAddress: 'token address' },
      }),
    );
    expect(AuthorityClient).toHaveBeenCalledWith(
      expect.objectContaining({
        adapter: colonyClient.adapter,
        query: { contractAddress: 'authority address' },
      }),
    );
  });

  test('Getting a Colony address', async () => {
    const networkClient = new ColonyNetworkClient({ adapter });
    await networkClient.init();

    const getColonySpy = sandbox
      .spyOn(networkClient.getColony, 'call')
      .mockImplementation(async () => ({ address: colonyAddress }));

    const id = 24;

    // Ensure that the input is validated
    try {
      await networkClient.getColonyAddress();
      expect(true).toBe(false); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch('An ID parameter must be provided');
    }

    // Getting the the address by id
    expect(await networkClient.getColonyAddress(id)).toBe(colonyAddress);
    expect(getColonySpy).toHaveBeenCalledWith({ id });
  });

  test('Getting the Meta Colony as a ColonyClient', async () => {
    const networkClient = new ColonyNetworkClient({ adapter });
    await networkClient.init();

    const metaColonyAddress = 'The Meta Colony lives here';
    const metaColonyClient = {
      contract: {
        address: metaColonyAddress,
      },
    };

    sandbox
      .spyOn(networkClient.getMetaColonyAddress, 'call')
      .mockImplementation(async () => ({ address: metaColonyAddress }));
    sandbox
      .spyOn(networkClient, 'getColonyClientByAddress')
      .mockImplementation(async () => metaColonyClient);

    expect(await networkClient.getMetaColonyClient()).toBe(metaColonyClient);
    expect(networkClient.getMetaColonyAddress.call).toHaveBeenCalled();
  });
});

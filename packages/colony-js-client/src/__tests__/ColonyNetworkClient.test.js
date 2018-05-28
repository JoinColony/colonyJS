/* eslint-env jest */

import { utf8ToHex } from 'web3-utils';
import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';
import ColonyNetworkClient from '../ColonyNetworkClient';
import ColonyClient from '../ColonyClient';

jest.mock('web3-utils', () => ({
  isHex: jest.fn().mockReturnValue(true),
  utf8ToHex: jest.fn().mockImplementation(input => input),
  isAddress: jest.fn().mockReturnValue(true),
}));

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
    expect(networkClient.createColony.eventHandlers).toEqual({
      ColonyAdded: {
        contract: {},
        handler: expect.any(Function),
      },
    });
    expect(networkClient.createColony.input).toEqual([
      ['tokenAddress', 'address'],
    ]);
    expect(
      networkClient.createColony.eventHandlers.ColonyAdded.handler({
        colonyId: new BigNumber(100),
        colonyAddress: 'colony address',
      }),
    ).toEqual({ colonyId: 100, colonyAddress: 'colony address' });

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

    const Mock = sandbox.fn((...args) => new ColonyClient(...args));
    const colonyClientSpy = sandbox
      .spyOn(ColonyNetworkClient, 'ColonyClient', 'get')
      .mockReturnValue(Mock);
    sandbox.spyOn(ColonyClient.prototype, 'init');

    const colonyClient = await networkClient.getColonyClientByAddress(
      colonyAddress,
    );

    expect(colonyClientSpy).toHaveBeenCalled();
    expect(colonyClient).toBeInstanceOf(ColonyClient);
    expect(Mock).toHaveBeenCalledWith({
      adapter: networkClient.adapter,
      networkClient,
      query: {
        contractAddress: colonyAddress,
      },
    });
    expect(colonyClient.init).toHaveBeenCalled();
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

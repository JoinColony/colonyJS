/* eslint-env jest */

import { utf8ToHex } from 'web3-utils';
import createSandbox from 'jest-sandbox';
import BigNumber from 'bn.js';
import ColonyNetworkClient from '../ColonyNetworkClient';
import ColonyClient from '../ColonyClient';

jest.mock('web3-utils', () => ({
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
      success: {
        ColonyAdded: {
          contract: {},
          handler: expect.any(Function),
        },
      },
    });
    expect(networkClient.createColony.input).toEqual([
      ['name', 'string'],
      ['tokenAddress', 'address'],
    ]);
    expect(
      networkClient.createColony.eventHandlers.success.ColonyAdded.handler({
        id: new BigNumber(100),
      }),
    ).toEqual({ colonyId: 100 });

    const response = {
      eventData: {
        colonyId: 23,
      },
    };
    sandbox
      .spyOn(networkClient.createColony, '_send')
      .mockImplementation(async () => response);

    const name = 'My Colony';
    const tokenAddress = '0xa2dd9cec9eab6c2bb5aef2f758cff78bffd8e958';

    // Send should work as per usual
    const {
      eventData: { colonyId },
    } = await networkClient.createColony.send({ name, tokenAddress });
    expect(colonyId).toBe(response.eventData.colonyId);
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
      expect(error.toString()).toMatch('Either `key` or `id` must be provided');
    }

    const id = 23;
    expect(await networkClient.getColonyClient({ id })).toEqual(colonyClient);
    expect(networkClient.getColonyAddress).toHaveBeenCalledWith({ id });
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

    const getColonyByKeySpy = sandbox
      .spyOn(networkClient.getColonyByKey, 'call')
      .mockImplementation(async () => ({ address: colonyAddress }));
    const getColonyByIdSpy = sandbox
      .spyOn(networkClient.getColonyById, 'call')
      .mockImplementation(async () => ({ address: colonyAddress }));

    const key = 'My Colony';
    const id = 24;

    // Ensure that the input is validated
    try {
      await networkClient.getColonyAddress();
      expect(true).toBe(false); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch('Either `key` or `id` must be provided');
    }

    // Getting the the address by id
    expect(await networkClient.getColonyAddress({ id })).toBe(colonyAddress);
    expect(getColonyByIdSpy).toHaveBeenCalledWith({ id });
    expect(getColonyByKeySpy).not.toHaveBeenCalled();
    getColonyByIdSpy.mockReset();
    getColonyByKeySpy
      .mockReset()
      .mockImplementation(async () => ({ address: colonyAddress }));

    // Getting the the address by key
    expect(await networkClient.getColonyAddress({ key })).toBe(colonyAddress);
    expect(getColonyByIdSpy).not.toHaveBeenCalled();
    expect(getColonyByKeySpy).toHaveBeenCalledWith({ key });
    getColonyByIdSpy.mockReset();
    getColonyByKeySpy.mockReset();

    // No address found
    getColonyByKeySpy.mockImplementation(async () => ({ address: null }));
    try {
      await networkClient.getColonyAddress({ key });
      expect(true).toBe(false); // should be unreachable
    } catch (error) {
      expect(error.toString()).toMatch(
        `Colony with key ${key} could not be found`,
      );
    }
  });
});

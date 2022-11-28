import { ContractFactory, ContractTransaction, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { BigNumber } from 'ethers/utils';

import { ColonyClient } from '../types';

import {
  ClientType,
  Network,
  colonyNetworkAddresses,
  REPUTATION_ORACLE_ENDPOINT,
} from '../constants';
import { ColonyVersion } from '../versions';
// @TODO this _HAS_ to be the newest version _ALWAYS_. Let's try to figure out a way to make sure of this
import { IColonyNetwork__factory as IColonyNetworkFactory } from '../contracts/colony/10/factories/IColonyNetwork__factory';
import { IColonyNetwork } from '../contracts/colony/10/IColonyNetwork';
import { TransactionOverrides } from '../contracts/6';
import {
  abi as tokenAbi,
  bytecode as tokenBytecode,
} from '../contracts/deploy/MetaTxToken.json';
import getColonyVersionClient from './Colony/ColonyVersionClient';
import getColonyClientV1 from './Colony/ColonyClientV1';
import getColonyClientV2 from './Colony/ColonyClientV2';
import getColonyClientV3 from './Colony/ColonyClientV3';
import getColonyClientV4 from './Colony/ColonyClientV4';
import getColonyClientV5 from './Colony/ColonyClientV5';
import getColonyClientV6 from './Colony/ColonyClientV6';
import getColonyClientV7 from './Colony/ColonyClientV7';
import getColonyClientV8 from './Colony/ColonyClientV8';
import getColonyClientV9 from './Colony/ColonyClientV9';
import getColonyClientV10 from './Colony/ColonyClientV10';
import getColonyClientV11 from './Colony/ColonyClientV11';
import getTokenClient from './TokenClient';
import getTokenLockingClient, {
  TokenLockingClient,
} from './TokenLockingClient';

type NetworkEstimate = IColonyNetwork['estimate'];

interface ExtendedEstimate extends NetworkEstimate {
  deployToken(
    name: string,
    symbol: string,
    decimals?: number,
  ): Promise<BigNumber>;
}

export interface ColonyNetworkClient extends IColonyNetwork {
  clientType: ClientType.NetworkClient;
  network: Network;
  reputationOracleEndpoint: string;

  estimate: ExtendedEstimate;

  /**
   * Get a ColonyClient instance for the currently deployed version of that Colony by providing the address or the integer colony number
   *
   * @param addressOrId - The colony address (string) or the auto-incremented Colony id (integer)
   *
   * @returns The corresponding initialized ColonyClient instance
   */
  getColonyClient(addressOrId: string | number): Promise<ColonyClient>;
  /**
   * Get the initialized MetaColony client
   *
   * @returns a ColonyClient instance of the MetaColony (id: 1)
   */
  getMetaColonyClient(): Promise<ColonyClient>;
  /**
   * Deploy an ERC20 token contract, compatible with Colony
   *
   * @remarks
   * For valid values see the spec here: https://eips.ethereum.org/EIPS/eip-20
   *
   * @param name - The token name. Can be any string. Be creative
   * @param symbol - The symbol of the token (e.g. CLNY)
   * @param decimals - The number of token decimals
   *
   * @returns ethers compatible ContractTransaction
   */
  deployToken(
    name: string,
    symbol: string,
    decimals?: number,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Gets the TokenLockingClient
   *
   * @returns an initialized version of the TokenLockingClient
   */
  getTokenLockingClient(): Promise<TokenLockingClient>;
  /**
   * Like [[`lookupRegisteredENSDomain`]], but also working on the Goerli testnet
   *
   * @remarks
   * On Goerli, all ens domains have the `.test` suffix. The contracts return `.eth` anyways.
   * We patch the original function to fix this problem. On any other network it will return the
   * original function
   *
   * @param addr - Address we want to look up
   *
   * @returns an ENS name in the form of `[username].user.joincolony.eth` or `[colonyName].colony.joincolony.eth`
   */
  lookupRegisteredENSDomainWithNetworkPatches(address: string): Promise<string>;
}

interface NetworkClientOptions {
  networkAddress?: string;
  reputationOracleEndpoint?: string;
}

/**
 * The main entry point for accessing the deployed colonyNetwork contracts
 *
 * Specify a network and an ethers compatible singer or provider to get back an
 * initialized and extended (ethers) contract client for the colonyNetwork. From
 * here you can access different colonies, extensions, ENS and other features of Colony.
 *
 * Example
 * ```ts
 * import { getColonyNetworkClient, Network } = from '@colony/colony-js';
 * import { JsonRpcProvider } from 'ethers/providers';
 *
 * // For local connections (run an Ethereum node on port 8545);
 * const provider = new JsonRpcProvider();
 *
 * // Just for reading data - to sign transactions we need to pass in a signer.
 * const networkClient = await getColonyNetworkClient(Network.Mainnet, provider);
 * ```
 *
 * @param network One of the available options. See [[Network]].
 * @param signerOrProvider An [ethers](https://github.com/ethers-io/ethers.js/)
 * compatible signer or provider instance
 * @param options Here you can supply options for accessing certain contracts
 * (mostly used in local/dev environments)
 */
const getColonyNetworkClient = (
  network: Network = Network.Mainnet,
  signerOrProvider: Signer | Provider,
  options?: NetworkClientOptions,
): ColonyNetworkClient => {
  const networkAddress =
    options && options.networkAddress
      ? options.networkAddress
      : colonyNetworkAddresses[network];
  if (!networkAddress) {
    throw new Error(
      `Could not get ColonyNetwork address for ${network}. Please specify`,
    );
  }

  const networkClient = IColonyNetworkFactory.connect(
    networkAddress,
    signerOrProvider,
  ) as ColonyNetworkClient;

  networkClient.clientType = ClientType.NetworkClient;
  networkClient.network = network;
  networkClient.reputationOracleEndpoint =
    (options && options.reputationOracleEndpoint) || REPUTATION_ORACLE_ENDPOINT;

  networkClient.getTokenLockingClient = async (): Promise<
    TokenLockingClient
  > => {
    const tokenLockingAddress = await networkClient.getTokenLocking();
    return getTokenLockingClient(tokenLockingAddress, signerOrProvider);
  };

  networkClient.getColonyClient = async (
    addressOrId: string | number,
  ): Promise<ColonyClient> => {
    let colonyAddress: string;
    if (typeof addressOrId == 'number') {
      colonyAddress = await networkClient.getColony(addressOrId);
    } else {
      colonyAddress = addressOrId;
    }
    const colonyVersionClient = getColonyVersionClient(
      colonyAddress,
      signerOrProvider,
    );
    // This is *kinda* hacky, but I have no better idea ¯\_(ツ)_/¯
    // We have to get the version somehow before instantiating the right contract version
    const versionBN = await colonyVersionClient.version();
    const version = versionBN.toNumber() as ColonyVersion;
    let colonyClient: ColonyClient;
    switch (version) {
      case ColonyVersion.GoerliGlider: {
        colonyClient = getColonyClientV1.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.Glider: {
        colonyClient = getColonyClientV2.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.AuburnGlider: {
        colonyClient = getColonyClientV3.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.BurgundyGlider: {
        colonyClient = getColonyClientV4.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.LightweightSpaceship: {
        colonyClient = getColonyClientV5.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.CeruleanLightweightSpaceship: {
        colonyClient = getColonyClientV6.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.DandelionLightweightSpaceship: {
        colonyClient = getColonyClientV7.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.EbonyLightweightSpaceship: {
        colonyClient = getColonyClientV8.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.FuchsiaLightweightSpaceship: {
        colonyClient = getColonyClientV9.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.GreenLightweightSpaceship: {
        colonyClient = getColonyClientV10.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      case ColonyVersion.GreenLightweightSpaceshipTwo: {
        colonyClient = getColonyClientV11.call(
          networkClient,
          colonyAddress,
          signerOrProvider,
        );
        break;
      }
      default: {
        throw new Error('Colony version not supported');
      }
    }

    const tokenAddress = await colonyClient.getToken();
    colonyClient.tokenClient = await getTokenClient(
      tokenAddress,
      signerOrProvider,
    );

    // @TODO where to put the extensions?

    return colonyClient;
  };

  networkClient.getMetaColonyClient = async (): Promise<ColonyClient> => {
    const metaColonyAddress = await networkClient.getMetaColony();
    return networkClient.getColonyClient(metaColonyAddress);
  };

  networkClient.lookupRegisteredENSDomainWithNetworkPatches = async (
    addr: string,
  ): Promise<string> => {
    const domain = await networkClient.lookupRegisteredENSDomain(addr);
    if (domain && networkClient.network === Network.Goerli) {
      const [name, scope] = domain.split('.');
      return `${name}.${scope}.joincolony.test`;
    }
    if (
      domain &&
      (networkClient.network === Network.Xdai ||
        networkClient.network === Network.XdaiFork)
    ) {
      const [name, scope] = domain.split('.');
      return `${name}.${scope}.joincolony.colonyxdai`;
    }
    return domain;
  };

  networkClient.deployToken = async (
    name: string,
    symbol: string,
    decimals = 18,
    overrides?: TransactionOverrides,
  ): Promise<ContractTransaction> => {
    const tokenFactory = new ContractFactory(
      tokenAbi,
      tokenBytecode,
      networkClient.signer,
    );
    const tokenContract = await tokenFactory.deploy(
      name,
      symbol,
      decimals,
      overrides,
    );
    await tokenContract.deployed();
    return tokenContract.deployTransaction;
  };

  networkClient.estimate.deployToken = async (
    name: string,
    symbol: string,
    decimals = 18,
  ): Promise<BigNumber> => {
    const tokenFactory = new ContractFactory(tokenAbi, tokenBytecode);
    const deployTx = tokenFactory.getDeployTransaction(name, symbol, decimals);
    return networkClient.provider.estimateGas(deployTx);
  };

  return networkClient;
};

export default getColonyNetworkClient;

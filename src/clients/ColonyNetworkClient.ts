import { ContractTransaction, BigNumber, Overrides } from 'ethers';

import { ClientType, Network, SignerOrProvider } from '../types';
import { AnyColonyClient } from '../clients/Core/exports';

import { ColonyNetworkAddress, ReputationOracleEndpoint } from '../constants';
import {
  IColonyNetwork,
  IColonyNetwork__factory as IColonyNetworkFactory,
} from '../contracts';
import { getColonyClient } from './Core/exports';
import getTokenLockingClient, {
  TokenLockingClient,
} from './TokenLockingClient';
import { ColonyTokenFactory } from '../tokens';

type NetworkEstimate = IColonyNetwork['estimateGas'];

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

  estimateGas: ExtendedEstimate;

  /**
   * Get a ColonyClient instance for the currently deployed version of that Colony by providing the address or the integer colony number
   *
   * @param addressOrId - The colony address (string) or the auto-incremented Colony id (integer)
   *
   * @returns The corresponding initialized ColonyClient instance
   */
  getColonyClient(addressOrId: string | number): Promise<AnyColonyClient>;
  /**
   * Get the initialized MetaColony client
   *
   * @returns a ColonyClient instance of the MetaColony (id: 1)
   */
  getMetaColonyClient(): Promise<AnyColonyClient>;
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
    overrides?: Overrides,
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
   * @param address - Address we want to look up
   *
   * @returns an ENS name in the form of `[username].user.joincolony.eth` or `[colonyName].colony.joincolony.eth`
   */
  lookupRegisteredENSDomainWithNetworkPatches(address: string): Promise<string>;
}

export interface NetworkClientOptions {
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
 * import { providers } from 'ethers';
 *
 * // For local connections (run an Ethereum node on port 8545);
 * const provider = new providers.JsonRpcProvider();
 *
 * // Just for reading data - to sign transactions we need to pass in a signer.
 * const networkClient = await getColonyNetworkClient(Network.Xdai, provider);
 * ```
 *
 * @param network One of the available options. See [[Network]].
 * @param signerOrProvider An [ethers](https://github.com/ethers-io/ethers.js/)
 * compatible signer or provider instance
 * @param options Here you can supply options for accessing certain contracts
 * (mostly used in local/dev environments)
 */
const getColonyNetworkClient = (
  network: Network,
  signerOrProvider: SignerOrProvider,
  options?: NetworkClientOptions,
): ColonyNetworkClient => {
  const networkAddress =
    options && options.networkAddress
      ? options.networkAddress
      : ColonyNetworkAddress[network];
  if (!networkAddress) {
    throw new Error(
      `Could not get ColonyNetwork address for ${network}. Please specify using the 'networkAddress' option`,
    );
  }

  const networkClient = IColonyNetworkFactory.connect(
    networkAddress,
    signerOrProvider,
  ) as ColonyNetworkClient;

  networkClient.clientType = ClientType.NetworkClient;
  networkClient.network = network;
  networkClient.reputationOracleEndpoint =
    (options && options.reputationOracleEndpoint) ||
    ReputationOracleEndpoint[network];

  networkClient.getTokenLockingClient =
    async (): Promise<TokenLockingClient> => {
      const tokenLockingAddress = await networkClient.getTokenLocking();
      return getTokenLockingClient(tokenLockingAddress, signerOrProvider);
    };

  networkClient.getColonyClient = getColonyClient.bind(networkClient);

  networkClient.getMetaColonyClient = async (): Promise<AnyColonyClient> => {
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
        networkClient.network === Network.XdaiQa)
    ) {
      const [name, scope] = domain.split('.');
      return `${name}.${scope}.joincolony.colonyxdai`;
    }
    return domain;
  };

  networkClient.deployToken = async (
    name: string,
    symbol: string,
    decimals?: number,
    overrides?: Overrides,
  ): Promise<ContractTransaction> => {
    const tokenFactory = new ColonyTokenFactory(networkClient.signer);
    const tokenContract = await tokenFactory.deploy(
      name,
      symbol,
      decimals || 18,
      overrides,
    );
    await tokenContract.deployed();
    return tokenContract.deployTransaction;
  };

  networkClient.estimateGas.deployToken = async (
    name: string,
    symbol: string,
    decimals = 18,
  ): Promise<BigNumber> => {
    const tokenFactory = new ColonyTokenFactory();
    const deployTx = tokenFactory.getDeployTransaction(name, symbol, decimals);
    return networkClient.provider.estimateGas(deployTx);
  };

  return networkClient;
};

export default getColonyNetworkClient;

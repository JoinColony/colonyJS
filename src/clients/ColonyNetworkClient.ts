import { ContractFactory, ContractTransaction, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { BigNumber } from 'ethers/utils';
import { AddressZero } from 'ethers/constants';

import { ColonyClient } from '../index';

import {
  ColonyVersion,
  ClientType,
  Network,
  colonyNetworkAddresses,
  REPUTATION_ORACLE_ENDPOINT,
} from '../constants';
// @TODO this _HAS_ to be the newest version _ALWAYS_. Let's try to figure out a way to make sure of this
import { IColonyNetworkFactory } from '../contracts/4/IColonyNetworkFactory';
import { IColonyNetwork } from '../contracts/4/IColonyNetwork';
import {
  abi as tokenAbi,
  bytecode as tokenBytecode,
} from '../contracts/deploy/Token.json';
import getColonyVersionClient from './Colony/ColonyVersionClient';
import getColonyClientV1 from './Colony/ColonyClientV1';
import getColonyClientV2 from './Colony/ColonyClientV2';
import getColonyClientV3 from './Colony/ColonyClientV3';
import getColonyClientV4 from './Colony/ColonyClientV4';
import getTokenClient from './TokenClient';
import getTokenLockingClient, {
  TokenLockingClient,
} from './TokenLockingClient';
import getOneTxPaymentFactoryClient, {
  OneTxPaymentFactoryClient,
} from './OneTxPaymentDeployerClient';
import getOneTxPaymentClient from './OneTxPaymentClient';

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

  oneTxPaymentFactoryClient: OneTxPaymentFactoryClient;
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
  lookupRegisteredENSDomainWithGoerliPatch(address: string): Promise<string>;
}

interface NetworkClientOptions {
  networkAddress?: string;
  oneTxPaymentFactoryAddress?: string;
  reputationOracleEndpoint?: string;
}

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

  // @TODO move to getter function `getOneTxPaymentFactorylient` as we do with all the others
  networkClient.oneTxPaymentFactoryClient = getOneTxPaymentFactoryClient(
    network,
    signerOrProvider,
    options && options.oneTxPaymentFactoryAddress,
  );

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
    let colonyClient;
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
      default: {
        throw new Error('Colony version not supported');
      }
    }

    const tokenAddress = await colonyClient.getToken();
    colonyClient.tokenClient = await getTokenClient(
      tokenAddress,
      signerOrProvider,
    );

    // eslint-disable-next-line max-len
    const oneTxPaymentAddress = await networkClient.oneTxPaymentFactoryClient.deployedExtensions(
      colonyClient.address,
    );

    if (oneTxPaymentAddress !== AddressZero) {
      colonyClient.oneTxPaymentClient = getOneTxPaymentClient(
        oneTxPaymentAddress,
        colonyClient,
      );
    }

    return colonyClient;
  };

  networkClient.getMetaColonyClient = async (): Promise<ColonyClient> => {
    const metaColonyAddress = await networkClient.getMetaColony();
    return networkClient.getColonyClient(metaColonyAddress);
  };

  networkClient.lookupRegisteredENSDomainWithGoerliPatch = async (
    addr: string,
  ): Promise<string> => {
    const domain = await networkClient.lookupRegisteredENSDomain(addr);
    if (domain && networkClient.network === Network.Goerli) {
      const [name, scope] = domain.split('.');
      return `${name}.${scope}.joincolony.test`;
    }
    return domain;
  };

  networkClient.deployToken = async (
    name: string,
    symbol: string,
    decimals = 18,
  ): Promise<ContractTransaction> => {
    const tokenFactory = new ContractFactory(
      tokenAbi,
      tokenBytecode,
      networkClient.signer,
    );
    const tokenContract = await tokenFactory.deploy(name, symbol, decimals);
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

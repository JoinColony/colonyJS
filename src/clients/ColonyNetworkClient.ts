import { ContractFactory, ContractTransaction, Signer } from 'ethers';
import { Provider } from 'ethers/providers';

import {
  ColonyVersion,
  ClientType,
  Network,
  colonyNetworkAddresses,
} from '../constants';
// @TODO this _HAS_ to be the newest version _ALWAYS_. Let's try to figure out a way to make sure of this
import { IColonyNetworkFactory } from '../contracts/4/IColonyNetworkFactory';
import { IColonyNetwork } from '../contracts/4/IColonyNetwork';
import {
  abi as tokenAbi,
  bytecode as tokenBytecode,
} from '../contracts/deploy/Token.json';
import {
  abi as colonyAbi,
  bytecode as colonyBytecode,
} from '../contracts/deploy/Colony.json';
import getColonyVersionClient from './Colony/ColonyVersionClient';
import getColonyClientV1, { ExtendedIColonyV1 } from './Colony/ColonyClientV1';
import getColonyClientV2, { ExtendedIColonyV2 } from './Colony/ColonyClientV2';
import getColonyClientV3, { ExtendedIColonyV3 } from './Colony/ColonyClientV3';
import getColonyClientV4, { ExtendedIColonyV4 } from './Colony/ColonyClientV4';
import getTokenClient from './TokenClient';
import getOneTxPaymentDeployerClient, {
  ExtendedOneTxPaymentDeployer,
} from './OneTxPaymentDeployerClient';
import getOneTxPaymentClient from './OneTxPaymentClient';

export type AnyColonyClient =
  | ExtendedIColonyV1
  | ExtendedIColonyV2
  | ExtendedIColonyV3
  | ExtendedIColonyV4;

export interface ExtendedIColonyNetwork extends IColonyNetwork {
  clientType: ClientType.NetworkClient;
  oneTxPaymentFactoryClient: ExtendedOneTxPaymentDeployer;

  getColonyClient(addressOrId: string | number): Promise<AnyColonyClient>;
  getMetaColonyClient(): Promise<AnyColonyClient>;
  createToken(
    name: string,
    symbol: string,
    decimals?: number,
  ): Promise<ContractTransaction>;
  createColony(tokenAddress: string): Promise<ContractTransaction>;
}

interface NetworkClientOptions {
  networkAddress?: string;
  oneTxPaymentFactoryAddress?: string;
}

const getColonyNetworkClient = (
  network: Network = Network.Mainnet,
  signerOrProvider: Signer | Provider,
  options?: NetworkClientOptions,
): ExtendedIColonyNetwork => {
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
  ) as ExtendedIColonyNetwork;

  networkClient.clientType = ClientType.NetworkClient;

  networkClient.oneTxPaymentFactoryClient = getOneTxPaymentDeployerClient(
    network,
    signerOrProvider,
    options && options.oneTxPaymentFactoryAddress,
  );

  networkClient.getColonyClient = async (
    addressOrId: string | number,
  ): Promise<AnyColonyClient> => {
    let colonyAddress: string;
    if (typeof addressOrId == 'number') {
      colonyAddress = await networkClient.getColony(addressOrId);
    } else {
      colonyAddress = addressOrId;
    }
    const colonyVersionClient = await getColonyVersionClient(
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
    colonyClient.tokenClient = getTokenClient(tokenAddress, signerOrProvider);

    // eslint-disable-next-line max-len
    const oneTxPaymentAddress = await networkClient.oneTxPaymentFactoryClient.deployedExtensions(
      colonyClient.address,
    );
    colonyClient.oneTxPaymentClient = getOneTxPaymentClient(
      oneTxPaymentAddress,
      colonyClient,
    );

    return colonyClient;
  };

  networkClient.getMetaColonyClient = async (): Promise<AnyColonyClient> => {
    const metaColonyAddress = await networkClient.getMetaColony();
    return networkClient.getColonyClient(metaColonyAddress);
  };

  networkClient.createToken = async (
    name: string,
    symbol: string,
    decimals = 18,
  ): Promise<ContractTransaction> => {
    const tokenFactory = new ContractFactory(tokenAbi, tokenBytecode);
    const tokenContract = await tokenFactory.deploy(name, symbol, decimals);
    await tokenContract.deployed();
    return tokenContract.deployTransaction;
  };

  networkClient.createColony = async (
    tokenAddress: string,
  ): Promise<ContractTransaction> => {
    const colonyFactory = new ContractFactory(colonyAbi, colonyBytecode);
    const colonyContract = await colonyFactory.deploy(tokenAddress);
    await colonyContract.deployed();
    return colonyContract.deployTransaction;
  };

  return networkClient;
};

export default getColonyNetworkClient;

import { BigNumberish, ContractReceipt, constants, utils } from 'ethers';
import {
  ColonyNetworkClient,
  getColonyNetworkClient,
  IBasicMetaTransaction,
  Network,
  NetworkClientOptions,
  SignerOrProvider,
} from '@colony/colony-js';
import {
  ColonyAddedEventObject,
  ColonyMetadataEventObject,
  TokenDeployedEventObject,
} from '@colony/colony-js/extras';
import { ColonyMetadata } from '@colony/colony-event-metadata-parser';

import { IpfsMetadata, IpfsAdapter, MetadataType } from '../ipfs';
import { Colony, SupportedExtensions } from './Colony';
import {
  getVotingReputationClient,
  VotingReputation,
} from './VotingReputation';
import { getOneTxPaymentClient, OneTxPayment } from './OneTxPayment';
import { ColonyLabelSuffix, MetaTxBroadCasterEndpoint } from '../constants';
import { Expand, Parameters } from '../types';
import { TxCreator } from './TxCreator';
import { extractEvent } from '../utils';

const { namehash } = utils;
const { AddressZero } = constants;

/** Additional options for the [[ColonyNetwork]] */
export interface ColonyNetworkOptions {
  /** Provide a custom [[IpfsAdapter]] */
  ipfsAdapter?: IpfsAdapter;
  /** Provide custom [[NetworkClientOptions]] for the ColonyJS client */
  networkClientOptions?: NetworkClientOptions;
  /** Provide a custom metatransaction broadcaster endpoint */
  metaTxBroadcasterEndpoint?: string;
}

export interface ColonyNetworkConfig {
  metaTxBroadcasterEndpoint?: string;
}

export class ColonyNetwork {
  config: ColonyNetworkConfig;

  ipfs: IpfsMetadata;

  network: Network;

  networkClient: ColonyNetworkClient;

  signerOrProvider: SignerOrProvider;

  /**
   * Creates a new instance to connect to the ColonyNetwork
   *
   * This is your main entry point to talk to the Colony Network Smart Contracts.
   * From here you should be able to instantiate all the required instances for Colonies and their extensions.
   *
   * @example
   *
   * ```typescript
   * import { providers } from 'ethers';
   * import { ColonyNetwork, Tokens } from '@colony/sdk';
   *
   * // Connect directly to the deployed Colony Network on Gnosis Chain
   * const provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc2/');
   * const colonyNetwork = new ColonyNetwork(provider);
   * // Now you could call functions on the colonyNetwork, like `colonyNetwork.getMetaColony()`
   * ```
   *
   * @param signerOrProvider An _ethers_ compatible Signer or Provider instance
   * @param options Optional custom [[ColonyNetworkOptions]]
   * @returns A ColonyNetwork abstraction instance
   */
  constructor(
    signerOrProvider: SignerOrProvider,
    options?: ColonyNetworkOptions,
  ) {
    this.network = options?.networkClientOptions?.networkAddress
      ? Network.Custom
      : Network.Xdai;
    this.ipfs = new IpfsMetadata(options?.ipfsAdapter);
    this.networkClient = getColonyNetworkClient(
      this.network,
      signerOrProvider,
      options?.networkClientOptions,
    );
    this.config = {
      metaTxBroadcasterEndpoint:
        options?.metaTxBroadcasterEndpoint ||
        MetaTxBroadCasterEndpoint[this.network],
    };
    this.signerOrProvider = signerOrProvider;
  }

  /**
   * Creates a new [[TxCreator]] ColonyNetwork transactions
   * @internal
   *
   * @remarks
   * Do not use this method directly but rather the class methods in the Colony or extensions
   *
   * @param contract A ColonyJS contract
   * @param method The transaction method to execute on the contract
   * @param args The arguments for the method
   * @param eventData A function that extracts the relevant event data from the [[ContractReceipt]]
   * @param metadataType The [[MetadataType]] if the event contains metadata
   * @returns A [[TxCreator]]
   */
  createTxCreator<
    C extends IBasicMetaTransaction,
    F extends keyof C['functions'],
    D extends Record<string, unknown>,
    M extends MetadataType,
  >(
    contract: C,
    method: F,
    args:
      | Parameters<C['functions'][F]>
      | (() => Promise<Parameters<C['functions'][F]>>),
    eventData?: (receipt: ContractReceipt) => Promise<D>,
    metadataType?: M,
  ) {
    return new TxCreator({
      colonyNetwork: this,
      contract,
      method,
      args,
      eventData,
      metadataType,
    });
  }

  createColony(
    tokenAddress: string,
    label: string,
    metadata: ColonyMetadata | string,
  ): TxCreator<
    ColonyNetworkClient,
    'createColony(address,uint256,string,string)',
    Expand<ColonyAddedEventObject & ColonyMetadataEventObject>,
    MetadataType.Colony
  >;

  createColony(
    tokenAddress: string,
    label: string,
  ): TxCreator<
    ColonyNetworkClient,
    'createColony(address,uint256,string)',
    Expand<ColonyAddedEventObject & { metadata?: undefined }>,
    MetadataType
  >;

  createColony(
    tokenAddress: string,
    label: string,
    metadata?: ColonyMetadata | string,
  ) {
    const checkLabel = async () => {
      const existingLabel = await this.getColonyAddress(label);

      if (existingLabel) {
        throw new Error(`Colony label ${label} already exists`);
      }
      return [tokenAddress, Colony.getLatestSupportedVersion(), label] as [
        string,
        BigNumberish,
        string,
      ];
    };

    if (!metadata) {
      return this.createTxCreator(
        this.networkClient,
        'createColony(address,uint256,string)',
        checkLabel,
        async (receipt) => ({
          ...extractEvent<ColonyAddedEventObject>('ColonyAdded', receipt),
        }),
      );
    }

    return this.createTxCreator(
      this.networkClient,
      'createColony(address,uint256,string,string)',
      async () => {
        await checkLabel();

        let cid: string;
        if (typeof metadata == 'string') {
          cid = metadata;
        } else {
          cid = await this.ipfs.uploadMetadata(MetadataType.Colony, metadata);
        }
        return [
          tokenAddress,
          Colony.getLatestSupportedVersion(),
          label,
          cid,
        ] as [string, BigNumberish, string, string];
      },
      async (receipt) => ({
        ...extractEvent<ColonyAddedEventObject>('ColonyAdded', receipt),
      }),
      MetadataType.Colony,
    );
  }

  /**
   * Get a new instance of a Colony
   *
   * Use this function to instantiate a new `Colony` by providing the Colony's address
   *
   * @remarks
   * Colony contracts are versioned. If the deployed Colony version does not match the supported version an error will be thrown
   *
   * @param address The Colony's address
   * @returns A Colony abstaction instance
   */
  async getColony(address: string): Promise<Colony> {
    const colonyClient = await this.networkClient.getColonyClient(address);

    if (colonyClient.clientVersion !== Colony.supportedVersions[0]) {
      throw new Error(
        `The version of this Colony ${colonyClient.clientVersion} is not supported by Colony SDK. Please update your Colony`,
      );
    }

    const colony = new Colony(this, colonyClient);

    const extensions: SupportedExtensions = {};

    // NOTE: Create an individual try-catch block for every extension
    try {
      const votingReputationClient = await getVotingReputationClient(
        colonyClient,
      );
      extensions.motions = new VotingReputation(colony, votingReputationClient);
    } catch (e) {
      // Ignore error here. Extension just won't be available.
    }

    try {
      const oneTxPaymentClient = await getOneTxPaymentClient(colonyClient);
      extensions.oneTx = new OneTxPayment(colony, oneTxPaymentClient);
    } catch (e) {
      // Ignore error here. Extension just won't be available.
    }

    colony.installExtensions(extensions);

    return colony;
  }

  /**
   * Get a new instance of the MetaColony
   *
   * Use this function to instantiate a new `Colony` for the deployed MetaColony
   *
   * @returns A Colony abstaction instance of the MetaColony
   */
  async getMetaColony(): Promise<Colony> {
    const colonyAddress = await this.networkClient.getMetaColony();
    return this.getColony(colonyAddress);
  }

  async getColonyLabel(address: string) {
    const ensName = await this.networkClient.lookupRegisteredENSDomain(address);
    if (ensName) {
      return ensName.replace(ColonyLabelSuffix[this.network], '');
    }
    return null;
  }

  async getColonyAddress(label: string) {
    const hash = namehash(`${label}${ColonyLabelSuffix[this.network]}`);
    const address = await this.networkClient.addr(hash);
    if (address !== AddressZero) {
      return address;
    }
    return null;
  }

  deployToken(name: string, symbol: string, decimals = 18) {
    return this.createTxCreator(
      this.networkClient,
      'deployTokenViaNetwork',
      [name, symbol, decimals],
      async (receipt) => ({
        ...extractEvent<TokenDeployedEventObject>('TokenDeployed', receipt),
      }),
    );
  }
}

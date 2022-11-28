import { BigNumberish, ContractReceipt } from 'ethers';
import {
  ColonyNetworkClient,
  getColonyNetworkClient,
  IBasicMetaTransaction,
  Network,
  NetworkClientOptions,
  SignerOrProvider,
} from '@colony/colony-js';
import { ColonyAddedEventObject } from '@colony/colony-js/extras';
import { ColonyMetadata } from '@colony/colony-event-metadata-parser';

import { IpfsMetadata, IpfsAdapter, MetadataType } from '../ipfs';
import { Colony, SupportedExtensions } from './Colony';
import {
  getVotingReputationClient,
  VotingReputation,
} from './VotingReputation';
import { getOneTxPaymentClient, OneTxPayment } from './OneTxPayment';
import { MetaTxBroadCasterEndpoint } from '../constants';
import { Parameters } from '../types';
import { TxCreator } from './TxCreator';
import { extractEvent } from '../utils';

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
  private createTxCreator<
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

  async deployToken(
    name: string,
    symbol: string,
    decimals = 18,
  ): Promise<string> {
    // TODO: Use TxCreator
    const token = await this.networkClient.deployToken(name, symbol, decimals);
    const receipt = await token.wait();
    return receipt.contractAddress;
  }

  async createColony(tokenAddress: string, colonyLabel: string) {
    // TODO: check whether colony label is taken
    return this.createTxCreator(
      this.networkClient,
      'createColony(address,uint256,string)',
      [tokenAddress, Colony.getLatestSupportedVersion(), colonyLabel],
      async (receipt) => ({
        ...extractEvent<ColonyAddedEventObject>('ColonyAdded', receipt),
      }),
    );
  }

  async createColonyWithMetadata(
    tokenAddress: string,
    colonyLabel: string,
    metadata: ColonyMetadata | string,
  ) {
    // TODO: check whether colony label is taken
    return this.createTxCreator(
      this.networkClient,
      'createColony(address,uint256,string,string)',
      async () => {
        let cid: string;
        if (typeof metadata == 'string') {
          cid = metadata;
        } else {
          cid = await this.ipfs.uploadMetadata(MetadataType.Colony, metadata);
        }
        return [
          tokenAddress,
          Colony.getLatestSupportedVersion(),
          colonyLabel,
          cid,
        ] as [string, BigNumberish, string, string];
      },
      async (receipt) => ({
        ...extractEvent<ColonyAddedEventObject>('ColonyAdded', receipt),
      }),
    );
  }
}

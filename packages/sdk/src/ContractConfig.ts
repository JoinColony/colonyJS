import {
  type SignerOrProvider,
  Network,
  MetaTxBroadCasterEndpoint,
  ReputationOracleEndpoint,
} from '@colony/core';
import { type IpfsAdapter, IpfsMetadata } from '@colony/events';
import { Signer } from 'ethers';

/** Additional options for instatiating Contracts within the Colony Network */
export interface ContractOptions {
  /** A custom address for ColonyNetwork's EtherRouter contract. Useful only in manual deployments */
  customNetworkAddress?: string;
  /** Provide a custom {@link IpfsAdapter} */
  ipfsAdapter?: IpfsAdapter;
  /** The Network to connect to. See {@link Network} for supported networks */
  network?: Network;
  /** Provide a custom metatransaction broadcaster endpoint */
  metaTxBroadcasterEndpoint?: string;
  /** A custom endpoiunt for ColonyNetwork's Reputation Oracle. Useful only in manual deployments */
  reputationOracleEndpoint?: string;
}

/**
 * @internal
 * Used to store auxiliare contract information and helpers
 */
export class ContractConfig {
  /** The IPFS adapter for Metadata. Defaults to a read-only adapter */
  ipfs: IpfsMetadata;

  metaTxBroadcasterEndpoint: string;

  /** The network the client is connected to. Defaults to Arbitrum One */
  network: Network;

  /** A custom endpoiunt for ColonyNetwork's Reputation Oracle. Useful only in manual deployments */
  reputationOracleEndpoint: string;

  /**
   * An ethers.js [Signer](https://docs.ethers.org/v5/api/signer/#Signer) or [Provider](https://docs.ethers.org/v5/api/providers/).
   *
   * E.g. a [Wallet](https://docs.ethers.org/v5/api/signer/#Wallet) or a [Web3Provider](https://docs.ethers.org/v5/api/providers/other/#Web3Provider) (MetaMask)
   */
  signerOrProvider: SignerOrProvider;

  constructor(signerOrProvider: SignerOrProvider, options?: ContractOptions) {
    const network = options?.network || Network.ArbitrumOne;
    // TODO: for validation: if network is Custom, metaTxBroadcaster and reputationOracleEndpoint have to be set
    this.metaTxBroadcasterEndpoint =
      options?.metaTxBroadcasterEndpoint || MetaTxBroadCasterEndpoint[network];
    this.ipfs = new IpfsMetadata(options?.ipfsAdapter);
    this.network = network;
    this.reputationOracleEndpoint =
      options?.reputationOracleEndpoint || ReputationOracleEndpoint[network];
    this.signerOrProvider = signerOrProvider;
  }

  /**
   * Get the signer that was provided when the ColonyNetwork was instantiated.
   * Throws if the Signer is only a (read-only) Provider
   *
   * @returns An Ethers.js compatible Signer instance
   */
  getSigner(): Signer {
    if (!(this.signerOrProvider instanceof Signer)) {
      throw new Error('Need a signer to create a transaction');
    }
    return this.signerOrProvider;
  }
}

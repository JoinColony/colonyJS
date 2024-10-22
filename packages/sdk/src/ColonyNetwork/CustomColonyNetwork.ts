import {
  ColonyNetworkAddress,
  MetaTxBroadCasterEndpoint,
  ReputationOracleEndpoint,
} from '@colony/core';
import { type ContractInterface, Contract, Signer } from 'ethers';
import { IpfsMetadata, Network, type SignerOrProvider } from '../index.js';
import {
  type ColonyNetworkConfig,
  type ColonyNetworkOptions,
} from './ColonyNetwork.js';
import { type IColonyNetwork } from '../contracts/IColonyNetwork.js';

export class CustomColonyNetwork {
  private networkContract: IColonyNetwork;

  /** Configuration of the ColonyNetwork for later use */
  /** @internal */
  config: ColonyNetworkConfig;

  /** The IPFS adapter for Metadata. Defaults to a read-only adapter */
  ipfs: IpfsMetadata;

  /** The network the client is connected to. Defaults to Gnosis chain */
  network: Network;

  /**
   * An ethers.js [Signer](https://docs.ethers.org/v5/api/signer/#Signer) or [Provider](https://docs.ethers.org/v5/api/providers/).
   *
   * E.g. a [Wallet](https://docs.ethers.org/v5/api/signer/#Wallet) or a [Web3Provider](https://docs.ethers.org/v5/api/providers/other/#Web3Provider) (MetaMask)
   */
  signerOrProvider: SignerOrProvider;

  /**
   * Creates a new custom instance of the custom ColonyNetwork
   *
   * @param signerOrProvider - An _ethers_ compatible Signer or Provider instance
   * @param abi - JSON ABI of the custom ColonyNetwork contract
   * @param options - Optional custom {@link ColonyNetworkOptions}
   * @returns A ColonyNetwork abstraction instance
   */
  constructor(
    signerOrProvider: SignerOrProvider,
    abi: ContractInterface,
    options?: ColonyNetworkOptions,
  ) {
    this.network = options?.network || Network.Gnosis;
    this.ipfs = new IpfsMetadata(options?.ipfsAdapter);
    this.config = {
      metaTxBroadcasterEndpoint:
        options?.metaTxBroadcasterEndpoint ||
        MetaTxBroadCasterEndpoint[this.network],
      reputationOracleEndpoint:
        options?.reputationOracleEndpoint ||
        ReputationOracleEndpoint[this.network],
    };
    // Here we need to create the contract with ethers
    this.networkContract = new Contract(
      options?.customNetworkAddress || ColonyNetworkAddress[this.network],
      abi,
      signerOrProvider,
    ) as IColonyNetwork;
    this.signerOrProvider = signerOrProvider;
  }

  getSigner(): Signer {
    if (!(this.signerOrProvider instanceof Signer)) {
      throw new Error('Need a signer to create a transaction');
    }
    return this.signerOrProvider;
  }

  getInternalNetworkContract() {
    return this.networkContract;
  }
}

export default CustomColonyNetwork;

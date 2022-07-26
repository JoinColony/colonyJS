import {
  ColonyNetworkClient,
  getColonyNetworkClient,
  Network,
  NetworkClientOptions,
  SignerOrProvider,
} from '@colony/colony-js';

import { IpfsMetadata } from '../events/IpfsMetadata';
import { Colony } from './Colony';

export class ColonyNetwork {
  private signerOrProvider: SignerOrProvider;

  ipfsMetadata: IpfsMetadata;

  networkClient: ColonyNetworkClient;

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
   * @param options Pass in a custom ColonyNetwork address or Reputation Miner endpoint
   * @returns A ColonyNetwork abstaction instance
   */
  constructor(
    signerOrProvider: SignerOrProvider,
    options?: NetworkClientOptions,
  ) {
    const network = options?.networkAddress ? Network.Custom : Network.Xdai;
    this.ipfsMetadata = new IpfsMetadata();
    this.networkClient = getColonyNetworkClient(
      network,
      signerOrProvider,
      options,
    );
    this.signerOrProvider = signerOrProvider;
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

    if (
      colonyClient.clientVersion !== Colony.SupportedVersions[0] &&
      colonyClient.clientVersion !== Colony.SupportedVersions[1]
    ) {
      throw new Error(
        `The version of this Colony ${colonyClient.clientVersion} is not supported by Colony SDK. Please update your Colony`,
      );
    }
    return new Colony(this, colonyClient);
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
}

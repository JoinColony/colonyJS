import {
  ColonyNetworkClient,
  getColonyNetworkClient,
  Network,
  SignerOrProvider,
} from '@colony/colony-js';

import { Colony } from './Colony';

export class ColonyNetwork {
  private networkClient: ColonyNetworkClient;

  private signerOrProvider: SignerOrProvider;

  constructor(signerOrProvider: SignerOrProvider) {
    this.networkClient = getColonyNetworkClient(Network.Xdai, signerOrProvider);
    this.signerOrProvider = signerOrProvider;
  }

  async getColony(address: string): Promise<Colony> {
    const colonyClient = await this.networkClient.getColonyClient(address);

    if (colonyClient.clientVersion !== Colony.SupportedVersion) {
      throw new Error(
        `The version of this Colony ${colonyClient.clientVersion} is not supported by Colony SDK. Please update your Colony`,
      );
    }
    return new Colony(colonyClient);
  }
}

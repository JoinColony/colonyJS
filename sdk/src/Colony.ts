import {
  ColonyClientV8,
  ColonyNetworkClient,
  SignerOrProvider,
  Id,
} from '@colony/colony-js';

import {
  DomainAddedEventObject,
  FundingPotAddedEventObject,
} from '@colony/colony-js/extras';

import { extractEvent } from './utils';

type SupportedColonyClient = ColonyClientV8;

export class Colony {
  static SupportedVersion: 8 = 8;

  private colonyClient: SupportedColonyClient;

  private networkClient: ColonyNetworkClient;

  private signerOrProvider: SignerOrProvider;

  constructor(colonyClient: SupportedColonyClient) {
    this.colonyClient = colonyClient;
    this.networkClient = colonyClient.networkClient;
    this.signerOrProvider = colonyClient.signer || colonyClient.provider;
  }

  async addTeam() {
    const tx = await this.colonyClient['addDomainWithProofs(uint256)'](
      Id.RootDomain,
    );
    const receipt = await tx.wait();

    const data = {
      ...extractEvent<DomainAddedEventObject>('DomainAdded', receipt),
      ...extractEvent<FundingPotAddedEventObject>('FundingPotAdded', receipt),
    };

    return [data, receipt];
  }
}

import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { ReputationBootstrapper } from '../../../contracts/ReputationBootstrapper/2/ReputationBootstrapper.js';

import { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/2/factories/ReputationBootstrapper__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedReputationBootstrapper,
} from './augments/commonAugments.js';

export interface ReputationBootstrapperClientV2
  extends AugmentedReputationBootstrapper<ReputationBootstrapper> {
  clientVersion: 2;
}

export default function getReputationBootstrapperClient(
  colonyClient: AugmentedIColony,
  address: string,
): ReputationBootstrapperClientV2 {
  const reputationBootstrapperClient = ReputationBootstrapperFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ReputationBootstrapperClientV2;

  reputationBootstrapperClient.clientType =
    ClientType.ReputationBootstrapperClient;
  reputationBootstrapperClient.clientVersion = 2;
  addAugments(reputationBootstrapperClient, colonyClient);

  return reputationBootstrapperClient;
}

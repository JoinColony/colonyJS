import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { ReputationBootstrapper } from '../../../contracts/ReputationBootstrapper/3/ReputationBootstrapper.js';

import { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/3/factories/ReputationBootstrapper__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedReputationBootstrapper,
  ValidColony,
} from './augments/commonAugments.js';

export interface ReputationBootstrapperClientV3
  extends AugmentedReputationBootstrapper<ReputationBootstrapper> {
  clientVersion: 3;
}

export default function getReputationBootstrapperClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): ReputationBootstrapperClientV3 {
  const reputationBootstrapperClient = ReputationBootstrapperFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ReputationBootstrapperClientV3;

  reputationBootstrapperClient.clientType =
    ClientType.ReputationBootstrapperClient;
  reputationBootstrapperClient.clientVersion = 3;
  addAugments(reputationBootstrapperClient, colonyClient);

  return reputationBootstrapperClient;
}

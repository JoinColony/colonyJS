import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { ReputationBootstrapper } from '../../../contracts/ReputationBootstrapper/4/ReputationBootstrapper.js';

import { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/4/factories/ReputationBootstrapper__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedReputationBootstrapper,
  ValidColony,
} from './augments/commonAugments.js';

export interface ReputationBootstrapperClientV4
  extends AugmentedReputationBootstrapper<ReputationBootstrapper> {
  clientVersion: 4;
}

export default function getReputationBootstrapperClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): ReputationBootstrapperClientV4 {
  const reputationBootstrapperClient = ReputationBootstrapperFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ReputationBootstrapperClientV4;

  reputationBootstrapperClient.clientType =
    ClientType.ReputationBootstrapperClient;
  reputationBootstrapperClient.clientVersion = 4;
  addAugments(reputationBootstrapperClient, colonyClient);

  return reputationBootstrapperClient;
}

import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { ReputationBootstrapper } from '../../../contracts/ReputationBootstrapper/5/ReputationBootstrapper.js';

import { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/5/factories/ReputationBootstrapper__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  AugmentedReputationBootstrapper,
  ValidColony,
} from './augments/commonAugments.js';

export interface ReputationBootstrapperClientV5
  extends AugmentedReputationBootstrapper<ReputationBootstrapper> {
  clientVersion: 5;
}

export default function getReputationBootstrapperClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): ReputationBootstrapperClientV5 {
  const reputationBootstrapperClient = ReputationBootstrapperFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ReputationBootstrapperClientV5;

  reputationBootstrapperClient.clientType =
    ClientType.ReputationBootstrapperClient;
  reputationBootstrapperClient.clientVersion = 5;
  addAugments(reputationBootstrapperClient, colonyClient);

  return reputationBootstrapperClient;
}

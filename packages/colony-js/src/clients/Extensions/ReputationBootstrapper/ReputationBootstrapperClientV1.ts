import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { ReputationBootstrapper } from '../../../contracts/ReputationBootstrapper/1/ReputationBootstrapper.js';

import { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/1/factories/ReputationBootstrapper__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedReputationBootstrapper,
  type ValidColony,
} from './augments/commonAugments.js';

export interface ReputationBootstrapperClientV1
  extends AugmentedReputationBootstrapper<ReputationBootstrapper> {
  clientVersion: 1;
}

export default function getReputationBootstrapperClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): ReputationBootstrapperClientV1 {
  const reputationBootstrapperClient = ReputationBootstrapperFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ReputationBootstrapperClientV1;

  reputationBootstrapperClient.clientType =
    ClientType.ReputationBootstrapperClient;
  reputationBootstrapperClient.clientVersion = 1;
  addAugments(reputationBootstrapperClient, colonyClient);

  return reputationBootstrapperClient;
}

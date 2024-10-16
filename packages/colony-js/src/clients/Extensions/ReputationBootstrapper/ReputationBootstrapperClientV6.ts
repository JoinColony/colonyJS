import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { ReputationBootstrapper } from '../../../contracts/ReputationBootstrapper/6/ReputationBootstrapper.js';

import { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/6/factories/ReputationBootstrapper__factory.js';
import { ClientType } from '../../../constants.js';
import {
  addAugments,
  type AugmentedReputationBootstrapper,
  type ValidColony,
} from './augments/commonAugments.js';

export interface ReputationBootstrapperClientV6
  extends AugmentedReputationBootstrapper<ReputationBootstrapper> {
  clientVersion: 6;
}

export default function getReputationBootstrapperClient(
  colonyClient: AugmentedIColony<ValidColony>,
  address: string,
): ReputationBootstrapperClientV6 {
  const reputationBootstrapperClient = ReputationBootstrapperFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ReputationBootstrapperClientV6;

  reputationBootstrapperClient.clientType =
    ClientType.ReputationBootstrapperClient;
  reputationBootstrapperClient.clientVersion = 6;
  addAugments(reputationBootstrapperClient, colonyClient);

  return reputationBootstrapperClient;
}

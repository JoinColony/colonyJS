import { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/3/factories/ReputationBootstrapper__factory';
import { ReputationBootstrapper } from '../../../contracts/ReputationBootstrapper/3/ReputationBootstrapper';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedReputationBootstrapper,
} from './augments/commonAugments';

export interface ReputationBootstrapperClientV3
  extends AugmentedReputationBootstrapper<ReputationBootstrapper> {
  clientVersion: 3;
}

export default function getReputationBootstrapperClient(
  colonyClient: AugmentedIColony,
  address: string,
): ReputationBootstrapperClientV3 {
  const reputationBootstrapperClient = ReputationBootstrapperFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ReputationBootstrapperClientV3;

  reputationBootstrapperClient.clientVersion = 3;
  addAugments(reputationBootstrapperClient, colonyClient);

  return reputationBootstrapperClient;
}

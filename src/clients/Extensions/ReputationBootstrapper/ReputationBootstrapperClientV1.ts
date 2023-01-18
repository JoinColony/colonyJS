import { ReputationBootstrapper__factory as ReputationBootstrapperFactory } from '../../../contracts/ReputationBootstrapper/1/factories/ReputationBootstrapper__factory';
import { ReputationBootstrapper } from '../../../contracts/ReputationBootstrapper/1/ReputationBootstrapper';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedReputationBootstrapper,
} from './augments/commonAugments';

export interface ReputationBootstrapperClientV1
  extends AugmentedReputationBootstrapper<ReputationBootstrapper> {
  clientVersion: 1;
}

export default function getReputationBootstrapperClient(
  colonyClient: AugmentedIColony,
  address: string,
): ReputationBootstrapperClientV1 {
  const whitelistClient = ReputationBootstrapperFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as ReputationBootstrapperClientV1;

  whitelistClient.clientVersion = 1;
  addAugments(whitelistClient, colonyClient);

  return whitelistClient;
}

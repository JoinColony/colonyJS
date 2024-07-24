import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { IVotingReputation } from '../../../contracts/IVotingReputation/12/IVotingReputation.js';

import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/12/factories/IVotingReputation__factory.js';
import { ClientType } from '../../../constants.js';
import {
  AugmentedEstimate,
  AugmentedVotingReputation,
} from './augments/commonAugments.js';
import { AugmentedEstimateV2, AugmentsV2 } from './augments/augmentsV2.js';
import {
  addAugments as addAugmentsV3,
  AugmentedEstimateV3,
  AugmentsV3,
} from './augments/augmentsV3.js';

interface VotingReputationEstimate
  extends AugmentedEstimate<IVotingReputation>,
    AugmentedEstimateV2,
    AugmentedEstimateV3 {}

export interface VotingReputationClientV12
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation>,
    AugmentsV3<IVotingReputation> {
  clientVersion: 12;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV12 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV12;

  votingReputationClient.clientType = ClientType.VotingReputationClient;
  votingReputationClient.clientVersion = 12;

  addAugmentsV3(votingReputationClient, colonyClient);

  return votingReputationClient;
}

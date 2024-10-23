import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { IVotingReputation } from '../../../contracts/IVotingReputation/10/IVotingReputation.js';

import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/10/factories/IVotingReputation__factory.js';
import { ClientType } from '../../../constants.js';
import {
  type AugmentedEstimate,
  type AugmentedVotingReputation,
} from './augments/commonAugments.js';
import {
  type AugmentedEstimateV2,
  type AugmentsV2,
} from './augments/augmentsV2.js';
import {
  addAugments as addAugmentsV3,
  type AugmentedEstimateV3,
  type AugmentsV3,
} from './augments/augmentsV3.js';

interface VotingReputationEstimate
  extends AugmentedEstimate<IVotingReputation>,
    AugmentedEstimateV2,
    AugmentedEstimateV3 {}

export interface VotingReputationClientV10
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation>,
    AugmentsV3<IVotingReputation> {
  clientVersion: 10;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV10 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV10;

  votingReputationClient.clientType = ClientType.VotingReputationClient;
  votingReputationClient.clientVersion = 10;

  addAugmentsV3(votingReputationClient, colonyClient);

  return votingReputationClient;
}

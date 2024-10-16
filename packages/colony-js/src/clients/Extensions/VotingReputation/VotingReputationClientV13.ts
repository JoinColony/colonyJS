import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { IVotingReputation } from '../../../contracts/IVotingReputation/13/IVotingReputation.js';

import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/13/factories/IVotingReputation__factory.js';
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

export interface VotingReputationClientV13
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation>,
    AugmentsV3<IVotingReputation> {
  clientVersion: 13;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV13 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV13;

  votingReputationClient.clientType = ClientType.VotingReputationClient;
  votingReputationClient.clientVersion = 13;

  addAugmentsV3(votingReputationClient, colonyClient);

  return votingReputationClient;
}

import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';
import type { IVotingReputation } from '../../../contracts/IVotingReputation/7/IVotingReputation.js';

import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/7/factories/IVotingReputation__factory.js';
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
  addAugments,
  type AugmentedEstimateV3,
  type AugmentsV3,
} from './augments/augmentsV3.js';
import {
  addAugments as addCreateDomainMotionAugments,
  type CreateDomainMotionAugments,
  type CreateDomainMotionEstimateGas,
} from './augments/CreateDomainMotion.js';

interface VotingReputationEstimate
  extends AugmentedEstimate<IVotingReputation>,
    AugmentedEstimateV2,
    AugmentedEstimateV3,
    CreateDomainMotionEstimateGas {}

export interface VotingReputationClientV7
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation>,
    AugmentsV3<IVotingReputation>,
    CreateDomainMotionAugments<IVotingReputation> {
  clientVersion: 7;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV7 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV7;

  votingReputationClient.clientType = ClientType.VotingReputationClient;
  votingReputationClient.clientVersion = 7;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}

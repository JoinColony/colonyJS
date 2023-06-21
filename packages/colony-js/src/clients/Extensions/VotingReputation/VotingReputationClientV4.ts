import { VotingReputation__factory as VotingReputationFactory } from '../../../contracts/VotingReputation/4/factories/VotingReputation__factory.js';
import { VotingReputation } from '../../../contracts/VotingReputation/4/VotingReputation.js';
import {
  AugmentedEstimate,
  AugmentedVotingReputation,
} from './augments/commonAugments.js';
import {
  addAugments,
  AugmentedEstimateV2,
  AugmentsV2,
} from './augments/augmentsV2.js';
import {
  addAugments as addCreateDomainMotionAugments,
  CreateDomainMotionAugments,
  CreateDomainMotionEstimateGas,
} from './augments/CreateDomainMotion.js';
import { AugmentedIColony } from '../../Core/augments/commonAugments.js';

interface VotingReputationEstimate
  extends AugmentedEstimate<VotingReputation>,
    AugmentedEstimateV2,
    CreateDomainMotionEstimateGas {}

export interface VotingReputationClientV4
  extends AugmentedVotingReputation<VotingReputation>,
    AugmentsV2<VotingReputation>,
    CreateDomainMotionAugments<VotingReputation> {
  clientVersion: 4;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV4 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV4;

  votingReputationClient.clientVersion = 4;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}

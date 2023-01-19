import { VotingReputation__factory as VotingReputationFactory } from '../../../contracts/VotingReputation/5/factories/VotingReputation__factory';
import { VotingReputation } from '../../../contracts/VotingReputation/5/VotingReputation';
import {
  AugmentedEstimate,
  AugmentedVotingReputation,
} from './augments/commonAugments';
import {
  addAugments,
  AugmentedEstimateV2,
  AugmentsV2,
} from './augments/augmentsV2';
import {
  addAugments as addCreateDomainMotionAugments,
  CreateDomainMotionAugments,
  CreateDomainMotionEstimateGas,
} from './augments/CreateDomainMotion';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

interface VotingReputationEstimate
  extends AugmentedEstimate<VotingReputation>,
    AugmentedEstimateV2,
    CreateDomainMotionEstimateGas {}

export interface VotingReputationClientV5
  extends AugmentedVotingReputation<VotingReputation>,
    AugmentsV2<VotingReputation>,
    CreateDomainMotionAugments<VotingReputation> {
  clientVersion: 5;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV5 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV5;

  votingReputationClient.clientVersion = 5;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}

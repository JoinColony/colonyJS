import { VotingReputation__factory as VotingReputationFactory } from '../../../contracts/VotingReputation/1/factories/VotingReputation__factory';
import { VotingReputation } from '../../../contracts/VotingReputation/1/VotingReputation';
import { AugmentedIColony } from '../../Core/augments/commonAugments';
import {
  addAugments,
  AugmentedEstimate,
  AugmentedVotingReputation,
} from './augments/commonAugments';
import {
  addAugments as addCreateDomainMotionAugments,
  CreateDomainMotionAugments,
  CreateDomainMotionEstimateGas,
} from './augments/CreateDomainMotion';

interface VotingReputationEstimate
  extends AugmentedEstimate<VotingReputation>,
    CreateDomainMotionEstimateGas {}

export interface VotingReputationClientV1
  extends AugmentedVotingReputation<VotingReputation>,
    CreateDomainMotionAugments<VotingReputation> {
  clientVersion: 1;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV1 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV1;

  votingReputationClient.clientVersion = 1;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}

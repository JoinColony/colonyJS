import { VotingReputation__factory as VotingReputationFactory } from '../../../contracts/VotingReputation/2/factories/VotingReputation__factory';
import { VotingReputation } from '../../../contracts/VotingReputation/2/VotingReputation';
import {
  AugmentedEstimate,
  AugmentedVotingReputation,
} from './augments/commonAugments';
import {
  addAugments,
  AugmentedEstimateV2,
  AugmentsV2,
} from './augments/augmentsV2';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

interface VotingReputationEstimate
  extends AugmentedEstimate<VotingReputation>,
    AugmentedEstimateV2 {}

export interface VotingReputationClientV2
  extends AugmentedVotingReputation<VotingReputation>,
    AugmentsV2<VotingReputation> {
  clientVersion: 2;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV2 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV2;

  votingReputationClient.clientVersion = 2;
  addAugments(votingReputationClient, colonyClient);

  return votingReputationClient;
}

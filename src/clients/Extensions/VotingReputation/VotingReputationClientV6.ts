import { VotingReputation__factory as VotingReputationFactory } from '../../../contracts/VotingReputation/6/factories/VotingReputation__factory';
import { VotingReputation } from '../../../contracts/VotingReputation/6/VotingReputation';
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

export interface VotingReputationClientV6
  extends AugmentedVotingReputation<VotingReputation>,
    AugmentsV2<VotingReputation> {
  clientVersion: 6;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV6 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV6;

  votingReputationClient.clientVersion = 6;
  addAugments(votingReputationClient, colonyClient);

  return votingReputationClient;
}

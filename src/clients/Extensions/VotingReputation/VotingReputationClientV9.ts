import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/9/factories/IVotingReputation__factory';
import { IVotingReputation } from '../../../contracts/IVotingReputation/9/IVotingReputation';
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
  extends AugmentedEstimate<IVotingReputation>,
    AugmentedEstimateV2 {}

export interface VotingReputationClientV9
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation> {
  clientVersion: 9;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV9 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV9;

  votingReputationClient.clientVersion = 9;
  addAugments(votingReputationClient, colonyClient);

  return votingReputationClient;
}

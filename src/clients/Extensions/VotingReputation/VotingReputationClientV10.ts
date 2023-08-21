import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/10/factories/IVotingReputation__factory';
import { IVotingReputation } from '../../../contracts/IVotingReputation/10/IVotingReputation';
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

export interface VotingReputationClientV10
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation> {
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

  votingReputationClient.clientVersion = 10;
  addAugments(votingReputationClient, colonyClient);

  return votingReputationClient;
}

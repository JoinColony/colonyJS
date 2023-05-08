import { IVotingReputation__factory as VotingReputationFactory } from '../../../contracts/IVotingReputation/8/factories/IVotingReputation__factory';
import { IVotingReputation } from '../../../contracts/IVotingReputation/8/IVotingReputation';
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

export interface VotingReputationClientV8
  extends AugmentedVotingReputation<IVotingReputation>,
    AugmentsV2<IVotingReputation> {
  clientVersion: 8;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClientV8 {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClientV8;

  votingReputationClient.clientVersion = 8;
  addAugments(votingReputationClient, colonyClient);

  return votingReputationClient;
}

import { ClientType } from '../../../types';
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

export interface VotingReputationClient
  extends AugmentedVotingReputation<VotingReputation>,
    AugmentsV2<VotingReputation> {
  clientVersion: 2;
  estimateGas: VotingReputationEstimate;
}

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
): VotingReputationClient {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as VotingReputationClient;

  votingReputationClient.clientType = ClientType.VotingReputationClient;
  votingReputationClient.clientVersion = 2;
  addAugments(votingReputationClient, colonyClient);

  return votingReputationClient;
}

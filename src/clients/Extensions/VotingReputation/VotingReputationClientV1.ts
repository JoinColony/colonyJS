import { VotingReputation__factory as VotingReputationFactory } from '../../../contracts/VotingReputation/1/factories/VotingReputation__factory';
import { VotingReputation } from '../../../contracts/VotingReputation/1/VotingReputation';
import {
  addAugments,
  AugmentedVotingReputation,
} from './augments/commonAugments';
import { AugmentedIColony } from '../../Core/augments/commonAugments';

export interface VotingReputationClientV1
  extends AugmentedVotingReputation<VotingReputation> {
  clientVersion: 1;
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

  return votingReputationClient;
}

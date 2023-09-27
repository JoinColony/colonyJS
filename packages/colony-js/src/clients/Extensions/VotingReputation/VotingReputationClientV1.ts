import type { AugmentedIColony } from '../../Core/augments/commonAugments.js';

import { VotingReputation__factory as VotingReputationFactory } from '../../../contracts/VotingReputation/1/factories/VotingReputation__factory.js';
import {
  addAugments,
  type UnkonwnVotingReputationClient,
} from './augments/commonAugments.js';
import { addAugments as addCreateDomainMotionAugments } from './augments/CreateDomainMotion.js';

export default function getVotingReputationClient(
  colonyClient: AugmentedIColony,
  address: string,
) {
  const votingReputationClient = VotingReputationFactory.connect(
    address,
    colonyClient.signer || colonyClient.provider,
  ) as UnkonwnVotingReputationClient;

  votingReputationClient.clientVersion = 1;
  addAugments(votingReputationClient, colonyClient);
  addCreateDomainMotionAugments(votingReputationClient);

  return votingReputationClient;
}
